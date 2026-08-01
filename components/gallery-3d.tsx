"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { TouchEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Project = {
  src: string;
  alt: string;
  caption: string;
};

type Gallery3DProps = {
  projects: Project[];
  initialIndex?: number;
  onClose: () => void;
};

const CLOSE_ANIMATION_MS = 250;

export function Gallery3D({
  projects,
  initialIndex = 0,
  onClose,
}: Gallery3DProps) {
  const total = projects.length;
  const [currentIndex, setCurrentIndex] = useState(
    ((initialIndex % total) + total) % total,
  );
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const touchStartX = useRef(0);

  // Dispara la transición de entrada en el siguiente frame, para que el
  // navegador anime desde el estado inicial (oculto) al visible.
  useEffect(() => {
    const id = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    window.setTimeout(onClose, CLOSE_ANIMATION_MS);
  }, [onClose]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Bloquear el scroll de fondo mientras la galería está abierta.
  // El contenedor con scroll real es <main> (overflow-y-auto), no <body>,
  // así que hay que congelar ambos para evitar que la página "salte"
  // de sección al cerrar.
  useEffect(() => {
    const scrollContainer = document.querySelector("main");
    const originalBodyOverflow = document.body.style.overflow;
    const originalMainOverflow = scrollContainer
      ? scrollContainer.style.overflow
      : "";

    document.body.style.overflow = "hidden";
    if (scrollContainer) scrollContainer.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      if (scrollContainer)
        scrollContainer.style.overflow = originalMainOverflow;
    };
  }, []);

  // Navegación con teclado
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev, handleClose]);

  function handleTouchStart(e: TouchEvent<HTMLDivElement>) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: TouchEvent<HTMLDivElement>) {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) goPrev();
    if (delta < -50) goNext();
  }

  return (
    <div
      className={`fixed inset-0 z-100 flex flex-col bg-brand-blue-dark/15 backdrop-blur-2xl transition-all duration-[250ms] ease-out ${
        isVisible && !isClosing ? "scale-100 opacity-100" : "scale-95 opacity-0"
      }`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleClose();
        }}
        aria-label="Cerrar galería"
        className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:border-brand-gold hover:bg-brand-gold hover:text-brand-blue-dark sm:right-8 sm:top-8"
      >
        <X className="h-5 w-5" />
      </button>

      <span className="absolute left-5 top-7 z-20 text-xs font-medium uppercase tracking-[0.25em] text-white/70 sm:left-8">
        {currentIndex + 1} / {total}
      </span>

      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden px-4 sm:px-6"
        style={{ perspective: "1400px" }}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          type="button"
          onClick={goPrev}
          aria-label="Imagen anterior"
          className="absolute left-2 z-20 flex h-11 w-11 flex-none items-center justify-center rounded-full border border-brand-gold/40 bg-white/5 text-brand-gold backdrop-blur-sm transition-all hover:bg-brand-gold hover:text-brand-blue-dark sm:left-8 sm:h-12 sm:w-12"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div
          className="relative h-[55vh] w-full max-w-4xl sm:h-[62vh]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {projects.map((project, i) => {
            let diff = i - currentIndex;
            diff = ((diff % total) + total) % total;
            if (diff > total / 2) diff -= total;

            if (Math.abs(diff) > 2) return null;

            const isCenter = diff === 0;
            const translateX = diff * 62;
            const rotateY = diff * -38;
            const scale = 1 - Math.min(Math.abs(diff), 3) * 0.18;
            const opacity = 1 - Math.min(Math.abs(diff), 3) * 0.35;
            const zIndex = 50 - Math.abs(diff);

            return (
              <div
                key={project.src}
                onClick={() => {
                  if (!isCenter) setCurrentIndex(i);
                }}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${
                  isCenter ? "cursor-default" : "cursor-pointer"
                }`}
                style={{
                  transform: `translateX(${translateX}%) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                  filter: isCenter ? "brightness(1)" : "brightness(0.45)",
                }}
              >
                <figure className="flex h-full w-full max-w-2xl flex-col items-center gap-4 rounded-2xl border border-brand-gold/20 bg-brand-blue-dark/30 p-3 shadow-2xl shadow-black/40 backdrop-blur-md">
                  <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-brand-blue-dark/40 backdrop-blur-sm">
                    <Image
                      src={project.src || "/placeholder.svg"}
                      alt={project.alt}
                      fill
                      sizes="(min-width: 1024px) 800px, 100vw"
                      className="object-contain"
                      draggable={false}
                    />
                  </div>
                  {isCenter && (
                    <figcaption className="pb-1 text-center text-sm font-medium tracking-wide text-white">
                      {project.caption}
                    </figcaption>
                  )}
                </figure>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Siguiente imagen"
          className="absolute right-2 z-20 flex h-11 w-11 flex-none items-center justify-center rounded-full border border-brand-gold/40 bg-white/5 text-brand-gold backdrop-blur-sm transition-all hover:bg-brand-gold hover:text-brand-blue-dark sm:right-8 sm:h-12 sm:w-12"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

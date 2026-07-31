"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  src: string;
  alt: string;
  caption: string;
};

type ProjectCarouselProps = {
  projects: Project[];
  onOpenGallery?: (index: number) => void;
};

export function ProjectCarousel({
  projects,
  onOpenGallery,
}: ProjectCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollByAmount = useCallback((dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }, []);

  const handleNextClick = useCallback(() => {
    if (canScrollRight) {
      scrollByAmount("right");
      return;
    }
    // Llegamos al final del scroll horizontal: abrir la galería 3D infinita
    onOpenGallery?.(0);
  }, [canScrollRight, scrollByAmount, onOpenGallery]);

  return (
    <div className="relative">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
          Proyectos Realizados
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollByAmount("left")}
            disabled={!canScrollLeft}
            aria-label="Ver proyectos anteriores"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/40 bg-white/2 text-brand-gold backdrop-blur-sm transition-all hover:bg-brand-gold hover:text-brand-blue-dark disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={handleNextClick}
            aria-label="Ver más proyectos"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/40 bg-white/2 text-brand-gold backdrop-blur-sm transition-all hover:bg-brand-gold hover:text-brand-blue-dark"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, index) => (
          <figure
            key={project.src}
            onClick={() => onOpenGallery?.(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpenGallery?.(index);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`Abrir galería: ${project.caption}`}
            className="group relative aspect-4/3 w-72 flex-none cursor-pointer snap-start overflow-hidden rounded-xl border border-white/10 bg-white/2 transition-colors hover:border-brand-gold/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold sm:w-80"
          >
            <img
              src={project.src || "/placeholder.svg"}
              alt={project.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-brand-blue-dark/5 to-transparent p-4">
              <figcaption className="flex items-center gap-2 text-sm font-medium text-white">
                <span className="h-1 w-1 rounded-full bg-brand-gold" />
                {project.caption}
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}

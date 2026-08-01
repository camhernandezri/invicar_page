"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Buses", href: "#buses" },
  { label: "Busetas", href: "#busetas" },
  { label: "Midibuses", href: "#midibuses" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Bloquea el scroll de fondo mientras el menú móvil está abierto
  useEffect(() => {
    if (!isMenuOpen) return;
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
  }, [isMenuOpen]);

  // Cierra con la tecla Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsMenuOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a
          href="#inicio"
          className="font-display text-lg font-semibold tracking-[0.35em] text-white"
        >
          INVI<span className="text-brand-gold">CAR</span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-wide text-white/80 transition-colors hover:text-brand-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="rounded-full border border-brand-gold/60 bg-brand-gold/15 px-5 py-2 text-xs font-medium tracking-wide text-brand-gold backdrop-blur-md transition-colors hover:bg-brand-gold hover:text-brand-blue-dark"
          >
            Cotizar
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:border-brand-gold hover:text-brand-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-brand-blue-dark/98 backdrop-blur-md md:hidden">
          <div className="flex h-16 items-center justify-between px-6">
            <a
              href="#inicio"
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-lg font-semibold tracking-[0.35em] text-white"
            >
              INVI<span className="text-brand-gold">CAR</span>
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Cerrar menú"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <ul className="flex flex-1 flex-col items-center justify-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-medium tracking-wide text-white transition-colors hover:text-brand-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="px-6 pb-10">
            <a
              href="#contacto"
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-full border border-brand-gold/60 bg-brand-gold/15 px-5 py-3 text-center text-sm font-medium tracking-wide text-brand-gold backdrop-blur-md transition-colors hover:bg-brand-gold hover:text-brand-blue-dark"
            >
              Cotizar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

"use client"

const links = [
  { label: "Buses", href: "#buses" },
  { label: "Busetas", href: "#busetas" },
  { label: "Midibuses", href: "#midibuses" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a
          href="#inicio"
          className="text-lg font-semibold tracking-[0.35em] text-white"
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

        <a
          href="#contacto"
          className="rounded-full border border-brand-gold/60 bg-brand-gold/15 px-5 py-2 text-xs font-medium tracking-wide text-brand-gold backdrop-blur-md transition-colors hover:bg-brand-gold hover:text-brand-blue-dark"
        >
          Cotizar
        </a>
      </nav>
    </header>
  )
}

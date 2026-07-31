export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen snap-start flex-col items-center justify-between overflow-hidden py-28"
    >
      <div className="absolute inset-0">
        <img
          src="/images/portada-invicar.jpg"
          alt="Bus de pasajeros moderno fabricado por Invicar"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-blue-dark/70 via-black/30 to-brand-blue-dark/85" />
      </div>

      <div className="relative z-10 mt-16 flex flex-col items-center text-center">
        <h1 className="text-5xl font-semibold tracking-[0.4em] text-white sm:text-7xl md:text-8xl">
          INVI<span className="text-brand-gold">CAR</span>
        </h1>
        <div className="mt-6 h-px w-24 bg-brand-gold" />
        <p className="mt-4 text-base font-light tracking-[0.2em] text-white/80 sm:text-lg">
          Fabricamos con excelencia pensando en usted
        </p>
      </div>

      <div className="relative z-10 flex w-full flex-col items-center gap-4 px-6 sm:flex-row sm:justify-center">
        <a
          href="#buses"
          className="w-full max-w-xs rounded-full bg-brand-gold px-8 py-3 text-center text-sm font-medium tracking-wide text-brand-blue-dark transition-colors hover:bg-brand-gold-soft sm:w-auto"
        >
          Explorar Líneas
        </a>
        <a
          href="#contacto"
          className="w-full max-w-xs rounded-full border border-white/50 bg-white/10 px-8 py-3 text-center text-sm font-medium tracking-wide text-white backdrop-blur-md transition-colors hover:border-brand-gold hover:text-brand-gold sm:w-auto"
        >
          Cotizar Ahora
        </a>
      </div>
    </section>
  )
}

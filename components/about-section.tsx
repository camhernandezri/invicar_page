import { Target, Eye } from "lucide-react"

const pillars = [
  {
    icon: Target,
    title: "Misión",
    text: "Diseñar y fabricar carrocerías de transporte de pasajeros con los más altos estándares de calidad, seguridad e innovación, ofreciendo soluciones de movilidad confiables que mejoran la experiencia de viaje de miles de personas cada día.",
  },
  {
    icon: Eye,
    title: "Visión",
    text: "Ser reconocidos en 2030 como la carrocera líder en Colombia y referente en Latinoamérica, destacándonos por la excelencia en ingeniería, el desarrollo sostenible y la satisfacción integral de nuestros clientes.",
  },
]

const milestones = [
  {
    year: "2011",
    title: "Fundación de Invicar",
    description:
      "Iniciamos operaciones en Duitama fabricando nuestras primeras busetas para transporte urbano.",
    image: "/images/historia1.jpeg",
  },
  {
    year: "2014",
    title: "Línea de Buses",
    description:
      "Ampliamos el portafolio con buses de mayor capacidad para rutas intermunicipales e interdepartamentales.",
    image: "/images/historia2.jpeg",
  },
  {
    year: "2017",
    title: "Certificación de calidad",
    description:
      "Obtuvimos certificaciones de seguridad que respaldan cada carrocería fabricada en nuestra planta.",
    image: "/images/historia3.jpeg",
  },
  {
    year: "2020",
    title: "Midibuses Invicar",
    description:
      "Lanzamos la línea de midibuses, pensada para rutas de menor capacidad con máxima maniobrabilidad.",
    image: "/images/historia4.jpeg",
  },
  {
    year: "2023",
    title: "Innovación en materiales",
    description:
      "Incorporamos materiales antiflama y aislamiento acústico premium en toda nuestra producción.",
    image: "/images/historia5.jpeg",
  },
  {
    year: "2026",
    title: "Expansión nacional",
    description:
      "Nuestras carrocerías recorren hoy distintas regiones de Colombia, consolidando a Invicar como referente del sector.",
    image: "/images/buseta4.jpeg",
  },
]

export function AboutSection() {
  return (
    <section
      id="nosotros"
      className="relative flex min-h-screen snap-start flex-col items-center justify-center overflow-hidden bg-brand-blue-dark py-24"
    >
      <div className="absolute inset-0">
        <img
          src="/images/combo3.jpeg"
          alt="Instalaciones de fabricación Invicar"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-blue-dark/95 via-brand-blue-dark/90 to-black/95" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="mb-14 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
            Quiénes somos
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-[0.3em] text-white sm:text-6xl">
            NOSOTROS
          </h2>
          <div className="mx-auto mt-4 h-px w-20 bg-brand-gold" />
          <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-white/65">
            Más de una década construyendo carrocerías que transforman la
            manera en que Colombia se mueve.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-colors hover:border-brand-gold/40"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-gold/60 bg-brand-gold/10">
                <Icon className="h-6 w-6 text-brand-gold" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-[0.2em] text-white">
                {title.toUpperCase()}
              </h3>
              <div className="mx-auto mt-3 h-px w-10 bg-brand-gold/60" />
              <p className="mt-4 text-sm leading-relaxed text-white/65 text-pretty">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <div className="mb-14 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
              Nuestro recorrido
            </span>
            <h3 className="mt-4 text-3xl font-semibold tracking-[0.25em] text-white sm:text-4xl">
              HISTORIA
            </h3>
            <div className="mx-auto mt-4 h-px w-20 bg-brand-gold" />
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-4 top-0 h-full w-px bg-brand-gold/30 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-10">
              {milestones.map((item, index) => {
                const isLeft = index % 2 === 0
                
                // TARJETA MODIFICADA AQUÍ
                const card = (
                  <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-brand-gold/40">
                    {/* Imagen de fondo */}
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-cover opacity-30 pointer-events-none transition-transform duration-500 hover:scale-105"
                      />
                    )}
                    
                    {/* Capa de oscurecimiento interna para que el texto blanco resalte al 100% */}
                    <div className="absolute inset-0 bg-brand-blue-dark/50 pointer-events-none" />

                    {/* Contenido con z-index alto para posicionarse arriba de la imagen */}
                    <div className="relative z-10">
                      <span className="text-sm font-semibold tracking-[0.2em] text-brand-gold">
                        {item.year}
                      </span>
                      <h4 className="mt-2 text-base font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-white/65">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )

                return (
                  <div
                    key={item.year}
                    className="relative grid gap-4 md:grid-cols-2 md:gap-12"
                  >
                    <span className="absolute left-4 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-gold ring-4 ring-brand-blue-dark md:left-1/2" />

                    {isLeft ? (
                      <>
                        <div className="pl-10 md:pl-0 md:pr-12 md:text-right">
                          {card}
                        </div>
                        <div className="hidden md:block" />
                      </>
                    ) : (
                      <>
                        <div className="hidden md:block" />
                        <div className="pl-10 md:pl-12">{card}</div>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
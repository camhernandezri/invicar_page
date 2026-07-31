import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { VehicleSection } from "@/components/vehicle-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { WhatsAppButton } from "@/components/whatsapp-button"

const busProjects = [
  {
    src: "/images/bus1.jpeg",
    alt: "Descripción para bus 1",
    caption: "Acabados traseros de alta calidad",
  },
  {
    src: "/images/bus2.jpeg",
    alt: "Descripción para bus 2",
    caption: "Vista lateral bus",
  },
  {
    src: "/images/bus3.jpeg",
    alt: "Descripción para bus 3",
    caption: "Vista panoramica y ventanas",
  },
  {
    src: "/images/bus4.jpeg",
    alt: "Descripción para bus 4",
    caption: "Bodega bus",
  },
  {
    src: "/images/bus5.jpeg",
    alt: "Descripción para bus 5",
    caption: "Acabados interior de lujo",
  },
  {
    src: "/images/bus6.jpeg",
    alt: "Descripción para bus 6",
    caption: "Entrada y maleteros de alta calidad",
  },
  {
    src: "/images/bus7.jpeg",
    alt: "Descripción para bus 7",
    caption: "Vista lateral bus",
  },
  {
    src: "/images/bus8.jpeg",
    alt: "Descripción para bus 8",
    caption: "Vista Frontal y Entrada",
  },
  {
    src: "/images/bus9.jpeg",
    alt: "Descripción para bus 9",
    caption: "Pintura de alta calidad y luces",
  },
]

const busetaProjects = [
  {
    src: "/images/buseta1.jpeg",
    alt: "Descripción para buseta 1",
    caption: "Busetas finalizadas",
  },
  {
    src: "/images/buseta2.jpeg",
    alt: "Descripción para buseta 2",
    caption: "Interior de alta calidad",
  },
  {
    src: "/images/buseta3.jpeg",
    alt: "Descripción para buseta 3",
    caption: "Vista frontal",
  },
  {
    src: "/images/buseta4.jpeg",
    alt: "Descripción para buseta 4",
    caption: "Acabados de puertas",
  },
  {
    src: "/images/buseta5.jpeg",
    alt: "Descripción para buseta 5",
    caption: "Vista posterior buseta",
  },
  {
    src: "/images/buseta6.jpeg",
    alt: "Descripción para buseta 6",
    caption: "Acabados de alta calidad",
  },
]

const midibusProjects = [
  {
    src: "/images/midibus1.jpeg",
    alt: "Descripción para midibus 1",
    caption: "Vista posterior/lateral",
  },
  {
    src: "/images/midibus2.jpeg",
    alt: "Descripción para midibus 2",
    caption: "Acabados de alta calidad",
  },
  {
    src: "/images/midibus3.jpeg",
    alt: "Descripción para midibus 3",
    caption: "Vista lateral ventanas",
  },
  {
    src: "/images/midibus4.jpeg",
    alt: "Descripción para midibus 4",
    caption: "Parte frontal/baja",
  },
  {
    src: "/images/midibus5.jpeg",
    alt: "Descripción para midibus 5",
    caption: "Entradas finalizadas",
  },
  {
    src: "/images/midibus6.jpeg",
    alt: "Descripción para midibus 6",
    caption: "Pintura de alta calidad",
  },
  {
    src: "/images/midibus7.jpeg",
    alt: "Descripción para midibus 7",
    caption: "Parte posterior",
  },
  {
    src: "/images/midibus8.jpeg",
    alt: "Descripción para midibus 8",
    caption: "Acabados internos de alta calidad",
  },
  {
    src: "/images/midibus9.jpeg",
    alt: "Descripción para midibus 9",
    caption: "Escaleras entrada de alta calidad",
  },
  {
    src: "/images/midibus10.jpeg",
    alt: "Descripción para midibus 10",
    caption: "Acabados internos de alta calidad",
  },
  {
    src: "/images/midibus11.jpeg",
    alt: "Descripción para midibus 11",
    caption: "Zona conductor",
  },
  {
    src: "/images/midibus12.jpeg",
    alt: "Descripción para midibus 12",
    caption: "Acabados internos",
  },
  {
    src: "/images/midibus13.jpeg",
    alt: "Descripción para midibus 13",
    caption: "Acabados internos",
  },
  {
    src: "/images/midibus14.jpeg",
    alt: "Descripción para midibus 14",
    caption: "Vista Frontal/Lateral",
  },
  {
    src: "/images/midibus15.jpeg",
    alt: "Descripción para midibus 15",
    caption: "Midibuses Invicar",
  },
]

export default function Page() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-auto bg-black text-white">
      <SiteHeader />
      <WhatsAppButton />

      <HeroSection />

      <VehicleSection
        id="buses"
        title="Buses"
        subtitle="Máxima capacidad y confort para largas distancias"
        description="Estructuras reforzadas y aislamiento acústico premium diseñados para recorridos exigentes. Cada bus se construye con materiales antiflama y sistemas de seguridad certificados que protegen a cada pasajero kilómetro tras kilómetro."
        backgroundImage="/images/section-bus.png"
        projects={busProjects}
      />

      <VehicleSection
        id="busetas"
        title="Busetas"
        subtitle="Versatilidad y eficiencia urbana"
        description="Optimizadas para la movilidad de la ciudad, nuestras busetas ofrecen accesos amplios, distribución inteligente del espacio y una carrocería ligera que reduce el consumo sin sacrificar resistencia ni confort para los pasajeros."
        backgroundImage="/images/section-buseta.png"
        projects={busetaProjects}
      />

      <VehicleSection
        id="midibuses"
        title="Midibuses"
        subtitle="El equilibrio perfecto para rutas intermunicipales"
        description="El punto medio ideal entre capacidad y maniobrabilidad. Con suspensión adaptada a caminos variables y asientos ergonómicos de largo aliento, el midibus Invicar garantiza viajes seguros y cómodos entre municipios."
        backgroundImage="/images/section-buseton.png"
        projects={midibusProjects}
      />

      <AboutSection />

      <ContactSection />
    </main>
  )
}
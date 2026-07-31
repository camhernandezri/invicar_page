import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { VehicleSection } from "@/components/vehicle-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { WhatsAppButton } from "@/components/whatsapp-button"

const busProjects = [
  {
    src: "/images/bus1.jpeg",
    alt: "Acabados traseros de alta calidad en bus fabricado por Invicar",
    caption: "Acabados traseros de alta calidad",
  },
  {
    src: "/images/bus2.jpeg",
    alt: "Vista lateral de bus fabricado por Invicar",
    caption: "Vista lateral bus",
  },
  {
    src: "/images/bus3.jpeg",
    alt: "Vista panorámica de las ventanas de un bus Invicar",
    caption: "Vista panoramica y ventanas",
  },
  {
    src: "/images/bus4.jpeg",
    alt: "Bodega de equipaje de un bus fabricado por Invicar",
    caption: "Bodega bus",
  },
  {
    src: "/images/bus5.jpeg",
    alt: "Acabados interiores de lujo en un bus Invicar",
    caption: "Acabados interior de lujo",
  },
  {
    src: "/images/bus6.jpeg",
    alt: "Entrada y maleteros de alta calidad en un bus Invicar",
    caption: "Entrada y maleteros de alta calidad",
  },
  {
    src: "/images/bus7.jpeg",
    alt: "Vista lateral de otro bus fabricado por Invicar",
    caption: "Vista lateral bus",
  },
  {
    src: "/images/bus8.jpeg",
    alt: "Vista frontal y entrada de un bus Invicar",
    caption: "Vista Frontal y Entrada",
  },
  {
    src: "/images/bus9.jpeg",
    alt: "Pintura de alta calidad y luces de un bus Invicar",
    caption: "Pintura de alta calidad y luces",
  },
]

const busetaProjects = [
  {
    src: "/images/buseta1.jpeg",
    alt: "Busetas finalizadas fabricadas por Invicar",
    caption: "Busetas finalizadas",
  },
  {
    src: "/images/buseta2.jpeg",
    alt: "Interior de alta calidad de una buseta Invicar",
    caption: "Interior de alta calidad",
  },
  {
    src: "/images/buseta3.jpeg",
    alt: "Vista frontal de una buseta fabricada por Invicar",
    caption: "Vista frontal",
  },
  {
    src: "/images/buseta4.jpeg",
    alt: "Acabados de puertas de una buseta Invicar",
    caption: "Acabados de puertas",
  },
  {
    src: "/images/buseta5.jpeg",
    alt: "Vista posterior de una buseta fabricada por Invicar",
    caption: "Vista posterior buseta",
  },
  {
    src: "/images/buseta6.jpeg",
    alt: "Acabados de alta calidad en una buseta Invicar",
    caption: "Acabados de alta calidad",
  },
]

const midibusProjects = [
  {
    src: "/images/midibus1.jpeg",
    alt: "Vista posterior y lateral de un midibús Invicar",
    caption: "Vista posterior/lateral",
  },
  {
    src: "/images/midibus2.jpeg",
    alt: "Acabados de alta calidad en un midibús Invicar",
    caption: "Acabados de alta calidad",
  },
  {
    src: "/images/midibus3.jpeg",
    alt: "Vista lateral de las ventanas de un midibús Invicar",
    caption: "Vista lateral ventanas",
  },
  {
    src: "/images/midibus4.jpeg",
    alt: "Parte frontal y baja de un midibús Invicar",
    caption: "Parte frontal/baja",
  },
  {
    src: "/images/midibus5.jpeg",
    alt: "Entrada finalizada de un midibús Invicar",
    caption: "Entradas finalizadas",
  },
  {
    src: "/images/midibus6.jpeg",
    alt: "Pintura de alta calidad en un midibús Invicar",
    caption: "Pintura de alta calidad",
  },
  {
    src: "/images/midibus7.jpeg",
    alt: "Parte posterior de un midibús Invicar",
    caption: "Parte posterior",
  },
  {
    src: "/images/midibus8.jpeg",
    alt: "Acabados internos de alta calidad en un midibús Invicar",
    caption: "Acabados internos de alta calidad",
  },
  {
    src: "/images/midibus9.jpeg",
    alt: "Escaleras de entrada de alta calidad en un midibús Invicar",
    caption: "Escaleras entrada de alta calidad",
  },
  {
    src: "/images/midibus10.jpeg",
    alt: "Acabados internos de alta calidad en otro midibús Invicar",
    caption: "Acabados internos de alta calidad",
  },
  {
    src: "/images/midibus11.jpeg",
    alt: "Zona del conductor en un midibús Invicar",
    caption: "Zona conductor",
  },
  {
    src: "/images/midibus12.jpeg",
    alt: "Acabados internos de un midibús Invicar",
    caption: "Acabados internos",
  },
  {
    src: "/images/midibus13.jpeg",
    alt: "Acabados internos de otro midibús Invicar",
    caption: "Acabados internos",
  },
  {
    src: "/images/midibus14.jpeg",
    alt: "Vista frontal y lateral de un midibús Invicar",
    caption: "Vista Frontal/Lateral",
  },
  {
    src: "/images/midibus15.jpeg",
    alt: "Midibuses fabricados por Invicar",
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
        backgroundImage="/images/section-bus.webp"
        projects={busProjects}
      />

      <VehicleSection
        id="busetas"
        title="Busetas"
        subtitle="Versatilidad y eficiencia urbana"
        description="Optimizadas para la movilidad de la ciudad, nuestras busetas ofrecen accesos amplios, distribución inteligente del espacio y una carrocería ligera que reduce el consumo sin sacrificar resistencia ni confort para los pasajeros."
        backgroundImage="/images/section-buseta.webp"
        projects={busetaProjects}
      />

      <VehicleSection
        id="midibuses"
        title="Midibuses"
        subtitle="El equilibrio perfecto para rutas intermunicipales"
        description="El punto medio ideal entre capacidad y maniobrabilidad. Con suspensión adaptada a caminos variables y asientos ergonómicos de largo aliento, el midibus Invicar garantiza viajes seguros y cómodos entre municipios."
        backgroundImage="/images/section-buseton.webp"
        projects={midibusProjects}
      />

      <AboutSection />

      <ContactSection />
    </main>
  )
}
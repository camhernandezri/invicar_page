import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Invicar | Carrocerías para Buses, Busetas y Midibuses",
  description:
    "Fabricación de carrocerías en Duitama, Boyacá. Seguridad, ergonomía y calidad.",

  metadataBase: new URL("https://invicar.com"),

  keywords: [
    "Invicar",
    "carrocerías",
    "carrocerías para buses",
    "carrocerías para busetas",
    "carrocerías para midibuses",
    "fabricación de carrocerías",
    "buses",
    "busetas",
    "midibuses",
    "transporte",
    "Duitama",
    "Boyacá",
    "Colombia",
  ],

  authors: [{ name: "Invicar" }],
  creator: "Invicar",
  publisher: "Invicar",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Invicar | Carrocerías para Buses, Busetas y Midibuses",
    description:
      "Fabricación de carrocerías en Duitama, Boyacá. Seguridad, ergonomía y calidad.",
    url: "https://invicar.com",
    siteName: "Invicar",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/images/portada-invicar.jpg",
        width: 1440,
        height: 1080,
        alt: "Invicar - Fabricación de carrocerías",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Invicar | Carrocerías para Buses, Busetas y Midibuses",
    description:
      "Fabricación de carrocerías en Duitama, Boyacá. Seguridad, ergonomía y calidad.",
    images: ["/images/portada-invicar.jpg"],
  },

  icons: {
    icon: [
      { url: "/invicar-logo.png", media: "(prefers-color-scheme: light)" },
      { url: "/invicar-logo.png", media: "(prefers-color-scheme: dark)" },
      { url: "/invicar-logo.png", type: "image/png" },
    ],
    apple: "/invicar-logo.png",
  },

  alternates: {
    canonical: "https://invicar.com",
  },

  generator: "Next.js",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Invicar",
  image: "https://invicar.com/images/portada-invicar.jpg",
  url: "https://invicar.com",
  telephone: "+57 300 123 4567",
  email: "comercial@invicar.com.co",
  description:
    "Fabricación de carrocerías para buses, busetas y midibuses en Duitama, Boyacá, Colombia.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Parque Industrial",
    addressLocality: "Duitama",
    addressRegion: "Boyacá",
    addressCountry: "CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${archivo.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}

import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://invicar.com",
  },

  generator: "Next.js",
};

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

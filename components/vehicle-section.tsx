"use client"

import { useState } from "react"
import { ProjectCarousel } from "@/components/project-carousel"
import { Gallery3D } from "@/components/gallery-3d"

type Project = {
  src: string
  alt: string
  caption: string
}

type VehicleSectionProps = {
  id: string
  title: string
  subtitle: string
  description: string
  backgroundImage: string
  projects: Project[]
}

export function VehicleSection({
  id,
  title,
  subtitle,
  description,
  backgroundImage,
  projects,
}: VehicleSectionProps) {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null)

  return (
    <section
      id={id}
      className="relative flex min-h-screen snap-start flex-col justify-between overflow-hidden py-24"
    >
      <div className="absolute inset-0">
        <img
          src={backgroundImage || "/placeholder.svg"}
          alt={`${title} fabricados por Invicar`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-blue-dark/75 via-black/45 to-brand-blue-dark/90" />
      </div>

      <div className="relative z-10 mx-auto mt-12 max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-semibold tracking-[0.3em] text-white sm:text-6xl">
          {title}
        </h2>
        <div className="mx-auto mt-4 h-px w-20 bg-brand-gold" />
        <p className="mt-3 text-base font-light tracking-[0.15em] text-brand-gold sm:text-lg">
          {subtitle}
        </p>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-white/65">
          {description}
        </p>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <ProjectCarousel
          projects={projects}
          onOpenGallery={(index) => setGalleryIndex(index)}
        />
      </div>

      {galleryIndex !== null && (
        <Gallery3D
          projects={projects}
          initialIndex={galleryIndex}
          onClose={() => setGalleryIndex(null)}
        />
      )}
    </section>
  )
}
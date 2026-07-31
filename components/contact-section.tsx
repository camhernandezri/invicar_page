"use client";

import type React from "react";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [tipoVehiculo, setTipoVehiculo] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      nombre: String(formData.get("nombre") || ""),
      telefono: String(formData.get("telefono") || ""),
      tipo: tipoVehiculo,
      mensaje: String(formData.get("mensaje") || ""),
      empresa_web: String(formData.get("empresa_web") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.error || "No se pudo enviar el mensaje.");
      }

      setSubmitted(true);
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "No se pudo enviar el mensaje. Intenta de nuevo.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contacto"
      className="relative flex min-h-screen snap-start items-center overflow-hidden py-24"
    >
      <div className="absolute inset-0">
        <img
          src="/images/combo2.jpeg"
          alt="Carrocería Invicar en acabado premium"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-blue-dark/90 via-brand-blue-dark/80 to-black/95" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
            Hablemos de tu proyecto
          </span>
          <h2 className="font-display mt-4 text-4xl font-semibold tracking-[0.15em] text-white text-balance sm:text-5xl">
            CONTÁCTANOS
          </h2>
          <div className="mx-auto mt-4 h-px w-20 bg-brand-gold" />
          <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-white/65">
            Combinamos ingeniería de precisión, materiales de alta resistencia y
            un riguroso control de calidad para entregar vehículos seguros,
            ergonómicos y duraderos. Cuéntanos qué necesitas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-5 md:gap-12">
          <div className="flex flex-col justify-center gap-5 md:col-span-2">
            <a
              href="https://maps.google.com/?q=Duitama,Boyaca,Colombia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/10 text-brand-gold">
                <MapPin className="h-5 w-5" />
              </span>
              <span className="text-sm leading-relaxed text-white/80">
                Parque Industrial, Duitama, Boyacá — Colombia
              </span>
            </a>
            <a
              href="tel:+573001234567"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/10 text-brand-gold">
                <Phone className="h-5 w-5" />
              </span>
              <span className="text-sm leading-relaxed text-white/80">
                +57 300 123 4567
              </span>
            </a>
            <a
              href="mailto:comercial@invicar.com.co"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/10 text-brand-gold">
                <Mail className="h-5 w-5" />
              </span>
              <span className="text-sm leading-relaxed text-white/80">
                comercial@invicar.com.co
              </span>
            </a>
          </div>

          <div className="md:col-span-3">
            {submitted ? (
              <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-brand-gold">
                  ¡Gracias por escribirnos!
                </h3>
                <p className="mt-3 max-w-sm text-white/70">
                  Hemos recibido tu solicitud. Nuestro equipo comercial se
                  pondrá en contacto contigo muy pronto.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="w-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="text-white/80">
                      Nombre
                    </Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      required
                      placeholder="Tu nombre completo"
                      className="border-white/15 bg-white/5 text-white placeholder:text-white/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefono" className="text-white/80">
                      Teléfono
                    </Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      required
                      placeholder="Ej. 300 123 4567"
                      className="border-white/15 bg-white/5 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  <Label htmlFor="tipo" className="text-white/80">
                    Tipo de vehículo a carrozar
                  </Label>
                  <Select
                    name="tipo"
                    value={tipoVehiculo}
                    onValueChange={(value) => setTipoVehiculo(value ?? "")}
                  >
                    <SelectTrigger
                      id="tipo"
                      className="border-white/15 bg-white/5 text-white"
                    >
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bus">Bus</SelectItem>
                      <SelectItem value="buseta">Buseta</SelectItem>
                      <SelectItem value="midibus">Midibús</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mt-5 space-y-2">
                  <Label htmlFor="mensaje" className="text-white/80">
                    Mensaje
                  </Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder="Cuéntanos sobre tu proyecto"
                    className="resize-none border-white/15 bg-white/5 text-white placeholder:text-white/40"
                  />
                </div>

                <input
                  type="text"
                  name="empresa_web"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-px w-px overflow-hidden"
                />

                {errorMessage && (
                  <p className="mt-4 text-sm text-red-400">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 w-full rounded-full bg-brand-gold px-8 py-3 text-sm font-medium tracking-wide text-brand-blue-dark transition-colors hover:bg-brand-gold-soft disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Enviando..." : "Enviar solicitud"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

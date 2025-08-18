"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeader from "./section-header";
import DecorativeFrame from "./decorative-frame";
import { Mail, MapPin, Phone } from "lucide-react";

interface ContactSectionProps {
  id?: string;
}

export default function ContactSection({
  id = "contacte",
}: ContactSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-[#e3dfd2] bg-[#F7F4EA] py-12 sm:py-16"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <SectionHeader
          title="Contacte i reserves"
          subtitle="Truca’ns o escriu-nos per reservar taula. Estarem encantats d’atendre’t."
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-start">
          <DecorativeFrame>
            <div className="space-y-4 ">
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 size-5 text-neutral-900"
                  aria-hidden
                />
                <a
                  href="https://www.google.com/maps/place/Carrer+Maria+Vivet,+1,+08551+Tona,+Barcelona/@41.8521161,2.2271203,721m/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-800 hover:underline"
                >
                  <p className="text-neutral-800">
                    C/ Maria Vivet, 1.
                    <br />
                    08551 Tona, Barcelona.
                  </p>
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-5 text-neutral-900" aria-hidden />
                <a
                  href="tel:+34649596507"
                  className="text-neutral-900 hover:underline"
                >
                  +34 649 59 65 07
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-5 text-neutral-900" aria-hidden />
                <a
                  href="mailto:lacanalrestaurant@gmail.com"
                  className="text-neutral-900 hover:underline"
                >
                  lacanalrestaurant@gmail.com
                </a>
              </div>
              <div className="rounded-md bg-[#FBF9F1] p-4 text-sm text-neutral-800 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <strong>Horari:</strong>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <span className="font-semibold text-neutral-900">
                      Dl-Dv:
                    </span>
                    <span>13:00-16:00 · 20:00-23:00</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-neutral-900">
                      Ds-Dg:
                    </span>
                    <span>13:00-16:30 · 20:00-23:30</span>
                  </div>
                </div>
              </div>
            </div>
          </DecorativeFrame>

          <DecorativeFrame>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Gràcies! Ens posarem en contacte ben aviat.");
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm text-neutral-700">
                    Nom
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="El teu nom"
                    className="bg-white"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="phone" className="text-sm text-neutral-700">
                    Telèfon
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+34 ..."
                    className="bg-white"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm text-neutral-700">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@exemple.com"
                  className="bg-white"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm text-neutral-700">
                  Missatge
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Data, hora i número de comensals..."
                  rows={4}
                />
              </div>
              <Button className="border border-neutral-300 bg-neutral-900 text-[#F5F2E8] hover:bg-neutral-800">
                Enviar
              </Button>
            </form>
          </DecorativeFrame>
        </div>
      </div>
    </section>
  );
}

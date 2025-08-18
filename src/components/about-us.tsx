"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import DecorativeFrame from "./decorative-frame";
import ViewportReveal from "./viewport-reveal";
import type { HTMLAttributes } from "react";

interface HeroProps extends HTMLAttributes<HTMLElement> {
  id?: string;
}

export default function HeroSection({ id = "hero" }: HeroProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -20]);

  return (
    <section
      id={id}
      className="relative isolate scroll-mt-24 bg-[#F5F2E8] justify-center"
    >
      {/* Suau gradient superior per donar profunditat */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_-10%,rgba(0,0,0,0.06),transparent_60%)]" />
      <div className="container mx-auto max-w-6xl px-4 py-12 sm:py-16 ">
        <motion.div style={{ y }}>
          <DecorativeFrame>
            <div className="flex flex-col gap-5 text-center sm:gap-6 ">
              <ViewportReveal>
                <h1 className="font-display text-[30px] leading-tight sm:text-[36px] text-[#F7F4EA] mx-auto">
                  QUI SOM?
                </h1>
              </ViewportReveal>
              <ViewportReveal delay={0.1}>
                <p className="max-w-2xl text-[15px] sm:text-base text-[#F7F4EA] mx-auto">
                  Producte local i receptes contemporànies en un espai proper,
                  viu i amb ànima.
                </p>
                <div className="mt-12 mb-10 flex justify-center mx-auto ">
                  <div className="max-w-3xl rounded-xl border border-neutral-200 bg-beige-200 p-8 text-center shadow-sm bg-[#F7F4EA]">
                    <p className="text-[15px] text-neutral-700 sm:text-base">
                      Som tres cuiners units per una passió compartida: la cuina
                      honesta, de gust, producte i temporalitat. Ens vam
                      conèixer estudiant cuina, i avui tornem allà on tot va
                      començar: Tona, amb moltes ganes de fer allò que més
                      estimem. Reobrim un restaurant del poble, amb una proposta
                      que neix del respecte pel producte i per les estacions.
                      Una cuina sense presses, amb sabors reconeixibles i una
                      mirada pròpia. Volem crear un espai on menjar bé sigui una
                      experiència propera, viva i amb ànima.
                    </p>
                  </div>
                </div>
              </ViewportReveal>
            </div>
          </DecorativeFrame>
        </motion.div>
      </div>
    </section>
  );
}

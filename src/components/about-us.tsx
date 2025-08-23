"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import DecorativeFrame from "./decorative-frame-2";
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
      <div className="container mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <motion.div style={{ y }}>
          <DecorativeFrame>
            <div className="flex flex-col gap-8 text-center sm:gap-10">
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
              </ViewportReveal>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <ViewportReveal delay={0.2}>
                  <div className="rounded-lg bg-[#F7F4EA] p-6 shadow-sm border border-neutral-200">
                    <h3 className="font-semibold text-lg text-neutral-800 mb-3">
                      La Nostra Passió
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-neutral-700">
                      Som{" "}
                      <span className="font-medium text-neutral-800">
                        tres cuiners units
                      </span>{" "}
                      per una passió compartida: la{" "}
                      <span className="font-medium text-neutral-800">
                        cuina honesta
                      </span>
                      , de gust, producte i temporalitat.
                    </p>
                  </div>
                </ViewportReveal>

                <ViewportReveal delay={0.3}>
                  <div className="rounded-lg bg-[#F7F4EA] p-6 shadow-sm border border-neutral-200">
                    <h3 className="font-semibold text-lg text-neutral-800 mb-3">
                      Els Nostres Orígens
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-neutral-700">
                      Ens vam conèixer{" "}
                      <span className="font-medium text-neutral-800">
                        estudiant cuina
                      </span>
                      , i avui tornem allà on tot va començar:{" "}
                      <span className="font-medium text-neutral-800">Tona</span>
                      , amb moltes ganes de fer allò que més estimem.
                    </p>
                  </div>
                </ViewportReveal>

                <ViewportReveal delay={0.4}>
                  <div className="rounded-lg bg-[#F7F4EA] p-6 shadow-sm border border-neutral-200">
                    <h3 className="font-semibold text-lg text-neutral-800 mb-3">
                      La Nostra Proposta
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-neutral-700">
                      <span className="font-medium text-neutral-800">
                        Reobrim un restaurant del poble
                      </span>
                      , amb una proposta que neix del respecte pel producte i
                      per les estacions.
                    </p>
                  </div>
                </ViewportReveal>
              </div>

              <ViewportReveal delay={0.5}>
                <div className="max-w-4xl mx-auto">
                  <div className="rounded-xl bg-[#F7F4EA] p-8 shadow-md border-2 border-neutral-300">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-12 h-1 bg-neutral-400 rounded-full"></div>
                      <p className="text-[15px] sm:text-base text-neutral-700 leading-relaxed text-center">
                        Una cuina{" "}
                        <span className="font-semibold text-neutral-800">
                          sense presses
                        </span>
                        , amb{" "}
                        <span className="font-semibold text-neutral-800">
                          sabors reconeixibles
                        </span>{" "}
                        i una{" "}
                        <span className="font-semibold text-neutral-800">
                          mirada pròpia
                        </span>
                        . Volem crear un espai on menjar bé sigui una{" "}
                        <span className="font-semibold text-neutral-800">
                          experiència propera, viva i amb ànima
                        </span>
                        .
                      </p>
                      <div className="w-12 h-1 bg-neutral-400 rounded-full"></div>
                    </div>
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

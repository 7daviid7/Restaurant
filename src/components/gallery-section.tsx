"use client";
import Image from "next/image";
import SectionHeader from "./section-header";
import ViewportReveal from "./viewport-reveal";

interface GallerySectionProps {
  id?: string;
}

const images = [
  {
    src: "/images/salmo.jpg",
    alt: "Plat de Salmó.",
  },
  { src: "/images/canelons.jpg", alt: "Canelons de temporada" },
  { src: "/images/tiramisú.jpg", alt: "Postres artesanals" },
  { src: "/images/cheescake.jpg", alt: "Maridatge de vins" },
];

// components/GallerySection.tsx
// ... imports existents

import { useState } from "react";

export default function GallerySection({
  id = "galeria",
}: GallerySectionProps) {
  // ... altres variables

  const [colorImage, setColorImage] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setColorImage(index);
    // Desactiva el color després de 3 segons
    setTimeout(() => {
      setColorImage(null);
    }, 3000);
  };

  return (
    <section id={id} className="scroll-mt-24 bg-[#F5F2E8] py-12 sm:py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <SectionHeader
          title="Galeria"
          subtitle="Una mirada a la nostra cuina i espai."
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {images.map((img, i) => (
            <ViewportReveal key={i} delay={i * 0.05}>
              <div className="overflow-hidden rounded-md border border-[#e3dfd2] bg-[#FBF9F1]">
                <Image
                  onClick={() => handleClick(i)}
                  src={
                    img.src ||
                    "/placeholder.svg?height=400&width=600&query=restaurant%20dish"
                  }
                  alt={img.alt}
                  width={900}
                  height={1000}
                  className={`h-60 w-full scale-100 object-cover transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.05] sm:h-48 lg:h-89
                hover:grayscale-0 // <-- AFEGEIX AQUESTA LÍNIA
                ${colorImage === i ? "grayscale-0" : "grayscale"}`}
                />
              </div>
            </ViewportReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

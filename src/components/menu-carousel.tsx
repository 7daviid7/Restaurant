"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  Wine,
  Cookie,
} from "lucide-react";

interface MenuType {
  id: string;
  title: string;
  description: string;
  pdfUrl: string;
  bgImage: string;
}

const menuTypes: MenuType[] = [
  {
    id: "carta",
    title: "Carta de Menjar",
    description:
      "Descobreix la nostra selecció de plats tradicionals i creatius",
    pdfUrl: "/pdfs/carta-menjar.pdf",
    bgImage: "/images/caroussel-1.jpg",
  },
  {
    id: "vins",
    title: "Carta de Vins",
    description: "Una cuidada selecció de vins locals i internacionals",
    pdfUrl: "/pdfs/carta-vins.pdf",
    bgImage: "/images/caroussel-2.png",
  },
  {
    id: "postres",
    title: "Carta de Postres",
    description: "Dolços artesans per acabar perfectament el teu àpat",
    pdfUrl: "/pdfs/carta-postres.pdf",
    bgImage: "/images/caroussel-3.png",
  },
];

interface MenuCarouselProps {
  id?: string;
}

export default function MenuCarousel({ id = "carousel" }: MenuCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMenu = () => {
    setCurrentIndex((prev) => (prev + 1) % menuTypes.length);
  };

  const prevMenu = () => {
    setCurrentIndex((prev) => (prev - 1 + menuTypes.length) % menuTypes.length);
  };

  const openPDF = (pdfUrl: string) => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Les Nostres Cartes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora la nostra oferta gastronòmica completa. Cada carta està
            cuidadosament elaborada per oferir-te la millor experiència
            culinària.
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg border-gray-200"
            onClick={prevMenu}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg border-gray-200"
            onClick={nextMenu}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {menuTypes.map((menu, index) => (
              <div key={index} className="min-w-full px-12">
                <Card className="overflow-hidden shadow-xl">
                  <CardContent
                    className="p-0 bg-cover bg-center relative min-h-[400px] lg:min-h-[500px] xl:min-h-[600px]"
                    style={{ backgroundImage: `url(${menu.bgImage})` }}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative p-12 lg:p-16 xl:p-20 text-center flex flex-col justify-center min-h-[400px] lg:min-h-[500px] xl:min-h-[600px]">
                      <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 lg:mb-6 xl:mb-8 drop-shadow-lg">
                        {menu.title}
                      </h3>

                      <p className="text-white mb-8 lg:mb-10 xl:mb-12 max-w-md lg:max-w-lg xl:max-w-xl mx-auto leading-relaxed lg:text-lg xl:text-xl drop-shadow-md">
                        {menu.description}
                      </p>
                      <div className="flex justify-center">
                        <Button
                          onClick={() => openPDF(menu.pdfUrl)}
                          className="bg-transparent text-white border-2 border-white px-10 py-4 transition-all duration-300 hover:bg-white hover:text-gray-900 max-w-[250px] text-lg font-semibold"
                        >
                          Obrir Carta
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {menuTypes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-amber-600 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

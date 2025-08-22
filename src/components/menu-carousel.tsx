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

interface MenuCarouselProps {
  id?: string;
}

interface MenuType {
  id: string;
  title: string;
  description: string;
  pdfUrl: string;
  icon: React.ReactNode;
  bgGradient: string;
}

const menuTypes: MenuType[] = [
  {
    id: "carta",
    title: "Carta de Menjar",
    description:
      "Descobreix la nostra selecció de plats tradicionals i creatius",
    pdfUrl: "/pdfs/carta_menjar.pdf",
    icon: <FileText className="w-8 h-8" />,
    bgGradient: "from-amber-50 to-orange-100",
  },
  {
    id: "vins",
    title: "Carta de Vins",
    description: "Una cuidada selecció de vins locals i internacionals",
    pdfUrl: "/pdfs/carta-vins.pdf",
    icon: <Wine className="w-8 h-8" />,
    bgGradient: "from-red-50 to-rose-100",
  },
  {
    id: "postres",
    title: "Carta de Postres",
    description: "Dolços artesans per acabar perfectament el teu àpat",
    pdfUrl: "/pdfs/carta-postres.pdf",
    icon: <Cookie className="w-8 h-8" />,
    bgGradient: "from-yellow-50 to-amber-100",
  },
];

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

  const currentMenu = menuTypes[currentIndex];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
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

        <div className="relative">
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

          {/* Main Card */}
          <Card className="mx-12 overflow-hidden shadow-xl">
            <CardContent
              className={`p-0 bg-gradient-to-br ${currentMenu.bgGradient}`}
            >
              <div className="p-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white rounded-full shadow-md text-amber-600">
                    {currentMenu.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {currentMenu.title}
                </h3>

                <p className="text-gray-700 mb-8 max-w-md mx-auto leading-relaxed">
                  {currentMenu.description}
                </p>

                <Button
                  onClick={() => openPDF(currentMenu.pdfUrl)}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Obrir Carta
                </Button>
              </div>
            </CardContent>
          </Card>

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

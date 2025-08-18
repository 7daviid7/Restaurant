"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface WelcomeModalProps {
  onClose: () => void;
  isVisible: boolean;
}

export default function WelcomeModal({
  onClose,
  isVisible,
}: WelcomeModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      // Auto-close after 4 seconds
      const timer = setTimeout(() => {
        handleClose();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300",
        isAnimating ? "opacity-100" : "opacity-0"
      )}
    >
      <div
        className={cn(
          "relative max-w-2xl mx-4 bg-[#F5F2E8] rounded-lg shadow-2xl transition-all duration-500 transform",
          isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
        )}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
          aria-label="Tancar"
        >
          <X className="w-5 h-5 text-neutral-700" />
        </button>

        {/* Restaurant image */}
        <div className="relative h-64 overflow-hidden rounded-t-lg">
          <img
            src="/elegant-restaurant-interior.png"
            alt="Interior elegant del restaurant La Canal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Logo/Title */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-white rounded-full shadow-lg">
              <span className="text-2xl font-bold text-neutral-800">LC</span>
            </div>
            <h1 className="font-title text-4xl md:text-5xl font-bold text-neutral-800 mb-2 tracking-wide">
              LA CANAL
            </h1>
            <div className="w-24 h-px bg-neutral-400 mx-auto mb-4"></div>
            <p className="font-body text-lg text-neutral-600 leading-relaxed">
              Cuina honesta, de temporada i amb classe
            </p>
          </div>

          {/* Welcome message */}
          <div className="space-y-4">
            <p className="font-body text-neutral-700 leading-relaxed">
              Benvinguts al nostre espai gastronòmic, on la tradició i la
              innovació es troben per oferir-vos una experiència culinària
              única.
            </p>
            <p className="font-body text-sm text-neutral-500">
              Producte local • Receptes contemporànies • Espai propi
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleClose}
            className="mt-6 px-8 py-3 bg-neutral-800 text-white font-body text-sm uppercase tracking-wider rounded hover:bg-neutral-700 transition-colors duration-200"
          >
            Descobrir la carta
          </button>
        </div>
      </div>
    </div>
  );
}

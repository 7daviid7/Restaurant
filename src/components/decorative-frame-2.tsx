"use client";
import type { ReactNode } from "react";
import Image from "next/image"; // Importa el component Image
import { cn } from "@/lib/utils";

interface DecorativeFrameProps {
  children: ReactNode;
  className?: string;
  imageSrc: string; // Prop per a la URL de la imatge
}

/**
 * Marc amb efecte de paper cremat i una imatge de fons.
 */
export default function DecorativeFrame({
  children,
  className,
  imageSrc, // Rep la nova prop
}: DecorativeFrameProps) {
  return (
    <div
      className={cn("relative rounded-[10px] p-[2px] bg-[#e3dfd2]", className)}
    >
      <div className="relative overflow-hidden rounded-[8px] p-4 sm:p-6 shadow-inner bg-[#FBF9F1]">
        {/* Imatge de fons decorativa (capa intermèdia) */}
        <div className="absolute inset-0 z-10 opacity-80">
          <Image
            src={imageSrc} // Utilitza la prop per a la font de la imatge
            alt="Fons decoratiu" // Alt text genèric
            fill
          />
        </div>

        {/* Contingut principal (capa superior) */}
        <div className="relative z-20">{children}</div>
      </div>
    </div>
  );
}

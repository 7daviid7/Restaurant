"use client";
import type { ReactNode } from "react";
import Image from "next/image"; // Importa el component Image
import { cn } from "@/lib/utils";

interface DecorativeFrameProps {
  children: ReactNode;
  className?: string;
}

/**
 * Marc amb efecte de paper cremat i taca de cafè.
 */
export default function DecorativeFrame({
  children,
  className,
}: DecorativeFrameProps) {
  return (
    <div
      className={cn("relative rounded-[10px] p-[2px] bg-[#e3dfd2]", className)}
    >
      <div className="relative overflow-hidden rounded-[8px] p-4 sm:p-6 shadow-inner bg-[#FBF9F1]">
        {/* Imatge de la taca de cafè (capa intermèdia) */}
        <div className="absolute inset-0 z-10 opacity-60">
          <Image
            src="/images/prova/descarga.jpeg"
            alt="Taca de cafè"
            fill // Ocupa tot el contenidor
            className="h-1"
          />
        </div>

        {/* Contingut principal (capa superior) */}
        <div className="relative z-20">{children}</div>
      </div>
    </div>
  );
}

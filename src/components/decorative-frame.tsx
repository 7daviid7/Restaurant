import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DecorativeFrameProps {
  children: ReactNode;
  className?: string;
}

/**
 * Marc amb doble línia interior utilitzant pseudoelements.
 */
export default function DecorativeFrame({
  children,
  className,
}: DecorativeFrameProps) {
  return (
    <div
      className={cn(
        "relative rounded-[10px] p-[2px] bg-[#e3dfd2]", // Línia exterior principal
        className
      )}
    >
      <div className="relative rounded-[8px] bg-[#22372B] p-4 sm:p-6 shadow-inner">
        {/* Línia interior amb pseudoelements */}
        <div className="relative z-10">{children}</div>
        <div className="absolute inset-0 rounded-[8px] border-2 border-[#d9d6cb]" />
        <div className="absolute inset-[3px] rounded-[6px] border-2 border-[#e8e4d8]" />
      </div>
    </div>
  );
}

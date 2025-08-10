import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DecorativeFrameProps {
  children: ReactNode;
  className?: string;
}

/**
 * Subtil marc inspirat en la referència: doble línia amb ombra suau.
 * Colors basats en una paleta beige elegant.
 */
export default function DecorativeFrame({
  children,
  className,
}: DecorativeFrameProps) {
  return (
    <div
      className={cn(
        "relative rounded-[10px] p-[1px]",
        "bg-[linear-gradient(180deg,#CCC,#EEE)]", // línia externa lleu
        className
      )}
      aria-hidden={false}
    >
      <div className="rounded-[8px] bg-[#F5F2E8] p-[1px]">
        <div className="rounded-[6px] bg-[#F7F4EA] shadow-[0_1px_0_#e8e4d8,0_0_0_1px_#d9d6cb_inset]">
          <div className="rounded-[6px] p-4 sm:p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

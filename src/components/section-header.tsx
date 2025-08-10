import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import ViewportReveal from "./viewport-reveal";

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <ViewportReveal>
      <div
        className={cn(
          "mx-auto max-w-3xl",
          align === "center" ? "text-center" : "text-left",
          className
        )}
      >
        <h2 className="font-title text-[22px] font-semibold tracking-tight text-neutral-900 sm:text-[28px]">
          {title}
        </h2>
        {subtitle ? <p className="mt-2 text-neutral-700">{subtitle}</p> : null}
      </div>
    </ViewportReveal>
  );
}

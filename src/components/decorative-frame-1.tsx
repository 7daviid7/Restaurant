import type React from "react";
interface DecorativeFrameProps {
  children: React.ReactNode;
}

export default function DecorativeFrame({ children }: DecorativeFrameProps) {
  return (
    <div className="relative">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-amber-600"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-amber-600"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-amber-600"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-amber-600"></div>

      {/* Content with padding */}
      <div className="p-8 md:p-12">{children}</div>
    </div>
  );
}

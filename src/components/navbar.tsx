"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type Section = { id: string; label: string };

interface NavbarProps {
  sections?: Section[];
}

export default function Navbar({
  sections = [
    { id: "hero", label: "Inici" },
    { id: "menu", label: "Carta" },
    { id: "galeria", label: "Galeria" },
    { id: "contacte", label: "Contacte" },
  ],
}: NavbarProps) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "hero");
  const ids = useMemo(() => sections.map((s) => s.id), [sections]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => entry.isIntersecting && setActive(id)),
        { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6, 1] }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  const LinkItem = ({ s, onClick }: { s: Section; onClick?: () => void }) => (
    <Link
      key={s.id}
      href={`#${s.id}`}
      onClick={onClick}
      className={[
        "relative px-1 py-2 text-[15px] transition-colors",
        active === s.id
          ? "text-neutral-900"
          : "text-neutral-600 hover:text-neutral-900",
      ].join(" ")}
      aria-current={active === s.id ? "page" : undefined}
    >
      <span>{s.label}</span>
      <span
        className={[
          "absolute left-0 -bottom-[2px] h-[1px] w-full origin-left scale-x-0 bg-neutral-900 transition-transform duration-300",
          active === s.id ? "scale-x-100" : "group-hover/link:scale-x-100",
        ].join(" ")}
        aria-hidden
      />
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e3dfd2] bg-[#9F9385]/70 backdrop-blur supports-[backdrop-filter]:bg-[#9F9385]/70">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="#hero" className="flex items-center gap-3">
          <Image
            src="/images/logoPetit.svg"
            alt="Logotip LA CANAL"
            width={48}
            height={48}
            className="w-* h-* object-contain"
            priority
          />
          <span className="font-title text-[25px] tracking-wide text-neutral-900 m-4">
            LA CANAL
          </span>
        </Link>

        <nav className="hidden items-center gap-6 sm:flex">
          {sections.map((s) => (
            <LinkItem key={s.id} s={s} />
          ))}
        </nav>

        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-neutral-300 bg-[#F7F4EA]"
              >
                <Menu className="size-5 text-neutral-900" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex flex-col max-w-[40%] bg-[#F5F2E8]"
            >
              <div className="flex-grow flex flex-col justify-between">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <span className="font-title text-[17px] tracking-wide text-neutral-900">
                      LA CANAL
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6 flex flex-col items-center">
                  {sections.map((s) => (
                    <Link
                      key={s.id}
                      href={`#${s.id}`}
                      className="px-1 py-3 text-neutral-800"
                      onClick={() => {
                        const btn = document.querySelector(
                          '[data-state="open"][data-radix-collection-item]'
                        ) as HTMLElement | null;
                        if (btn) btn.click();
                      }}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
                <div className="flex justify-center mt-auto mb-[100px]">
                  <Image
                    src="/images/logoPetit.jpg"
                    alt="Logotip LA CANAL"
                    width={100}
                    height={100}
                    className="w-* h-* object-contain"
                    priority
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

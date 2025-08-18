"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "./section-header";
import ViewportReveal from "./viewport-reveal";

interface MenuSectionProps {
  id?: string;
}

type MenuItem = { name: string; desc?: string; price: string };
type MenuCategory = { title: string; items: MenuItem[] };

export default function MenuSection({ id = "menu" }: MenuSectionProps) {
  const [menu, setMenu] = useState<MenuCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const response = await fetch("/api/menu");
        if (!response.ok) {
          throw new Error("Failed to fetch menu");
        }
        const data: MenuCategory[] = await response.json();
        setMenu(data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMenu();
  }, []);

  if (isLoading) {
    return <div>Carregant el menú...</div>;
  }

  return (
    <section id={id} className="scroll-mt-24 bg-[#F7F4EA] py-12 sm:py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <SectionHeader
          title="La nostra carta"
          subtitle="De temporada i pensada per compartir."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menu.map((cat, idx) => (
            <ViewportReveal key={cat.title} delay={idx * 0.05}>
              <Card className="border-[#e3dfd2] bg-[#C0C7A6]/70 transition-shadow hover:shadow-md ">
                {" "}
                <CardHeader>
                  <CardTitle className="font-display text-xl text-neutral-900 ">
                    {cat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="group border-b border-neutral-200/70 pb-4 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="text-neutral-900">{item.name}</h3>
                        <span className="whitespace-nowrap font-medium text-neutral-900 group-hover:opacity-90">
                          {item.price}
                        </span>
                      </div>
                      {item.desc ? (
                        <p className="mt-1 text-sm text-neutral-700">
                          {item.desc}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ViewportReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

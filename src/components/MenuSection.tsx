"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "./section-header";
import ViewportReveal from "./viewport-reveal";
import DecorativeFrame from "./decorative-frame";

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
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-black font-medium">Carregant la carta...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-8 py-12 m-1rem">
        <DecorativeFrame>
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-8 mb-8">
              <span className="text-6xl font-bold text-black">
                MENÚ DEL DIA
              </span>
            </div>
          </div>
          {/* Menu sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 relative z-10 mx-10">
            {menu.map((category) => (
              <div key={category.title} className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-black mb-2">
                    {category.title}
                  </h2>
                  <div className="w-16 h-px bg-black mx-auto"></div>
                </div>

                {/* Items del menú */}
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="border-b border-gray-200 pb-4 last:border-b-0"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-black text-lg leading-tight mb-1">
                            {item.name}
                          </h3>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                        <span className="font-bold text-black text-lg whitespace-nowrap ml-4">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </DecorativeFrame>
      </div>
    </div>
  );
}

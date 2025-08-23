"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "./section-header";
import ViewportReveal from "./viewport-reveal";
import DecorativeFrame from "./decorative-frame-2";

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
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <DecorativeFrame>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-600"></div>
              <span className="text-5xl md:text-6xl font-bold text-amber-900 tracking-tight">
                MENÚ DEL DIA
              </span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-600"></div>
            </div>
            <p className=" text-lg font-medium">
              Cuina casolana amb productes frescos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {menu.map((category, index) => (
              <Card
                key={category.title}
                className="bg-white/60 p-4 backdrop-blur-sm border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="mt-3">
                  <div className="text-center">
                    <CardTitle className="text-2xl font-bold text-amber-900 mb-3">
                      {category.title}
                    </CardTitle>
                    <div className="w-16 h-0.5 bg-[#9F9385]  mx-auto"></div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-5">
                    {category.items.map((item, itemIndex) => (
                      <div key={item.name} className="group relative">
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2 group-hover:text-amber-700 transition-colors">
                              {item.name}
                            </h3>
                            {item.desc && (
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {item.desc}
                              </p>
                            )}
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="font-bold text-[#654321] text-xl whitespace-nowrap">
                              {item.price}
                            </span>
                          </div>
                        </div>
                        {itemIndex < category.items.length - 1 && (
                          <div className="mt-4 h-px bg-[#9F9385]/70"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 pt-8 border-t border-amber-200">
            <p className=" text-sm font-medium">
              * Els preus poden variar segons la temporada i disponibilitat dels
              productes
            </p>
          </div>
        </DecorativeFrame>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // 👈 Importem el component Image de Next.js
import { ViewportReveal } from "./viewport-reveal";
import type { HTMLAttributes } from "react";

interface Dish {
  id: string;
  image: string;
}

interface DishGaleryProps extends HTMLAttributes<HTMLElement> {
  id?: string;
}

const dishes: Dish[] = [
  {
    id: "1",
    image: "/images/canelons.jpg",
  },
  {
    id: "2",
    image: "/images/tiramisú.jpg",
  },
  {
    id: "3",
    image: "/images/cheescake.jpg",
  },
];

export default function DishGalery({ id }: DishGaleryProps) {
  return (
    <section className=" bg-[#F7F4EA]">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={dish.image || "/placeholder.svg"}
                  alt={`Plat: ${dish.id}`}
                  width={1000} // 👈 Augmentem l'amplada per a optimització
                  height={1000} // 👈 Augmentem l'alçada per a optimització
                  // Canviem la classe 'h-*' per un valor concret com 'h-[30rem]'
                  className="w-full h-[50rem] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

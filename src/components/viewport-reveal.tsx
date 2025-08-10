"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface ViewportRevealProps {
  children: ReactNode;
  delay?: number;
}

export default function ViewportReveal({
  children,
  delay = 0,
}: ViewportRevealProps) {
  const preferReduced = useReducedMotion();
  const initial = preferReduced ? {} : { opacity: 0, y: 12 };
  const animate = preferReduced ? {} : { opacity: 1, y: 0 };
  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ViewportRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

function ViewportReveal({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: ViewportRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.25, 0, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { ViewportReveal };
export default ViewportReveal;

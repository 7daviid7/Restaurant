// lib/fonts.ts
import { Baskervville, Cinzel } from "next/font/google";

export const body = Baskervville({
  subsets: ["latin"],
  variable: "--font-body",
  weight: "500",
  display: "swap",
});

export const title = Cinzel({
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap",
  weight: "400",
});

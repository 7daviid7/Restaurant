// tailwind.config.ts
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  // Utilitza "class" si vols canviar el mode fosc amb una classe al <html>
  darkMode: "media",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        beige: {
          50: "#FBF9F1",
          100: "#F7F4EA",
          200: "#F5F2E8",
        },
      },
      fontFamily: {
        // La classe 'font-title' utilitza la teva font de títols
        title: ["var(--font-title)", ...defaultTheme.fontFamily.serif],
        // La classe 'font-body' utilitza la teva font de cos
        body: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
        // Utilitza les teves fonts personalitzades per a les categories predefinides
        sans: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-title)", ...defaultTheme.fontFamily.serif],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    // El plugin per a Next.js no és necessari amb aquesta configuració
  ],
};

export default config;

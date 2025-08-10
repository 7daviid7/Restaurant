import type React from "react";
import type { Metadata, Viewport } from "next";
import { title, body } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { getBaseUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: "Restaurant · Cuina de temporada amb classe",
    template: "%s · Restaurant",
  },
  description:
    "Restaurant de cuina de temporada a Barcelona. Producte local, receptes contemporànies i una experiència elegant.",
  keywords: [
    "restaurant",
    "carta",
    "barcelona",
    "cuina de temporada",
    "reserves",
    "gastronomia",
  ],
  authors: [{ name: "Restaurant" }],
  creator: "Restaurant",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Restaurant · Cuina de temporada amb classe",
    description:
      "Producte local, receptes contemporànies i una experiència pensada per gaudir sense presses.",
    siteName: "Restaurant",
    images: [
      {
        url: "/opengraph-image?title=Restaurant&subtitle=Cuina%20de%20temporada%20amb%20classe",
        width: 1200,
        height: 630,
        alt: "Restaurant - Cuina de temporada amb classe",
      },
    ],
    locale: "ca_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant · Cuina de temporada amb classe",
    description:
      "Producte local, receptes contemporànies i una experiència pensada per gaudir sense presses.",
    images: ["/twitter-image?title=Restaurant&subtitle=Cuina%20de%20temporada"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  category: "Restaurant",
};

export const viewport: Viewport = {
  themeColor: "#78350f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ca">
      <body
        className={cn(
          "min-h-dvh bg-background text-foreground antialiased", // <-- Canvia aquí
          title.variable,
          body.variable,
          "font-body"
        )}
      >
        {children}
      </body>
    </html>
  );
}

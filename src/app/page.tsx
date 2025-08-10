import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import MenuSection from "../components/MenuSection";
import GallerySection from "@/components/gallery-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { title, body } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function Page() {
  const sections = [
    { id: "hero", label: "Inici" },
    { id: "menu", label: "Carta" },
    { id: "galeria", label: "Galeria" },
    { id: "contacte", label: "Contacte" },
  ];

  return (
    <div
      className={cn(
        "min-h-dvh scroll-smooth bg-[#F5F2E8] text-neutral-900",
        title.variable,
        body.variable
      )}
    >
      <Navbar sections={sections} />
      <main>
        <HeroSection id="hero" />
        <MenuSection id="menu" />
        <GallerySection id="galeria" />
        <ContactSection id="contacte" />
      </main>
      <Footer />
    </div>
  );
}

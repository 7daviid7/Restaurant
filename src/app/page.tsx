"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import WelcomeModal from "@/components/welcome-modal";
import HeroSection from "@/components/hero-section";
import MenuSection from "@/components/menuSection";
import GallerySection from "@/components/gallery-section";
import ContactSection from "@/components/contact-section";
import PlatsEstrella from "@/components/platsEstrella";
import Carousel from "@/components/menu-carousel";
import AboutUs from "@/components/about-us";
import Footer from "@/components/footer";
import { title, body } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function Page() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  const sections = [
    { id: "hero", label: "Inici" },
    { id: "menu", label: "Carta" },
    { id: "galeria", label: "Galeria" },
    { id: "contacte", label: "Contacte" },
  ];

  useEffect(() => {
    // Show welcome modal on page load
    const timer = setTimeout(() => {
      setShowWelcomeModal(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseWelcomeModal = () => {
    setShowWelcomeModal(false);
  };

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
        <AboutUs id="about" />
        <PlatsEstrella id="plats" />
        <MenuSection id="menu" />
        <Carousel id="carousel" />
        <GallerySection id="galeria" />
        <ContactSection id="contacte" />
      </main>
      <Footer />

      {/* Welcome Modal */}
      <WelcomeModal
        isVisible={showWelcomeModal}
        onClose={handleCloseWelcomeModal}
      />
    </div>
  );
}

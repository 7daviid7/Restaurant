"use client";

import SectionHeader from "./section-header";
import ContactInfoCard from "./info-card.txs";
import ReservationFormCard from "./reserve-section";

interface ContactSectionProps {
  id?: string;
}

export default function ContactSection({
  id = "contacte",
}: ContactSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-[#e3dfd2] bg-gradient-to-b from-[#F7F4EA] to-[#F0EBD8] py-16 sm:py-20"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader
          title="Contacte i reserves"
          subtitle="Truca'ns o escriu-nos per reservar taula. Estarem encantats d'atendre't."
        />

        <div className="mt-12 grid gap-8 lg:gap-12 xl:grid-cols-2 xl:items-center">
          <div className="order-2 xl:order-1">
            <ContactInfoCard />
          </div>

          <div className="order-1 xl:order-2">
            <ReservationFormCard />
          </div>
        </div>
      </div>
    </section>
  );
}

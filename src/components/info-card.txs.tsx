"use client";

import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactInfoCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F7F4EA] to-[#F0EBD8] p-8 shadow-lg border border-[#e3dfd2]/50">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-neutral-900"></div>
        <div className="absolute bottom-8 left-8 w-24 h-24 rounded-full bg-neutral-700"></div>
      </div>

      <div className="relative z-10 space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-neutral-900 mb-2">
            Informació de contacte
          </h3>
          <div className="w-16 h-1 bg-neutral-900 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-5">
          <div className="group flex items-start gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white/80 transition-all duration-300 hover:shadow-md">
            <div className="flex-shrink-0 w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-5 h-5 text-[#F7F4EA]" />
            </div>
            <div>
              <p className="font-semibold text-neutral-900 mb-1">Ubicació</p>
              <a
                href="https://www.google.com/maps/place/Carrer+Maria+Vivet,+1,+08551+Tona,+Barcelona/@41.8521161,2.2271203,721m/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200 text-sm leading-relaxed"
              >
                C/ Maria Vivet, 1.
                <br />
                08551 Tona, Barcelona.
              </a>
            </div>
          </div>

          <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white/80 transition-all duration-300 hover:shadow-md">
            <div className="flex-shrink-0 w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-5 h-5 text-[#F7F4EA]" />
            </div>
            <div>
              <p className="font-semibold text-neutral-900 mb-1">Telèfon</p>
              <a
                href="tel:+34649596507"
                className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200 text-sm"
              >
                +34 649 59 65 07
              </a>
            </div>
          </div>

          <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white/80 transition-all duration-300 hover:shadow-md">
            <div className="flex-shrink-0 w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-5 h-5 text-[#F7F4EA]" />
            </div>
            <div>
              <p className="font-semibold text-neutral-900 mb-1">Email</p>
              <a
                href="mailto:lacanalrestaurant@gmail.com"
                className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200 text-sm"
              >
                lacanalrestaurant@gmail.com
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-r from-[#FBF9F1] to-white border border-[#e3dfd2] shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#F7F4EA]" />
              </div>
              <h4 className="font-bold text-neutral-900 text-lg">Horari</h4>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                <span className="font-semibold text-neutral-900">Dl-Dv:</span>
                <span className="text-neutral-700 text-sm">
                  13:00-16:00 · 20:00-23:00
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                <span className="font-semibold text-neutral-900">Ds-Dg:</span>
                <span className="text-neutral-700 text-sm">
                  13:00-16:30 · 20:00-23:30
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

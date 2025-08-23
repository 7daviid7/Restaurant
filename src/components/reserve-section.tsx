"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Users, Send } from "lucide-react";

export default function ReservationFormCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-[#FBF9F1] p-8 shadow-lg border border-[#e3dfd2]/50">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 left-4 w-28 h-28 rounded-full bg-neutral-800"></div>
        <div className="absolute bottom-4 right-8 w-20 h-20 rounded-full bg-neutral-600"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-[#F7F4EA]" />
          </div>
          <h3 className="text-2xl font-bold text-neutral-900 mb-2">
            Fes la teva reserva
          </h3>
          <div className="w-16 h-1 bg-neutral-900 mx-auto rounded-full"></div>
        </div>

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Gràcies! Ens posarem en contacte ben aviat.");
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-neutral-700 flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                Nom
              </label>
              <Input
                id="name"
                name="name"
                placeholder="El teu nom"
                className="bg-white border-2 border-[#e3dfd2] focus:border-neutral-900 transition-colors duration-200 rounded-xl h-12"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-semibold text-neutral-700"
              >
                Telèfon
              </label>
              <Input
                id="phone"
                name="phone"
                placeholder="+34 ..."
                className="bg-white border-2 border-[#e3dfd2] focus:border-neutral-900 transition-colors duration-200 rounded-xl h-12"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-neutral-700"
            >
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="tu@exemple.com"
              className="bg-white border-2 border-[#e3dfd2] focus:border-neutral-900 transition-colors duration-200 rounded-xl h-12"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-neutral-700"
            >
              Missatge
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Data, hora i número de comensals..."
              rows={4}
              className="bg-white border-2 border-[#e3dfd2] focus:border-neutral-900 transition-colors duration-200 rounded-xl resize-none"
            />
          </div>

          <Button className="w-full h-14 bg-neutral-900 hover:bg-neutral-800 text-[#F5F2E8] rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-3 group">
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            Enviar reserva
          </Button>
        </form>
      </div>
    </div>
  );
}

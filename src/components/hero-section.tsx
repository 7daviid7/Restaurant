import Link from "next/link";
interface HeroSectionEnhancedProps {
  id: string;
}

export default function HeroSectionEnhanced({ id }: HeroSectionEnhancedProps) {
  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="images/restauranteElegante.png"
          alt="Restaurant La Canal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Main title */}
        <div className="mb-8">
          <h1 className="font-title text-6xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-wider drop-shadow-lg">
            LA CANAL
          </h1>
          <h2 className="font-title text-2xl sm:text-3xl md:text-4xl">
            RESTAURANT
          </h2>
          <div className="w-32 h-px bg-white/60 mx-auto mb-6 m-7"></div>

          <p className="font-body text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Cuina honesta, de temporada i amb classe
          </p>
        </div>
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="#menu">
            <button className="px-8 py-3 bg-white text-neutral-800 font-body text-sm uppercase tracking-wider rounded hover:bg-white/90 transition-colors duration-200">
              Veure la carta
            </button>
          </Link>
          <Link href="#contacte">
            <button className="px-8 py-3 border border-white/50 text-white font-body text-sm uppercase tracking-wider rounded hover:bg-white/10 transition-colors duration-200">
              Reservar taula
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

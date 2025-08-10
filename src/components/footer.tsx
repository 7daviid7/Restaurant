import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#e3dfd2] bg-[#F5F2E8] py-10">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo-la-canal.png"
            alt="Logotip LA CANAL"
            width={24}
            height={24}
          />
          <p className="text-sm text-neutral-700">
            © {new Date().getFullYear()} LA CANAL. Tots els drets reservats.
          </p>
        </div>
        <nav className="flex gap-6 text-sm">
          <Link
            href="#hero"
            className="text-neutral-700 hover:text-neutral-900"
          >
            Inici
          </Link>
          <Link
            href="#menu"
            className="text-neutral-700 hover:text-neutral-900"
          >
            Carta
          </Link>
          <Link
            href="#galeria"
            className="text-neutral-700 hover:text-neutral-900"
          >
            Galeria
          </Link>
          <Link
            href="#contacte"
            className="text-neutral-700 hover:text-neutral-900"
          >
            Contacte
          </Link>
        </nav>
      </div>
    </footer>
  );
}

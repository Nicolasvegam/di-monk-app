import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Image src="/dimonk-logo-fondo-blanco.png" alt="Logo" width={45} height={45} className="rounded-full" />
            <h3 className="font-semibold text-white">Di Monk</h3>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#pricing" className="text-white/80 hover:text-white transition-colors">Precios</Link>
            <Link href="#faq" className="text-white/80 hover:text-white transition-colors">Preguntas</Link>
            <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-white/90 transition-colors">
              Comenzar
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 
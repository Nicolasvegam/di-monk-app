import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white/70 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 justify-start">
              <div><Image src="/dimonk-logo-fondo-blanco.png" alt="Logo" width={50} height={50} className="rounded-full" /></div>
              <h3 className="font-semibold text-white">Di Monk</h3>
            </div>
            <p className="text-sm mt-4">Ayudando a profesionales a mejorar su productividad y desarrollo profesional.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Cursos</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Precios</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Preguntas</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Sucursal</h3>
            <ul className="space-y-2 text-sm">
              <li>Cerro Colorado 4510, Las Condes, Chile</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-2xl hover:text-white transition-colors">
                <FaInstagram />
              </Link>
              <Link href="#" className="text-2xl hover:text-white transition-colors">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Di Monk. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
} 
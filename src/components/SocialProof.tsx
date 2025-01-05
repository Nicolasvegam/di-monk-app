import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function SocialProof() {
  const logos = [
    { src: '/logo-carvuk.webp', alt: 'Carvuk Logo', opacity: 'opacity-60' },
    { src: '/logo-meli.webp', alt: 'Mercado Libre Logo', opacity: 'opacity-60' },
    { src: '/logo-uc.webp', alt: 'Universidad Católica Logo', opacity: 'opacity-100' },
    { src: '/logo-xepelin.webp', alt: 'Xepelin Logo', opacity: 'opacity-80' },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-white/80 mb-8">Profesionales con experiencia en</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
          >   
          {logos.map((logo, i) => (
            <div key={i} className={cn(logo.opacity)}>
              <Image
                src={logo.src}  
                alt={logo.alt}
                width={250}
                height={125}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
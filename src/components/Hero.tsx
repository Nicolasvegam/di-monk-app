export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Impulsa tu Carrera con IA
          </h1>
          <p className="text-md text-white/80 mb-8 max-w-2xl mx-auto sm:text-xl">
          Aumenta hasta 10 veces tu productividad y lleva tu desarrollo profesional al siguiente nivel usando Google Sheets y ChatGPT.
          </p>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-medium text-xs">Calificación 4.7 de 5</span>
          </div>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-white/90 transition-colors">
              Explorar Planes
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
              Saber Más
            </button>
          </div>
          <div className="mt-12 flex justify-center">
            <img
              src="/gpt-sheets.webp"
              alt="GPT Sheet Interface"
              width={800}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 
export default function StatsBanner() {
  return (
    <section className="py-20 bg-black border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-white mb-2">+120</div>
            <div className="text-white/70">Profesionales</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-white/70">Tasa de Finalización</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-white/70">Satisfacción</div>
          </div>
        </div>
      </div>
    </section>
  );
} 
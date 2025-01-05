interface PricingPlan {
  title: string;
  stars: number;
  subtitle: string;
  price: string;
  features: string[];
}

export default function CourseCards() {
  const plans: PricingPlan[] = [
    {
      title: "Plan Básico",
      stars: 1,
      subtitle: "Para quienes inician en el uso de IA y Google Sheets",
      price: "$49.990 CLP",
      features: [
        "Acceso al curso completo de Google Sheets y ChatGPT",
        "Aprende a automatizar tareas simples y maximizar tu productividad",
        "1 hora de asesoría para resolver dudas específicas",
      ],
    },
    {
      title: "Plan Pro",
      stars: 2,
      subtitle: "Para quienes buscan resultados más rápidos y mayor personalización",
      price: "$89.990 CLP",
      features: [
        "Acceso al curso completo de Google Sheets y ChatGPT",
        "Aprende técnicas avanzadas de programación y automatización en Sheets",
        "2 horas de asesoría personalizada para aplicar lo aprendido en tu trabajo diario",
        "Acceso a hacks y trucos adicionales para mejorar aún más tu productividad",
      ],
    },
    {
      title: "Plan Premium",
      stars: 3,
      subtitle: "Para quienes quieren dominar la productividad con Google Sheets y ChatGPT",
      price: "$139.990 CLP",
      features: [
        "Acceso al curso completo de Google Sheets y ChatGPT, con contenido avanzado",
        "Aprende a integrar Google Sheets con otros servicios y herramientas",
        "4 horas de asesoría personalizada, adaptadas a tus necesidades laborales específicas",
        "Planificación personalizada para implementar los conocimientos en tus tareas diarias y proyectos",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Planes y Precios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className="bg-black border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-xl text-white">{plan.title}</h3>
                    <div className="text-yellow-400">
                      {"⭐".repeat(plan.stars)}
                    </div>
                  </div>
                  <p className="text-white/70 mb-4 text-sm">{plan.subtitle}</p>
                  <div className="border-t border-white/10 my-4" />
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-white mb-1">{plan.price}</p>
                    <p className="text-white/70 text-sm">Pago único</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span className="text-white/70 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full py-2 px-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
                  Comenzar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "¿Qué necesito para tomar este curso?",
    answer: "Solo necesitas acceso a Google Sheets y ChatGPT. No es necesario tener experiencia previa en programación o inteligencia artificial (IA). El curso está diseñado para ser accesible a cualquier profesional que use planillas en su día a día, como ingenieros, contadores, profesores, marketers, analistas de datos, administradores, gestores de proyectos y más."
  },
  {
    question: "¿Este curso es adecuado para mi profesión?",
    answer: "¡Sí! El curso está diseñado para profesionales de diversas áreas que buscan mejorar su productividad y desarrollo profesional utilizando herramientas como Google Sheets y ChatGPT. Es ideal para ingenieros, profesores, contadores, consultores, marketers, analistas, administradores, gestores de proyectos, y cualquier persona que utilice planillas en su trabajo diario. Además, aprenderás a aplicar IA para optimizar tareas y avanzar en tu carrera."
  },
  {
    question: "¿Cuánto tiempo tendré acceso al curso?",
    answer: "El acceso al curso es de 1 año desde la compra, lo que te permite estudiar a tu ritmo y poner en práctica lo aprendido en tu trabajo. Podrás acceder al contenido y a las actualizaciones del curso durante este tiempo."
  },
  {
    question: "¿Puedo tomar el curso si no sé nada sobre programación?",
    answer: "¡Por supuesto! El curso está diseñado para principiantes. Comenzamos desde lo más básico y te guiamos paso a paso en el uso de Google Sheets y ChatGPT. No necesitas experiencia previa en programación o IA, solo estar dispuesto a aprender y mejorar tu desarrollo profesional."
  },
  {
    question: "¿Qué diferencia el plan Premium de los otros planes?",
    answer: "El Plan Premium incluye 8 horas de asesoría personalizada, donde podemos adaptar el contenido a tus necesidades profesionales y ayudarte a integrar los conocimientos de Google Sheets y ChatGPT en tu día a día. Además, este plan ofrece un enfoque más avanzado, incluyendo la automatización de tareas complejas y personalización de procesos con IA, para un desarrollo profesional más acelerado."
  },
  {
    question: "¿Qué incluye la asesoría?",
    answer: "La asesoría incluye sesiones de 1 a 2 horas en las que te ayudamos a aplicar lo aprendido en el curso a tu trabajo. Te enseñaremos cómo usar Google Sheets y ChatGPT para optimizar tareas específicas de tu profesión, aumentar tu productividad y aplicar IA de manera práctica."
  },
  {
    question: "¿Qué tipo de soporte recibo durante el curso?",
    answer: "Durante el curso, recibirás soporte por correo electrónico para resolver cualquier duda sobre el contenido o problemas técnicos. Además, si estás en el Plan Premium, tendrás sesiones de asesoría personalizada y soporte continuo para mejorar tu desarrollo profesional con el uso de IA."
  },
  {
    question: "¿Recibiré un certificado al finalizar el curso?",
    answer: "Sí, al completar el curso recibirás un certificado de finalización que refleja tu aprendizaje y las habilidades adquiridas en el uso de Google Sheets y ChatGPT, incluyendo la aplicación de IA para mejorar tu productividad y avanzar en tu carrera."
  },
  {
    question: "¿Qué diferencia cada uno de los planes?",
    answer: "Plan Básico ($99.990 CLP): Acceso a los cursos por 1 año y 2 horas de asesoría. Ideal para quienes inician en Google Sheets y ChatGPT.\nPlan Pro ($149.990 CLP): Acceso a los cursos por 1 año y 4 horas de asesoría. Incluye técnicas más avanzadas de automatización y productividad.\nPlan Premium ($149.990 CLP): Acceso a los cursos por 1 año, 8 horas de asesoría personalizada y planificación adaptada a tu profesión. Perfecto para quienes buscan un desarrollo profesional acelerado utilizando IA."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Preguntas Frecuentes</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq, i) => (
            <AccordionItem 
              key={i} 
              value={`item-${i}`}
              className="bg-black border border-white/10 rounded-lg px-6"
            >
              <AccordionTrigger className="text-white hover:no-underline">
                <span className="text-left font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-white/70 whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
} 
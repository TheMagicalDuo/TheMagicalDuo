import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: '¿Los vuelos están incluidos en los paquetes?',
    answer: 'Por lo general, nuestros paquetes no incluyen vuelos para darte la flexibilidad de elegir la aerolínea y los horarios que prefieras. Sin embargo, si necesitas ayuda para emitirlos, te asesoramos sin cargo sobre las mejores opciones disponibles.'
  },
  {
    question: '¿El pago de los viajes se realiza a ustedes directamente?',
    answer: 'No. Para garantizar el 100% de transparencia y seguridad, todos los pagos se realizan directamente a los proveedores oficiales (Disney, Universal, navieras o cadenas hoteleras). Tu dinero nunca pasa por nuestras manos.'
  },
  {
    question: '¿Con cuánta anticipación recomiendan reservar?',
    answer: 'Para destinos como Disney o cruceros, recomendamos reservar con al menos 6 a 8 meses de anticipación. Esto asegura mejor disponibilidad de hoteles y permite congelar tarifas o acceder a planes de pago en cuotas más cómodos.'
  },
  {
    question: '¿Tiene algún costo extra contratar a través de ustedes?',
    answer: '¡Absolutamente ninguno! Nuestros precios son exactamente los mismos que encontrarías reservando por tu cuenta en las páginas oficiales. Nuestra ganancia proviene de una comisión que nos pagan los proveedores, por lo que toda nuestra planificación y asesoramiento personalizado es sin cargo para vos.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleOpen = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-terracota/30 text-terracota bg-terracota/5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
            <HelpCircle size={14} className="text-terracota" />
            Dudas Comunes
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-dark/60 text-sm max-w-xl mx-auto">
            Todo lo que necesitás saber antes de empezar a planear tu viaje mágico.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div 
                key={i} 
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-bordeaux/30 bg-bordeaux/5' : 'border-neutral-200 bg-white hover:border-bordeaux/20'}`}
              >
                <button
                  onClick={() => toggleOpen(i)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-dark text-[0.95rem] pr-8">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-bordeaux text-white' : 'bg-neutral-100 text-dark/50'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-6 text-dark/70 text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

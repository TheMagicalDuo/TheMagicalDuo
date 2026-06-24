import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, ArrowRight, HelpCircle, Check, MessageCircle, Lightbulb, Calculator, Sliders, Ticket } from 'lucide-react'

const WhatsAppIcon = ({ size = 24, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
)

const steps = [
  {
    n: '01',
    Icon: MessageCircle,
    title: 'Contactanos',
    desc: 'Escribinos por WhatsApp, Instagram o email. Siempre respondemos en menos de 24hs.',
  },
  {
    n: '02',
    Icon: Lightbulb,
    title: 'Contanos tu idea',
    desc: 'Decinos a dónde querés ir, con quién, fechas aproximadas y tu presupuesto estimado.',
  },
  {
    n: '03',
    Icon: Calculator,
    title: 'Recibís tu cotización',
    desc: 'Te enviamos una propuesta detallada con precios oficiales directos del proveedor.',
  },
  {
    n: '04',
    Icon: Sliders,
    title: 'Ajustamos juntos',
    desc: 'Modificamos hoteles, fechas o actividades las veces que sea necesario hasta que esté perfecto.',
  },
  {
    n: '05',
    Icon: Ticket,
    title: '¡A reservar!',
    desc: 'Confirmamos la reserva, coordinamos los pagos directos y te preparamos para despegar.',
  },
]

const infoItems = [
  'Destino o tipo de viaje (Disney, crucero, playa, etc.)',
  'Fechas tentativas de salida y duración',
  'Cantidad de pasajeros y edades de los menores',
  'Presupuesto aproximado por pasajero',
  'Preferencias especiales (hoteles dentro/fuera del parque, etc.)',
]

export default function Process() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 6500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 lg:py-28 bg-[#FBF8F3]/30 border-y border-neutral-100/60 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 border border-sage/35 text-sage bg-sage/5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
            El camino a tu viaje
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-5 leading-tight">
            Cómo pedir tu <span className="italic font-normal text-bordeaux">cotización personalizada</span>
          </h2>
          <p className="text-dark/65 text-lg max-w-xl mx-auto">
            Planificar tu viaje con nosotros es simple, rápido y completamente gratuito.
          </p>
        </motion.div>

        {/* Animated Auto-passing Cards */}
        <div className="relative mb-28 max-w-4xl mx-auto h-[320px] sm:h-[260px] lg:h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -40, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 bg-white rounded-[2rem] border border-neutral-100 shadow-xl p-8 sm:p-10 lg:p-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 overflow-hidden group cursor-pointer"
              onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
            >
              {/* Massive background icon */}
              <div className="absolute -right-10 -bottom-10 text-neutral-50/50 pointer-events-none select-none z-0 transition-transform duration-700 group-hover:scale-105">
                {(() => {
                  const ActiveIcon = steps[activeStep].Icon
                  return <ActiveIcon size={280} strokeWidth={0.5} />
                })()}
              </div>

              {/* Foreground Content */}
              <div className="relative z-10 flex-1">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-bordeaux/10 text-bordeaux mb-6 border border-bordeaux/20">
                  {(() => {
                    const ActiveIcon = steps[activeStep].Icon
                    return <ActiveIcon size={24} strokeWidth={2} />
                  })()}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-dark mb-4">{steps[activeStep].title}</h3>
                <p className="text-dark/70 text-base sm:text-lg leading-relaxed max-w-lg">{steps[activeStep].desc}</p>
              </div>
              
              {/* Tap indicator for mobile */}
              <div className="absolute bottom-6 right-8 text-bordeaux/40 text-xs font-bold uppercase tracking-wider hidden sm:block z-10">
                Siguiente &rarr;
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress Indicator Steps */}
          <div className="absolute -bottom-14 left-0 right-0 flex justify-center items-center gap-2 sm:gap-4 px-4">
            {steps.map((_, i) => {
              const isPast = i < activeStep
              const isActive = i === activeStep
              return (
                <div key={i} className="flex items-center">
                  <button
                    onClick={() => setActiveStep(i)}
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-500 border-2 shrink-0 ${
                      isPast 
                        ? 'bg-bordeaux text-white border-bordeaux' 
                        : isActive
                          ? 'bg-white text-bordeaux border-bordeaux scale-110 shadow-md'
                          : 'bg-white text-dark/30 border-neutral-200 hover:border-bordeaux/30'
                    }`}
                    aria-label={`Ir al paso ${i + 1}`}
                  >
                    {isPast ? <Check size={16} strokeWidth={3} /> : i + 1}
                  </button>
                  {/* Connector Line */}
                  {i < steps.length - 1 && (
                    <div className={`w-3 sm:w-8 h-[2px] ml-2 sm:ml-4 transition-colors duration-500 ${isPast ? 'bg-bordeaux' : 'bg-neutral-200'}`} />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Info detail boxes */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Guidance card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 bg-white border border-neutral-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-terracota/10 flex items-center justify-center">
                  <HelpCircle size={18} className="text-terracota" />
                </div>
                <h3 className="font-serif font-bold text-dark text-xl">
                  ¿Qué incluir en tu consulta?
                </h3>
              </div>
              <p className="text-dark/60 text-sm mb-6">
                Cuantos más detalles nos compartas, más precisa y personalizada será la primera propuesta que te enviemos.
              </p>
              <ul className="space-y-3.5">
                {infoItems.map((item, i) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-terracota/5 flex items-center justify-center shrink-0 mt-0.5 border border-terracota/10">
                      <span className="text-terracota text-xs font-bold">{i + 1}</span>
                    </div>
                    <span className="text-dark/70 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Action card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 bg-dark rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-lg border border-neutral-800"
          >
            {/* Plane track background vector decoration */}
            <div className="absolute right-0 bottom-0 w-40 h-40 opacity-5 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-none stroke-current" strokeWidth="1.5">
                <path d="M10,90 Q50,40 90,10" strokeDasharray="3 3" />
                <polygon points="90,10 82,10 88,16" fill="currentColor" />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="font-serif text-2xl font-bold mb-3">
                ¿Todo listo para empezar?
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-8">
                Hacé clic abajo para completar nuestro formulario web rápido o escribinos directamente por chat.
              </p>
            </div>

            <div className="flex flex-col gap-3 relative z-10">
              <a
                href="#cotizar"
                className="flex items-center justify-center gap-2 bg-bordeaux hover:bg-bordeaux/90 text-white py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 shadow-md shadow-bordeaux/15 hover:shadow-lg"
              >
                <FileText size={16} />
                Completar formulario
              </a>
              <a
                href="https://wa.me/5491169591710?text=Hola!%20Quiero%20planificar%20un%20viaje"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white py-3.5 rounded-2xl font-bold text-sm transition-colors duration-300"
              >
                <WhatsAppIcon size={16} />
                Escribir por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

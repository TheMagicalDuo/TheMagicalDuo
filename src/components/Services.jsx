import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Map, Utensils, Building2, Car, HeartPulse, ChevronDown } from 'lucide-react'

const WhatsAppIcon = ({ size = 24, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
)

const services = [
  {
    Icon: Map,
    iconBg: 'bg-sage/10',
    iconColor: 'text-sage',
    title: 'Tours en español',
    items: [
      'Guías especializados en español',
      'Grupos reducidos y atención personalizada',
      'Itinerarios en Europa, Japón, Emiratos y más',
      'Planes flexibles y a medida',
    ],
  },
  {
    Icon: Utensils,
    iconBg: 'bg-terracota/10',
    iconColor: 'text-terracota',
    title: 'All Inclusive',
    items: [
      'Cadenas Sandals & Beaches, Karisma, Club Med',
      'Resorts Palladium, RIU, Excellence Group',
      'Destinos en el Caribe, Bahamas y más',
      'Tarifas preferenciales garantizadas',
    ],
  },
  {
    Icon: Building2,
    iconBg: 'bg-bordeaux/10',
    iconColor: 'text-bordeaux',
    title: 'Hoteles',
    items: [
      'Reservas en cualquier destino del mundo',
      'Hoteles Good Neighbor y resorts oficiales',
      'Habitaciones familiares y suites especiales',
      'Hoteles boutique y cadenas de lujo',
    ],
  },
  {
    Icon: Car,
    iconBg: 'bg-sage/10',
    iconColor: 'text-sage',
    title: 'Alquiler de autos',
    items: [
      'Convenios con agencias internacionales líder',
      'Tarifas con seguros y coberturas incluidas',
      'Entrega en aeropuertos y hoteles de destino',
      'Asesoramiento en el tipo de vehículo ideal',
    ],
  },
  {
    Icon: HeartPulse,
    iconBg: 'bg-terracota/10',
    iconColor: 'text-terracota',
    title: 'Assist Card',
    items: [
      'Cobertura médica internacional integral',
      'Asistencia telefónica y presencial 24/7',
      'Protección contra cancelación y demoras',
      'Tarifas especiales para grupos y familias',
    ],
  },
]

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 border border-terracota/30 text-terracota bg-terracota/5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
            Servicios integrales
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
            Todo lo que tu viaje necesita, <span className="italic font-normal text-bordeaux">en un solo lugar</span>
          </h2>
          <p className="text-dark/65 text-lg max-w-xl mx-auto">
            Desde el hotel y los tours hasta el alquiler de auto y asistencia médica — coordinamos cada detalle sin costos extra.
          </p>
        </motion.div>

        {/* Grid (Accordion on Mobile) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {services.map((s, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onClick={() => {
                  if (window.innerWidth < 640) {
                    setOpenIndex(isOpen ? null : i)
                  }
                }}
                className="bg-white border border-neutral-100 rounded-2xl sm:rounded-3xl p-5 sm:p-7 hover:shadow-xl hover:border-neutral-200/50 transition-all duration-300 flex flex-col justify-start group cursor-pointer sm:cursor-default"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4 sm:block sm:gap-0">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${s.iconBg} flex items-center justify-center sm:mb-6 transition-all duration-300 group-hover:scale-105 shrink-0`}>
                      <s.Icon size={18} className={`${s.iconColor} sm:w-5 sm:h-5`} />
                    </div>
                    <h3 className="font-serif font-bold text-dark text-lg sm:text-xl sm:mb-4">{s.title}</h3>
                  </div>
                  <ChevronDown size={18} className={`sm:hidden text-dark/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </div>
                
                <div className={`${isOpen ? 'block' : 'hidden'} sm:block mt-4 sm:mt-0`}>
                  <ul className="space-y-3 pt-3 sm:pt-0 border-t border-neutral-100 sm:border-transparent">
                    {s.items.map(item => (
                      <li key={item} className="flex items-start gap-2.5 text-[0.85rem] sm:text-[0.9rem] text-dark/70">
                        <Check size={15} className="text-sage mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}

          {/* CTA card - Luggage tag style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-dark rounded-3xl p-7 flex flex-col justify-between text-white relative overflow-hidden shadow-lg border border-neutral-800"
          >
            {/* Plane track background vector decoration */}
            <div className="absolute right-0 top-0 w-32 h-32 opacity-5 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-none stroke-current" strokeWidth="2">
                <path d="M10,90 Q50,50 90,10" strokeDasharray="4 4" />
                <polygon points="90,10 82,10 88,16" fill="currentColor" />
              </svg>
            </div>
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <WhatsAppIcon size={20} className="text-white/90" />
              </div>
              <h3 className="font-serif font-bold text-white text-xl mb-3">
                ¿Tenés otro destino en mente?
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Como agentes certificados de viajes, planificamos itinerarios a cualquier parte del mundo. Decinos a dónde y lo armamos para vos.
              </p>
            </div>
            <a
              href="https://wa.me/5491169591710?text=Hola!%20Quiero%20consultar%20sobre%20un%20viaje"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-bordeaux hover:bg-bordeaux/90 text-white py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 shadow-md shadow-bordeaux/15 hover:shadow-lg"
            >
              <WhatsAppIcon size={16} />
              Consultar por WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

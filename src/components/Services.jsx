import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Check, Map, Utensils, Building2, Car, HeartPulse, 
  ChevronDown, Anchor, Star, Sparkles, Waves, Music, Wind, X 
} from 'lucide-react'

const WhatsAppIcon = ({ size = 24, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
)

const tabs = [
  { id: 'cruceros', label: 'Cruceros', Icon: Anchor },
  { id: 'tours', label: 'Tours', Icon: Map },
  { id: 'allinclusive', label: 'All Inclusive', Icon: Utensils },
  { id: 'hoteles', label: 'Hoteles', Icon: Building2 },
]

const cruises = [
  {
    Icon: Star,
    color: 'text-[#1A3A5C]',
    bg: 'bg-[#1A3A5C]/5',
    name: 'Royal Caribbean',
    desc: 'La naviera más grande del mundo. Itinerarios por el Caribe, Europa, Asia y más. Barcos de última generación con todas las comodidades.',
  },
  {
    Icon: Sparkles,
    color: 'text-bordeaux',
    bg: 'bg-bordeaux/5',
    name: 'Disney Cruise Line',
    desc: 'La magia de Disney en altamar. Ideal para familias. Entretenimiento exclusivo, personajes y destinos únicos.',
  },
  {
    Icon: Anchor,
    color: 'text-[#2E6B8A]',
    bg: 'bg-[#2E6B8A]/5',
    name: 'MSC Cruceros',
    desc: 'Estilo mediterráneo y elegancia. Gran variedad de itinerarios y categorías para todos los presupuestos.',
  },
  {
    Icon: Waves,
    color: 'text-sage',
    bg: 'bg-sage/5',
    name: 'Celebrity Cruises',
    desc: 'Lujo moderno para adultos. Gastronomía de autor, spas premium y destinos exclusivos alrededor del mundo.',
  },
  {
    Icon: Music,
    color: 'text-terracota',
    bg: 'bg-terracota/5',
    name: 'Carnival Cruise Line',
    desc: 'Diversión garantizada. La naviera favorita de las familias americanas. Precios accesibles y mucho entretenimiento.',
  },
  {
    Icon: Wind,
    color: 'text-dark',
    bg: 'bg-dark/5',
    name: 'Norwegian Cruise Line',
    desc: 'Concepto de libertad sin horarios ni códigos de vestimenta rígidos. Entretenimiento estilo Broadway, pistas de carreras exclusivas y camarotes ideales para viajeros solitarios.',
  },
]

const toursData = {
  title: 'Tours en español',
  desc: 'Viajes organizados por todo el mundo con acompañamiento.',
  items: [
    'Guías especializados en español',
    'Grupos reducidos y atención personalizada',
    'Europa clásica, Japón, Emiratos y más',
    'Itinerarios flexibles y a medida',
  ]
}

const allInclusiveData = {
  title: 'All Inclusive Resorts',
  desc: 'Relajate sin preocupaciones en los mejores resorts del mundo.',
  items: [
    'Sandals & Beaches · Karisma · Club Med',
    'Palladium · RIU · Excellence Group',
    'Caribe, Bahamas y más',
  ]
}

const hotelesData = {
  title: 'Hoteles',
  desc: 'Alojamiento perfecto para cualquier tipo de viaje.',
  items: [
    'Reservas en cualquier destino del mundo',
    'Mejor precio garantizado',
    'Habitaciones familiares y suites',
    'Hoteles boutique y cadenas internacionales',
  ]
}

const masServicios = [
  {
    Icon: Car,
    iconBg: 'bg-sage/10',
    iconColor: 'text-sage',
    title: 'Alquiler de autos',
    items: [
      'Las mejores agencias internacionales',
      'Precios competitivos garantizados',
      'Entrega en aeropuerto y hoteles',
      'Asesoramiento en coberturas y seguros',
    ],
  },
  {
    Icon: HeartPulse,
    iconBg: 'bg-terracota/10',
    iconColor: 'text-terracota',
    title: 'Assist Card',
    items: [
      'Cobertura médica internacional',
      'Asistencia de emergencia 24/7',
      'Cancelación y demora de vuelos',
      'Planes para todas las edades y destinos',
      'Promos exclusivas',
    ],
  },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState('cruceros')
  const [selectedCruise, setSelectedCruise] = useState(null)
  const [masServiciosOpen, setMasServiciosOpen] = useState(false)
  const [openMasIndex, setOpenMasIndex] = useState(null)

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-[#FBF8F3]/40 border-y border-neutral-100/60 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 border border-sage/35 text-sage bg-sage/5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
            <Anchor size={12} className="text-sage" />
            Nuestros Servicios
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
            Todo lo que tu viaje necesita, <span className="italic font-normal text-bordeaux">en un solo lugar</span>
          </h2>
          <p className="text-dark/65 text-lg max-w-xl mx-auto">
            Desde el hotel y los cruceros hasta el alquiler de auto y asistencia médica — coordinamos cada detalle sin costos extra.
          </p>
        </motion.div>

        {/* Custom Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-bordeaux text-white shadow-md shadow-bordeaux/15'
                    : 'bg-white border border-neutral-200/50 text-dark/70 hover:bg-neutral-50 hover:text-dark shadow-sm'
                }`}
              >
                <tab.Icon size={16} />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {activeTab === 'cruceros' && (
              <motion.div
                key="cruceros"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6"
              >
                {cruises.map((c, i) => (
                  <div
                    key={c.name}
                    onClick={() => { if (window.innerWidth < 640) setSelectedCruise(c) }}
                    className="bg-white rounded-2xl p-4 sm:p-7 border border-neutral-100 shadow-sm hover:shadow-xl hover:border-neutral-200/50 transition-all duration-300 flex flex-row sm:flex-col items-center sm:items-start text-left justify-between group gap-4 sm:gap-0 cursor-pointer sm:cursor-default"
                  >
                    <div className={`shrink-0 w-12 h-12 rounded-2xl ${c.bg} flex items-center justify-center sm:mb-6 transition-all duration-300 group-hover:scale-105`}>
                      <c.Icon size={20} className={`${c.color}`} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-serif font-bold text-dark text-base sm:text-xl mb-0.5 sm:mb-3">{c.name}</h3>
                      <p className="hidden sm:block text-dark/70 text-sm leading-relaxed mb-6">{c.desc}</p>
                      <p className="sm:hidden text-dark/50 text-[11px] line-clamp-1 leading-snug pr-4">{c.desc}</p>
                    </div>

                    <div className="shrink-0 text-terracota group-hover:text-bordeaux transition-colors flex items-center gap-1">
                      <a 
                        href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Hola!%20Quiero%20consultar%20sobre%20${encodeURIComponent(c.name)}`} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="hidden sm:inline text-xs font-semibold"
                      >
                        Ver itinerarios &rarr;
                      </a>
                      <span className="sm:hidden">&rarr;</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab !== 'cruceros' && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-neutral-100 shadow-xl flex flex-col items-center text-center"
              >
                {(() => {
                  let data;
                  let Icon;
                  if (activeTab === 'tours') { data = toursData; Icon = Map }
                  else if (activeTab === 'allinclusive') { data = allInclusiveData; Icon = Utensils }
                  else { data = hotelesData; Icon = Building2 }
                  
                  return (
                    <>
                      <div className="w-16 h-16 rounded-full bg-bordeaux/10 text-bordeaux flex items-center justify-center mb-6">
                        <Icon size={28} />
                      </div>
                      <h3 className="font-serif font-bold text-3xl text-dark mb-4">{data.title}</h3>
                      <p className="text-dark/70 text-lg mb-8">{data.desc}</p>
                      <div className="grid sm:grid-cols-2 gap-4 w-full text-left">
                        {data.items.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3 bg-neutral-50 rounded-2xl p-4">
                            <Check size={18} className="text-sage shrink-0 mt-0.5" />
                            <span className="text-dark/80 text-sm font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Más Servicios Accordion */}
        <div className="max-w-3xl mx-auto mt-16">
          <button 
            onClick={() => setMasServiciosOpen(!masServiciosOpen)}
            className="w-full flex items-center justify-between bg-white border border-neutral-200/50 shadow-sm p-6 rounded-2xl hover:shadow-md transition-all"
          >
            <h3 className="font-serif font-bold text-xl text-dark">Más Servicios</h3>
            <ChevronDown size={20} className={`text-dark/40 transition-transform duration-300 ${masServiciosOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {masServiciosOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-4 grid sm:grid-cols-2 gap-4">
                  {masServicios.map((s, i) => {
                    const isOpen = openMasIndex === i
                    return (
                      <div
                        key={s.title}
                        onClick={() => { if (window.innerWidth < 640) setOpenMasIndex(isOpen ? null : i) }}
                        className="bg-white border border-neutral-100 rounded-2xl p-5 hover:shadow-md transition-all cursor-pointer sm:cursor-default"
                      >
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl ${s.iconBg} flex items-center justify-center shrink-0`}>
                              <s.Icon size={18} className={`${s.iconColor}`} />
                            </div>
                            <h4 className="font-serif font-bold text-dark text-lg">{s.title}</h4>
                          </div>
                          <ChevronDown size={18} className={`sm:hidden text-dark/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        </div>
                        
                        <div className={`${isOpen ? 'block' : 'hidden'} sm:block mt-4`}>
                          <ul className="space-y-2">
                            {s.items.map(item => (
                              <li key={item} className="flex items-start gap-2.5 text-[0.85rem] text-dark/70">
                                <Check size={14} className="text-sage mt-0.5 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Popup Modal for Cruises */}
        <AnimatePresence>
          {selectedCruise && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCruise(null)}
                className="absolute inset-0 bg-dark/40 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl overflow-hidden"
              >
                <button
                  onClick={() => setSelectedCruise(null)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-neutral-100 text-dark/50 rounded-full"
                >
                  <X size={18} />
                </button>
                <div className={`w-14 h-14 rounded-2xl ${selectedCruise.bg} flex items-center justify-center mb-5`}>
                  <selectedCruise.Icon size={24} className={selectedCruise.color} />
                </div>
                <h3 className="font-serif font-bold text-dark text-2xl mb-3">{selectedCruise.name}</h3>
                <p className="text-dark/70 text-[0.95rem] leading-relaxed mb-6">
                  {selectedCruise.desc}
                </p>
                <a
                  href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Hola!%20Quiero%20consultar%20sobre%20${encodeURIComponent(selectedCruise.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-bordeaux text-white py-3.5 rounded-2xl font-bold text-sm"
                >
                  Consultar itinerarios
                </a>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}

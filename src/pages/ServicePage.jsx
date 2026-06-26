import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Anchor, Map, Utensils, Building2, Car, HeartPulse, Package, X, ChevronRight } from 'lucide-react'
import { createPortal } from 'react-dom'
import PageTransition from '../components/PageTransition'

const WhatsAppIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const navieras = [
  {
    id: 'royal',
    name: 'Royal Caribbean',
    tagline: 'La naviera más grande del mundo',
    image: '/destinations/cruise.png',
    desc: 'Barcos de última generación con toboganes, pistas de hielo, parques acuáticos y shows de Broadway. Itinerarios por el Caribe, Europa, Asia y los fiordos. Ideal para familias y parejas que buscan todo en un solo lugar.',
  },
  {
    id: 'disney',
    name: 'Disney Cruise Line',
    tagline: 'La magia de Disney en altamar',
    image: '/destinations/disney.png',
    desc: 'Entretenimiento exclusivo con personajes Disney, shows espectaculares y destinos únicos como Castaway Cay — la isla privada de Disney. La experiencia mágica completa para familias con niños de todas las edades.',
  },
  {
    id: 'msc',
    name: 'MSC Cruceros',
    tagline: 'Estilo mediterráneo y elegancia',
    image: '/destinations/caribbean.png',
    desc: 'Gran variedad de itinerarios por el Mediterráneo, Caribe y Adriático. Elegancia europea, gastronomía de autor y una flota moderna para todos los presupuestos. La opción europea de mayor crecimiento a nivel mundial.',
  },
  {
    id: 'celebrity',
    name: 'Celebrity Cruises',
    tagline: 'Lujo moderno para adultos',
    image: '/destinations/cruise2.jpg',
    desc: 'Gastronomía de autor con chefs reconocidos, spas premium de clase mundial y destinos exclusivos por los cinco continentes. La experiencia de crucero más sofisticada del mercado para viajeros adultos exigentes.',
  },
  {
    id: 'carnival',
    name: 'Carnival Cruise Line',
    tagline: 'Diversión garantizada para toda la familia',
    image: '/destinations/cruise.png',
    desc: 'La naviera favorita de las familias americanas. Precios accesibles, muchísimo entretenimiento y una atmósfera festiva que no para. Ideales para familias con chicos grandes y viajeros que buscan mucha actividad.',
  },
  {
    id: 'norwegian',
    name: 'Norwegian Cruise Line',
    tagline: 'Libertad sin horarios ni límites',
    image: '/destinations/cruise2.jpg',
    desc: 'Concepto "Freestyle Cruising": sin horarios fijos ni códigos de vestimenta rígidos. Shows estilo Broadway exclusivos, pistas de carreras y camarotes de diseño. La opción para viajeros que quieren flexibilidad total.',
  },
]

const autosData = {
  title: 'Alquiler de Autos',
  subtitle: 'Recorré tu destino a tu propio ritmo',
  desc: 'Las mejores alianzas con agencias de rent a car globales para darte seguridad, buen precio y los vehículos más cómodos.',
  image: '/destinations/autos.jpg',
  Icon: Car,
  features: [
    'Precios competitivos garantizados',
    'Entrega en aeropuerto y hoteles',
    'Las mejores agencias internacionales',
    'Asesoramiento en coberturas y seguros',
  ],
}

const asistenciaData = {
  title: 'Assist Card',
  subtitle: 'Viajá protegido ante cualquier imprevisto',
  desc: 'Tu salud y tranquilidad son lo primero. Por eso somos agentes especializados de Assist Card, ofreciéndote las mejores coberturas.',
  image: '/destinations/assist.jpg',
  Icon: HeartPulse,
  features: [
    'Cobertura médica internacional',
    'Asistencia de emergencia 24/7',
    'Cancelación y demora de vuelos',
    'Planes para todas las edades y destinos',
    'Promos exclusivas',
  ],
}

const servicesData = {
  cruceros: {
    title: 'Cruceros',
    subtitle: 'Navegá el mundo con las mejores navieras',
    desc: 'De lujo, familiares, de aventura o relax — tenemos el itinerario y la naviera ideal para vos. Conocemos cada barco al detalle y coordinamos todo sin costo extra.',
    image: '/destinations/cruise.png',
    Icon: Anchor,
    navieras,
  },
  tours: {
    title: 'Tours en español',
    subtitle: 'Descubrí el mundo con acompañamiento experto',
    desc: 'Organizamos viajes por todo el mundo, asegurándonos de que tengas la mejor experiencia cultural sin la barrera del idioma.',
    image: '/destinations/tours.jpg',
    Icon: Map,
    features: [
      'Europa clásica, Japón, Emiratos y más',
      'Grupos reducidos y atención personalizada',
      'Guías especializados en español',
      'Itinerarios flexibles y a medida',
    ],
  },
  'all-inclusive': {
    title: 'All Inclusive Resorts',
    subtitle: 'Relajate sin preocupaciones en el paraíso',
    desc: 'Elegimos cuidadosamente los mejores resorts del Caribe y del mundo para que tu única preocupación sea disfrutar.',
    image: '/destinations/caribbean.png',
    Icon: Utensils,
    features: [
      'Sandals & Beaches, Karisma, Club Med',
      'Palladium, RIU, Excellence Group',
      'Caribe, Bahamas y más',
    ],
  },
  hoteles: {
    title: 'Hoteles',
    subtitle: 'Tu hogar lejos de casa',
    desc: 'Desde opciones boutique en el centro histórico de Roma hasta rascacielos en Dubai. Garantizamos siempre el mejor confort.',
    image: '/destinations/hotels.jpg',
    Icon: Building2,
    features: [
      'Habitaciones familiares y suites',
      'Hoteles boutique y cadenas internacionales',
      'Reservas en cualquier destino del mundo',
      'Mejor precio garantizado',
    ],
  },
  'mas-servicios': {
    isCombined: true,
    title: 'Más Servicios',
    subtitle: 'Todo lo extra que tu viaje necesita',
    image: '/destinations/autos.jpg',
    Icon: Package,
    subServices: [autosData, asistenciaData],
  },
}

function NavieraModal({ naviera, onClose, waNumber }) {
  const waLink = `https://wa.me/${waNumber}?text=Hola!%20Quiero%20consultar%20sobre%20un%20crucero%20con%20${encodeURIComponent(naviera.name)}`

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-dark/70 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 bg-dark/30 hover:bg-dark/50 backdrop-blur-md rounded-full flex items-center justify-center transition-colors text-white"
          >
            <X size={18} />
          </button>

          {/* Photo header */}
          <div className="h-44 relative">
            <img src={naviera.image} alt={naviera.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent" />
            <div className="absolute bottom-5 left-6 right-6">
              <h2 className="font-serif text-2xl font-bold text-white mb-0.5">{naviera.name}</h2>
              <p className="text-white/75 text-sm">{naviera.tagline}</p>
            </div>
          </div>

          {/* Body */}
          <div className="p-7">
            <p className="text-dark/75 text-[15px] leading-relaxed mb-7">{naviera.desc}</p>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#1ebe5c] transition-colors shadow-md shadow-[#25D366]/30"
            >
              <WhatsAppIcon size={18} />
              Consultar sobre {naviera.name}
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  )
}

export default function ServicePage() {
  const { serviceId } = useParams()
  const data = servicesData[serviceId]
  const [activeNaviera, setActiveNaviera] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [serviceId])

  useEffect(() => {
    document.body.style.overflow = activeNaviera ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeNaviera])

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20">
        <h1 className="text-3xl font-serif text-dark mb-4">Servicio no encontrado</h1>
        <Link to="/" className="text-bordeaux underline">Volver al inicio</Link>
      </div>
    )
  }

  const { Icon } = data
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5491132996899'
  const waLink = `https://wa.me/${whatsappNumber}?text=Hola!%20Quiero%20consultar%20sobre%20${encodeURIComponent(data.title)}`

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">

        {/* Hero Banner */}
        <div className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-dark">
            <img src={data.image} alt={data.title} className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-dark/30" />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md mb-6 border border-white/20"
            >
              <Icon size={32} className="text-white" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl text-white font-bold mb-4"
            >
              {data.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/80 text-xl md:text-2xl font-light"
            >
              {data.subtitle}
            </motion.p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-6 py-20 lg:py-28 space-y-20">

          {/* ── CRUCEROS: naviera cards layout ── */}
          {data.navieras ? (
            <>
              {/* Intro */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-4">
                  Navegá con las mejores <span className="italic text-bordeaux">navieras del mundo</span>
                </h2>
                <p className="text-dark/70 text-lg leading-relaxed mb-8">{data.desc}</p>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 bg-bordeaux text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-bordeaux/90 transition-all shadow-md shadow-bordeaux/20 hover:-translate-y-0.5"
                >
                  Consultar cotización gratis
                </a>
              </motion.div>

              {/* Naviera cards grid */}
              <div>
                <h3 className="font-serif text-2xl font-bold text-dark mb-8">Elegí tu naviera</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {data.navieras.map((n, i) => (
                    <motion.button
                      key={n.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      onClick={() => setActiveNaviera(n)}
                      className="group relative rounded-2xl overflow-hidden text-left h-[220px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full"
                    >
                      <img
                        src={n.image}
                        alt={n.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/92 via-dark/55 to-dark/10" />
                      <div className="absolute bottom-5 left-5 right-5 text-white">
                        <p className="text-white/65 text-xs font-semibold uppercase tracking-wider mb-1">{n.tagline}</p>
                        <h4 className="font-serif font-bold text-xl mb-3">{n.name}</h4>
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider border border-white/30 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full group-hover:bg-white/20 transition-colors">
                          Ver detalles <ChevronRight size={12} />
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </>
          ) : data.isCombined ? (
            /* ── COMBINED services layout ── */
            data.subServices.map((sub, index) => (
              <div key={sub.title} className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${index > 0 ? 'pt-16 border-t border-neutral-100' : ''}`}>
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-bordeaux/5 text-bordeaux flex items-center justify-center">
                      <sub.Icon size={24} />
                    </div>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl text-dark font-bold mb-6">{sub.title}</h2>
                  <p className="text-dark/70 text-lg leading-relaxed mb-8">{sub.desc}</p>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hola!%20Quiero%20consultar%20sobre%20${encodeURIComponent(sub.title)}`}
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center justify-center bg-bordeaux text-white px-8 py-4 rounded-full font-bold text-[0.95rem] hover:bg-bordeaux/90 transition-all shadow-md shadow-bordeaux/20 hover:shadow-lg hover:-translate-y-1"
                  >
                    Consultar sobre {sub.title}
                  </a>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-[#FBF8F3] rounded-3xl p-8 lg:p-10 border border-neutral-100 shadow-sm"
                >
                  <h3 className="font-serif text-xl font-bold text-dark mb-6 flex items-center gap-2">
                    <Check size={20} className="text-sage" /> Destacados
                  </h3>
                  <ul className="space-y-4">
                    {sub.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-bordeaux mt-2 shrink-0" />
                        <span className="text-dark/80 text-[15px] font-medium leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))
          ) : (
            /* ── STANDARD service layout ── */
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <h2 className="font-serif text-3xl md:text-4xl text-dark font-bold mb-6">
                  ¿Qué incluye nuestro servicio de <span className="italic text-bordeaux">{data.title}</span>?
                </h2>
                <p className="text-dark/70 text-lg leading-relaxed mb-8">{data.desc}</p>
                <a
                  href={waLink} target="_blank" rel="noreferrer"
                  className="inline-flex items-center justify-center bg-bordeaux text-white px-8 py-4 rounded-full font-bold text-[0.95rem] hover:bg-bordeaux/90 transition-all shadow-md shadow-bordeaux/20 hover:shadow-lg hover:-translate-y-1"
                >
                  Consultar cotización gratis
                </a>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#FBF8F3] rounded-3xl p-8 lg:p-10 border border-neutral-100 shadow-sm relative overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-bordeaux/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-terracota/5 rounded-full blur-3xl pointer-events-none" />
                <h3 className="font-serif text-xl font-bold text-dark mb-6 flex items-center gap-2 relative z-10">
                  <Check size={20} className="text-sage" /> Destacados del Servicio
                </h3>
                <ul className="space-y-4 relative z-10">
                  {data.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-bordeaux mt-2 shrink-0" />
                      <span className="text-dark/80 text-[15px] font-medium leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          )}

        </div>
      </div>

      {/* Naviera modal */}
      {activeNaviera && (
        <NavieraModal
          naviera={activeNaviera}
          onClose={() => setActiveNaviera(null)}
          waNumber={whatsappNumber}
        />
      )}
    </PageTransition>
  )
}

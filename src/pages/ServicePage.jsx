import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, Anchor, Map, Utensils, Building2, Car, HeartPulse, Package } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const autosData = {
  title: 'Alquiler de Autos',
  subtitle: 'Recorré tu destino a tu propio ritmo',
  desc: 'Las mejores alianzas con agencias de rent a car globales para darte seguridad, buen precio y los vehículos más cómodos.',
  image: '/bg/airplane.png',
  Icon: Car,
  features: [
    'Precios competitivos garantizados',
    'Entrega en aeropuerto y hoteles',
    'Las mejores agencias internacionales',
    'Asesoramiento en coberturas y seguros'
  ]
}

const asistenciaData = {
  title: 'Assist Card',
  subtitle: 'Viajá protegido ante cualquier imprevisto',
  desc: 'Tu salud y tranquilidad son lo primero. Por eso somos agentes especializados de Assist Card, ofreciéndote las mejores coberturas.',
  image: '/bg/castle_fireworks.png',
  Icon: HeartPulse,
  features: [
    'Cobertura médica internacional',
    'Asistencia de emergencia 24/7',
    'Cancelación y demora de vuelos',
    'Planes para todas las edades y destinos',
    'Promos exclusivas'
  ]
}

const servicesData = {
  'cruceros': {
    title: 'Cruceros',
    subtitle: 'Navegá el mundo con las mejores navieras',
    desc: 'De lujo, familiares, de aventura o relax — tenemos el itinerario y la naviera ideal para vos. Conocemos cada barco al detalle.',
    image: '/destinations/cruise.png',
    Icon: Anchor,
    features: [
      'Royal Caribbean: La naviera más grande del mundo. Itinerarios por el Caribe, Europa, Asia y más. Barcos de última generación con todas las comodidades.',
      'Disney Cruise Line: La magia de Disney en altamar. Entretenimiento exclusivo, personajes y destinos únicos. Ideal para familias.',
      'MSC Cruceros: Estilo mediterráneo y elegancia. Gran variedad de itinerarios y categorías para todos los presupuestos.',
      'Celebrity Cruises: Lujo moderno para adultos. Gastronomía de autor, spas premium y destinos exclusivos alrededor del mundo.',
      'Carnival Cruise Line: La naviera favorita de las familias americanas. Precios accesibles y mucho entretenimiento. Diversión garantizada.',
      'Norwegian Cruise Line: Concepto de libertad sin horarios ni códigos de vestimenta rígidos. Entretenimiento estilo Broadway, pistas de carreras exclusivas y camarotes ideales para viajeros solitarios.',
      'Y muchas más líneas disponibles · Consultanos por tu destino ideal'
    ]
  },
  'tours': {
    title: 'Tours en español',
    subtitle: 'Descubrí el mundo con acompañamiento experto',
    desc: 'Organizamos viajes por todo el mundo, asegurándonos de que tengas la mejor experiencia cultural sin la barrera del idioma.',
    image: '/destinations/caribbean.png',
    Icon: Map,
    features: [
      'Europa clásica, Japón, Emiratos y más',
      'Grupos reducidos y atención personalizada',
      'Guías especializados en español',
      'Itinerarios flexibles y a medida'
    ]
  },
  'all-inclusive': {
    title: 'All Inclusive Resorts',
    subtitle: 'Relajate sin preocupaciones en el paraíso',
    desc: 'Elegimos cuidadosamente los mejores resorts del Caribe y del mundo para que tu única preocupación sea disfrutar.',
    image: '/destinations/disney.png',
    Icon: Utensils,
    features: [
      'Sandals & Beaches, Karisma, Club Med',
      'Palladium, RIU, Excellence Group',
      'Caribe, Bahamas y más'
    ]
  },
  'hoteles': {
    title: 'Hoteles',
    subtitle: 'Tu hogar lejos de casa',
    desc: 'Desde opciones boutique en el centro histórico de Roma hasta rascacielos en Dubai. Garantizamos siempre el mejor confort.',
    image: '/destinations/universal.png',
    Icon: Building2,
    features: [
      'Habitaciones familiares y suites',
      'Hoteles boutique y cadenas internacionales',
      'Reservas en cualquier destino del mundo',
      'Mejor precio garantizado'
    ]
  },
  'autos': autosData,
  'asistencia': asistenciaData,
  'mas-servicios': {
    isCombined: true,
    title: 'Más Servicios',
    subtitle: 'Todo lo extra que tu viaje necesita',
    image: '/bg/airplane.png',
    Icon: Package,
    subServices: [autosData, asistenciaData]
  }
}

export default function ServicePage() {
  const { serviceId } = useParams()
  const data = servicesData[serviceId]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [serviceId])

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
          <img 
            src={data.image} 
            alt={data.title} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-dark/40" />
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

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-20 lg:py-28 space-y-24">
        
        {data.isCombined ? (
          data.subServices.map((sub, index) => (
            <div key={sub.title} className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${index > 0 ? 'pt-16 border-t border-neutral-100' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-bordeaux/5 text-bordeaux flex items-center justify-center">
                    <sub.Icon size={24} />
                  </div>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-dark font-bold mb-6">
                  {sub.title}
                </h2>
                <p className="text-dark/70 text-lg leading-relaxed mb-8">
                  {sub.desc}
                </p>
                
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=Hola!%20Quiero%20consultar%20sobre%20${encodeURIComponent(sub.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-bordeaux text-white px-8 py-4 rounded-full font-bold text-[0.95rem] hover:bg-bordeaux/90 transition-all shadow-md shadow-bordeaux/20 hover:shadow-lg hover:-translate-y-1"
                >
                  Consultar sobre {sub.title}
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#FBF8F3] rounded-3xl p-8 lg:p-10 border border-neutral-100 shadow-sm relative overflow-hidden"
              >
                <h3 className="font-serif text-xl font-bold text-dark mb-6 flex items-center gap-2 relative z-10">
                  <Check size={20} className="text-sage" />
                  Destacados
                </h3>
                
                <ul className="space-y-4 relative z-10">
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
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-dark font-bold mb-6">
                ¿Qué incluye nuestro servicio de <span className="italic text-bordeaux">{data.title}</span>?
              </h2>
              <p className="text-dark/70 text-lg leading-relaxed mb-8">
                {data.desc}
              </p>
              
              <a 
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-bordeaux text-white px-8 py-4 rounded-full font-bold text-[0.95rem] hover:bg-bordeaux/90 transition-all shadow-md shadow-bordeaux/20 hover:shadow-lg hover:-translate-y-1"
              >
                Consultar cotización gratis
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#FBF8F3] rounded-3xl p-8 lg:p-10 border border-neutral-100 shadow-sm relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-bordeaux/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-terracota/5 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="font-serif text-xl font-bold text-dark mb-6 flex items-center gap-2 relative z-10">
                <Check size={20} className="text-sage" />
                Destacados del Servicio
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
    </PageTransition>
  )
}

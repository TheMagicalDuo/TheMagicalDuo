import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, Anchor, Map, Utensils, Building2, Car, HeartPulse } from 'lucide-react'

const servicesData = {
  'cruceros': {
    title: 'Cruceros',
    subtitle: 'Navegá el mundo con las mejores navieras',
    desc: 'De lujo, familiares, de aventura o relax — tenemos el itinerario y la naviera ideal para vos. Conocemos cada barco al detalle.',
    image: '/destinations/cruise.png',
    Icon: Anchor,
    features: [
      'Disney Cruise Line',
      'Royal Caribbean',
      'MSC Cruceros',
      'Celebrity Cruises',
      'Carnival Cruise Line',
      'Norwegian Cruise Line'
    ]
  },
  'tours': {
    title: 'Tours en español',
    subtitle: 'Descubrí el mundo con acompañamiento experto',
    desc: 'Organizamos viajes por todo el mundo, asegurándonos de que tengas la mejor experiencia cultural sin la barrera del idioma.',
    image: '/destinations/caribbean.png',
    Icon: Map,
    features: [
      'Guías especializados en español',
      'Grupos reducidos y atención personalizada',
      'Europa clásica, Japón, Emiratos y más',
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
      'Sandals & Beaches Resorts',
      'Karisma Hotels & Resorts',
      'Palladium y RIU',
      'Excellence Group y Club Med',
      'Destinos en Caribe, Bahamas, Maldivas y más'
    ]
  },
  'hoteles': {
    title: 'Hoteles',
    subtitle: 'Tu hogar lejos de casa',
    desc: 'Desde opciones boutique en el centro histórico de Roma hasta rascacielos en Dubai. Garantizamos siempre el mejor confort.',
    image: '/destinations/universal.png',
    Icon: Building2,
    features: [
      'Reservas en cualquier destino del mundo',
      'Mejor precio garantizado',
      'Habitaciones familiares y suites de lujo',
      'Hoteles boutique y grandes cadenas internacionales'
    ]
  },
  'autos': {
    title: 'Alquiler de Autos',
    subtitle: 'Recorré tu destino a tu propio ritmo',
    desc: 'Las mejores alianzas con agencias de rent a car globales para darte seguridad, buen precio y los vehículos más cómodos.',
    image: '/bg/airplane.png',
    Icon: Car,
    features: [
      'Alianzas con Alamo, Hertz, Avis y más',
      'Precios competitivos garantizados',
      'Opciones de entrega en aeropuerto u hoteles',
      'Asesoramiento total en coberturas y seguros'
    ]
  },
  'asistencia': {
    title: 'Assist Card',
    subtitle: 'Viajá protegido ante cualquier imprevisto',
    desc: 'Tu salud y tranquilidad son lo primero. Por eso somos agentes oficiales de Assist Card, ofreciéndote las mejores coberturas.',
    image: '/bg/castle_fireworks.png',
    Icon: HeartPulse,
    features: [
      'Cobertura médica internacional de primer nivel',
      'Asistencia de emergencia 24/7',
      'Cobertura por cancelación y demora de vuelos',
      'Planes para todas las edades y destinos',
      'Promos exclusivas al contratar con nosotros'
    ]
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
      <div className="max-w-5xl mx-auto px-6 py-20 lg:py-28">
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
      </div>
    </div>
  )
}

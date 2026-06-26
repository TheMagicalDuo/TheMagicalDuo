import { motion } from 'framer-motion'
import { Check, Star, Sparkles, Globe, Zap } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const disneyItems = [
  'Walt Disney World (Orlando)',
  'Disneyland (California)',
  'Disney Cruise Line',
  'Disneyland Paris',
  'Disney Aulani Resort (Hawaii)',
  'Adventures by Disney',
]

const disneyIncludes = [
  'Resorts Disney oficiales y Hoteles Good Neighbor',
  'Dining Plans',
  'Reservas de paquetes en cuotas sin interes',
  'Promos y descuentos',
  'Asesoramiento personalizado',
]

const universalItems = [
  'Universal Orlando Resort',
  'Universal Studios Hollywood',
]

const universalIncludes = [
  'Resorts Universal oficiales y Hoteles Good Neighbor',
  'Express Pass',
  'Reservas de paquetes en cuotas sin interes',
  'Promos y descuentos',
  'Asesoramiento personalizado',
]

const masItems = [
  'SeaWorld',
  'Aquatica',
  'Busch Gardens',
  'Discovery Cove',
]

const columns = [
  {
    Icon: Sparkles,
    iconColor: 'text-bordeaux',
    title: 'Disney',
    tagline: 'Donde la magia cobra vida',
    dotColor: 'bg-bordeaux',
    items: disneyItems,
    includes: disneyIncludes,
    image: '/destinations/disney.png',
  },
  {
    Icon: Zap,
    iconColor: 'text-terracota',
    title: 'Universal',
    tagline: 'Diversión de película',
    dotColor: 'bg-terracota',
    items: universalItems,
    includes: universalIncludes,
    image: '/destinations/universal.png',
  },
  {
    Icon: Globe,
    iconColor: 'text-sage',
    title: 'Y más parques',
    tagline: 'Adrenalina y naturaleza',
    dotColor: 'bg-sage',
    items: masItems,
    includes: [
      'Entradas oficiales a SeaWorld y Aquatica',
      'Acceso a Busch Gardens y Discovery Cove',
      'Pase de estacionamiento y comidas',
      'Asistencia personalizada en español',
    ],
    image: '/destinations/caribbean.png',
  },
]

export default function DisneyUniversal() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 4000, stopOnInteraction: true })])

  return (
    <section id="especialidad" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 border border-bordeaux/25 text-bordeaux px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
            <Star size={12} fill="currentColor" className="text-bordeaux" />
            Nuestra especialidad
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight max-w-3xl mx-auto">
            Planificamos tu viaje soñado a{' '}
            <span className="italic font-normal text-bordeaux">Disney & Universal</span>
          </h2>
          <p className="text-dark/65 text-lg max-w-2xl mx-auto leading-relaxed">
            Como Agentes Especializados, tenemos acceso a beneficios exclusivos que no encontrarás en ningún otro lado. Coordinamos todos los detalles sin costo extra.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-hidden mb-16 cursor-grab active:cursor-grabbing" 
          ref={emblaRef}
        >
          <div className="flex touch-pan-y -ml-4 sm:-ml-6 lg:-ml-8">
            {columns.map((col, i) => (
              <div key={col.title} className="flex-[0_0_85%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 sm:pl-6 lg:pl-8">
                <div className="bg-white border border-neutral-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(140,42,66,0.1)] hover:border-bordeaux/20 transition-all duration-500 flex flex-col group relative h-full">
                  {/* Glare effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 -translate-x-[150%] group-hover:translate-x-[150%] transition-all duration-[1200ms] ease-in-out pointer-events-none z-30 mix-blend-overlay" />
                  
                  {/* Card Photo Header */}
                  <div className="h-44 relative overflow-hidden shrink-0">
                    <img
                      src={col.image}
                      alt={col.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white z-10">
                      <div>
                        <h3 className="font-serif font-bold text-2xl">{col.title}</h3>
                        <p className="text-white/70 text-xs tracking-wide mt-0.5">{col.tagline}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20">
                        <col.Icon size={18} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[11px] font-semibold text-dark/40 uppercase tracking-wider mb-3">Destinos y servicios</p>
                      <ul className="space-y-3 mb-6">
                        {col.items.map(item => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-dark/70">
                            <div className={`w-1.5 h-1.5 rounded-full ${col.dotColor} mt-2 shrink-0`} />
                            <span className="font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-neutral-100 pt-5 mt-auto">
                      <p className="text-[11px] font-semibold text-dark/40 uppercase tracking-wider mb-3">Tu viaje incluye</p>
                      <ul className="space-y-2.5">
                        {col.includes.map(item => (
                          <li key={item} className="flex items-start gap-2.5 text-xs text-dark/65">
                            <Check size={14} className="text-sage mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Exclusive advantage (Caja destacada) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-3xl border-2 border-bordeaux/20 bg-cream p-8 lg:p-10 text-center relative max-w-4xl mx-auto shadow-md"
        >
          <div className="washi-tape-terracota" />
          <div className="inline-flex items-center gap-2 bg-bordeaux text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles size={13} fill="currentColor" />
            Ventaja exclusiva de trabajar con nosotros
          </div>
          
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-dark mb-4">
            Ventaja Exclusiva como Agentes Especializados
          </h3>
          <p className="text-dark/80 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            Podemos ofrecerte pagar tus paquetes en cuotas y acceder a precios oficiales garantizados. No vas a pagar ni un peso más de lo que encontrás por tu cuenta. ¡Y encima te asesoramos gratis!
          </p>
          <a
            href="#cotizar"
            className="inline-flex items-center gap-2.5 bg-bordeaux text-white px-8 py-4 rounded-full font-bold text-[0.95rem] hover:bg-bordeaux/90 transition-colors duration-300 shadow-md shadow-bordeaux/15 hover:shadow-lg"
          >
            Quiero una cotización gratis
          </a>
        </motion.div>
      </div>
    </section>
  )
}

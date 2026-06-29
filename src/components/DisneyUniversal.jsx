import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Star, Sparkles, Globe, Zap, X, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
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
    image: 'https://res.cloudinary.com/ucmstzfv/image/upload/f_auto,q_auto,w_800/v1782746853/disney3_h26may.jpg',
  },
  {
    Icon: Zap,
    iconColor: 'text-terracota',
    title: 'Universal',
    tagline: 'Diversión de película',
    dotColor: 'bg-terracota',
    items: universalItems,
    includes: universalIncludes,
    image: 'https://res.cloudinary.com/ucmstzfv/image/upload/f_auto,q_auto,w_800/v1782746863/universal_sej97t.jpg',
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
  const navigate = useNavigate()
  const [activeModal, setActiveModal] = useState(null)
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 4000, stopOnInteraction: true })])

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [activeModal])

  return (
    <>
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
                <div 
                  onClick={() => setActiveModal(col)}
                  className="bg-white border border-neutral-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(140,42,66,0.1)] hover:border-bordeaux/20 transition-all duration-500 flex flex-col group relative h-[380px] sm:h-[420px] cursor-pointer"
                >
                  {/* Glare effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 -translate-x-[150%] group-hover:translate-x-[150%] transition-all duration-[1200ms] ease-in-out pointer-events-none z-30 mix-blend-overlay" />
                  
                  {/* Full Cover Card Photo */}
                  <div className="absolute inset-0 relative overflow-hidden h-full">
                    <img
                      src={col.image}
                      alt={col.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white z-10">
                      <div>
                        <h3 className="font-serif font-bold text-3xl sm:text-4xl mb-1">{col.title}</h3>
                        <p className="text-white/80 text-sm tracking-wide mb-5">{col.tagline}</p>
                        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider border border-white/30 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full group-hover:bg-white/20 transition-colors">
                          Ver detalles <ChevronRight size={14} />
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 shrink-0">
                        <col.Icon size={20} className="text-white" />
                      </div>
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
          <button
            onClick={() => navigate('/', { state: { scrollTo: 'cotizar' } })}
            className="inline-flex items-center gap-2.5 bg-bordeaux text-white px-8 py-4 rounded-full font-bold text-[0.95rem] hover:bg-bordeaux/90 transition-colors duration-300 shadow-md shadow-bordeaux/15 hover:shadow-lg"
          >
            Quiero una cotización gratis
          </button>
        </motion.div>
      </div>
    </section>

    {/* MODAL (React Portal) */}
    {createPortal(
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100]">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
            />
            
            {/* Scrollable Container */}
            <div className="absolute inset-0 overflow-y-auto hide-scrollbar pointer-events-none flex flex-col">
              <div className="min-h-full flex items-center justify-center p-4 py-8 sm:p-6 pointer-events-none">
                
                {/* Modal Content */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="relative w-full max-w-xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col pointer-events-auto"
                >
                  <button
                    onClick={() => setActiveModal(null)}
                    className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center transition-colors text-white"
                  >
                    <X size={20} />
                  </button>

                  <div className="h-40 sm:h-48 relative shrink-0">
                    <img src={activeModal.image} alt={activeModal.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-1">{activeModal.title}</h2>
                      <p className="text-white/80 text-sm tracking-wide">{activeModal.tagline}</p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col gap-8">
                    <div>
                      <h4 className="font-bold text-dark mb-4 flex items-center gap-2">
                        <Globe size={18} className={activeModal.iconColor} />
                        Destinos y servicios
                      </h4>
                      <ul className="space-y-3">
                        {activeModal.items.map(item => (
                          <li key={item} className="flex items-start gap-3 text-sm text-dark/70">
                            <div className={`w-1.5 h-1.5 rounded-full ${activeModal.dotColor} mt-2 shrink-0`} />
                            <span className="font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#FBF8F3] border border-neutral-100 rounded-2xl p-6">
                      <h4 className="font-bold text-dark mb-4 flex items-center gap-2">
                        <Sparkles size={18} className="text-terracota" />
                        Tu viaje incluye
                      </h4>
                      <ul className="space-y-3">
                        {activeModal.includes.map(item => (
                          <li key={item} className="flex items-start gap-3 text-sm text-dark/80">
                            <Check size={16} className="text-sage mt-0.5 shrink-0" />
                            <span className="font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>,
      document.body
    )}
    </>
  )
}

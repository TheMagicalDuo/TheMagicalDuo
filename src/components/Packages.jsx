import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Waves, Sparkles, Anchor, Sun, Zap } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const WhatsAppIcon = ({ size = 24, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
)
import packages from '../data/packages.json'

const iconMap = { Waves, Sparkles, Anchor, Sun, Zap }

const tabs = [
  { id: 'todos', label: 'Todos los destinos' },
  { id: 'disney', label: 'Disney & Universal' },
  { id: 'cruceros', label: 'Cruceros' },
  { id: 'caribe', label: 'Caribe y Playas' }
]

const getPackageImage = (pkg) => {
  const title = pkg.title.toLowerCase()
  const cat = pkg.category.toLowerCase()
  if (title.includes('disney') || cat.includes('disney')) return '/destinations/disney.png'
  if (title.includes('universal') || cat.includes('universal')) return '/destinations/universal.png'
  if (title.includes('crucer') || cat.includes('cruise') || cat.includes('crucero')) return '/destinations/cruise.png'
  return '/destinations/caribbean.png'
}

export default function Packages() {
  const [activeTab, setActiveTab] = useState('todos')
  const [emblaRef] = useEmblaCarousel({ loop: false, align: 'start' }, [Autoplay({ delay: 3500, stopOnInteraction: true })])

  const filteredPackages = packages.filter(pkg => {
    const title = pkg.title.toLowerCase()
    const cat = pkg.category.toLowerCase()
    if (activeTab === 'todos') return true
    if (activeTab === 'disney') return cat.includes('disney') || cat.includes('universal') || title.includes('disney') || title.includes('universal')
    if (activeTab === 'cruceros') return cat.includes('crucer') || cat.includes('cruise') || title.includes('crucer') || title.includes('cruise')
    if (activeTab === 'caribe') return cat.includes('caribe') || cat.includes('méxico') || title.includes('cana') || title.includes('cancún')
    return true
  })

  return (
    <section id="paquetes" className="py-20 lg:py-28 bg-white relative">
      {/* Decorative airplane trail */}
      <div className="absolute left-10 top-20 w-32 h-32 opacity-10 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 100 100" className="w-full h-full text-terracota fill-none stroke-current" strokeWidth="1.5">
          <path d="M10,80 C30,40 70,60 90,20" strokeDasharray="3 3" />
          <circle cx="90" cy="20" r="2" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 border border-terracota/30 text-terracota bg-terracota/5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
            Paquetes sugeridos
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-5 leading-tight">
            Elegí tu próxima <span className="italic font-normal text-bordeaux">aventura</span>
          </h2>
          <p className="text-dark/65 text-lg max-w-xl mx-auto">
            Paquetes prediseñados listos para reservar. Nos escribís y nosotros nos encargamos del resto.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-3 hide-scrollbar gap-2 sm:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-bordeaux text-white shadow-md shadow-bordeaux/15'
                  : 'bg-neutral-50 border border-neutral-200/50 text-dark/70 hover:bg-neutral-100 hover:text-dark'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid of cards -> Carousel */}
        <motion.div
          layout
          className="overflow-hidden cursor-grab active:cursor-grabbing pb-8"
          ref={emblaRef}
        >
          <div className="flex touch-pan-y -ml-4 sm:-ml-6 lg:-ml-8">
            <AnimatePresence mode="popLayout">
              {filteredPackages.map((pkg, i) => {
                const Icon = iconMap[pkg.iconName] ?? Anchor
                const imagePath = getPackageImage(pkg)
                return (
                  <motion.div
                    layout
                    key={pkg.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="flex-[0_0_85%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 sm:pl-6 lg:pl-8"
                  >
                    <div className="bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-[0_20px_40px_rgba(140,42,66,0.1)] hover:border-bordeaux/20 transition-all duration-500 flex flex-col group relative h-full">
                  {/* Glare effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 -translate-x-[150%] group-hover:translate-x-[150%] transition-all duration-[1200ms] ease-in-out pointer-events-none z-30 mix-blend-overlay" />
                  
                  {/* Photo Header */}
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={imagePath}
                      alt={pkg.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                    
                    {/* Floating Category Tag */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-neutral-100 text-dark text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
                      {pkg.category}
                    </div>

                    {/* Accent Icon Tag */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <Icon size={16} className="text-white" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="inline-flex items-center bg-sage/10 text-sage text-[10px] font-bold uppercase px-3 py-1 rounded-full mb-3">
                        Asesoría Gratis
                      </div>
                      <h3 className="font-serif font-bold text-dark text-xl mb-2">{pkg.title}</h3>
                      <p className="text-dark/60 text-sm mb-6 leading-relaxed">{pkg.subtitle}</p>
                    </div>

                    <div className="border-t border-neutral-100 pt-5">
                      <div className="mb-5">
                        <p className="text-[11px] text-dark/40 font-semibold uppercase tracking-wider mb-1">Precio estimado</p>
                        <p className="text-bordeaux font-bold text-2xl font-serif">{pkg.price}</p>
                      </div>

                      <a
                        href={`https://wa.me/${pkg.whatsappNumber}?text=${encodeURIComponent(pkg.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-bordeaux text-white py-3.5 rounded-2xl font-bold text-sm hover:bg-bordeaux/90 transition-colors duration-300 shadow-md shadow-bordeaux/15 hover:shadow-lg"
                      >
                        <WhatsAppIcon size={16} />
                        Reservar por WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              )
            })}
          </AnimatePresence>
          </div>
        </motion.div>

        {/* Personalized Trip CTA footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-dark/60 text-sm mt-16 font-medium"
        >
          ¿Tenés otro destino en mente o querés cambiar la cantidad de días?{' '}
          <a
            href="https://wa.me/5491169591710?text=Hola!%20Quiero%20consultar%20por%20un%20viaje%20personalizado"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bordeaux font-bold underline underline-offset-4 hover:text-bordeaux/75 transition-colors"
          >
            Consultanos y te armamos un presupuesto a medida
          </a>
        </motion.p>
      </div>
    </section>
  )
}

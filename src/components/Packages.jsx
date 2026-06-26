import { motion, AnimatePresence } from 'framer-motion'
import { Waves, Sparkles, Anchor, Sun, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import packages from '../data/packages.json'
import PackageCard from './PackageCard'

export default function Packages() {
  const displayPackages = packages.slice(0, 3)
  const [emblaRef] = useEmblaCarousel(
    { loop: false, align: 'start', breakpoints: { '(min-width: 768px)': { active: false } } },
    [Autoplay({ delay: 3500, stopOnInteraction: true, playOnInit: true })]
  )

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

        {/* Grid of cards / Carousel on mobile */}
        <div className="overflow-hidden md:overflow-visible cursor-grab active:cursor-grabbing md:cursor-auto" ref={emblaRef}>
          <motion.div
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-8 -ml-4 sm:-ml-6 md:ml-0"
          >
            <AnimatePresence mode="popLayout">
              {displayPackages.map((pkg, i) => {
                const imagePath = pkg.image || '/destinations/disney.png'
                return (
                  <div key={pkg.id} className="flex-[0_0_85%] min-w-0 pl-4 sm:pl-6 md:pl-0 md:flex-none">
                    <PackageCard pkg={pkg} imagePath={imagePath} />
                  </div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Button to see all */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <Link
            to="/paquetes"
            className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-dark/90 transition-all shadow-lg hover:-translate-y-1"
          >
            Ver todos los paquetes
          </Link>
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
            href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Hola!%20Quiero%20consultar%20por%20un%20viaje%20personalizado`}
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

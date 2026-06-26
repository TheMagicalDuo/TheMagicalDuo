import { motion, AnimatePresence } from 'framer-motion'
import { Waves, Sparkles, Anchor, Sun, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const WhatsAppIcon = ({ size = 24, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
)
import packages from '../data/packages.json'
import PackageCard from './PackageCard'

export default function Packages() {
  const displayPackages = packages.slice(0, 3)

  return (
    <section className="py-20 lg:py-28 bg-white relative">
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

        {/* Grid of cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayPackages.map((pkg, i) => {
              const imagePath = pkg.image || '/destinations/disney.png'
              return (
                <PackageCard key={pkg.id} pkg={pkg} imagePath={imagePath} />
              )
            })}
          </AnimatePresence>
        </motion.div>

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

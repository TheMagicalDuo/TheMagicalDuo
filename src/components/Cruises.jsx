import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Anchor, Sparkles, Waves, Star, Music, Wind, X } from 'lucide-react'

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

export default function Cruises() {
  const [selectedCruise, setSelectedCruise] = useState(null)

  return (
    <section id="cruceros" className="py-20 lg:py-28 bg-[#FBF8F3]/40 border-y border-neutral-100/60 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 border border-sage/35 text-sage bg-sage/5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
            <Anchor size={12} className="text-sage" />
            Cruceros internacionales
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
            Navegá el mundo con las mejores <span className="italic font-normal text-bordeaux">líneas de cruceros</span>
          </h2>
          <p className="text-dark/65 text-lg max-w-xl mx-auto">
            De lujo, familiares, de aventura o relax — tenemos el itinerario y la naviera ideal para vos.
          </p>
        </motion.div>

        {/* Grid (List view on mobile, Grid on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {cruises.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              onClick={() => {
                if (window.innerWidth < 640) setSelectedCruise(c)
              }}
              className="bg-white rounded-2xl p-4 sm:p-7 border border-neutral-100 shadow-sm hover:shadow-xl hover:border-neutral-200/50 transition-all duration-300 flex flex-row sm:flex-col items-center sm:items-start text-left justify-between group gap-4 sm:gap-0 cursor-pointer sm:cursor-default"
            >
              <div className={`shrink-0 w-12 h-12 rounded-2xl ${c.bg} flex items-center justify-center sm:mb-6 transition-all duration-300 group-hover:scale-105`}>
                <c.Icon size={20} className={`${c.color}`} />
              </div>
              
              <div className="flex-1">
                <h3 className="font-serif font-bold text-dark text-base sm:text-xl mb-0.5 sm:mb-3">{c.name}</h3>
                {/* Desktop description */}
                <p className="hidden sm:block text-dark/70 text-sm leading-relaxed mb-6">{c.desc}</p>
                {/* Mobile description (truncated) */}
                <p className="sm:hidden text-dark/50 text-[11px] line-clamp-1 leading-snug pr-4">{c.desc}</p>
              </div>

              {/* Arrow Icon for Mobile, Text for Desktop */}
              <div className="shrink-0 text-terracota group-hover:text-bordeaux transition-colors flex items-center gap-1">
                <span className="hidden sm:inline text-xs font-semibold">Ver itinerarios &rarr;</span>
                <span className="sm:hidden">&rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-dark/50 text-sm font-semibold tracking-wide uppercase mb-5">
            Y muchas más líneas disponibles · Consultanos por tu destino ideal
          </p>
          <a
            href="https://wa.me/5491169591710?text=Hola!%20Quiero%20consultar%20sobre%20opciones%20de%20cruceros"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-bordeaux text-white px-8 py-4 rounded-full font-bold hover:bg-bordeaux/90 transition-all duration-300 shadow-md shadow-bordeaux/15 hover:shadow-lg hover:-translate-y-0.5"
          >
            <Anchor size={16} />
            Consultar por mi crucero ideal
          </a>
        </motion.div>

        {/* Mobile Popup Modal */}
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
                  href={`https://wa.me/5491169591710?text=Hola!%20Quiero%20consultar%20sobre%20${encodeURIComponent(selectedCruise.name)}`}
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

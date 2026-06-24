import { motion } from 'framer-motion'
import { Anchor, Sparkles, Waves, Star, Music, Wind } from 'lucide-react'

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
    desc: 'La magia de Disney en altamar. Ideal para familias. Entretenimiento exclusivo, personajes de Disney y destinos únicos en el Caribe.',
  },
  {
    Icon: Anchor,
    color: 'text-[#2E6B8A]',
    bg: 'bg-[#2E6B8A]/5',
    name: 'MSC Cruceros',
    desc: 'Estilo mediterráneo, elegancia y confort. Gran variedad de itinerarios globales y categorías para todos los presupuestos.',
  },
  {
    Icon: Waves,
    color: 'text-sage',
    bg: 'bg-sage/5',
    name: 'Celebrity Cruises',
    desc: 'Lujo moderno para adultos. Gastronomía de autor a bordo, spas de nivel premium y destinos exclusivos alrededor del mundo.',
  },
  {
    Icon: Music,
    color: 'text-terracota',
    bg: 'bg-terracota/5',
    name: 'Carnival Cruise Line',
    desc: 'Diversión garantizada y entretenimiento a bordo. La naviera favorita de las familias. Precios accesibles y gran ambiente.',
  },
  {
    Icon: Wind,
    color: 'text-dark',
    bg: 'bg-dark/5',
    name: 'Norwegian Cruise Line',
    desc: 'Concepto de libertad sin horarios fijos ni códigos de vestimenta rígidos. Increíbles espectáculos de Broadway y camarotes únicos.',
  },
]

export default function Cruises() {
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

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cruises.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-7 border border-neutral-100 shadow-sm hover:shadow-xl hover:border-neutral-200/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl ${c.bg} flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105`}>
                  <c.Icon size={20} className={`${c.color}`} />
                </div>
                <h3 className="font-serif font-bold text-dark text-xl mb-3">{c.name}</h3>
                <p className="text-dark/70 text-sm leading-relaxed mb-6">{c.desc}</p>
              </div>
              <div className="text-xs font-semibold text-terracota group-hover:text-bordeaux transition-colors flex items-center gap-1">
                Ver itinerarios y barcos &rarr;
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
      </div>
    </section>
  )
}

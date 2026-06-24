import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Familia Rossi',
    trip: 'Disney Orlando',
    image: '/destinations/disney.png', // Placeholder
    text: 'Viajar con chicos parecía un caos, pero la organización diaria que nos armaron nos salvó la vida. ¡Magia pura!',
    angle: '-rotate-[3deg]',
    tapeColor: 'washi-tape-terracota'
  },
  {
    name: 'Martina & Lucas',
    trip: 'Disney Cruise Line',
    image: '/destinations/cruise.png', // Placeholder
    text: 'Era nuestro primer crucero y estábamos perdidos. El asesoramiento nos dio una tranquilidad impagable.',
    angle: 'rotate-[2deg]',
    tapeColor: 'washi-tape-sage'
  },
  {
    name: 'Sofia G.',
    trip: 'Universal Studios',
    image: '/destinations/universal.png', // Placeholder
    text: 'El nivel de detalle y los tips ocultos que nos dieron hicieron que el viaje sea literalmente un 100/10.',
    angle: '-rotate-[1.5deg]',
    tapeColor: 'washi-tape-terracota'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-[#FBF8F3]/50 border-t border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 border border-terracota/25 text-terracota bg-terracota/5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
            Experiencias Reales
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-5 leading-tight">
            Viajeros que ya <span className="italic font-normal text-terracota">vivieron la magia</span>
          </h2>
          <p className="text-dark/60 text-lg max-w-2xl mx-auto">
            La tranquilidad de tu viaje es nuestra prioridad. Mirá los recuerdos de las familias que ya confiaron en The Magical Duo.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8 lg:gap-12 px-4 sm:px-0">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative flex justify-center"
            >
              {/* Polaroid Container */}
              <div 
                className={`w-full max-w-[340px] bg-white p-3 pb-8 sm:p-4 sm:pb-10 shadow-xl shadow-black/5 border border-neutral-200/60 ${t.angle} hover:rotate-0 hover:scale-[1.02] transition-all duration-500 cursor-pointer`}
              >
                {/* Cinta "washi tape" pegada arriba */}
                <div className={t.tapeColor} />

                {/* Foto Cuadrada */}
                <div className="w-full aspect-square bg-neutral-100 overflow-hidden mb-6 relative">
                  <img 
                    src={t.image} 
                    alt={t.trip} 
                    className="w-full h-full object-cover"
                  />
                  {/* Pequeño filtro vintage sutil para la foto */}
                  <div className="absolute inset-0 bg-bordeaux/5 mix-blend-multiply" />
                </div>

                {/* Zona Blanca (Reseña) */}
                <div className="px-2 text-center">
                  <div className="flex justify-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} className="text-[#E09D5C] fill-[#E09D5C]" />
                    ))}
                  </div>
                  
                  <p className="font-serif italic text-dark/85 text-[15px] sm:text-base leading-relaxed mb-6">
                    "{t.text}"
                  </p>
                  
                  <div>
                    <h4 className="font-bold text-dark text-sm mb-1">{t.name}</h4>
                    <p className="text-terracota text-[10px] uppercase tracking-widest font-bold">
                      {t.trip}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

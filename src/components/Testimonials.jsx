import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronRight, Hand } from 'lucide-react'

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
  const [active, setActive] = useState(0)

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-20 lg:py-28 bg-[#FBF8F3]/50 border-y border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left flex-1"
        >
          <div className="inline-flex items-center gap-2 border border-terracota/25 text-terracota bg-terracota/5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
            Experiencias Reales
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight">
            Viajeros que ya <span className="italic font-normal text-terracota">vivieron la magia</span>
          </h2>
          <p className="text-dark/60 text-lg max-w-lg mx-auto lg:mx-0 mb-8">
            La tranquilidad de tu viaje es nuestra prioridad. Mirá los recuerdos de las familias que ya confiaron en The Magical Duo para planear sus vacaciones perfectas.
          </p>
          
          {/* Stack Navigation Indicator */}
          <div className="hidden lg:flex items-center gap-4 text-dark/40 font-bold text-xs uppercase tracking-widest">
            <Hand size={16} className="animate-bounce-horizontal text-bordeaux" />
            Hacé clic en la tarjeta para ver más
          </div>
        </motion.div>

        {/* Right: Interactive Card Stack */}
        <div className="flex-1 w-full flex justify-center lg:justify-end relative">
          
          {/* Mobile swipe hint */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex lg:hidden items-center gap-2 text-bordeaux font-bold text-xs uppercase tracking-widest z-50 bg-white/80 backdrop-blur px-4 py-1.5 rounded-full border border-bordeaux/10">
            <Hand size={14} className="animate-bounce-horizontal" />
            Deslizá para ver más
          </div>

          <div className="relative h-[500px] sm:h-[550px] w-full max-w-[320px] sm:max-w-[340px] perspective-1000">
            <AnimatePresence>
              {testimonials.map((t, index) => {
                const offset = (index - active + testimonials.length) % testimonials.length
                const isFront = offset === 0

                return (
                  <motion.div
                    key={index}
                    animate={{
                      scale: 1 - offset * 0.05,
                      y: offset * 30,
                      rotateZ: isFront ? (index % 2 === 0 ? -2 : 2) : 0,
                      zIndex: testimonials.length - offset,
                      opacity: 1 - offset * 0.2
                    }}
                    transition={{ duration: 0.5, type: 'spring', stiffness: 300, damping: 25 }}
                    className={`absolute top-0 left-0 w-full cursor-grab active:cursor-grabbing ${isFront ? 'shadow-2xl shadow-black/10' : ''}`}
                    drag={isFront ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      if (offset.x > 50 || offset.x < -50) handleNext()
                    }}
                    onClick={() => { if(isFront) handleNext() }}
                  >
                    {/* Polaroid Container */}
                    <div className="w-full bg-white p-3 pb-8 sm:p-4 sm:pb-10 border border-neutral-200/60 pointer-events-none select-none">
                      {/* Cinta "washi tape" pegada arriba */}
                      <div className={t.tapeColor} />

                      {/* Foto Cuadrada */}
                      <div className="w-full aspect-square bg-neutral-100 overflow-hidden mb-6 relative">
                        <img 
                          src={t.image} 
                          alt={t.trip} 
                          className="w-full h-full object-cover"
                          draggable="false"
                        />
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
                )
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  )
}

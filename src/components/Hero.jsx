import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import MagicalParticles from './MagicalParticles'

const destinations = [
  { id: 0, title: 'Disney World', subtitle: 'La magia te espera en Orlando', image: '/destinations/disney.png' },
  { id: 1, title: 'Universal Studios', subtitle: 'Acción y aventura sin límites', image: '/destinations/universal.png' },
  { id: 2, title: 'Cruceros', subtitle: 'Lujo y relax en el Caribe', image: '/destinations/cruise.png' },
  { id: 3, title: 'Playas y Resorts', subtitle: 'Un pedazo de cielo All Inclusive', image: '/destinations/caribbean.png' },
]

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % destinations.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const handleNext = () => setActive((p) => (p + 1) % destinations.length)
  const handlePrev = () => setActive((p) => (p - 1 + destinations.length) % destinations.length)

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden bg-[#111] flex flex-col items-center justify-center">
      {/* Background Image with Ken Burns Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            opacity: { duration: 1.2, ease: "easeInOut" },
            scale: { duration: 8, ease: "linear" } 
          }}
          className="absolute inset-0 w-full h-full"
        >
          <img src={destinations[active].image} alt={destinations[active].title} className="w-full h-full object-cover" />
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-dark/40 z-0" />
        </motion.div>
      </AnimatePresence>
      
      <MagicalParticles />

      {/* Global Statement */}
      <div className="absolute top-32 md:top-40 left-6 lg:left-12 z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-cream/70 text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-2">The Magical Duo</p>
          <p className="font-serif text-xl sm:text-2xl text-cream italic font-light">Diseñamos tu viaje ideal.</p>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 h-full flex flex-col justify-end pb-24 lg:pb-32">
        
        <div className="max-w-4xl">
          {/* Dynamic Destination Title */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-[7rem] font-medium text-cream leading-[1.1] tracking-tight mb-4 drop-shadow-sm">
                <span className="italic font-light">{destinations[active].title}</span>
              </h1>
              <p className="text-cream/90 text-lg md:text-2xl font-light tracking-wide max-w-2xl mb-12">
                {destinations[active].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA & Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-16">
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              href="#cotizar" 
              className="inline-flex items-center justify-center px-10 py-4 border border-cream/50 text-cream rounded-full font-sans text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-cream hover:text-dark transition-all duration-500 backdrop-blur-sm"
            >
              Empezar a planificar
            </motion.a>

            {/* Navigation / Progress */}
            <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-start mt-4 sm:mt-0">
              <div className="flex gap-2">
                <button onClick={handlePrev} className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center text-cream hover:bg-cream hover:text-dark transition-all duration-300 backdrop-blur-md">
                  <ChevronLeft size={20} strokeWidth={1.5} />
                </button>
                <button onClick={handleNext} className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center text-cream hover:bg-cream hover:text-dark transition-all duration-300 backdrop-blur-md">
                  <ChevronRight size={20} strokeWidth={1.5} />
                </button>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-cream/60 font-serif italic text-xl">0{active + 1}</span>
                <div className="w-24 sm:w-32 h-[1px] bg-cream/20 relative overflow-hidden">
                  <motion.div 
                    key={active}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="absolute top-0 left-0 h-full bg-cream"
                  />
                </div>
                <span className="text-cream font-serif italic text-xl">0{destinations.length}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

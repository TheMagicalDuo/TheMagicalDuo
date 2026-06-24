import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const destinations = [
  { id: 0, title: 'DISNEY WORLD - ORLANDO', subtitle: 'La magia te espera', image: '/destinations/disney.png' },
  { id: 1, title: 'UNIVERSAL - STUDIOS', subtitle: 'Acción y aventura sin límites', image: '/destinations/universal.png' },
  { id: 2, title: 'CRUCEROS', subtitle: 'Lujo y relax en alta mar', image: '/destinations/cruise.png' },
  { id: 3, title: 'PLAYAS - ALL INCLUSIVE', subtitle: 'Un pedazo de cielo', image: '/destinations/caribbean.png' },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  
  // Parallax effect
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '30%'])

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % destinations.length)
    }, 5000) // Cambia de imagen cada 5 segundos
    return () => clearInterval(timer)
  }, [])

  const handleNext = () => setActive((p) => (p + 1) % destinations.length)
  const handlePrev = () => setActive((p) => (p - 1 + destinations.length) % destinations.length)

  const onDragEnd = (e, { offset }) => {
    const swipe = offset.x
    if (swipe < -50) handleNext()
    else if (swipe > 50) handlePrev()
  }

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden bg-[#111] flex flex-col items-center justify-center">
      
      {/* Background Image with Parallax */}
      <AnimatePresence mode="wait">
        <motion.img
          key={active}
          src={destinations[active].image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y: backgroundY }}
          className="absolute inset-0 w-full h-[130%] -top-[15%] object-cover"
          loading="eager"
        />
      </AnimatePresence>
      
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-lg z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-black/40 z-0" />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 flex flex-col items-center justify-center h-full pt-24 pb-16">
        
        {/* Fixed Hero Title (Overarching concept) */}
        <div className="flex flex-col items-center text-center mb-2 sm:mb-12 lg:mb-16 z-40 pointer-events-none mt-16 sm:mt-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] drop-shadow-2xl mb-2 sm:mb-4">
              Tu viaje soñado,<br />
              <span className="font-light text-white/90 italic">a un mensaje de distancia.</span>
            </h1>
            <p className="text-white/80 text-[10px] sm:text-xs tracking-[0.25em] uppercase font-bold">
              Agentes de Viajes Especializados
            </p>
          </motion.div>
        </div>

        {/* Index Indicator */}
        <div className="absolute bottom-28 sm:bottom-10 left-6 sm:left-16 z-30 font-bold text-white text-xl sm:text-4xl tracking-widest drop-shadow-md">
          0{active + 1} <span className="text-white/40 text-sm sm:text-2xl font-light">/ 0{destinations.length}</span>
        </div>

        {/* 3D Coverflow Carousel */}
        <div className="relative w-full h-[50vh] flex items-center justify-center mb-auto" style={{ perspective: '1200px' }}>
           {destinations.map((dest, i) => {
              // Calcular distancia más corta asumiendo un carrusel circular
              let diff = i - active
              if (diff > destinations.length / 2) diff -= destinations.length
              if (diff < -destinations.length / 2) diff += destinations.length
              
              const absDiff = Math.abs(diff)
              const isActive = diff === 0

              // Coverflow values
              const xPos = diff * 80 // porcentaje de offset
              const scale = isActive ? 1 : Math.max(1 - absDiff * 0.2, 0.6)
              const zIndex = 10 - absDiff
              const opacity = isActive ? 1 : Math.max(1 - absDiff * 0.4, 0)
              const rotateY = diff === 0 ? 0 : diff > 0 ? -20 : 20

              return (
                <motion.div
                  key={dest.id}
                  className="absolute w-[60vw] sm:w-[300px] md:w-[350px] lg:w-[400px] aspect-[4/5] rounded-xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] cursor-pointer"
                  style={{ originX: 0.5, originY: 0.5 }}
                  initial={false}
                  animate={{
                    x: `${xPos}%`,
                    scale,
                    zIndex,
                    opacity,
                    rotateY
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
                  onClick={() => setActive(i)}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={onDragEnd}
                >
                  <img src={dest.image} alt={dest.title} className="w-full h-full object-cover pointer-events-none" loading="eager" />
                  
                  {/* Inner dark gradient for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                </motion.div>
              )
           })}
           
           {/* Dynamic Destination Title Overlay */}
           <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20 mt-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-center px-4 flex flex-col items-center"
                >
                  <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white tracking-[0.1em] mb-4 font-sans uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] leading-[1.1]">
                    {destinations[active].title.split('-').map((part, i) => (
                      <span key={i} className="block">{part.trim()}</span>
                    ))}
                  </h2>
                  <div className="w-16 h-[2px] bg-white/80 mb-5 shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                  <p className="text-base sm:text-xl text-white/90 font-light tracking-wider drop-shadow-md">
                    {destinations[active].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
           </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute left-2 sm:left-8 top-[60%] -translate-y-1/2 z-30">
           <button 
             onClick={handlePrev}
             aria-label="Destino anterior"
             className="p-2 sm:p-4 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-white/80 hover:text-white transition-all hidden sm:block hover:scale-110 active:scale-95"
           >
             <ChevronLeft size={48} strokeWidth={1.5} />
           </button>
        </div>
        <div className="absolute right-2 sm:right-8 top-[60%] -translate-y-1/2 z-30">
           <button 
             onClick={handleNext}
             aria-label="Destino siguiente"
             className="p-2 sm:p-4 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-white/80 hover:text-white transition-all hidden sm:block hover:scale-110 active:scale-95"
           >
             <ChevronRight size={48} strokeWidth={1.5} />
           </button>
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-8 sm:bottom-10 left-6 right-6 sm:left-auto sm:right-16 z-30"
        >
          <a href="#cotizar" className="flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-[#E07A5F] text-white rounded-full font-bold text-sm tracking-widest hover:bg-[#D46B50] transition-all shadow-xl hover:-translate-y-1 min-h-[44px]">
            COTIZAR VIAJE
          </a>
        </motion.div>

      </div>
    </section>
  )
}

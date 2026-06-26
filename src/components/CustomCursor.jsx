import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'

// SVG de una estrella estilo destello
const StarSVG = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
)

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [trail, setTrail] = useState([])
  const trailIdRef = useRef(0)

  useEffect(() => {
    let lastTime = 0
    
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      const now = Date.now()
      // Creamos un destello cada 40ms aprox para no saturar
      if (now - lastTime > 40) {
        setTrail((prev) => {
          // Mantenemos solo los últimos 12 destellos
          const newTrail = [...prev, {
            id: trailIdRef.current++,
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 8 + 6, // Entre 6px y 14px
            offsetX: (Math.random() - 0.5) * 20, // Dispersión aleatoria
            offsetY: (Math.random() - 0.5) * 20,
          }]
          if (newTrail.length > 12) return newTrail.slice(1)
          return newTrail
        })
        lastTime = now
      }
    }

    const handleMouseOver = (e) => {
      const target = e.target
      const isClickable = 
        target.tagName?.toLowerCase() === 'a' || 
        target.tagName?.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button') ||
        target.classList?.contains('cursor-pointer')
      
      setIsHovering(!!isClickable)
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  // Auto-limpieza del trail cuando el mouse se queda quieto
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prev => prev.length > 0 ? prev.slice(1) : prev)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  // Solo mostrar en desktop
  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
    return null
  }

  return (
    <>
      {/* Destello principal (sigue al mouse exacto) */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] drop-shadow-md transition-colors duration-300 ${isHovering ? 'text-terracota' : 'text-bordeaux'}`}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.2 }}
      >
        <Sparkles size={24} fill="currentColor" strokeWidth={1} />
      </motion.div>

      {/* Rastro de polvo de hadas */}
      <AnimatePresence>
        {trail.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0.8, scale: 1, rotate: Math.random() * 90 }}
            animate={{ 
              opacity: 0, 
              scale: 0, 
              y: t.y + t.offsetY + 30, // Caen un poquito 
              x: t.x + t.offsetX 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 pointer-events-none z-[9998] text-bordeaux/80"
            style={{ x: t.x + t.offsetX, y: t.y + t.offsetY }}
          >
            <StarSVG size={t.size} />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  )
}

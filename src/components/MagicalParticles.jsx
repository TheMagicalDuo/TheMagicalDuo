import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function MagicalParticles() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Generar polvo de estrellas muy sutil
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // porcentaje ancho
      y: Math.random() * 100, // porcentaje alto
      size: Math.random() * 1.5 + 0.5, // Muy chiquitas (0.5 a 2px)
      duration: Math.random() * 20 + 20, // Muy lentas (20 a 40 seg)
      delay: Math.random() * 10,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 opacity-50">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-[#FBF8F3] rounded-full mix-blend-screen"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            boxShadow: `0 0 ${p.size * 3}px 1px rgba(251, 248, 243, 0.4)`,
          }}
          animate={{
            y: ['0%', '-30vh'],
            x: ['0%', `${(Math.random() - 0.5) * 40}px`],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function MagicalParticles() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Generar partículas iniciales
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // porcentaje ancho
      y: Math.random() * 100, // porcentaje alto
      size: Math.random() * 3 + 1, // px
      duration: Math.random() * 10 + 10, // segundos para moverse
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-white rounded-full mix-blend-screen"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            boxShadow: '0 0 8px 2px rgba(255,255,255,0.4)',
          }}
          animate={{
            y: ['0%', '-2000%'],
            x: ['0%', `${Math.random() * 100 - 50}%`],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

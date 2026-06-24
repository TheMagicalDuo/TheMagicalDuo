import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Clock, Sparkles } from 'lucide-react'

// Usamos imágenes de Unsplash en alta resolución (4K/2K) como placeholders.
// La clienta puede reemplazarlas luego por sus fotos reales, pero esto garantiza que no se pixele.
const backgrounds = [
  '/bg/castle_fireworks.png', // Castillo con fuegos artificiales
  '/bg/airplane.png',         // Vista desde el avión
  '/bg/cruise.png',           // Crucero de lujo
]

export default function DreamVision() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Cambia la imagen cada 5 segundos
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative bg-white pt-10">
      
      {/* Immersive Fading Banner */}
      <div className="relative h-[65vh] min-h-[500px] overflow-hidden bg-dark">
        
        {/* Carousel de fondos */}
        {backgrounds.map((bg, index) => (
          <div
            key={bg}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out"
            style={{ 
              backgroundImage: `url('${bg}')`,
              backgroundAttachment: 'fixed', // Efecto parallax constante
              opacity: index === currentIndex ? 1 : 0,
            }}
          />
        ))}
        
        {/* Dark Overlay progresivo para asegurar lectura del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/50 to-dark/80" />
         
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-2xl"
          >
            Imaginá despertar <span className="italic text-terracota">acá</span>...
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/95 max-w-2xl font-light drop-shadow-lg"
          >
            Nosotros nos ocupamos de los boletos, los hoteles y el estrés. Vos solo preocupate por armar la valija y disfrutar la magia con tu familia.
          </motion.p>
        </div>
      </div>

      {/* Trust Badges Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center group"
          >
            <div className="w-20 h-20 bg-bordeaux/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-bordeaux/10 transition-colors">
              <Award className="w-10 h-10 text-bordeaux" strokeWidth={1.5} />
            </div>
            <h4 className="font-serif font-bold text-2xl text-dark mb-3">Agentes Certificados</h4>
            <p className="text-dark/60 text-base leading-relaxed font-medium">Graduados oficiales. Conocemos cada secreto, atajo y beneficio oculto de los parques para optimizar tu tiempo y presupuesto.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center group"
          >
            <div className="w-20 h-20 bg-terracota/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-terracota/10 transition-colors">
              <Clock className="w-10 h-10 text-terracota" strokeWidth={1.5} />
            </div>
            <h4 className="font-serif font-bold text-2xl text-dark mb-3">Soporte 24/7 en Viaje</h4>
            <p className="text-dark/60 text-base leading-relaxed font-medium">No te dejamos solo después de venderte. Estamos a un mensaje de WhatsApp de distancia ante cualquier duda o imprevisto allá.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center group"
          >
            <div className="w-20 h-20 bg-sage/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sage/10 transition-colors">
              <Sparkles className="w-10 h-10 text-sage" strokeWidth={1.5} />
            </div>
            <h4 className="font-serif font-bold text-2xl text-dark mb-3">Itinerarios a Medida</h4>
            <p className="text-dark/60 text-base leading-relaxed font-medium">No vendemos paquetes genéricos "enlatados". Diseñamos un plan exclusivo y detallado día por día según los gustos de tu familia.</p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

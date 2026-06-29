import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Clock, Sparkles } from 'lucide-react'

const backgrounds = [
  'https://res.cloudinary.com/ucmstzfv/image/upload/f_auto,q_auto,w_1920/v1782767542/IMG_0763_lmpfon.jpg',
  'https://res.cloudinary.com/ucmstzfv/image/upload/f_auto,q_auto,w_1920/v1782770512/copy_of_img_0561_brlgav.jpg',
  'https://res.cloudinary.com/ucmstzfv/image/upload/f_auto,q_auto,w_1920/v1782767541/IMG_0585_kshgka.jpg',
  'https://res.cloudinary.com/ucmstzfv/image/upload/f_auto,q_auto,w_1920/v1782770614/IMG_0535_gk4egx.jpg',
  'https://res.cloudinary.com/ucmstzfv/image/upload/f_auto,q_auto,w_1920/v1782770754/IMG_0542_xsr9q1.jpg',
  'https://res.cloudinary.com/ucmstzfv/image/upload/f_auto,q_auto,w_1920/v1782771627/IMG_1684_spdsha.jpg',
  'https://res.cloudinary.com/ucmstzfv/image/upload/f_auto,q_auto,w_1920/v1782771679/IMG_1134_wbrk8q.jpg',
  'https://res.cloudinary.com/ucmstzfv/image/upload/f_auto,q_auto,w_1920/v1782770675/FullSizeRender_ygmupe.jpg',
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
      <div className="relative h-[80vh] min-h-[600px] overflow-hidden bg-dark">
        
        {/* Carousel de fondos */}
        {backgrounds.map((bg, index) => (
          <div
            key={bg}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out"
            style={{ 
              backgroundImage: `url('${bg}')`,
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
            Nosotros nos <span className="italic text-[#F8E0D5] drop-shadow-md">ocupamos</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/95 max-w-2xl font-light drop-shadow-lg"
          >
            Vos solo preocupate por armar la valija y disfrutar el viaje.
          </motion.p>
        </div>
      </div>

      {/* Trust Badges Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-5 group bg-white border border-neutral-100 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="shrink-0 w-12 h-12 bg-bordeaux/5 rounded-2xl flex items-center justify-center group-hover:bg-bordeaux/10 transition-colors">
              <Award className="w-6 h-6 text-bordeaux" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-serif font-bold text-xl text-dark mb-2">Agentes Especializados</h4>
              <p className="text-dark/60 text-[0.9rem] leading-relaxed font-medium">Conocemos cada secreto, atajo y beneficio oculto para optimizar tu presupuesto.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-start gap-5 group bg-white border border-neutral-100 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="shrink-0 w-12 h-12 bg-terracota/5 rounded-2xl flex items-center justify-center group-hover:bg-terracota/10 transition-colors">
              <Clock className="w-6 h-6 text-terracota" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-serif font-bold text-xl text-dark mb-2">Soporte Continuo</h4>
              <p className="text-dark/60 text-[0.9rem] leading-relaxed font-medium">Estamos a un mensaje de distancia ante cualquier duda, antes, durante y después de tu viaje.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start gap-5 group bg-white border border-neutral-100 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="shrink-0 w-12 h-12 bg-sage/5 rounded-2xl flex items-center justify-center group-hover:bg-sage/10 transition-colors">
              <Sparkles className="w-6 h-6 text-sage" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-serif font-bold text-xl text-dark mb-2">Itinerarios a Medida</h4>
              <p className="text-dark/60 text-[0.9rem] leading-relaxed font-medium">Diseñamos un plan detallado día por día pensado exclusivamente en los gustos y tiempos de tu familia.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

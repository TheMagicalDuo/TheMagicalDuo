import { motion } from 'framer-motion'
import { MapPin, Heart, Check } from 'lucide-react'

const destPhotos = [
  { image: '/destinations/disney.png', label: 'Magic Kingdom', angle: 'rotate-[1.5deg]' },
  { image: '/destinations/caribbean.png', label: 'Bávaro, Punta Cana', angle: '-rotate-[2deg]' },
  { image: '/destinations/cruise.png', label: 'Disney Cruise Line', angle: 'rotate-[-1.5deg]' },
  { image: '/destinations/universal.png', label: 'Universal Studios', angle: 'rotate-[2deg]' },
]

export default function AboutUs() {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-[#FBF8F3]/60 relative border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Galería de Fotos Polaroid (Tobi & Abi on top, destinations on bottom) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 order-2 lg:order-1 flex justify-center items-center py-2"
          >
            <div className="grid grid-cols-2 gap-3.5 w-full max-w-[420px] mx-auto">
              
              {/* Main Polaroid of Tobi & Abi (wide landscape layout) */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="col-span-2 bg-white p-3 pb-6 border border-neutral-200/50 shadow-lg rounded-sm relative transition-all duration-300 cursor-pointer"
              >
                <div className="washi-tape-terracota" />
                <div className="w-full aspect-[2.1/1] overflow-hidden bg-neutral-100">
                  <img
                    src="/destinations/couple.png"
                    alt="Tobías & Abril"
                    className="w-full h-full object-cover object-[center_30%]"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between px-1">
                  <p className="font-serif italic text-dark/95 text-base font-semibold leading-tight">Tobías & Abril</p>
                  <div className="flex items-center gap-1 text-[9px] uppercase tracking-wider text-dark/45 font-bold">
                    <MapPin size={9} className="text-bordeaux" />
                    <span>Buenos Aires, AR</span>
                  </div>
                </div>
              </motion.div>

              {/* 4 destination square Polaroids */}
              {destPhotos.map((d, i) => (
                <motion.div
                  key={d.label}
                  whileHover={{ scale: 1.04, rotate: 0 }}
                  className={`bg-white p-2 pb-4 border border-neutral-200/50 shadow-md rounded-sm ${d.angle} relative transition-all duration-300 cursor-pointer`}
                >
                  <div className="w-full aspect-[1.1/1] overflow-hidden bg-neutral-100">
                    <img
                      src={d.image}
                      alt={d.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-serif italic text-dark/75 text-[9px] mt-2 text-center truncate">{d.label}</p>
                </motion.div>
              ))}

            </div>
          </motion.div>

          {/* Contenido / Biografía */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 border border-bordeaux/25 text-bordeaux bg-bordeaux/5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Heart size={12} fill="currentColor" className="text-bordeaux" />
              Sobre nosotros
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4 leading-tight">
              Hola, somos <span className="italic font-normal text-bordeaux">Tobías & Abril</span>
            </h2>
            <p className="text-dark/40 font-bold text-xs uppercase tracking-wider mb-7">
              Agentes de Viajes Certificados · Buenos Aires, Argentina
            </p>

            <div className="space-y-6 text-dark/75 leading-loose text-[0.95rem] font-medium">
              <p>
                Somos una pareja apasionada por explorar el mundo y hacer realidad los viajes de quienes confían en nosotros. Hace un año creamos <strong className="text-dark font-bold text-base">The Magical Duo</strong> con una misión muy clara.
              </p>
              
              <ul className="space-y-4 my-6">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-bordeaux/10 text-bordeaux flex items-center justify-center shrink-0 mt-1">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span><strong className="text-dark">100% Personalizado:</strong> No somos un portal automático; diseñamos tu itinerario a la medida de tu familia.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-terracota/10 text-terracota flex items-center justify-center shrink-0 mt-1">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span><strong className="text-dark">Atención Honesta:</strong> Te compartimos nuestros atajos, secretos y cuidamos tu presupuesto.</span>
                </li>
              </ul>

              <div className="bg-white border border-neutral-100 shadow-sm p-6 rounded-2xl relative mt-8">
                <div className="absolute -top-3 -left-3 text-terracota opacity-20">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                </div>
                <p className="text-dark/90 italic font-serif text-[1.1rem] leading-relaxed relative z-10">
                  "Nuestra experiencia no termina cuando comprás el paquete. Estamos disponibles 24/7 para acompañarte desde la primera consulta hasta que llegás a casa."
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="https://www.instagram.com/themagicalduo_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-dark/15 text-dark hover:border-bordeaux hover:text-bordeaux px-6 py-3.5 rounded-full font-bold text-sm transition-colors duration-300"
              >
                Seguinos en Instagram
              </a>
              <a
                href="#cotizar"
                className="inline-flex items-center justify-center gap-2 bg-bordeaux text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-bordeaux/90 transition-colors duration-300 shadow-md"
              >
                Planificar mi viaje
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

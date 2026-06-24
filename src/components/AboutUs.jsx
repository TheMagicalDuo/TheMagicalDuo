import { motion } from 'framer-motion'
import { MapPin, Heart, Sparkles, Clock } from 'lucide-react'

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
              Conocenos
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-4 leading-tight">
              <span className="italic font-normal text-bordeaux">Tobias & Abril</span>
            </h2>
            <p className="text-dark/50 font-bold text-xs uppercase tracking-[0.2em] mb-6">
              Agentes de Viajes Certificados · Buenos Aires, Argentina
            </p>
            
            <div className="text-dark/70 text-sm leading-relaxed mb-10 space-y-4 pr-4">
              <p>Somos Tobias y Abril, una pareja argentina apasionada por los viajes y por hacer realidad los sueños de quienes confían en nosotros. Hace un año creamos The Magical Duo con una misión clara: brindar una atención 100% personalizada, honesta y cercana.</p>
              <p>Estamos disponibles 24/7 para acompañarte en cada etapa de tu viaje, desde la primera consulta hasta que llegás a casa. Porque para nosotros, tu experiencia no termina cuando comprás el paquete.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="bg-white p-5 rounded-3xl border border-neutral-100 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-bordeaux/10 text-bordeaux flex items-center justify-center">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">Viajes a Medida</h3>
                  <p className="text-dark/60 text-sm leading-relaxed">Itinerarios únicos diseñados a la medida de tu familia. Cero plantillas automáticas.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-neutral-100 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-terracota/10 text-terracota flex items-center justify-center">
                  <Heart size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">Honestidad Real</h3>
                  <p className="text-dark/60 text-sm leading-relaxed">Te compartimos atajos, secretos y cuidamos tu presupuesto para que aproveches al máximo.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:col-span-2 relative overflow-hidden hover:shadow-md transition-shadow">
                <div className="absolute right-0 top-0 w-32 h-32 bg-sage/5 rounded-full blur-3xl pointer-events-none" />
                <div className="w-12 h-12 rounded-full bg-sage/10 text-sage flex items-center justify-center shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">Acompañamiento 24/7</h3>
                  <p className="text-dark/60 text-sm leading-relaxed">No nos borramos al vender. Estamos disponibles por WhatsApp antes, durante y después del viaje.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
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

import { motion } from 'framer-motion'
import { MapPin, Heart, Sparkles, Clock, ShieldCheck, Wallet, CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const destPhotos = [
  { image: '/destinations/disney.png', label: 'Magic Kingdom', angle: 'rotate-[1.5deg]' },
  { image: '/destinations/caribbean.png', label: 'Bávaro, Punta Cana', angle: '-rotate-[2deg]' },
  { image: '/destinations/cruise.png', label: 'Disney Cruise Line', angle: 'rotate-[-1.5deg]' },
  { image: '/destinations/universal.png', label: 'Universal Studios', angle: 'rotate-[2deg]' },
]

export default function AboutUs() {
  const navigate = useNavigate()
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
              Agentes Especializados · Buenos Aires, Argentina
            </p>
            
            <div className="text-dark/70 text-sm leading-relaxed mb-10 space-y-4 pr-4">
              <p>Somos Tobias y Abril, una pareja argentina apasionada por los viajes y por hacer realidad los sueños de quienes confían en nosotros. Hace un año creamos The Magical Duo con una misión clara: brindar una atención 100% personalizada, honesta y cercana.</p>
              <p>Estamos disponibles 24/7 para acompañarte en cada etapa de tu viaje, desde la primera consulta hasta que llegás a casa. Porque para nosotros, tu experiencia no termina cuando comprás el paquete.</p>
            </div>

            <h3 className="font-serif text-2xl font-bold text-dark mb-6 flex items-center gap-2">
              <Sparkles size={24} className="text-bordeaux" /> ¿Por qué elegirnos?
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="bg-white p-5 rounded-3xl border border-neutral-100 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-bordeaux/10 text-bordeaux flex items-center justify-center">
                  <CheckCircle size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">Precios Oficiales</h3>
                  <p className="text-dark/60 text-sm leading-relaxed">Trabajamos exclusivamente con precios oficiales. No vas a pagar ninguna diferencia respecto a lo que encontrás por tu cuenta. ¡Y además te asesoramos sin cargo!</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-neutral-100 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-terracota/10 text-terracota flex items-center justify-center">
                  <Heart size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">Atención Personalizada</h3>
                  <p className="text-dark/60 text-sm leading-relaxed">Cada viaje es único. No somos un portal de reservas: somos personas reales que se involucran con tu viaje y te acompañan en cada paso.</p>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-3xl border border-neutral-100 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-sage/10 text-sage flex items-center justify-center">
                  <Clock size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">Siempre Disponibles</h3>
                  <p className="text-dark/60 text-sm leading-relaxed">Tanto antes, durante y después de tu viaje, estamos disponibles para responder tus dudas, resolver imprevistos o simplemente compartir tu emoción.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-neutral-100 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-bordeaux/10 text-bordeaux flex items-center justify-center">
                  <Wallet size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">Pagos en Cuotas</h3>
                  <p className="text-dark/60 text-sm leading-relaxed">Para Disney y Universal, podemos gestionar el pago de tu paquete en cómodas cuotas, haciendo que tu sueño sea mucho más accesible.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-neutral-100 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-terracota/10 text-terracota flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">Experiencia Propia</h3>
                  <p className="text-dark/60 text-sm leading-relaxed">Somos viajeros antes que agentes. Conocemos de primera mano los destinos que vendemos, y esa experiencia la ponemos al servicio de tu viaje.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-neutral-100 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-sage/10 text-sage flex items-center justify-center">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">Pagos 100% Seguros</h3>
                  <p className="text-dark/60 text-sm leading-relaxed">Todos los pagos se realizan directamente al proveedor. Tu dinero nunca pasa por nosotros. Total transparencia y seguridad garantizada.</p>
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
              <button
                onClick={() => navigate('/', { state: { scrollTo: 'cotizar' } })}
                className="inline-flex items-center justify-center gap-2 bg-bordeaux text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-bordeaux/90 transition-colors duration-300 shadow-md"
              >
                Planificar mi viaje
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

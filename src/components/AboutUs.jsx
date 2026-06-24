import { motion } from 'framer-motion'
import { MapPin, Heart } from 'lucide-react'

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

            <div className="space-y-5 text-dark/75 leading-relaxed text-base font-medium">
              <p>
                Somos una pareja argentina apasionada por explorar el mundo y, sobre todo, por hacer realidad los viajes de quienes confían en nosotros.
              </p>
              <p>
                Hace un año creamos <strong className="text-dark font-bold">The Magical Duo</strong> con una misión clara: brindar una atención <strong className="text-bordeaux font-bold">100% personalizada, honesta y cercana</strong>. No somos un portal automático de reservas; nos involucramos en tu viaje de principio a fin.
              </p>
              <p className="text-dark/80 italic font-serif text-lg border-l-2 border-terracota/40 pl-4 py-1">
                "Nuestra experiencia no termina cuando comprás el paquete. Estamos disponibles 24/7 para acompañarte desde la primera consulta hasta que llegás a casa."
              </p>
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

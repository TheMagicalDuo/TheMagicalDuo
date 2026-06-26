import { motion } from 'framer-motion'
import { Anchor, Map, Utensils, Building2, Car, HeartPulse, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'cruceros',
    title: 'Cruceros',
    desc: 'Las mejores navieras y rutas de todo el mundo.',
    Icon: Anchor,
    color: 'text-[#2E6B8A]',
    bg: 'bg-[#2E6B8A]/10',
    hover: 'group-hover:bg-[#2E6B8A] group-hover:text-white',
    images: ['/destinations/cruise.png', '/destinations/caribbean.png'],
  },
  {
    id: 'tours',
    title: 'Tours en Español',
    desc: 'Viajes organizados con guías expertos en tu idioma.',
    Icon: Map,
    color: 'text-sage',
    bg: 'bg-sage/10',
    hover: 'group-hover:bg-sage group-hover:text-white'
  },
  {
    id: 'all-inclusive',
    title: 'All Inclusive',
    desc: 'Resorts de lujo en el Caribe y destinos paradisíacos.',
    Icon: Utensils,
    color: 'text-terracota',
    bg: 'bg-terracota/10',
    hover: 'group-hover:bg-terracota group-hover:text-white'
  },
  {
    id: 'hoteles',
    title: 'Hoteles',
    desc: 'Alojamientos seleccionados al mejor precio garantizado.',
    Icon: Building2,
    color: 'text-bordeaux',
    bg: 'bg-bordeaux/10',
    hover: 'group-hover:bg-bordeaux group-hover:text-white'
  },
  {
    id: 'autos',
    title: 'Alquiler de Autos',
    desc: 'Recorré tu destino con agencias internacionales.',
    Icon: Car,
    color: 'text-dark',
    bg: 'bg-dark/10',
    hover: 'group-hover:bg-dark group-hover:text-white'
  },
  {
    id: 'asistencia',
    title: 'Assist Card',
    desc: 'Cobertura médica y asistencia de emergencia 24/7.',
    Icon: HeartPulse,
    color: 'text-terracota',
    bg: 'bg-terracota/10',
    hover: 'group-hover:bg-terracota group-hover:text-white'
  }
]

export default function ServicesSummary() {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-[#FBF8F3]/50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 border border-sage/35 text-sage bg-sage/5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
            <Anchor size={12} className="text-sage" />
            Nuestros Servicios
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
            Todo lo que tu viaje necesita, <span className="italic font-normal text-bordeaux">en un solo lugar</span>
          </h2>
          <p className="text-dark/65 text-lg max-w-2xl mx-auto">
            Planificamos cada detalle para que tu experiencia sea inolvidable. Hacé clic en el servicio que te interese para conocer todos los detalles.
          </p>
        </motion.div>

        {/* Grid of Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {s.images ? (
                /* Photo card for services with images */
                <Link
                  to={`/servicios/${s.id}`}
                  className="group block rounded-3xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative h-[260px]"
                >
                  {/* Split photo layout */}
                  <div className="absolute inset-0 flex">
                    {s.images.map((img, idx) => (
                      <div key={idx} className="flex-1 relative overflow-hidden">
                        <img
                          src={img}
                          alt={s.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {idx === 0 && s.images.length > 1 && (
                          <div className="absolute inset-y-0 right-0 w-px bg-white/30 z-10" />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className={`w-9 h-9 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center mb-3 border border-white/20`}>
                      <s.Icon size={16} className="text-white" />
                    </div>
                    <h3 className="font-serif font-bold text-2xl mb-1">{s.title}</h3>
                    <p className="text-white/75 text-sm mb-4">{s.desc}</p>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider border border-white/30 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full group-hover:bg-white/20 transition-colors">
                      Ver detalles <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              ) : (
                /* Icon card for regular services */
                <Link
                  to={`/servicios/${s.id}`}
                  className="group block bg-white hover:bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${s.bg} ${s.color} ${s.hover}`}>
                    <s.Icon size={24} />
                  </div>

                  <h3 className="font-serif font-bold text-xl text-dark mb-3">{s.title}</h3>
                  <p className="text-dark/60 text-[0.95rem] leading-relaxed mb-6 h-12">
                    {s.desc}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-bold text-bordeaux group-hover:text-dark transition-colors">
                    Ver detalles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

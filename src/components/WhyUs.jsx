import { motion } from 'framer-motion'
import { Tag, UserCheck, Clock, CreditCard, Lock, Globe } from 'lucide-react'

const reasons = [
  {
    Icon: Tag,
    iconBg: 'bg-bordeaux/8',
    iconColor: 'text-bordeaux',
    title: 'Precios oficiales',
    desc: 'Trabajamos exclusivamente con precios oficiales. No vas a pagar ninguna diferencia respecto a lo que encontrás por tu cuenta. ¡Y te asesoramos sin cargo!',
  },
  {
    Icon: UserCheck,
    iconBg: 'bg-sage/10',
    iconColor: 'text-sage',
    title: 'Atención personalizada',
    desc: 'Cada viaje es único. No somos un portal de reservas: somos personas reales que se involucran con tu viaje y te acompañan en cada paso.',
  },
  {
    Icon: Clock,
    iconBg: 'bg-terracota/10',
    iconColor: 'text-terracota',
    title: 'Siempre disponibles',
    desc: 'Antes, durante y después de tu viaje, estamos disponibles para responder tus dudas, resolver imprevistos o simplemente compartir tu emoción.',
  },
  {
    Icon: CreditCard,
    iconBg: 'bg-bordeaux/8',
    iconColor: 'text-bordeaux',
    title: 'Pagos en cuotas',
    desc: 'Para Disney y Universal, podemos gestionar el pago de tu paquete en cómodas cuotas, haciendo que tu sueño sea mucho más accesible.',
  },
  {
    Icon: Lock,
    iconBg: 'bg-sage/10',
    iconColor: 'text-sage',
    title: 'Pagos 100% seguros',
    desc: 'Todos los pagos se realizan directamente al proveedor: Disney, Universal, la naviera o la plataforma correspondiente. Tu dinero nunca pasa por nosotros.',
  },
  {
    Icon: Globe,
    iconBg: 'bg-terracota/10',
    iconColor: 'text-terracota',
    title: 'Experiencia propia',
    desc: 'Somos viajeros antes que agentes. Conocemos de primera mano los destinos que vendemos, y esa experiencia la ponemos al servicio de tu viaje.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 border border-terracota/30 text-terracota px-4 py-1.5 rounded-full text-sm font-medium mb-5">
            Por qué elegirnos
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4 leading-tight">
            La diferencia que{' '}
            <em className="text-bordeaux not-italic italic">marca la diferencia</em>
          </h2>
          <p className="text-dark/55 text-lg max-w-xl mx-auto">
            No solo organizamos viajes — creamos experiencias que recordás toda la vida.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -3 }}
              className="bg-white border border-dark/7 rounded-2xl p-7 hover:shadow-md hover:border-dark/12 transition-all duration-300"
            >
              <div className={`w-11 h-11 rounded-xl ${r.iconBg} flex items-center justify-center mb-5`}>
                <r.Icon size={19} className={r.iconColor} />
              </div>
              <h3 className="font-serif font-bold text-dark text-lg mb-2.5">{r.title}</h3>
              <p className="text-dark/55 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

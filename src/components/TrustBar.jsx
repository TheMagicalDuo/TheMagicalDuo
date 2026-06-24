import { motion } from 'framer-motion'
import { BadgeCheck, Users, CreditCard, Shield } from 'lucide-react'

const items = [
  { icon: BadgeCheck, text: 'Agentes oficiales autorizados', color: 'text-bordeaux', bg: 'bg-bordeaux/5' },
  { icon: Users, text: 'Atención personalizada en español', color: 'text-terracota', bg: 'bg-terracota/5' },
  { icon: CreditCard, text: 'Pagos en cuotas sin interés', color: 'text-sage', bg: 'bg-sage/5' },
  { icon: Shield, text: 'Precios oficiales garantizados', color: 'text-bordeaux', bg: 'bg-bordeaux/5' },
]

export default function TrustBar() {
  return (
    <section className="bg-white py-8 border-y border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-4 group justify-center sm:justify-start"
            >
              <div className={`shrink-0 w-12 h-12 rounded-2xl ${item.bg} border border-neutral-100/10 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-sm`}>
                <item.icon size={20} className={`${item.color}`} />
              </div>
              <span className="text-dark/80 text-[0.9rem] font-semibold leading-snug tracking-wide">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Mail, Heart, ArrowRight } from 'lucide-react'

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth="0"/>
  </svg>
)

const WhatsAppIcon = ({ size = 24, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
)

const contacts = [
  {
    icon: InstagramIcon,
    label: 'Instagram',
    value: '@themagicalduo_',
    sub: 'Seguinos y mantenete al día de todas nuestras novedades',
    href: 'https://www.instagram.com/themagicalduo_',
    color: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400',
    hoverBorder: 'hover:border-pink-500/40',
  },
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    value: 'Abi: +54 9 11 6959-1710',
    value2: 'Tobi: +54 9 11 5343-5751',
    sub: 'Escribinos para planificar tu itinerario personalizado.',
    href: 'https://wa.me/5491169591710?text=Hola!%20Quiero%20planificar%20un%20viaje',
    href2: 'https://wa.me/5491153435751?text=Hola!%20Quiero%20planificar%20un%20viaje',
    color: 'bg-emerald-500',
    hoverBorder: 'hover:border-emerald-500/40',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'themagicalduo.agentes@gmail.com',
    sub: 'Envianos tus consultas detalladas por correo',
    href: 'mailto:themagicalduo.agentes@gmail.com',
    color: 'bg-bordeaux',
    hoverBorder: 'hover:border-bordeaux/40',
  },
]

export default function Footer() {
  return (
    <footer id="contacto" className="bg-dark py-20 text-white relative">
      {/* Decorative stars */}
      <div className="absolute right-10 top-10 w-24 h-24 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
          <path d="M50,0 L53,35 L85,38 L55,50 L65,85 L50,60 L35,85 L45,50 L15,38 L47,35 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* CTA Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-5 leading-tight">
            ¿Listo para hacer realidad <span className="italic font-normal text-terracota">tu viaje soñado?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto font-medium">
            Estamos disponibles para responder tus preguntas y acompañarte. ¡Escribinos hoy mismo!
          </p>
        </motion.div>

        {/* Contact channels */}
        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {contacts.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className={`bg-white/5 border border-white/10 rounded-3xl p-7 transition-all duration-300 ${c.hoverBorder} hover:bg-white/10 flex flex-col justify-between group`}
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl ${c.color} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105`}>
                  <c.icon size={20} className="text-white" />
                </div>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-2">{c.label}</p>

                {c.href2 ? (
                  <div className="space-y-2 mb-4">
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white font-bold text-base hover:text-terracota transition-colors">
                      {c.value}
                      <ArrowRight size={14} className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-terracota" />
                    </a>
                    <a href={c.href2} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white font-bold text-base hover:text-terracota transition-colors">
                      {c.value2}
                      <ArrowRight size={14} className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-terracota" />
                    </a>
                  </div>
                ) : (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white font-bold text-base mb-4 hover:text-terracota transition-colors break-all">
                    {c.value}
                    <ArrowRight size={14} className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-terracota shrink-0" />
                  </a>
                )}
              </div>

              <p className="text-white/50 text-xs leading-relaxed border-t border-white/5 pt-4">{c.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/logo/logo-redondo-sin-borde.png"
                alt="The Magical Duo"
                className="h-12 w-auto"
              />
              <span className="font-serif font-bold text-lg text-cream tracking-wide">The Magical Duo</span>
            </div>
            <p className="text-white/40 text-xs sm:text-sm flex items-center gap-1.5 font-medium">
              Hecho con <Heart size={12} className="text-bordeaux fill-bordeaux" /> para viajeros soñadores · © 2026 The Magical Duo
            </p>
            <a
              href="https://www.instagram.com/themagicalduo_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 text-sm hover:text-white transition-colors font-semibold"
            >
              @themagicalduo_
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

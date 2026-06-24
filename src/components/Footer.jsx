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

// Replaced contact cards with minimalist links

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
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 mb-24">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-serif text-6xl sm:text-7xl lg:text-8xl font-bold text-cream leading-[1.05] tracking-tight mb-10"
            >
              Empecemos tu <span className="italic font-light text-terracota">viaje.</span>
            </motion.h2>
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              href="#cotizar" 
              className="inline-flex items-center justify-center gap-3 bg-white text-dark px-10 py-5 rounded-full font-bold text-[13px] tracking-[0.2em] uppercase hover:bg-cream hover:-translate-y-1 transition-all duration-300"
            >
              Solicitar Cotización <ArrowRight size={18} />
            </motion.a>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-10 lg:text-right"
          >
            <div>
              <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-3">Email</p>
              <a href="mailto:themagicalduo.agentes@gmail.com" className="text-xl sm:text-2xl font-serif text-white hover:text-terracota transition-colors">themagicalduo.agentes@gmail.com</a>
            </div>
            <div>
              <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-3">WhatsApp</p>
              <div className="flex flex-col lg:items-end gap-2">
                <a href="https://wa.me/5491169591710" className="text-xl sm:text-2xl font-serif text-white hover:text-terracota transition-colors">Abi: +54 9 11 6959-1710</a>
                <a href="https://wa.me/5491153435751" className="text-xl sm:text-2xl font-serif text-white hover:text-terracota transition-colors">Tobi: +54 9 11 5343-5751</a>
              </div>
            </div>
            <div>
              <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-3">Social</p>
              <a href="https://www.instagram.com/themagicalduo_" target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl font-serif text-white hover:text-terracota transition-colors flex items-center lg:justify-end gap-2">
                Instagram <ArrowRight size={16} className="-rotate-45" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Huge Brand Text spanning the width */}
        <div className="w-full flex justify-center border-t border-white/10 pt-16 mb-10 overflow-hidden">
          <motion.h1 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[12vw] lg:text-[14vw] font-serif font-black text-white/5 uppercase tracking-tighter leading-none select-none text-center"
          >
            THE MAGICAL DUO
          </motion.h1>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
          <p>© 2026 The Magical Duo.</p>
          <p className="flex items-center gap-2">Hecho con <Heart size={14} className="text-bordeaux fill-bordeaux" /> para viajeros soñadores</p>
        </div>
      </div>
    </footer>
  )
}

import { motion } from 'framer-motion'
import { Mail, Phone, ArrowUpRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Logo from './Logo'

const InstagramIcon = ({ size = 24, className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth="0"/>
  </svg>
)

export default function Footer() {
  const navigate = useNavigate()

  const handleScrollToCotizar = (e) => {
    e.preventDefault()
    navigate('/', { state: { scrollTo: 'cotizar' } })
  }

  const waHref = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Hola!%20Quiero%20hacer%20una%20consulta`

  return (
    <div className="bg-[#FBF8F3] w-full flex flex-col items-center justify-center pb-6 pt-10 px-4 relative z-10 border-t border-neutral-100 overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-dark italic mb-4 leading-tight px-4"
        >
          ¿Todo listo para <span className="text-bordeaux">soñar?</span>
        </motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <button
            onClick={handleScrollToCotizar}
            className="inline-flex items-center gap-2 text-dark font-bold text-xs uppercase tracking-[0.2em] hover:text-terracota transition-colors group bg-white border border-neutral-200 px-6 py-3 rounded-full shadow-sm hover:shadow-md"
          >
            Comenzar a planificar <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Floating Capsule */}
      <motion.footer
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100, delay: 0.3 }}
        className="w-full max-w-5xl bg-white/70 backdrop-blur-xl border border-white shadow-[0_20px_40px_rgba(0,0,0,0.04)] rounded-[2.5rem] md:rounded-full px-8 py-5 md:py-2.5 relative z-20"
      >

        {/* ── MOBILE layout ── */}
        <div className="flex flex-col items-center gap-6 md:hidden">
          {/* Logo vector component */}
          <div className="h-16 w-32 relative flex items-center justify-center shrink-0">
            <Logo className="absolute h-36 w-auto text-bordeaux shrink-0" />
          </div>

          {/* 3 contact icons in a row */}
          <div className="flex items-center justify-center gap-8 w-full border-t border-b border-neutral-100 py-5">
            <a href="mailto:themagicalduo.agentes@gmail.com" className="flex flex-col items-center gap-2 text-dark/55 hover:text-bordeaux transition-colors group">
              <div className="w-11 h-11 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-bordeaux/10 transition-colors">
                <Mail size={17} className="group-hover:text-bordeaux transition-colors" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider">Email</span>
            </a>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-dark/55 hover:text-bordeaux transition-colors group">
              <div className="w-11 h-11 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-bordeaux/10 transition-colors">
                <Phone size={17} className="group-hover:text-bordeaux transition-colors" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
            </a>
            <a href="https://instagram.com/themagicalduo_" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 text-dark/55 hover:text-bordeaux transition-colors group">
              <div className="w-11 h-11 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-bordeaux/10 transition-colors">
                <InstagramIcon size={17} className="group-hover:text-bordeaux transition-colors" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider">Instagram</span>
            </a>
          </div>

          {/* Legal */}
          <div className="flex items-center gap-3 text-dark/30 text-[10px] uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-dark transition-colors">Legal</a>
            <span>•</span>
            <span>© {new Date().getFullYear()} The Magical Duo</span>
          </div>
        </div>

        {/* ── DESKTOP layout ── */}
        <div className="hidden md:flex items-center justify-between gap-4 w-full">
          {/* Left contacts */}
          <div className="flex items-center gap-6">
            <a href="mailto:themagicalduo.agentes@gmail.com" className="flex items-center gap-2.5 text-dark/60 hover:text-bordeaux transition-colors text-sm font-medium group">
              <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-bordeaux/10 transition-colors">
                <Mail size={14} className="text-dark/40 group-hover:text-bordeaux" />
              </div>
              themagicalduo.agentes@gmail.com
            </a>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-dark/60 hover:text-bordeaux transition-colors text-sm font-medium group">
              <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-bordeaux/10 transition-colors">
                <Phone size={14} className="text-dark/40 group-hover:text-bordeaux" />
              </div>
              WhatsApp
            </a>
          </div>

          <div className="w-px h-10 bg-neutral-200 shrink-0" />

          {/* Center logo vector component */}
          <div className="flex items-center justify-center shrink-0 h-10 w-24 relative">
            <Logo className="absolute h-24 w-auto text-bordeaux shrink-0" />
          </div>

          <div className="w-px h-10 bg-neutral-200 shrink-0" />

          {/* Right social + legal */}
          <div className="flex items-center gap-6">
            <a href="https://instagram.com/themagicalduo_" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-dark/60 hover:text-bordeaux transition-colors text-sm font-medium group">
              <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-bordeaux/10 transition-colors">
                <InstagramIcon size={14} className="text-dark/40 group-hover:text-bordeaux" />
              </div>
              @themagicalduo_
            </a>
            <div className="flex items-center gap-3 text-dark/30 text-[10px] uppercase tracking-widest font-bold">
              <a href="#" className="hover:text-dark transition-colors">Legal</a>
              <span>•</span>
              <span>© {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>

      </motion.footer>

      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/60 to-transparent z-0 pointer-events-none" />
    </div>
  )
}

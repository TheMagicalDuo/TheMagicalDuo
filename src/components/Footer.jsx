import { motion } from 'framer-motion'
import { Instagram, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark text-cream pt-24 pb-8 lg:pt-32 lg:pb-12 border-t border-dark/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Top Section: CTA & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 border-b border-cream/10 pb-20">
          
          {/* Left: Oversized CTA */}
          <div className="lg:col-span-7">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight mb-8"
            >
              Tu próxima historia <br />
              <span className="italic font-light text-terracota">comienza acá.</span>
            </motion.h2>
            <motion.a 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              href="#cotizar"
              className="inline-flex items-center gap-3 text-cream/80 hover:text-white transition-colors group font-sans text-sm tracking-widest uppercase border-b border-cream/20 hover:border-white pb-1"
            >
              Comenzar a planificar
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>

          {/* Right: Newsletter or Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-4 lg:col-start-9 flex flex-col justify-end"
          >
            <h3 className="font-sans text-xs tracking-[0.2em] uppercase font-bold text-cream/50 mb-6">Únete a nuestra comunidad</h3>
            <p className="text-cream/80 font-light mb-6 text-sm">Recibí inspiración para tus próximos viajes, ofertas exclusivas y novedades mágicas.</p>
            <form className="flex border-b border-cream/30 pb-2 focus-within:border-white transition-colors">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="bg-transparent w-full text-cream placeholder:text-cream/30 focus:outline-none text-sm font-light"
              />
              <button type="button" className="text-xs tracking-widest uppercase font-bold hover:text-terracota transition-colors">
                Suscribir
              </button>
            </form>
          </motion.div>
        </div>

        {/* Middle Section: Sitemap & Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          
          {/* Brand */}
          <div className="flex flex-col">
            <h4 className="font-serif text-2xl italic mb-6">The Magical Duo</h4>
            <p className="text-cream/60 text-sm font-light leading-relaxed max-w-xs">
              Agencia de viajes boutique especializada en crear experiencias únicas, diseñadas a medida para familias, parejas y aventureros.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col">
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase font-bold text-cream/50 mb-6">Navegación</h4>
            <ul className="space-y-4 flex flex-col">
              {['Inicio', 'Servicios', 'Testimonios', 'Cotizar'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-cream/80 hover:text-white transition-colors text-sm font-light inline-block relative group">
                    {item}
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase font-bold text-cream/50 mb-6">Contacto</h4>
            <ul className="space-y-4 flex flex-col">
              <li>
                <a href="mailto:hola@themagicalduo.com" className="flex items-center gap-3 text-cream/80 hover:text-white transition-colors text-sm font-light group">
                  <Mail size={16} className="text-cream/50 group-hover:text-white transition-colors" />
                  hola@themagicalduo.com
                </a>
              </li>
              <li>
                <a href="#cotizar" className="flex items-center gap-3 text-cream/80 hover:text-white transition-colors text-sm font-light group">
                  <Phone size={16} className="text-cream/50 group-hover:text-white transition-colors" />
                  Solicitar llamado
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-cream/80 text-sm font-light">
                  <MapPin size={16} className="text-cream/50 shrink-0 mt-1" />
                  <span>Atención online a<br />todo el mundo.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col">
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase font-bold text-cream/50 mb-6">Seguinos</h4>
            <a 
              href="https://instagram.com/themagicalduo" 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center text-cream/80 hover:bg-cream hover:text-dark hover:border-cream transition-all duration-300"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
          </div>

        </div>

        {/* Bottom Section: Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-cream/10 text-[11px] text-cream/40 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} The Magical Duo. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream transition-colors">Políticas de Privacidad</a>
            <a href="#" className="hover:text-cream transition-colors">Términos y Condiciones</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

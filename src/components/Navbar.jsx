import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Users, Sparkles, Ship, Package } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { id: 'inicio', label: 'Inicio', href: '#inicio' },
  { id: 'nosotros', label: 'Nosotros', href: '#nosotros' },
  { id: 'especialidad', label: 'Disney & Universal', href: '#especialidad' },
  { id: 'cruceros', label: 'Cruceros', href: '#cruceros' },
  { id: 'paquetes', label: 'Paquetes', href: '#paquetes' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  // Detectar scroll para cambiar estilos
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Spy Scroll Logic
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollY = window.scrollY
      const innerHeight = window.innerHeight

      let current = 'inicio'
      navLinks.forEach(link => {
        const el = document.getElementById(link.id)
        if (el) {
          const offsetTop = el.offsetTop - 150
          if (scrollY >= offsetTop) {
            current = link.id
          }
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScrollSpy)
    handleScrollSpy() // Check immediately
    return () => window.removeEventListener('scroll', handleScrollSpy)
  }, [])

  const scrollToSection = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Label para el indicador mobile
  const activeLabel = navLinks.find(l => l.id === activeSection)?.label || 'Inicio'

  return (
    <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-6xl transition-all duration-500">
      <div 
        className={`relative transition-all duration-700 w-full rounded-full px-4 sm:px-8 h-16 sm:h-[4.5rem] flex items-center justify-between ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-neutral-200/60' 
            : 'bg-black/25 backdrop-blur-md border border-white/20'
        }`}
      >
        
        {/* Logo */}
        <a href="#inicio" onClick={(e) => scrollToSection(e, '#inicio')} className="flex items-center group relative flex-shrink-0 z-10">
          <Logo
            className={`h-16 sm:h-20 w-auto transition-all duration-300 group-hover:scale-105 ${
              scrolled ? 'text-bordeaux' : 'text-cream'
            }`}
          />
        </a>

        {/* Mobile Current Section Indicator */}
        <div className={`absolute left-1/2 -translate-x-1/2 flex lg:hidden items-center justify-center text-[10px] uppercase font-bold tracking-[0.2em] transition-colors duration-500 z-0 ${
          scrolled ? 'text-dark' : 'text-white/90'
        }`}>
          {activeLabel}
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative py-2 text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${
                  isActive 
                    ? (scrolled ? 'text-bordeaux' : 'text-white')
                    : (scrolled ? 'text-dark/60 hover:text-dark' : 'text-white/70 hover:text-white')
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className={`absolute bottom-0 left-0 right-0 h-[2px] ${scrolled ? 'bg-bordeaux' : 'bg-white'}`}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 z-10">
          <a
            href="#cotizar"
            onClick={(e) => scrollToSection(e, '#cotizar')}
            className={`hidden sm:flex px-7 py-2.5 rounded-full border text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 ${
              scrolled 
                ? 'bg-dark text-white border-dark hover:bg-white hover:text-dark'
                : 'bg-white text-dark border-white hover:bg-transparent hover:text-white'
            }`}
          >
            COTIZAR
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className={`lg:hidden p-2 transition-colors flex items-center justify-center relative z-50 ${
              scrolled ? 'text-dark' : 'text-white'
            }`}
            aria-label="Menú"
          >
            {menuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-x-0 top-24 z-40 lg:hidden px-4">
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-dark/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] rounded-3xl p-5 flex flex-col gap-2.5"
            >
              {[
                { id: 'inicio', label: 'Inicio', icon: Home },
                { id: 'nosotros', label: 'Nosotros', icon: Users },
                { id: 'especialidad', label: 'Disney & Universal', icon: Sparkles },
                { id: 'cruceros', label: 'Cruceros', icon: Ship },
                { id: 'paquetes', label: 'Paquetes', icon: Package }
              ].map((link) => {
                const isActive = activeSection === link.id
                const Icon = link.icon
                return (
                  <button
                    key={link.id}
                    onClick={(e) => scrollToSection(e, `#${link.id}`)}
                    className={`w-full py-3.5 rounded-2xl text-left px-4 text-sm font-medium flex items-center gap-3 transition-all duration-200 ${
                      isActive 
                        ? 'bg-white/10 border-l-4 border-terracota text-terracota font-bold shadow-inner shadow-black/20' 
                        : 'text-cream/70 border-l-4 border-transparent hover:bg-white/5 hover:text-white hover:border-white/20'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-terracota' : 'text-cream/50'}`} />
                    {link.label}
                  </button>
                )
              })}
              
              <hr className="border-white/10 my-2" />
              
              <a
                href="#cotizar"
                onClick={(e) => scrollToSection(e, '#cotizar')}
                className="w-full inline-block"
              >
                <div className="w-full bg-terracota text-white shadow-terracota/20 shadow-lg rounded-2xl py-3.5 text-sm font-semibold flex justify-center items-center hover:bg-terracota/90 transition-colors">
                  Reservar Turno
                </div>
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  )
}

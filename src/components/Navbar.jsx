import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
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
        className={`relative transition-all duration-700 w-full rounded-full px-4 sm:px-6 h-16 sm:h-[4.5rem] flex items-center justify-between ${
          scrolled
            ? 'bg-white/80 backdrop-blur-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/40'
            : 'bg-black/20 backdrop-blur-md border border-white/20'
        }`}
      >
        {/* Logo */}
        <a href="#inicio" onClick={(e) => scrollToSection(e, '#inicio')} className="flex items-center group relative flex-shrink-0 z-10">
          <Logo
            className={`h-20 sm:h-24 w-auto -my-6 sm:-my-8 translate-y-1 transition-all duration-300 group-hover:scale-105 ${
              scrolled ? 'text-bordeaux' : 'text-cream'
            }`}
          />
        </a>

        {/* Mobile Current Section Indicator */}
        <div className="absolute left-1/2 -translate-x-1/2 flex lg:hidden items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide gap-2 shadow-sm transition-colors duration-500 z-0
          bg-white/90 border border-neutral-100 backdrop-blur-md text-bordeaux">
          <span className="w-1.5 h-1.5 rounded-full bg-terracota animate-pulse" />
          {activeLabel}
        </div>

        {/* Desktop Links (Nested Pill) */}
        <div className={`hidden lg:flex items-center rounded-full px-2 py-1.5 transition-all duration-500 ${
          scrolled ? 'bg-neutral-100/50 border border-neutral-200/50' : 'bg-black/20 border border-white/10'
        }`}>
          {navLinks.map(link => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-5 py-2 text-xs font-bold tracking-widest uppercase transition-colors duration-300 rounded-full ${
                  isActive 
                    ? (scrolled ? 'text-white' : 'text-dark')
                    : (scrolled ? 'text-dark/60 hover:text-bordeaux' : 'text-white/80 hover:text-white')
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className={`absolute inset-0 rounded-full shadow-sm ${scrolled ? 'bg-bordeaux' : 'bg-white'}`}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    style={{ zIndex: -1 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            )
          })}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3 z-10">
          <a
            href="#cotizar"
            onClick={(e) => scrollToSection(e, '#cotizar')}
            className={`hidden sm:flex px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md hover:-translate-y-1 ${
              scrolled 
                ? 'bg-terracota text-white hover:bg-bordeaux shadow-terracota/20'
                : 'bg-white text-dark hover:bg-white/90 shadow-black/20'
            }`}
          >
            COTIZAR
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className={`lg:hidden p-2 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center relative z-50 ${
              scrolled ? 'text-dark bg-neutral-100 hover:bg-neutral-200' : 'text-white bg-white/10 hover:bg-white/20'
            }`}
            aria-label="Menú"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-[110%] left-0 right-0 bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-neutral-100 overflow-hidden lg:hidden z-40"
          >
            <div className="flex flex-col gap-2 p-6">
              {navLinks.map(link => {
                const isActive = activeSection === link.id
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`py-3.5 px-5 rounded-2xl text-[15px] font-bold tracking-wide transition-all duration-200 flex items-center gap-3 ${
                      isActive 
                        ? 'bg-bordeaux/5 text-bordeaux border-l-4 border-bordeaux' 
                        : 'text-dark/70 border-l-4 border-transparent hover:bg-neutral-50 hover:text-dark'
                    }`}
                  >
                    {link.label}
                  </a>
                )
              })}
              <hr className="border-neutral-100 my-2" />
              <a
                href="#cotizar"
                onClick={(e) => scrollToSection(e, '#cotizar')}
                className="w-full bg-terracota text-white px-6 py-4 rounded-2xl text-sm font-bold tracking-widest uppercase text-center hover:bg-bordeaux transition-colors shadow-lg shadow-terracota/20"
              >
                COTIZAR VIAJE
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

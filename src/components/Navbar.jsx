import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Users, Sparkles, Package, Anchor, Map, Utensils, Building2, Car, HeartPulse, ChevronDown } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from './Logo'

const navLinks = [
  { id: 'inicio', label: 'Inicio', href: '/' },
  { id: 'nosotros', label: 'Nosotros', href: '/#nosotros' },
  { id: 'especialidad', label: 'Disney & Universal', href: '/#especialidad' },
  { 
    id: 'servicios', 
    label: 'Servicios', 
    dropdown: [
      { id: 'cruceros', label: 'Cruceros', href: '/servicios/cruceros', icon: Anchor },
      { id: 'tours', label: 'Tours en español', href: '/servicios/tours', icon: Map },
      { id: 'all-inclusive', label: 'All Inclusive Resorts', href: '/servicios/all-inclusive', icon: Utensils },
      { id: 'hoteles', label: 'Hoteles', href: '/servicios/hoteles', icon: Building2 },
      { id: 'autos', label: 'Alquiler de Autos', href: '/servicios/autos', icon: Car },
      { id: 'asistencia', label: 'Assist Card', href: '/servicios/asistencia', icon: HeartPulse },
    ]
  },
  { id: 'paquetes', label: 'Paquetes', href: '/#paquetes' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [servicesOpen, setServicesOpen] = useState(false) // For mobile accordion
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false)
  
  const location = useLocation()
  const navigate = useNavigate()

  // Detectar scroll para cambiar estilos
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Handle smooth scroll for hash links if already on home page
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else if (location.pathname === '/' && !location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  // Spy Scroll Logic for Home Page Sections
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('')
      return
    }
    const handleScrollSpy = () => {
      const scrollY = window.scrollY
      let current = 'inicio'
      navLinks.forEach(link => {
        if (!link.dropdown && link.href.startsWith('/#')) {
          const id = link.href.split('#')[1]
          const el = document.getElementById(id)
          if (el) {
            const offsetTop = el.offsetTop - 150
            if (scrollY >= offsetTop) {
              current = link.id
            }
          }
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScrollSpy)
    handleScrollSpy()
    return () => window.removeEventListener('scroll', handleScrollSpy)
  }, [location])

  const handleLinkClick = (e, link) => {
    setMenuOpen(false)
    if (link.href.startsWith('/#')) {
      if (location.pathname === '/') {
        e.preventDefault()
        const id = link.href.split('#')[1]
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const activeLabel = location.pathname.includes('/servicios') 
    ? 'Servicios' 
    : navLinks.find(l => l.id === activeSection)?.label || 'Inicio'

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
        <Link to="/" onClick={() => { setMenuOpen(false); window.scrollTo(0, 0) }} className="flex items-center group relative flex-shrink-0 z-10">
          <Logo
            className={`h-16 sm:h-20 w-auto transition-all duration-300 group-hover:scale-105 ${
              scrolled ? 'text-bordeaux' : 'text-cream'
            }`}
          />
        </Link>

        {/* Mobile Current Section Indicator */}
        <div className={`absolute left-1/2 -translate-x-1/2 flex lg:hidden items-center justify-center text-[10px] uppercase font-bold tracking-[0.2em] transition-colors duration-500 z-0 ${
          scrolled ? 'text-dark' : 'text-white/90'
        }`}>
          {activeLabel}
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => {
            const isActive = activeSection === link.id || (link.id === 'servicios' && location.pathname.includes('/servicios'))
            
            if (link.dropdown) {
              return (
                <div 
                  key={link.id}
                  className="relative group"
                  onMouseEnter={() => setDesktopDropdownOpen(true)}
                  onMouseLeave={() => setDesktopDropdownOpen(false)}
                >
                  <button
                    className={`relative py-6 flex items-center gap-1.5 text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${
                      isActive 
                        ? (scrolled ? 'text-bordeaux' : 'text-white')
                        : (scrolled ? 'text-dark/60 hover:text-dark' : 'text-white/70 hover:text-white')
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <ChevronDown size={14} className={`transition-transform duration-300 ${desktopDropdownOpen ? 'rotate-180' : ''}`} />
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className={`absolute bottom-4 left-0 right-0 h-[2px] ${scrolled ? 'bg-bordeaux' : 'bg-white'}`}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                  
                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {desktopDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[80%] left-1/2 -translate-x-1/2 w-64 bg-white rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-neutral-100 overflow-hidden py-3"
                      >
                        {link.dropdown.map(dropItem => (
                          <Link
                            key={dropItem.id}
                            to={dropItem.href}
                            onClick={() => setDesktopDropdownOpen(false)}
                            className="flex items-center gap-3 px-5 py-3 hover:bg-neutral-50 transition-colors group/item"
                          >
                            <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center group-hover/item:bg-bordeaux/10 group-hover/item:text-bordeaux transition-colors">
                              <dropItem.icon size={14} className="text-dark/60 group-hover/item:text-bordeaux transition-colors" />
                            </div>
                            <span className="text-sm font-semibold text-dark/80 group-hover/item:text-dark transition-colors">{dropItem.label}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            return (
              <Link
                key={link.id}
                to={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`relative py-6 text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${
                  isActive 
                    ? (scrolled ? 'text-bordeaux' : 'text-white')
                    : (scrolled ? 'text-dark/60 hover:text-dark' : 'text-white/70 hover:text-white')
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className={`absolute bottom-4 left-0 right-0 h-[2px] ${scrolled ? 'bg-bordeaux' : 'bg-white'}`}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 z-10">
          <Link
            to="/#cotizar"
            onClick={(e) => handleLinkClick(e, { href: '/#cotizar' })}
            className={`hidden sm:flex px-7 py-2.5 rounded-full border text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 ${
              scrolled 
                ? 'bg-dark text-white border-dark hover:bg-white hover:text-dark'
                : 'bg-white text-dark border-white hover:bg-transparent hover:text-white'
            }`}
          >
            COTIZAR
          </Link>

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
          <div className="fixed inset-x-0 top-[5.5rem] z-40 lg:hidden px-4">
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-dark/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] rounded-3xl p-5 flex flex-col gap-2.5 max-h-[75vh] overflow-y-auto"
            >
              {[
                { id: 'inicio', label: 'Inicio', icon: Home, href: '/' },
                { id: 'nosotros', label: 'Nosotros', icon: Users, href: '/#nosotros' },
                { id: 'especialidad', label: 'Disney & Universal', icon: Sparkles, href: '/#especialidad' },
                { 
                  id: 'servicios', 
                  label: 'Servicios', 
                  dropdown: navLinks.find(l => l.id === 'servicios').dropdown 
                },
                { id: 'paquetes', label: 'Paquetes', icon: Package, href: '/#paquetes' }
              ].map((link) => {
                const isActive = activeSection === link.id || (link.id === 'servicios' && location.pathname.includes('/servicios'))
                
                if (link.dropdown) {
                  return (
                    <div key={link.id} className="flex flex-col w-full">
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={`w-full py-3.5 rounded-2xl text-left px-4 text-sm font-medium flex items-center justify-between transition-all duration-200 ${
                          isActive 
                            ? 'bg-white/10 border-l-4 border-terracota text-terracota font-bold shadow-inner shadow-black/20' 
                            : 'text-cream/70 border-l-4 border-transparent hover:bg-white/5 hover:text-white hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Map className={`w-4 h-4 ${isActive ? 'text-terracota' : 'text-cream/50'}`} />
                          {link.label}
                        </div>
                        <ChevronDown size={16} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col gap-1 mt-2 pl-4 border-l border-white/10 ml-6"
                          >
                            {link.dropdown.map(dropItem => (
                              <Link
                                key={dropItem.id}
                                to={dropItem.href}
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-white/5 transition-colors text-cream/70 hover:text-white"
                              >
                                <dropItem.icon size={14} className="text-cream/50" />
                                <span className="text-sm font-medium">{dropItem.label}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <Link
                    key={link.id}
                    to={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className={`w-full py-3.5 rounded-2xl text-left px-4 text-sm font-medium flex items-center gap-3 transition-all duration-200 ${
                      isActive 
                        ? 'bg-white/10 border-l-4 border-terracota text-terracota font-bold shadow-inner shadow-black/20' 
                        : 'text-cream/70 border-l-4 border-transparent hover:bg-white/5 hover:text-white hover:border-white/20'
                    }`}
                  >
                    <link.icon className={`w-4 h-4 ${isActive ? 'text-terracota' : 'text-cream/50'}`} />
                    {link.label}
                  </Link>
                )
              })}
              
              <hr className="border-white/10 my-2" />
              
              <Link
                to="/#cotizar"
                onClick={(e) => handleLinkClick(e, { href: '/#cotizar' })}
                className="w-full inline-block"
              >
                <div className="w-full bg-terracota text-white shadow-terracota/20 shadow-lg rounded-2xl py-3.5 text-sm font-semibold flex justify-center items-center hover:bg-terracota/90 transition-colors">
                  Reservar Turno
                </div>
              </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  )
}

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, HomeIcon, Users, Sparkles, Package, Anchor, Map, Utensils, Building2, Car, HeartPulse, ChevronDown, PlusCircle } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from './Logo'

const navLinks = [
  { id: 'inicio', label: 'Inicio', targetId: 'inicio' },
  { id: 'nosotros', label: 'Nosotros', targetId: 'nosotros' },
  { id: 'especialidad', label: 'Disney & Universal', targetId: 'especialidad' },
  { 
    id: 'servicios', 
    label: 'Servicios', 
    targetId: 'servicios',
    dropdown: [
      { id: 'cruceros', label: 'Cruceros', href: '/servicios/cruceros', icon: Anchor },
      { id: 'tours', label: 'Tours en español', href: '/servicios/tours', icon: Map },
      { id: 'all-inclusive', label: 'All Inclusive Resorts', href: '/servicios/all-inclusive', icon: Utensils },
      { id: 'hoteles', label: 'Hoteles', href: '/servicios/hoteles', icon: Building2 },
      { id: 'mas-servicios', label: 'Más Servicios', href: '/servicios/mas-servicios', icon: Package }
    ]
  },
  { id: 'paquetes', label: 'Paquetes', targetId: 'paquetes', href: '/paquetes' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [servicesOpen, setServicesOpen] = useState(false)
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false)
  
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Deshabilitar scroll en mobile cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [menuOpen])

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
        if (link.targetId) {
          const el = document.getElementById(link.targetId)
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

  const handleNavAction = (link) => {
    setMenuOpen(false)
    if (link.href) {
      navigate(link.href)
      return
    }
    if (link.targetId) {
      if (location.pathname === '/') {
        const el = document.getElementById(link.targetId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate('/', { state: { scrollTo: link.targetId } })
      }
    }
  }

  let activeLabel = 'Inicio'
  if (location.pathname.includes('/servicios')) {
    activeLabel = 'Servicios'
  } else if (location.pathname.includes('/paquetes')) {
    activeLabel = 'Paquetes'
  } else {
    activeLabel = navLinks.find(l => l.id === activeSection)?.label || 'Inicio'
  }

  // El nav se ve forzosamente blanco si el menu mobile esta abierto
  const isSolid = scrolled || menuOpen

  return (
    <>
      {/* Overlay para mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-6xl transition-all duration-500">
        <div 
          className={`relative transition-all duration-700 w-full rounded-[2rem] px-4 sm:px-8 h-16 sm:h-[4.5rem] flex items-center justify-between ${
            isSolid 
              ? 'bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-neutral-200/60' 
              : 'bg-black/25 backdrop-blur-md border border-white/20'
          }`}
        >
          
          {/* Logo */}
          <button 
            onClick={() => { setMenuOpen(false); handleNavAction({ targetId: 'inicio' }) }} 
            className="flex items-center group relative flex-shrink-0 z-10"
          >
            <Logo
              className={`h-10 sm:h-12 w-auto transition-all duration-300 group-hover:scale-105 ${
                isSolid ? 'text-bordeaux' : 'text-cream'
              }`}
            />
          </button>

          {/* Mobile Current Section Indicator */}
          <div className={`absolute left-1/2 -translate-x-1/2 flex lg:hidden items-center justify-center text-[10px] uppercase font-bold tracking-[0.2em] transition-colors duration-500 z-0 ${
            isSolid ? 'text-dark' : 'text-white/90'
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
                      onClick={() => handleNavAction(link)}
                      className={`relative py-6 flex items-center gap-1.5 text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${
                        isActive 
                          ? (isSolid ? 'text-bordeaux' : 'text-white')
                          : (isSolid ? 'text-dark/60 hover:text-dark' : 'text-white/70 hover:text-white')
                      }`}
                    >
                      <span className="relative z-10">{link.label}</span>
                      <ChevronDown size={14} className={`transition-transform duration-300 ${desktopDropdownOpen ? 'rotate-180' : ''}`} />
                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className={`absolute bottom-4 left-0 right-0 h-[2px] ${isSolid ? 'bg-bordeaux' : 'bg-white'}`}
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
                <button
                  key={link.id}
                  onClick={() => handleNavAction(link)}
                  className={`relative py-6 text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${
                    isActive 
                      ? (isSolid ? 'text-bordeaux' : 'text-white')
                      : (isSolid ? 'text-dark/60 hover:text-dark' : 'text-white/70 hover:text-white')
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className={`absolute bottom-4 left-0 right-0 h-[2px] ${isSolid ? 'bg-bordeaux' : 'bg-white'}`}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 z-10">
            <button
              onClick={() => handleNavAction({ targetId: 'cotizar' })}
              className={`hidden sm:flex px-7 py-2.5 rounded-full border text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 ${
                isSolid 
                  ? 'bg-dark text-white border-dark hover:bg-white hover:text-dark'
                  : 'bg-white text-dark border-white hover:bg-transparent hover:text-white'
              }`}
            >
              COTIZAR
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(prev => !prev)}
              className={`lg:hidden p-2 transition-colors flex items-center justify-center relative z-50 ${
                isSolid ? 'text-dark' : 'text-white'
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
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[calc(100%+0.5rem)] left-0 right-0 z-50 lg:hidden bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-neutral-100 rounded-3xl flex flex-col max-h-[75vh] overflow-hidden"
            >
              <div className="p-5 overflow-y-auto flex-1 flex flex-col gap-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                {[
                { id: 'inicio', label: 'Inicio', icon: HomeIcon, targetId: 'inicio' },
                { id: 'nosotros', label: 'Nosotros', icon: Users, targetId: 'nosotros' },
                { id: 'especialidad', label: 'Disney & Universal', icon: Sparkles, targetId: 'especialidad' },
                { 
                  id: 'servicios', 
                  label: 'Servicios', 
                  targetId: 'servicios',
                  dropdown: navLinks.find(l => l.id === 'servicios').dropdown 
                },
                { id: 'paquetes', label: 'Paquetes', icon: Package, href: '/paquetes' }
              ].map((link) => {
                const isActive = activeSection === link.id || (link.id === 'servicios' && location.pathname.includes('/servicios'))
                
                if (link.dropdown) {
                  return (
                    <div key={link.id} className="flex flex-col w-full">
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={`w-full py-3.5 rounded-2xl text-left px-4 text-sm font-medium flex items-center justify-between transition-all duration-200 ${
                          isActive 
                            ? 'bg-bordeaux/5 border-l-4 border-terracota text-terracota font-bold' 
                            : 'text-dark/70 border-l-4 border-transparent hover:bg-neutral-50 hover:text-dark'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Map className={`w-4 h-4 ${isActive ? 'text-terracota' : 'text-dark/40'}`} />
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
                            className="overflow-hidden flex flex-col gap-1 mt-2 pl-4 border-l border-neutral-100 ml-6"
                          >
                            {link.dropdown.map(dropItem => (
                              <Link
                                key={dropItem.id}
                                to={dropItem.href}
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-neutral-50 transition-colors text-dark/70 hover:text-dark"
                              >
                                <dropItem.icon size={14} className="text-dark/40" />
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
                  <button
                    key={link.id}
                    onClick={() => handleNavAction(link)}
                    className={`w-full py-3.5 rounded-2xl text-left px-4 text-sm font-medium flex items-center gap-3 transition-all duration-200 ${
                      isActive 
                        ? 'bg-bordeaux/5 border-l-4 border-terracota text-terracota font-bold' 
                        : 'text-dark/70 border-l-4 border-transparent hover:bg-neutral-50 hover:text-dark'
                    }`}
                  >
                    <link.icon className={`w-4 h-4 ${isActive ? 'text-terracota' : 'text-dark/40'}`} />
                    {link.label}
                  </button>
                )
              })}
              </div>
              
              <div className="p-5 pt-3 border-t border-neutral-100 bg-white z-10 shrink-0">
                <button
                  onClick={() => handleNavAction({ targetId: 'cotizar' })}
                  className="w-full inline-block"
                >
                  <div className="w-full bg-terracota text-white shadow-terracota/20 shadow-lg rounded-2xl py-3.5 text-sm font-semibold flex justify-center items-center hover:bg-terracota/90 transition-colors">
                    Reservar Turno
                  </div>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}

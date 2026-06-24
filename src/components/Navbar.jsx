import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'Disney & Universal', href: '#especialidad' },
  { label: 'Cruceros', href: '#cruceros' },
  { label: 'Paquetes', href: '#paquetes' },
  { label: 'Nosotros', href: '#nosotros' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center ${
      scrolled ? 'top-4' : 'top-6'
    }`}>
      <div 
        className={`transition-all duration-700 w-[92%] max-w-6xl rounded-full px-6 py-1.5 sm:py-2 flex items-center justify-between ${
          scrolled
            ? 'bg-white/80 backdrop-blur-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/40'
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Logo */}
        <a href="#inicio" className="flex items-center group relative">
          <Logo
            className={`h-20 sm:h-28 w-auto -my-6 sm:-my-8 translate-y-1 transition-all duration-300 group-hover:scale-105 ${
              scrolled ? 'text-[#5E2B41]' : 'text-[#EAE0D5]'
            }`}
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold tracking-widest uppercase transition-colors duration-300 relative group py-2 ${
                scrolled ? 'text-dark/70 hover:text-[#5E2B41]' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                scrolled ? 'bg-[#5E2B41]' : 'bg-white'
              }`} />
            </a>
          ))}
          <a
            href="#cotizar"
            className={`px-6 py-2 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-md hover:-translate-y-1 ${
              scrolled 
                ? 'bg-[#5E2B41] text-white hover:bg-[#4a2233] shadow-[#5E2B41]/20'
                : 'bg-white text-dark hover:bg-white/90 shadow-black/20'
            }`}
          >
            COTIZAR
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-full transition-colors ${
            scrolled ? 'text-dark hover:bg-black/5' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Menú"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[120%] left-[4%] right-[4%] bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] border border-black/5 overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-2 p-6">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-dark/80 hover:text-[#5E2B41] text-lg font-semibold py-4 border-b border-black/5 last:border-0 transition-colors text-center tracking-wide"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cotizar"
                onClick={() => setMenuOpen(false)}
                className="mt-6 bg-[#5E2B41] text-white px-6 py-4 rounded-full text-base font-bold tracking-widest uppercase text-center hover:bg-[#4a2233] transition-colors shadow-lg"
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

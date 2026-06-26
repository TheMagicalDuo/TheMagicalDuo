import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Castle, Ticket, Clapperboard, Ship, Palmtree, Landmark, Map, Compass, Sparkles, CheckCircle, ChevronDown, ChevronLeft, ChevronRight, Calendar } from 'lucide-react'

// SVG Icon de WhatsApp
const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
)

const destinations = [
  { id: 'Disney World (Orlando)', icon: Castle, label: 'Disney Orlando' },
  { id: 'Disneyland (California)', icon: Ticket, label: 'Disneyland CA' },
  { id: 'Universal Orlando', icon: Clapperboard, label: 'Universal' },
  { id: 'Crucero', icon: Ship, label: 'Crucero' },
  { id: 'Caribe / All Inclusive', icon: Palmtree, label: 'Caribe / Playa' },
  { id: 'Europa', icon: Landmark, label: 'Europa' },
  { id: 'Tour en español', icon: Map, label: 'Tours' },
  { id: 'Otro destino', icon: Compass, label: 'Otro' },
]

const budgetRanges = [
  'Menos de USD 1.000',
  'USD 1.000 – 2.000',
  'USD 2.000 – 4.000',
  'USD 4.000 – 8.000',
  'Más de USD 8.000',
  'Prefiero no especificar',
]

const passengersList = ['1 persona', '2 personas', '3 personas', '4 personas', '5 personas', '6 personas', '7 personas', '8 personas', '9 o más']

const countryCodes = [
  { code: '+54', label: '🇦🇷', title: 'Argentina' },
  { code: '+598', label: '🇺🇾', title: 'Uruguay' },
  { code: '+56', label: '🇨🇱', title: 'Chile' },
  { code: '+57', label: '🇨🇴', title: 'Colombia' },
  { code: '+52', label: '🇲🇽', title: 'México' },
  { code: '+51', label: '🇵🇪', title: 'Perú' },
  { code: '+1', label: '🇺🇸', title: 'USA' },
  { code: '+34', label: '🇪🇸', title: 'España' },
]

const monthNames = [
  { short: 'Ene', full: 'Enero' },
  { short: 'Feb', full: 'Febrero' },
  { short: 'Mar', full: 'Marzo' },
  { short: 'Abr', full: 'Abril' },
  { short: 'May', full: 'Mayo' },
  { short: 'Jun', full: 'Junio' },
  { short: 'Jul', full: 'Julio' },
  { short: 'Ago', full: 'Agosto' },
  { short: 'Sep', full: 'Septiembre' },
  { short: 'Oct', full: 'Octubre' },
  { short: 'Nov', full: 'Noviembre' },
  { short: 'Dic', full: 'Diciembre' }
]

const fieldClass = 'w-full bg-white border border-neutral-200 rounded-xl px-5 py-3.5 text-dark text-sm placeholder:text-dark/30 focus:outline-none focus:border-bordeaux focus:ring-4 focus:ring-bordeaux/10 transition-all duration-200 font-medium'
const labelClass = 'block text-[11px] font-bold text-dark/50 uppercase tracking-widest mb-2'

function MonthPicker({ value, onChange, placeholder, hasError }) {
  const [isOpen, setIsOpen] = useState(false)
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()
  
  // Extract year from value if it exists, otherwise use current year
  const initialYear = value ? parseInt(value.split(' ')[1]) || currentYear : currentYear
  const [viewYear, setViewYear] = useState(initialYear)
  
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const handleMonthClick = (fullMonthName) => {
    onChange(`${fullMonthName} ${viewYear}`)
    setIsOpen(false)
  }

  const prevYear = (e) => {
    e.stopPropagation()
    if (viewYear > currentYear) setViewYear(y => y - 1)
  }

  const nextYear = (e) => {
    e.stopPropagation()
    setViewYear(y => y + 1)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-white border ${hasError ? 'border-red-500 ring-2 ring-red-500/20' : 'border-neutral-200'} rounded-xl px-5 py-3.5 text-sm font-medium flex justify-between items-center transition-all duration-200 ${isOpen ? 'border-bordeaux ring-4 ring-bordeaux/10' : ''}`}
      >
        <span className={value ? 'text-dark' : 'text-dark/40'}>{value || placeholder}</span>
        <Calendar size={16} className={`text-dark/40 transition-colors duration-300 ${isOpen ? 'text-bordeaux' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full sm:w-[320px] left-0 mt-2 bg-white border border-neutral-100 rounded-2xl shadow-2xl shadow-black/10 overflow-hidden"
          >
            {/* Year Carousel Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-100 bg-neutral-50/50">
              <button 
                type="button"
                onClick={prevYear}
                disabled={viewYear <= currentYear}
                className="p-1 rounded-md hover:bg-neutral-200 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-dark/70"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="font-serif font-bold text-lg text-dark">{viewYear}</span>
              <button 
                type="button"
                onClick={nextYear}
                className="p-1 rounded-md hover:bg-neutral-200 transition-colors text-dark/70"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Months Grid */}
            <div className="grid grid-cols-4 gap-2 p-4">
              {monthNames.map((m, index) => {
                const isPast = viewYear === currentYear && index < currentMonth
                const isSelected = value === `${m.full} ${viewYear}`
                
                return (
                  <button
                    type="button"
                    key={m.short}
                    disabled={isPast}
                    onClick={() => handleMonthClick(m.full)}
                    className={`
                      py-3 rounded-xl text-sm font-medium transition-all duration-200
                      ${isPast ? 'opacity-30 cursor-not-allowed text-dark/50 bg-transparent' : ''}
                      ${!isPast && !isSelected ? 'hover:bg-neutral-100 text-dark/80 hover:text-dark' : ''}
                      ${isSelected ? 'bg-bordeaux text-white shadow-md shadow-bordeaux/20' : ''}
                    `}
                  >
                    {m.short}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function CustomSelect({ options, value, onChange, placeholder, hasError }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-white border ${hasError ? 'border-red-500 ring-2 ring-red-500/20' : 'border-neutral-200'} rounded-xl px-5 py-3.5 text-sm font-medium flex justify-between items-center transition-all duration-200 ${isOpen ? 'border-bordeaux ring-4 ring-bordeaux/10' : ''}`}
      >
        <span className={value ? 'text-dark' : 'text-dark/40'}>{value || placeholder}</span>
        <ChevronDown size={16} className={`text-dark/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-2 bg-white border border-neutral-100 rounded-xl shadow-xl shadow-black/5 max-h-60 overflow-y-auto hide-scrollbar"
          >
            {options.map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => { onChange(opt); setIsOpen(false) }}
                className={`w-full text-left px-5 py-3 text-sm transition-colors ${value === opt ? 'bg-bordeaux/5 text-bordeaux font-bold' : 'text-dark/70 hover:bg-neutral-50 hover:text-dark'}`}
              >
                {opt}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function CountrySelect({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const selectedCountry = countryCodes.find(c => c.code === value) || countryCodes[0]

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-3.5 transition-colors hover:bg-neutral-50 rounded-l-xl`}
      >
        <span className="text-base leading-none">{selectedCountry.label}</span>
        <span className="text-dark font-bold text-sm">{selectedCountry.code}</span>
        <ChevronDown size={14} className={`text-dark/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 left-0 top-full mt-2 w-[220px] bg-white border border-neutral-100 rounded-xl shadow-xl shadow-black/5 max-h-60 overflow-y-auto hide-scrollbar"
          >
            {countryCodes.map((opt) => (
              <button
                type="button"
                key={opt.code + opt.title}
                onClick={() => { onChange(opt.code); setIsOpen(false) }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-3 ${value === opt.code ? 'bg-bordeaux/5 text-bordeaux' : 'text-dark/70 hover:bg-neutral-50 hover:text-dark'}`}
              >
                <span className="text-base leading-none">{opt.label}</span>
                <span className="font-medium text-dark/50 w-10">{opt.code}</span>
                <span className="font-bold">{opt.title}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ContactForm() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    nombre: '', email: '', telefono: '', codigoPais: '+54', destino: '',
    fechas: '', pasajeros: '', presupuesto: '', comentarios: '',
  })
  const [hayChicos, setHayChicos] = useState(false)
  const [fechasFlexibles, setFechasFlexibles] = useState(false)
  const [edades, setEdades] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | success
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(ev => ({ ...ev, [name]: undefined }))
  }

  const handleSelect = (name, value) => {
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(ev => ({ ...ev, [name]: undefined }))
  }

  const selectDestino = (destId) => {
    setForm(f => ({ ...f, destino: destId }))
    if (errors.destino) setErrors(ev => ({ ...ev, destino: undefined }))
    // Auto-advance after a small delay
    setTimeout(() => {
      setStep(2)
      setErrors({})
    }, 400)
  }

  const validateStep2 = () => {
    const e = {}
    if (!form.fechas) e.fechas = 'Obligatorio'
    if (!form.pasajeros) e.pasajeros = 'Obligatorio'
    if (Object.keys(e).length > 0) {
      setErrors(e)
      return false
    }
    return true
  }

  const validateStep3 = () => {
    const e = {}
    if (!form.nombre.trim()) e.nombre = 'Obligatorio'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email inválido'
    if (!form.telefono.trim()) e.telefono = 'Obligatorio'
    if (Object.keys(e).length > 0) {
      setErrors(e)
      return false
    }
    return true
  }

  const handleNext = () => {
    if (step === 2 && validateStep2()) setStep(3)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateStep3()) return

    setStatus('sending')

    // 1. Send email silently via EmailJS
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (serviceId && templateId && publicKey) {
        emailjs.init(publicKey)
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: form.nombre,
            from_email: form.email,
            reply_to: form.email,
            telefono: `${form.codigoPais} ${form.telefono}`,
            destino: form.destino,
            fechas: `${form.fechas} ${fechasFlexibles ? '(Flexible)' : ''}`,
            pasajeros: form.pasajeros,
            edades_chicos: hayChicos && edades ? edades : 'No aplica',
            presupuesto: form.presupuesto || 'No especificado',
            comentarios: form.comentarios || 'Sin comentarios',
            message: `Nueva consulta de cotización:\n\n` +
              `- Nombre: ${form.nombre}\n` +
              `- Email: ${form.email}\n` +
              `- Teléfono: ${form.codigoPais} ${form.telefono}\n` +
              `- Destino: ${form.destino}\n` +
              `- Mes de viaje: ${form.fechas} ${fechasFlexibles ? '(Flexible)' : ''}\n` +
              `- Pasajeros: ${form.pasajeros}\n` +
              (hayChicos && edades ? `- Edades de los chicos: ${edades}\n` : '') +
              (form.presupuesto ? `- Presupuesto: ${form.presupuesto}\n` : '') +
              (form.comentarios ? `- Comentarios: ${form.comentarios}\n` : '')
          },
          publicKey
        )
      } else {
        console.warn('EmailJS credentials are not set in environment variables')
      }
    } catch (err) {
      console.error('Failed to send email via EmailJS:', err)
    }

    // 2. Open WhatsApp window for user
    const msg = `Hola! Quiero solicitar una cotización:%0A%0A` +
      `👤 *Nombre:* ${form.nombre}%0A` +
      `📧 *Email:* ${form.email}%0A` +
      `📱 *Teléfono:* ${form.codigoPais} ${form.telefono}%0A` +
      `✈️ *Destino:* ${form.destino}%0A` +
      `📅 *Mes de viaje:* ${form.fechas} ${fechasFlexibles ? '(Tengo flexibilidad)' : ''}%0A` +
      `👥 *Pasajeros:* ${form.pasajeros}%0A` +
      (hayChicos && edades ? `🎂 *Edades chicos:* ${edades}%0A` : '') +
      (form.presupuesto ? `💰 *Presupuesto:* ${form.presupuesto}%0A` : '') +
      (form.comentarios ? `💬 *Comentarios:* ${form.comentarios}` : '')

    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5491132996899'
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank')

    setTimeout(() => {
      setStatus('success')
      setStep(1)
      setForm({ nombre: '', email: '', telefono: '', codigoPais: '+54', destino: '', fechas: '', pasajeros: '', presupuesto: '', comentarios: '' })
      setHayChicos(false)
      setFechasFlexibles(false)
      setEdades('')
    }, 600)
  }

  return (
    <section id="cotizar" className="py-20 lg:py-28 bg-[#FBF8F3]/50 border-t border-neutral-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 border border-terracota/25 text-terracota bg-terracota/5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles size={14} className="animate-pulse" />
            Sin compromiso de compra
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-dark mb-4 leading-tight">
            Empecemos a <span className="italic font-normal text-terracota">planear</span>
          </h2>
          <p className="text-dark/60 text-lg max-w-xl mx-auto">
            Completá estos rápidos pasos y nos pondremos en contacto con una propuesta a medida.
          </p>
        </motion.div>

        {/* Wizard Progress */}
        {status !== 'success' && (
          <div className="flex justify-between items-center mb-10 max-w-md mx-auto relative px-2">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-neutral-200 -translate-y-1/2 z-0 rounded-full" />
            <motion.div 
              className="absolute top-1/2 left-0 h-1 bg-bordeaux -translate-y-1/2 z-0 rounded-full transition-all duration-500 ease-out"
              style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
            />
            
            {[1, 2, 3].map(s => (
              <div 
                key={s} 
                className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                  step >= s ? 'bg-bordeaux text-white shadow-lg shadow-bordeaux/20' : 'bg-white text-dark/30 border-2 border-neutral-200'
                }`}
              >
                {step > s ? <CheckCircle size={18} /> : s}
              </div>
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-10 sm:p-14 text-center shadow-2xl shadow-black/5 border border-neutral-100"
            >
              <div className="w-24 h-24 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle size={48} className="text-sage" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-dark mb-4">¡Te estamos esperando en WhatsApp!</h3>
              <p className="text-dark/60 text-lg leading-relaxed mb-8 max-w-lg mx-auto">
                Abrimos la ventana de chat para que nos mandes tu consulta. Abi o Tobi te responderán a la brevedad con toda la información.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="text-bordeaux font-bold text-sm tracking-widest uppercase hover:text-bordeaux/80 transition-colors"
              >
                Hacer otra consulta
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/5 border border-neutral-100"
            >
              
              {/* STEP 1: DESTINATION */}
              {step === 1 && (
                <div className="space-y-6 relative z-0">
                  <div className="text-center mb-8">
                    <h3 className="font-serif text-2xl font-bold text-dark mb-2">¿A dónde querés viajar?</h3>
                    <p className="text-dark/50 text-sm">Seleccioná tu destino principal para empezar</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    {destinations.map(d => {
                      const isSelected = form.destino === d.id
                      const Icon = d.icon
                      return (
                        <button
                          type="button"
                          key={d.id}
                          onClick={() => selectDestino(d.id)}
                          className={`flex flex-col items-center justify-center p-5 rounded-2xl transition-all duration-300 border-2 ${
                            isSelected 
                              ? 'bg-bordeaux/5 border-bordeaux shadow-md shadow-bordeaux/10 scale-105' 
                              : 'bg-white border-neutral-100 shadow-sm hover:border-neutral-300 text-dark/70 hover:text-dark'
                          }`}
                        >
                          <Icon size={32} strokeWidth={1.5} className={`mb-3 transition-colors ${isSelected ? 'text-bordeaux' : 'text-dark/40'}`} />
                          <span className={`text-[11px] sm:text-xs font-bold tracking-widest uppercase text-center ${isSelected ? 'text-bordeaux' : 'text-dark/60'}`}>
                            {d.label}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                  {errors.destino && <p className="text-red-500 text-sm font-bold text-center mt-4">{errors.destino}</p>}
                </div>
              )}

              {/* STEP 2: TRIP DETAILS */}
              {step === 2 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h3 className="font-serif text-2xl font-bold text-dark mb-2">Detalles del Viaje</h3>
                    <p className="text-dark/50 text-sm">Contanos un poco más sobre tu idea</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 relative z-30">
                    <div>
                      <label className={labelClass}>¿En qué mes pensás viajar? *</label>
                      <MonthPicker 
                        value={form.fechas} 
                        onChange={(v) => handleSelect('fechas', v)} 
                        placeholder="Seleccioná un mes"
                        hasError={!!errors.fechas}
                      />
                      {errors.fechas && <p className="text-red-500 text-[10px] uppercase font-bold mt-1.5">{errors.fechas}</p>}
                      <div className="mt-3">
                        <label className="flex items-center gap-2.5 cursor-pointer group w-fit">
                          <div className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${fechasFlexibles ? 'bg-sage border-sage' : 'bg-transparent border border-neutral-300 group-hover:border-sage'}`}>
                            {fechasFlexibles && <CheckCircle size={12} className="text-white" strokeWidth={3} />}
                          </div>
                          <span className="text-[11px] font-bold text-dark/50 uppercase tracking-widest">
                            Mis fechas son flexibles
                          </span>
                          <input type="checkbox" className="hidden" checked={fechasFlexibles} onChange={(e) => setFechasFlexibles(e.target.checked)} />
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>¿Cuántas personas son? *</label>
                      <CustomSelect 
                        options={passengersList} 
                        value={form.pasajeros} 
                        onChange={(v) => handleSelect('pasajeros', v)} 
                        placeholder="Seleccioná la cantidad"
                        hasError={!!errors.pasajeros}
                      />
                      {errors.pasajeros && <p className="text-red-500 text-[10px] uppercase font-bold mt-1.5">{errors.pasajeros}</p>}
                    </div>
                  </div>

                  {/* Kids Fields */}
                  <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-100 flex flex-col gap-4 relative z-10">
                    <label className="flex items-center gap-3 cursor-pointer group w-fit">
                      <div className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${hayChicos ? 'bg-bordeaux' : 'bg-white border border-neutral-300 group-hover:border-bordeaux'}`}>
                        {hayChicos && <CheckCircle size={14} className="text-white" strokeWidth={3} />}
                      </div>
                      <span className="text-xs font-bold text-dark/60 uppercase tracking-widest">
                        Sí, hay menores en el grupo
                      </span>
                      <input type="checkbox" className="hidden" checked={hayChicos} onChange={(e) => setHayChicos(e.target.checked)} />
                    </label>
                    <AnimatePresence>
                      {hayChicos && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="pt-2">
                            <label className={labelClass}>¿Qué edades tienen?</label>
                            <input value={edades} onChange={(e) => setEdades(e.target.value)} placeholder="Ej: 8 y 5 años" className={fieldClass} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="relative z-20">
                    <label className={labelClass}>Presupuesto estimado <span className="lowercase font-normal opacity-70">(opcional)</span></label>
                    <CustomSelect 
                      options={budgetRanges} 
                      value={form.presupuesto} 
                      onChange={(v) => handleSelect('presupuesto', v)} 
                      placeholder="Seleccioná un rango"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: USER DATA */}
              {step === 3 && (
                <div className="space-y-6 relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="font-serif text-2xl font-bold text-dark mb-2">Tus Datos</h3>
                    <p className="text-dark/50 text-sm">Para enviarte la propuesta final</p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Tu nombre *</label>
                      <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Ej: María" className={fieldClass} />
                      {errors.nombre && <p className="text-red-500 text-[10px] uppercase font-bold mt-1.5">{errors.nombre}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>Tu celular *</label>
                      <div className={`flex items-center bg-white border ${errors.telefono ? 'border-red-500 ring-2 ring-red-500/20' : 'border-neutral-200 focus-within:border-bordeaux focus-within:ring-4 focus-within:ring-bordeaux/10'} rounded-xl transition-all duration-200 relative z-40`}>
                        <CountrySelect
                          value={form.codigoPais}
                          onChange={(val) => handleSelect('codigoPais', val)}
                        />
                        <div className="w-px h-6 bg-neutral-200"></div>
                        <input 
                          name="telefono" 
                          value={form.telefono} 
                          onChange={(e) => {
                            const digits = e.target.value.replace(/\D/g, '')
                            let formatted = digits
                            if (digits.length > 2 && digits.length <= 6) {
                              formatted = `${digits.slice(0,2)} ${digits.slice(2)}`
                            } else if (digits.length > 6) {
                              formatted = `${digits.slice(0,2)} ${digits.slice(2,6)}-${digits.slice(6,10)}`
                            }
                            setForm(f => ({ ...f, telefono: formatted }))
                            if (errors.telefono) setErrors(ev => ({ ...ev, telefono: undefined }))
                          }} 
                          placeholder="Ej: 11 1234-5678" 
                          className="flex-1 bg-transparent px-4 py-3.5 text-dark text-sm placeholder:text-dark/30 focus:outline-none font-medium w-full"
                          maxLength={13}
                        />
                      </div>
                      {errors.telefono && <p className="text-red-500 text-[10px] uppercase font-bold mt-1.5">{errors.telefono}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label className={labelClass}>Tu Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="tu@email.com" className={fieldClass} />
                    {errors.email && <p className="text-red-500 text-[10px] uppercase font-bold mt-1.5">{errors.email}</p>}
                  </div>

                  <div>
                    <label className={labelClass}>¿Algo más que quieras contarnos? <span className="lowercase font-normal opacity-70">(opcional)</span></label>
                    <textarea
                      name="comentarios"
                      value={form.comentarios}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Ej: es el primer viaje de mis hijos, busco hotel dentro del parque..."
                      className={`${fieldClass} resize-none`}
                    />
                  </div>
                </div>
              )}

              {/* Wizard Navigation */}
              <div className="flex justify-between items-center mt-10 pt-6 border-t border-neutral-100">
                {step > 1 ? (
                  <button type="button" onClick={() => setStep(s => s - 1)} className="text-dark/50 hover:text-dark font-bold text-xs tracking-widest uppercase transition-colors px-4 py-2 flex items-center gap-2">
                    <ChevronLeft size={16} /> Atrás
                  </button>
                ) : (
                  <div /> // Placeholder to keep Next button aligned right
                )}

                {step < 3 ? (
                  <button type="button" onClick={step === 1 ? () => { if(!form.destino) setErrors({destino: 'Seleccioná un destino'}); else setStep(2) } : handleNext} className="bg-dark text-white px-8 py-3.5 rounded-full font-bold text-xs tracking-[0.15em] uppercase hover:bg-black transition-colors shadow-lg flex items-center gap-2">
                    Continuar <ChevronRight size={16} />
                  </button>
                ) : (
                  <button type="button" onClick={handleSubmit} disabled={status === 'sending'} className="bg-bordeaux text-white px-8 py-3.5 rounded-full font-bold text-xs tracking-[0.15em] uppercase hover:bg-bordeaux/90 transition-colors shadow-lg shadow-bordeaux/20 flex items-center gap-2">
                    <WhatsAppIcon className="w-5 h-5" />
                    {status === 'sending' ? 'Cargando...' : 'Finalizar'}
                  </button>
                )}
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

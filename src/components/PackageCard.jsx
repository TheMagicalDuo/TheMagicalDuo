import { motion } from 'framer-motion'
import { Waves, Sparkles, Anchor, Sun, Zap } from 'lucide-react'

const WhatsAppIcon = ({ size = 24, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
)

const iconMap = { Waves, Sparkles, Anchor, Sun, Zap }

export default function PackageCard({ pkg, imagePath }) {
  const Icon = iconMap[pkg.iconName] ?? Anchor
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5491132996899'
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(pkg.whatsappMessage)}`

  // The first detail is always the date (e.g. "Noviembre 2026"), which is already in the subtitle.
  // We slice it to prevent redundancy and keep the card compact.
  const displayDetails = pkg.details ? pkg.details.slice(1) : []

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="h-full"
    >
      <div 
        className="bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-[0_20px_40px_rgba(140,42,66,0.1)] hover:border-bordeaux/20 transition-all duration-500 flex flex-col group relative h-full cursor-default"
      >
        {/* Glare effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 -translate-x-[150%] group-hover:translate-x-[150%] transition-all duration-[1200ms] ease-in-out pointer-events-none z-30 mix-blend-overlay" />
        
        {/* Photo Header */}
        <div className="h-40 relative overflow-hidden shrink-0">
          {pkg.image2 ? (
            <>
              {/* Disney - left half */}
              <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${imagePath})` }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 50%, rgba(0,0,0,0.95) 100%)' }} />
              </div>
              {/* Universal - right half */}
              <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${pkg.image2})` }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to left, transparent 50%, rgba(0,0,0,0.95) 100%)' }} />
              </div>
            </>
          ) : (
            <img
              src={imagePath}
              alt={pkg.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
          
          {/* Floating Category Tag */}
          <div className="absolute top-3.5 left-3.5 flex flex-col gap-2">
            <div className="bg-white/90 backdrop-blur-md border border-neutral-100 text-dark text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm w-fit">
              {pkg.category}
            </div>
          </div>

          {/* Accent Icon Tag */}
          <div className="absolute top-3.5 right-3.5 w-8.5 h-8.5 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <Icon size={14} className="text-white" />
          </div>
        </div>

        {/* Body Content */}
        <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
          <div>
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              <div className="inline-flex items-center bg-sage/10 text-sage text-[9px] font-bold uppercase px-2.5 py-1 rounded-full">
                Asesoría Gratis
              </div>
              {pkg.installments && (
                <div className="inline-flex items-center bg-sage text-white text-[9px] font-bold uppercase px-2.5 py-0.5 rounded-full shadow-sm">
                  {pkg.installments}
                </div>
              )}
            </div>
            <h3 className="font-serif font-bold text-dark text-lg mb-1">{pkg.title}</h3>
            <p className="text-dark/50 text-[11px] mb-3 font-medium leading-relaxed">{pkg.subtitle}</p>

            {/* Inclusions list */}
            {displayDetails.length > 0 && (
              <div className="mb-4 bg-[#FBF8F3] border border-neutral-100 rounded-2xl p-3">
                <p className="text-[9px] text-dark/45 font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Sparkles size={10} className="text-terracota" />
                  Incluye
                </p>
                <ul className="space-y-1.5">
                  {displayDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-[11px] text-dark/75">
                      <svg className="w-3 h-3 text-sage mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-tight font-medium">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="border-t border-neutral-100 pt-4 mt-auto">
            <div className="mb-3">
              <p className="text-[10px] text-dark/40 font-semibold uppercase tracking-wider mb-0.5">Precio estimado</p>
              <p className="text-bordeaux font-bold text-2xl font-serif">{pkg.price}</p>
            </div>

            {pkg.disclaimer && (
              <p className="text-[9px] text-dark/45 leading-relaxed font-medium mb-4 italic">
                {pkg.disclaimer}
              </p>
            )}

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-bordeaux text-white py-3 rounded-xl font-bold text-xs hover:bg-bordeaux/90 transition-colors duration-300 shadow-md shadow-bordeaux/15 hover:shadow-lg"
            >
              <WhatsAppIcon size={14} />
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

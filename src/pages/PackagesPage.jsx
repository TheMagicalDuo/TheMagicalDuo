import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Waves, Sparkles, Anchor, Sun, Zap, Package } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import packages from '../data/packages.json'
import PackageCard from '../components/PackageCard'
import PageTransition from '../components/PageTransition'

const tabs = [
  { id: 'todos', label: 'Todos los destinos' },
  { id: 'disney', label: 'Disney & Universal' },
  { id: 'cruceros', label: 'Cruceros' },
  { id: 'caribe', label: 'Caribe y Playas' },
  { id: 'tours', label: 'Tours Internacionales' }
]

const getPackageImage = (pkg) => {
  if (pkg.image) return pkg.image
  const title = pkg.title.toLowerCase()
  const cat = pkg.category.toLowerCase()
  if (title.includes('disney') || cat.includes('disney')) return '/destinations/disney.png'
  if (title.includes('universal') || cat.includes('universal')) return '/destinations/universal.png'
  if (title.includes('crucer') || cat.includes('cruise') || cat.includes('crucero')) return '/destinations/cruise.png'
  return '/destinations/caribbean.png'
}

const checkMatch = (pkg, tabId) => {
  const title = pkg.title.toLowerCase()
  const cat = pkg.category.toLowerCase()
  if (tabId === 'todos') return true
  if (tabId === 'disney') return cat.includes('disney') || cat.includes('universal') || title.includes('disney') || title.includes('universal')
  if (tabId === 'cruceros') return cat.includes('crucer') || cat.includes('cruise') || title.includes('crucer') || title.includes('cruise')
  if (tabId === 'caribe') return cat.includes('caribe') || cat.includes('méxico') || title.includes('cana') || title.includes('cancún')
  if (tabId === 'tours') return cat.includes('tour') || title.includes('tour')
  return false
}

function MobileCategoryCarousel({ categoryPackages }) {
  const [emblaRef] = useEmblaCarousel({ loop: false, align: 'start' })
  return (
    <div className="overflow-hidden cursor-grab active:cursor-grabbing pb-4" ref={emblaRef}>
      <div className="flex -ml-4 sm:-ml-6">
        {categoryPackages.map((pkg) => {
          const imagePath = getPackageImage(pkg)
          return (
            <div key={pkg.id} className="flex-[0_0_85%] min-w-0 pl-4 sm:pl-6">
              <PackageCard pkg={pkg} imagePath={imagePath} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function PackagesPage() {
  const [activeTab, setActiveTab] = useState('todos')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const activeTabs = tabs.filter(tab => 
    tab.id === 'todos' || packages.some(pkg => checkMatch(pkg, tab.id))
  )

  const filteredPackages = packages.filter(pkg => checkMatch(pkg, activeTab))

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Hero Banner */}
        <div className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-dark">
            <img 
              src="/destinations/disney.png" 
              alt="Paquetes de Viaje" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-dark/40" />
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md mb-6 border border-white/20"
            >
              <Package size={32} className="text-white" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl text-white font-bold mb-4"
            >
              Nuestros Paquetes
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/80 text-xl md:text-2xl font-light"
            >
              Elegí tu próxima aventura, nosotros nos encargamos del resto.
            </motion.p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          
          {/* DESKTOP VIEW: Tabs and Grid */}
          <div className="hidden md:block">
            {/* Category Tabs */}
            <div className="flex justify-center mb-12 gap-4">
              {activeTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-bordeaux text-white shadow-md shadow-bordeaux/15'
                      : 'bg-neutral-50 border border-neutral-200/50 text-dark/70 hover:bg-neutral-100 hover:text-dark'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Grid of packages */}
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredPackages.map((pkg) => {
                  const imagePath = getPackageImage(pkg)
                  return (
                    <PackageCard key={pkg.id} pkg={pkg} imagePath={imagePath} />
                  )
                })}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* MOBILE VIEW: Separated Carousels by Category */}
          <div className="block md:hidden">
            {activeTabs.filter(t => t.id !== 'todos').map((tab) => {
              const categoryPackages = packages.filter(pkg => checkMatch(pkg, tab.id))
              if (categoryPackages.length === 0) return null

              return (
                <div key={tab.id} className="mb-14">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px flex-1 bg-neutral-200" />
                    <h3 className="font-serif text-2xl font-bold text-dark">{tab.label}</h3>
                    <div className="h-px flex-1 bg-neutral-200" />
                  </div>
                  <MobileCategoryCarousel categoryPackages={categoryPackages} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Preloader from './components/Preloader'

// Pages
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'
import PackagesPage from './pages/PackagesPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Definimos el tiempo mínimo que debe durar el preloader
    const minLoadTime = 3500
    const startTime = Date.now()

    // Pre-cargamos la primera imagen del Hero para que esté lista
    const img = new Image()
    img.src = '/destinations/disney.png'

    const finishLoading = () => {
      const elapsedTime = Date.now() - startTime
      const remainingTime = Math.max(0, minLoadTime - elapsedTime)
      setTimeout(() => setLoading(false), remainingTime)
    }

    if (img.complete) {
      finishLoading()
    } else {
      img.onload = finishLoading
      img.onerror = finishLoading
    }
  }, [])

  return (
    <main className="min-h-screen font-sans text-dark bg-white">
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      <CustomCursor />
      <Navbar />
      <FloatingWhatsApp />
      <ScrollToTop />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/servicios/:serviceId" element={<ServicePage />} />
          <Route path="/paquetes" element={<PackagesPage />} />
        </Routes>
      </AnimatePresence>
      
      <Footer />
    </main>
  )
}

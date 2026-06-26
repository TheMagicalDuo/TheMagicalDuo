import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

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
  return (
    <main className="min-h-screen font-sans text-dark bg-white">
      <CustomCursor />
      <Navbar />
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios/:serviceId" element={<ServicePage />} />
        <Route path="/paquetes" element={<PackagesPage />} />
      </Routes>
      
      <Footer />
    </main>
  )
}

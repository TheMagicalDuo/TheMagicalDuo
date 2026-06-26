import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import DisneyUniversal from '../components/DisneyUniversal'
import ServicesSummary from '../components/ServicesSummary'
import Packages from '../components/Packages'
import Process from '../components/Process'
import ContactForm from '../components/ContactForm'
import WhyUs from '../components/WhyUs'
import AboutUs from '../components/AboutUs'
import Testimonials from '../components/Testimonials'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import DreamVision from '../components/DreamVision'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo)
      if (el) {
        // slight delay ensures the page is fully mounted when navigating back from another page
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
      }
      // Clean up the state so it doesn't re-scroll on refresh
      window.history.replaceState({}, document.title)
    }
  }, [location])

  return (
    <>
      <Hero />
      <TrustBar />
      <AboutUs />
      <DisneyUniversal />
      <ServicesSummary />
      <Packages />
      <Testimonials />
      <Process />
      <DreamVision />
      <ContactForm />
      <WhyUs />
    </>
  )
}

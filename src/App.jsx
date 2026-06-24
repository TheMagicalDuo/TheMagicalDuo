import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import DisneyUniversal from './components/DisneyUniversal'
import Cruises from './components/Cruises'
import Services from './components/Services'
import Packages from './components/Packages'
import Process from './components/Process'
import ContactForm from './components/ContactForm'
import WhyUs from './components/WhyUs'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import DreamVision from './components/DreamVision'
import CustomCursor from './components/CustomCursor'

export default function App() {
  return (
    <div className="min-h-screen font-sans text-dark bg-white cursor-none">
      <CustomCursor />
      <Navbar />
      <Hero />
      <TrustBar />
      <AboutUs />
      <DisneyUniversal />
      <Cruises />
      <Services />
      <Packages />
      <Testimonials />
      <Process />
      <DreamVision />
      <ContactForm />
      <WhyUs />
      <Footer />
    </div>
  )
}

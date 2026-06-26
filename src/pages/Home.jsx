import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import DisneyUniversal from '../components/DisneyUniversal'
import Packages from '../components/Packages'
import Process from '../components/Process'
import ContactForm from '../components/ContactForm'
import WhyUs from '../components/WhyUs'
import AboutUs from '../components/AboutUs'
import Testimonials from '../components/Testimonials'
import DreamVision from '../components/DreamVision'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutUs />
      <DisneyUniversal />
      <Packages />
      <Testimonials />
      <Process />
      <DreamVision />
      <ContactForm />
      <WhyUs />
    </>
  )
}

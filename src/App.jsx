import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import StructuralAdvantage from './components/StructuralAdvantage'
import HowItWorks from './components/HowItWorks'
import PharmaVertical from './components/PharmaVertical'
import VendorDashboard from './components/VendorDashboard'
import CohortTestimonials from './components/CohortTestimonials'
import About from './components/About'
import FAQ from './components/FAQ'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-sosia-blue">
      <Navbar />
      <Hero />
      <StatsBar />
      <StructuralAdvantage />
      <HowItWorks />
      <PharmaVertical />
      <VendorDashboard />
      <CohortTestimonials />
      <About />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App

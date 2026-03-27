import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import StructuralAdvantage from './components/StructuralAdvantage'
import HowItWorks from './components/HowItWorks'
import MVPFit from './components/MVPFit'
import PilotDesign from './components/PilotDesign'
import PartnerRecommendation from './components/PartnerRecommendation'
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
      <MVPFit />
      <PilotDesign />
      <PartnerRecommendation />
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

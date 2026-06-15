import Header from './components/Header'
import PromoBar from './components/PromoBar'
import HeroSection from './components/HeroSection'
import Marquee from './components/Marquee'
import ProductSection from './components/ProductSection'
import ResultsSection from './components/ResultsSection'
import WhyWhistleSection from './components/WhyWhistleSection'
import WhistleDifferenceSection from './components/WhistleDifferenceSection'
import ComparisonSection from './components/ComparisonSection'
import FourStepsSection from './components/FourStepsSection'
import DoctorLedSection from './components/DoctorLedSection'
import FaqSection from './components/FaqSection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PromoBar />
      <HeroSection />
      <Marquee />
      <ProductSection />
      <ResultsSection />
      <WhyWhistleSection />
      <WhistleDifferenceSection />
      <ComparisonSection />
      <FourStepsSection />
      <DoctorLedSection />
      <FaqSection />
    </div>
  )
}

export default App

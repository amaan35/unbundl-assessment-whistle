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
import Footer from './components/Footer'
import StickyCtaBar from './components/StickyCtaBar'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
        <PromoBar />
      </div>

      <div className="h-[104px] shrink-0 md:h-[120px]" aria-hidden="true" />

      <main className="md:pb-[76px]">
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
        <Footer />
      </main>

      <StickyCtaBar />
    </div>
  )
}

export default App

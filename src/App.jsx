import Header from './components/Header'
import PromoBar from './components/PromoBar'
import HeroSection from './components/HeroSection'
import Marquee from './components/Marquee'
import ProductSection from './components/ProductSection'
import ResultsSection from './components/ResultsSection'
import WhyWhistleSection from './components/WhyWhistleSection'
import WhistleDifferenceSection from './components/WhistleDifferenceSection'
import ComparisonSection from './components/ComparisonSection'

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
    </div>
  )
}

export default App

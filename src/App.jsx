import Header from './components/Header'
import PromoBar from './components/PromoBar'
import HeroSection from './components/HeroSection'
import Marquee from './components/Marquee'
import ProductSection from './components/ProductSection'
import ResultsSection from './components/ResultsSection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PromoBar />
      <HeroSection />
      <Marquee />
      <ProductSection />
      <ResultsSection />
    </div>
  )
}

export default App

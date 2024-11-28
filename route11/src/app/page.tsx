import Header from './components/Header'
import About from './components/About'
import Features from './components/Features'
import WaitlistSignup from './components/WaitlistSignup'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import { Separator } from '@radix-ui/react-select'
import RoadDivider from './components/RoadDivider'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <About />
        <Features />
        <WaitlistSignup />
        <Testimonials />
      </main>
      <RoadDivider />
      <Footer />
    </div>
  )
}


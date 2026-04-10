import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Prices from './components/Prices'
import BookingCTA from './components/BookingCTA'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import Impressum from './components/Impressum'
import Datenschutz from './components/Datenschutz'
import SalonSystemPage from './components/SalonSystemPage'

function LandingPage() {
  return (
    <>
      <Hero />
      <About />
      <Prices />
      <BookingCTA />
      <Gallery />
      <Reviews />
    </>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/salon-system" element={<SalonSystemPage />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}

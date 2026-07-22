import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Gallery from './components/Gallery.jsx'
import Store from './components/Store.jsx'
import Stats from './components/Stats.jsx'
import CustomTanks from './components/CustomTanks.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="grain relative min-h-screen bg-ink text-white selection:bg-reef-coral selection:text-black">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Gallery />
        <Store />
        <Stats />
        <CustomTanks />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Gallery from './components/Gallery.jsx'
// [HIDDEN-SECTION: STORE] Kept for later use — re-enable by restoring this
// import and the <Store /> tag below. Component lives at components/Store.jsx.
// import Store from './components/Store.jsx'
import Stats from './components/Stats.jsx'
import CustomTanks from './components/CustomTanks.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="grain relative min-h-screen bg-ink text-bone selection:bg-reef-coral selection:text-forest">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Gallery />
        {/* [HIDDEN-SECTION: STORE] "The Store" is hidden from the main page so it
            can be reused later. To bring it back: uncomment the import above and
            the line below. Nav/Hero entry points are tagged the same way. */}
        {/* <Store /> */}
        <Stats />
        <CustomTanks />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

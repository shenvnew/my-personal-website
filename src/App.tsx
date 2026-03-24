import About from './components/About'
import BackgroundBlobs from './components/BackgroundBlobs'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

export default function App() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <BackgroundBlobs />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
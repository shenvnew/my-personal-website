import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection] = useState('home')

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar
        activeSection={activeSection}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main>
        <Hero />
      </main>
    </div>
  )
}
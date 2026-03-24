import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navItems } from '../data/portfolioData'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-wide text-white">
          jersey laging horni<span className="text-cyan-300">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20 md:inline-flex"
        >
          Let’s Talk
        </a>

        <button
          className="text-slate-200 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
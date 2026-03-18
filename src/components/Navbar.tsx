import type React from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data/portfolioData'

type NavbarProps = {
  activeSection: string
  mobileOpen: boolean
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Navbar({
  activeSection,
  mobileOpen,
  setMobileOpen,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-2 text-lg font-semibold tracking-wide">
          <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-sm text-blue-200">
            MyPortfolio
          </span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <a
                key={link.label}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition-all ${
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <button
          className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}
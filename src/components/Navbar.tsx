import type React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
          <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-sm text-blue-200 shadow-lg shadow-blue-900/20">
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
                className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-white/10 text-white shadow-[0_0_20px_rgba(99,102,241,0.25)]'
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
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/95 md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
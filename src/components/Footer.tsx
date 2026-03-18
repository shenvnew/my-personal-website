export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-slate-400 md:flex-row md:text-left">
        <p>© 2026 Your Name. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#home" className="hover:text-white">
            Home
          </a>
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
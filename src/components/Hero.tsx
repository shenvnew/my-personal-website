import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { sectionFadeUp } from '../utils/Animations'
import StatCard from './StatCard'

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 px-6 pb-20 pt-16 lg:px-8 lg:pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          variants={sectionFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
            <Sparkles size={16} />
            Modern Developer Portfolio
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
              Hi, I’m{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-200 to-violet-400 bg-clip-text text-transparent">
                Your Name
              </span>
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I create responsive, visually polished, and user-focused digital experiences using modern web technologies.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 font-medium text-white shadow-lg shadow-violet-900/30 transition hover:scale-[1.02]"
            >
              View Projects
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
            </a>
            <a
              href="#contact"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-4 pt-3 text-slate-300">
            <a href="#" className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
              <Github size={18} />
            </a>
            <a href="#" className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
              <Linkedin size={18} />
            </a>
            <a href="mailto:you@example.com" className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={sectionFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-blue-950/30 backdrop-blur-xl">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Profile</p>
                  <h2 className="text-xl font-semibold">Your Name</h2>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200">
                  Available for work
                </div>
              </div>

              <div className="mb-5 flex justify-center">
                <div className="h-64 w-64 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-500/30 to-violet-500/30 p-2 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
                    alt="Profile"
                    className="h-full w-full rounded-[1.5rem] object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <StatCard label="Projects" value="12+" />
                <StatCard label="Experience" value="2+ yrs" />
                <StatCard label="Tech Stack" value="10+" />
                <StatCard label="Focus" value="UI / Dev" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
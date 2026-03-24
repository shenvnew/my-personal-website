import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { socialLinks, stats } from '../data/portfolioData'
import { sectionFadeUp, staggerContainer, cardPop } from '../utils/Animations'
import StatCard from './StatCard'

export default function Hero() {
  const github = socialLinks.find((item) => item.label === 'GitHub')?.href || '#'
  const linkedin = socialLinks.find((item) => item.label === 'LinkedIn')?.href || '#'
  const email = socialLinks.find((item) => item.label === 'Email')?.href || '#'

  return (
    <section id="home" className="scroll-mt-24 px-6 pb-20 pt-16 lg:px-8 lg:pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          variants={sectionFadeUp}
          initial="hidden"
          animate="visible"
          className="space-y-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            <Sparkles size={16} />
            Premium Developer Portfolio
          </div>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
              Software Developer • IT Student • Freelancer
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              I build modern digital experiences with clean code and polished design.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-300">
              Full-stack portfolio website built with React, TypeScript, Tailwind, and
              Express — crafted to look premium, feel smooth, and scale professionally.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a href={github} target="_blank" className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:-translate-y-1 hover:bg-white/10" rel="noreferrer">
              <Github size={18} />
            </a>
            <a href={linkedin} target="_blank" className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:-translate-y-1 hover:bg-white/10" rel="noreferrer">
              <Linkedin size={18} />
            </a>
            <a href={email} className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:-translate-y-1 hover:bg-white/10">
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={cardPop}>
              <StatCard {...stat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
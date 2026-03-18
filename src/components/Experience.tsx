import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { EXPERIENCE } from '../data/portfolioData'
import { sectionFadeUp } from '../utils/Animations'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-20 lg:px-8">
      <motion.div
        variants={sectionFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl"
      >
        <SectionHeading
          eyebrow="Experience"
          title="My journey, achievements, and growth"
          description="A snapshot of the work, learning, and milestones that shaped my development path."
        />

        <div className="mt-12 space-y-6">
          {EXPERIENCE.map((item, index) => (
            <motion.div
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08 }}
              className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-xl md:grid-cols-[140px_1fr]"
            >
              <div className="flex items-start">
                <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-blue-200">
                  {item.year}
                </div>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                    <Briefcase size={16} className="text-violet-300" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm text-slate-400">
                  {item.organization}
                </p>
                <p className="mt-4 leading-8 text-slate-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
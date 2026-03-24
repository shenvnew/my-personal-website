import { motion } from 'framer-motion'
import { BriefcaseBusiness, GraduationCap } from 'lucide-react'
import { timeline } from '../data/portfolioData'
import { cardPop, staggerContainer } from '../utils/Animations'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="My journey in development and education."
          description="A timeline of experience, learning, and growth across development work and academic training."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-12 space-y-6 before:absolute before:left-5 before:top-0 before:h-full before:w-px before:bg-white/10"
        >
          {timeline.map((item) => {
            const Icon = item.type === 'experience' ? BriefcaseBusiness : GraduationCap

            return (
              <motion.div
                key={`${item.title}-${item.period}`}
                variants={cardPop}
                className="relative ml-0 rounded-3xl border border-white/10 bg-white/5 p-6 pl-16 backdrop-blur-md"
              >
                <div className="absolute left-0 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-200">
                  <Icon size={18} />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-slate-300">{item.company}</p>
                  </div>
                  <span className="text-sm text-slate-400">{item.period}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
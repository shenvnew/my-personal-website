import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import { aboutText, skills } from '../data/portfolioData'
import { cardPop, staggerContainer } from '../utils/Animations'
import InfoTile from './InfoTile'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="A developer focused on elegant interfaces and practical systems."
          description={aboutText}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <div className="inline-flex rounded-2xl border border-white/10 bg-slate-900/70 p-3 text-cyan-300">
              <Code2 size={22} />
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-white">
              I care about both function and presentation.
            </h3>
            <p className="mt-4 text-slate-300 leading-7">
              My goal is to create websites and systems that are not only usable and
              technically sound, but also visually refined. I enjoy building interfaces
              with smooth motion, strong spacing, and a professional feel that reflects
              real-world product quality.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {skills.map((skill) => (
              <motion.div key={skill.title} variants={cardPop}>
                <InfoTile
                  icon={<skill.icon size={20} />}
                  title={skill.title}
                  description={skill.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
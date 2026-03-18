import type React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import type { Project, ProjectCategory } from '../types'
import { cardHover, sectionFadeUp } from '../utils/Animations'
import SectionHeading from './SectionHeading'

type ProjectsProps = {
  selectedCategory: ProjectCategory
  setSelectedCategory: React.Dispatch<React.SetStateAction<ProjectCategory>>
  filteredProjects: Project[]
  onProjectClick: React.Dispatch<React.SetStateAction<Project | null>>
}

export default function Projects({
  selectedCategory,
  setSelectedCategory,
  filteredProjects,
  onProjectClick,
}: ProjectsProps) {
  const categories: ProjectCategory[] = ['All', 'Web App', 'UI/UX', 'Backend']

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-20 lg:px-8">
      <motion.div
        variants={sectionFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl"
      >
        <SectionHeading
          eyebrow="Projects"
          title="Selected work and creative builds"
          description="A collection of projects that highlight my skills in frontend development, UI design, and backend integration."
        />

        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => {
            const active = selectedCategory === category
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  active
                    ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg shadow-violet-900/20'
                    : 'border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl shadow-slate-950/20 backdrop-blur-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs text-blue-200 backdrop-blur-sm">
                  {project.category}
                </div>
              </div>

              <div className="space-y-4 p-6">
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/15"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
                  >
                    GitHub <Github size={16} />
                  </a>
                </div>

                <button
                  onClick={() => onProjectClick(project)}
                  className="w-full rounded-xl border border-blue-400/20 bg-blue-500/10 px-4 py-3 text-sm font-medium text-blue-100 transition hover:bg-blue-500/15"
                >
                  View Details
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
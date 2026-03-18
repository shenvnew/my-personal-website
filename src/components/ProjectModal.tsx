import { motion } from 'framer-motion'
import { ExternalLink, Github, X } from 'lucide-react'
import type { Project } from '../types'

type ProjectModalProps = {
  project: Project
  onClose: () => void
}

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 24 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-slate-950/70 p-2 text-slate-200 transition hover:bg-slate-800"
        >
          <X size={18} />
        </button>

        <div className="h-72 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-5 p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
              {project.category}
            </span>
            <h3 className="text-2xl font-semibold">{project.title}</h3>
          </div>

          <p className="leading-8 text-slate-300">{project.fullDescription}</p>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={project.demo}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 font-medium text-white"
            >
              Live Demo <ExternalLink size={16} />
            </a>
            <a
              href={project.github}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-slate-200"
            >
              GitHub <Github size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
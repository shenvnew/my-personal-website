import React, { useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import type { Project, ProjectCategory } from './types'
import { PROJECTS } from './data/portfolioData'
import BackgroundBlobs from './components/BackgroundBlobs'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return PROJECTS
    return PROJECTS.filter((project) => project.category === selectedCategory)
  }, [selectedCategory])

  React.useEffect(() => {
    const ids = ['home', 'about', 'projects', 'experience', 'contact']
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        threshold: [0.2, 0.35, 0.6],
        rootMargin: '-20% 0px -20% 0px',
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 selection:text-white">
      <BackgroundBlobs />
      <Navbar
        activeSection={activeSection}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          filteredProjects={filteredProjects}
          onProjectClick={setSelectedProject}
        />
        <Experience />
        <Contact />
      </main>

      <Footer />

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
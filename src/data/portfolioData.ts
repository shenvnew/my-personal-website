import type { ExperienceItem, Project } from '../types'

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const SKILLS = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'PostgreSQL',
  'Framer Motion',
  'Figma',
  'GitHub',
  'REST API',
]

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Disaster Response Dashboard',
    category: 'Web App',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    description: 'A real-time dashboard for incident monitoring, mapping, and emergency response coordination.',
    fullDescription: 'This project centralizes hazard visualization, response tracking, and field coordination into one responsive platform.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Leaflet', 'Node.js'],
    demo: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Portfolio UI System',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    description: 'A polished design system with reusable cards, modals, navigation, and interactive components.',
    fullDescription: 'Built to create consistent and premium interfaces across multiple pages.',
    tech: ['React', 'Tailwind', 'Framer Motion', 'Figma'],
    demo: '#',
    github: '#',
  },
]

export const EXPERIENCE: ExperienceItem[] = [
  {
    year: '2026',
    title: 'Frontend Developer',
    organization: 'Personal & Academic Projects',
    description: 'Built responsive interfaces, dashboards, and portfolio experiences using React, TypeScript, and Tailwind CSS.',
  },
  {
    year: '2025',
    title: 'UI/UX Designer',
    organization: 'Freelance / Student Work',
    description: 'Designed polished layouts and interactive prototypes.',
  },
]
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
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    description:
      'A real-time dashboard for incident monitoring, mapping, and emergency response coordination.',
    fullDescription:
      'This project centralizes hazard visualization, response tracking, and field coordination into one responsive platform. It features map-based monitoring, data panels, role-based access, and an optimized workflow for emergency teams.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Leaflet', 'Node.js'],
    demo: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Portfolio UI System',
    category: 'UI/UX',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    description:
      'A polished design system with reusable cards, modals, navigation, and interactive components.',
    fullDescription:
      'Built to create consistent and premium interfaces across multiple pages, this UI system focuses on reusable components, motion design, accessibility, and visually balanced layouts for a modern digital presence.',
    tech: ['React', 'Tailwind', 'Framer Motion', 'Figma'],
    demo: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'API Services Platform',
    category: 'Backend',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    description:
      'A backend service that handles authentication, data processing, and integrations for web apps.',
    fullDescription:
      'This backend-focused system provides modular APIs, secure authentication, database operations, and scalable architecture that can serve dashboards, admin panels, and client applications efficiently.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    demo: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Campus Information Portal',
    category: 'Web App',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    description:
      'A responsive portal for announcements, services, and campus resources.',
    fullDescription:
      'This portal improves access to campus information through a clean interface, fast navigation, and structured content sections designed for students, staff, and administrators.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    demo: '#',
    github: '#',
  },
]

export const EXPERIENCE: ExperienceItem[] = [
  {
    year: '2026',
    title: 'Frontend Developer',
    organization: 'Personal & Academic Projects',
    description:
      'Built responsive interfaces, dashboards, and portfolio experiences using React, TypeScript, and Tailwind CSS.',
  },
  {
    year: '2025',
    title: 'UI/UX Designer',
    organization: 'Freelance / Student Work',
    description:
      'Designed polished layouts, interactive prototypes, and modern web experiences with a strong focus on clarity and usability.',
  },
  {
    year: '2024',
    title: 'Web Development Learner',
    organization: 'Self-paced & School Projects',
    description:
      'Focused on JavaScript, React fundamentals, APIs, responsive design, and component-based architecture.',
  },
]
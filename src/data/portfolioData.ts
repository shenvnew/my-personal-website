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
]import {
  Code2,
  Database,
  Globe,
  Github,
  Linkedin,
  Mail,
  Palette,
  Phone,
  Rocket,
  Server,
  Shield,
  Smartphone,
} from 'lucide-react'
import type {
  ContactItemData,
  NavItem,
  Project,
  Skill,
  SocialLink,
  Stat,
  TimelineItem,
} from '../types'

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const stats: Stat[] = [
  { value: '10+', label: 'Projects Built', description: 'Academic and personal work' },
  { value: '2+', label: 'Years Learning', description: 'Frontend, backend, and UI' },
  { value: '100%', label: 'Driven', description: 'Focused on quality and growth' },
]

export const skills: Skill[] = [
  {
    title: 'Frontend Development',
    description: 'Responsive interfaces with React, TypeScript, and Tailwind.',
    icon: Globe,
  },
  {
    title: 'Backend Development',
    description: 'REST APIs using Node.js, Express, and database integration.',
    icon: Server,
  },
  {
    title: 'UI/UX Design',
    description: 'Clean layouts, strong hierarchy, and polished interactions.',
    icon: Palette,
  },
  {
    title: 'Database & Data',
    description: 'Working with PostgreSQL, schema design, and data-driven apps.',
    icon: Database,
  },
  {
    title: 'Mobile-Friendly Systems',
    description: 'Interfaces that adapt smoothly from desktop to mobile.',
    icon: Smartphone,
  },
  {
    title: 'Problem Solving',
    description: 'Debugging, optimization, and structured software thinking.',
    icon: Shield,
  },
]

export const projects: Project[] = [
  {
    id: 1,
    title: 'Disaster Response Dashboard',
    category: 'Full-Stack Web App',
    description: 'A data-driven dashboard for monitoring hazards, routes, and emergency information.',
    longDescription:
      'Built as a full-stack application with interactive mapping, hazard layers, and admin functionality. Designed for responsive use and clear information hierarchy.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/yourusername/project-one',
    live: 'https://your-demo-link.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Modern Personal Portfolio',
    category: 'Frontend Website',
    description: 'A premium portfolio with motion, glassmorphism accents, and responsive sections.',
    longDescription:
      'A highly polished portfolio website focused on premium visual presentation, reusable components, and smooth section transitions.',
    tech: ['Vite', 'React', 'Tailwind CSS', 'Framer Motion'],
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/yourusername/project-two',
    live: 'https://your-portfolio-link.com',
  },
  {
    id: 3,
    title: 'Campus CCTV Monitoring UI',
    category: 'System Concept',
    description: 'A dashboard concept for viewing multiple campus security feeds in one place.',
    longDescription:
      'Focused on information architecture, camera grouping, responsive layouts, and admin-friendly monitoring workflows.',
    tech: ['React', 'TypeScript', 'Dashboard UI'],
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/yourusername/project-three',
  },
]

export const timeline: TimelineItem[] = [
  {
    title: 'Freelance / Student Developer',
    company: 'Self-Directed Projects',
    period: '2024 – Present',
    description:
      'Building responsive web apps, portfolio systems, and full-stack learning projects using modern web technologies.',
    type: 'experience',
  },
  {
    title: 'BS Information Technology',
    company: 'University',
    period: '2022 – Present',
    description:
      'Studying software development, databases, networking, and system design while building practical projects.',
    type: 'education',
  },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/yourusername', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: Linkedin },
  { label: 'Email', href: 'mailto:youremail@example.com', icon: Mail },
]

export const contactItems: ContactItemData[] = [
  {
    title: 'Email',
    value: 'youremail@example.com',
    href: 'mailto:youremail@example.com',
    icon: Mail,
  },
  {
    title: 'Phone',
    value: '+63 900 000 0000',
    href: 'tel:+639000000000',
    icon: Phone,
  },
  {
    title: 'Availability',
    value: 'Open for internships, freelance, and collaborations',
    icon: Rocket,
  },
]

export const aboutText =
  'I am a developer and IT student passionate about building clean, modern, and meaningful digital experiences. I enjoy combining frontend polish with backend logic to create websites and systems that are both visually refined and functionally strong.'
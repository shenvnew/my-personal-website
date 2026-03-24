import {
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
    title: 'API Services Platform',
    category: 'Backend',
    description: 'A backend service that handles authentication, data processing, and integrations.',
    longDescription:
      'This backend-focused system provides modular APIs, secure authentication, database operations, and integration-ready endpoints for scalable applications.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    github: '#',
  },
  {
    id: 4,
    title: 'Campus Information Portal',
    category: 'Web App',
    description: 'A responsive portal for announcements, services, and campus resources.',
    longDescription:
      'Designed as an organized campus portal with responsive layouts, clean navigation, and modular sections for students and staff.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    github: '#',
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
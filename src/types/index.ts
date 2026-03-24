import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  label: string
  href: string
}

export interface Stat {
  label: string
  value: string
  description: string
}

export interface Skill {
  title: string
  description: string
  icon: LucideIcon
}

export interface Project {
  id: number
  title: string
  category: string
  description: string
  longDescription: string
  tech: string[]
  image: string
  github?: string
  live?: string
  featured?: boolean
}

export interface TimelineItem {
  title: string
  company: string
  period: string
  description: string
  type: 'experience' | 'education'
}

export interface SocialLink {
  label: string
  href: string
  icon: LucideIcon
}

export interface ContactItemData {
  title: string
  value: string
  href?: string
  icon: LucideIcon
}
export type ProjectCategory = 'All' | 'Web App' | 'UI/UX' | 'Backend'

export type Project = {
  id: number
  title: string
  category: Exclude<ProjectCategory, 'All'>
  image: string
  description: string
  fullDescription: string
  tech: string[]
  demo: string
  github: string
}

export type ExperienceItem = {
  year: string
  title: string
  organization: string
  description: string
}
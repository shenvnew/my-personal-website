import type { ReactNode } from 'react'

interface InfoTileProps {
  icon: ReactNode
  title: string
  description: string
}

export default function InfoTile({ icon, title, description }: InfoTileProps) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10">
      <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-slate-900/70 p-3 text-cyan-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
    </div>
  )
}
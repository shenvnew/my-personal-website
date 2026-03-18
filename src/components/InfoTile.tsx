import type React from 'react'

type InfoTileProps = {
  icon: React.ReactNode
  title: string
  text: string
}

export default function InfoTile({ icon, title, text }: InfoTileProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
      <div className="mb-3 flex items-center gap-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-2">
          {icon}
        </div>
        <h4 className="font-semibold">{title}</h4>
      </div>
      <p className="text-sm leading-7 text-slate-300">{text}</p>
    </div>
  )
}
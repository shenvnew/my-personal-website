import type React from 'react'

type ContactItemProps = {
  icon: React.ReactNode
  label: string
  value: string
}

export default function ContactItem({
  icon,
  label,
  value,
}: ContactItemProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-4">
      <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-blue-200">
        {icon}
      </div>
      <div>
        <p className="text-sm text-slate-400">{label}</p>
        <p className="font-medium text-white">{value}</p>
      </div>
    </div>
  )
}
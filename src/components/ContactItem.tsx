import type { ContactItemData } from '../types'

export default function ContactItem({ title, value, href, icon: Icon }: ContactItemData) {
  const content = (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:border-cyan-400/20 hover:bg-white/10">
      <div className="mb-3 inline-flex rounded-xl border border-white/10 bg-slate-900/70 p-3 text-cyan-300">
        <Icon size={18} />
      </div>
      <h3 className="text-sm font-medium text-slate-200">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{value}</p>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    )
  }

  return content
}
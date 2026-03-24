interface StatCardProps {
  value: string
  label: string
  description: string
}

export default function StatCard({ value, label, description }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="mt-2 text-sm font-medium text-slate-200">{label}</div>
      <p className="mt-2 text-sm text-slate-400">{description}</p>
    </div>
  )
}
type StatCardProps = {
  label: string
  value: string
}

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
      <div className="text-lg font-semibold text-white">{value}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  )
}
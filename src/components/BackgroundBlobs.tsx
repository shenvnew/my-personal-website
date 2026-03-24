export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute right-[-8%] top-[15%] h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[20%] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
    </div>
  )
}
import { motion } from 'framer-motion'

export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <motion.div
        className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
        animate={{ x: [0, 40, -20, 0], y: [0, 20, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-8%] top-[20%] h-80 w-80 rounded-full bg-violet-500/20 blur-3xl"
        animate={{ x: [0, -50, 20, 0], y: [0, 50, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-8%] left-[30%] h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{ x: [0, 20, -20, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),linear-gradient(to_bottom,rgba(15,23,42,0.65),rgba(2,6,23,0.95))]" />
    </div>
  )
}
import { useMemo } from 'react'
import { motion } from 'framer-motion'

interface ParticleFieldProps {
  count?: number
  className?: string
}

export function ParticleField({ count = 18, className }: ParticleFieldProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 1.5,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 4,
      })),
    [count]
  )

  return (
    <div className={className} aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white/50"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -18, 0], opacity: [0.15, 0.6, 0.15] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

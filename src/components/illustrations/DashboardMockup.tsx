import { motion } from 'framer-motion'

export function DashboardMockup({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 380" className={className} fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="519" height="379" rx="16" fill="var(--color-primary-deep)" stroke="rgba(255,255,255,0.1)" />

      {/* barra superior */}
      <circle cx="24" cy="24" r="4" fill="rgba(255,255,255,0.25)" />
      <circle cx="40" cy="24" r="4" fill="rgba(255,255,255,0.25)" />
      <circle cx="56" cy="24" r="4" fill="rgba(255,255,255,0.25)" />
      <rect x="380" y="16" width="120" height="16" rx="8" fill="rgba(227,160,8,0.15)" />

      {/* card de status */}
      <rect x="24" y="52" width="220" height="70" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
      <rect x="40" y="68" width="60" height="8" rx="4" fill="rgba(255,255,255,0.2)" />
      <rect x="40" y="84" width="100" height="14" rx="4" fill="rgba(255,255,255,0.9)" />
      <motion.circle
        cx="220"
        cy="87"
        r="5"
        fill="var(--color-track)"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* card de mapa mini */}
      <rect x="256" y="52" width="240" height="140" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
      <motion.path
        d="M 280 170 C 320 150, 340 110, 400 90 S 450 75, 470 68"
        stroke="var(--color-signal)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, delay: 0.3 }}
      />
      <circle cx="280" cy="170" r="4" fill="white" />
      <circle cx="470" cy="68" r="4" fill="var(--color-signal)" />

      {/* barras de gráfico */}
      <rect x="24" y="140" width="220" height="52" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
      {[18, 30, 22, 36, 26, 40].map((h, i) => (
        <motion.rect
          key={i}
          x={40 + i * 32}
          y={180 - h}
          width="14"
          height={h}
          rx="3"
          fill={i === 5 ? 'var(--color-signal)' : 'rgba(255,255,255,0.18)'}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          style={{ transformOrigin: '50% 100%' }}
          transition={{ duration: 0.5, delay: 0.1 * i }}
        />
      ))}

      {/* lista de eventos */}
      <rect x="24" y="210" width="472" height="150" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle cx="48" cy={240 + i * 30} r="4" fill={i === 0 ? 'var(--color-signal)' : 'rgba(255,255,255,0.25)'} />
          <rect x="64" y={236 + i * 30} width={i === 0 ? 180 : 140} height="8" rx="4" fill="rgba(255,255,255,0.16)" />
          <rect x="420" y={236 + i * 30} width="60" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
        </g>
      ))}
    </svg>
  )
}

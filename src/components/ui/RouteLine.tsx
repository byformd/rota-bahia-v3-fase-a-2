import { motion } from 'framer-motion'

interface RouteLineProps {
  className?: string
  /** Caminho SVG (coordenadas do viewBox) que representa a rota. */
  path: string
  viewBox: string
  duration?: number
  delay?: number
  strokeWidth?: number
  color?: string
  dashed?: boolean
  /** Se true, adiciona um ponto que percorre a rota em loop (mesmo sistema
   *  de coordenadas do path, garantindo alinhamento perfeito). */
  showPulse?: boolean
  pulseDuration?: number
  pulseDelay?: number
}

/**
 * Elemento de assinatura visual do site: uma linha de rota que se traça
 * sozinha, reforçando o conceito central da marca ("Rota" Bahia).
 * Reutilizado no Hero, na seção de Área de Atuação e como fio condutor
 * entre seções.
 */
export function RouteLine({
  className,
  path,
  viewBox,
  duration = 2.2,
  delay = 0.2,
  strokeWidth = 2,
  color = 'var(--color-signal)',
  dashed = false,
  showPulse = false,
  pulseDuration = 3.2,
  pulseDelay = 0.4,
}: RouteLineProps) {
  return (
    <svg viewBox={viewBox} className={className} fill="none" aria-hidden="true">
      {/* trilho de fundo, sutil */}
      <path d={path} stroke="var(--color-line)" strokeWidth={strokeWidth} strokeLinecap="round" />
      <motion.path
        d={path}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={dashed ? '1 10' : undefined}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration, delay, ease: [0.65, 0, 0.35, 1] }}
      />
      {showPulse && (
        <circle r={strokeWidth * 1.8} fill="white" opacity={0}>
          <animateMotion
            dur={`${pulseDuration}s`}
            begin={`${pulseDelay}s`}
            repeatCount="indefinite"
            path={path}
            keyPoints="0;1"
            keyTimes="0;1"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.08;0.9;1"
            dur={`${pulseDuration}s`}
            begin={`${pulseDelay}s`}
            repeatCount="indefinite"
          />
        </circle>
      )}
    </svg>
  )
}

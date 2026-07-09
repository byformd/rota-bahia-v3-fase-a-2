import { useEffect, useRef } from 'react'
import { useMotionValue, useSpring, type MotionValue } from 'framer-motion'

/**
 * Retorna x/y (MotionValue) que seguem o mouse de forma suave (spring),
 * normalizados entre -1 e 1. Usado para dar profundidade a camadas do
 * Hero sem custo de performance perceptível.
 */
export function useParallax(strength = 1): {
  ref: React.RefObject<HTMLDivElement | null>
  x: MotionValue<number>
  y: MotionValue<number>
} {
  const ref = useRef<HTMLDivElement>(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.6 })
  const y = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.6 })

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (prefersReduced || isTouch) return

    const node = ref.current
    if (!node) return

    function onMove(e: MouseEvent) {
      const rect = node!.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width - 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5
      rawX.set(px * strength)
      rawY.set(py * strength)
    }

    node.addEventListener('mousemove', onMove)
    return () => node.removeEventListener('mousemove', onMove)
  }, [rawX, rawY, strength])

  return { ref, x, y }
}

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Anima um número de 0 até `end` quando o elemento entra na viewport.
 * Usa easing "easeOutExpo" para uma sensação premium, não linear.
 */
export function useCountUp(end: number, duration = 1.8) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf: number
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = (now - start) / (duration * 1000)
      const t = Math.min(elapsed, 1)
      const eased = 1 - Math.pow(1 - t, 4)
      setValue(Math.floor(eased * end))
      if (t < 1) raf = requestAnimationFrame(tick)
      else setValue(end)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, end, duration])

  return { ref, value }
}

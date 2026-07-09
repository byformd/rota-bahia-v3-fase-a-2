import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, select, [role="button"], [data-cursor-hover]'
const TEXT_FIELD_SELECTOR = 'input, textarea, select, [contenteditable="true"]'

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [overTextField, setOverTextField] = useState(false)
  const [visible, setVisible] = useState(false)

  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)
  const ringX = useSpring(dotX, { stiffness: 300, damping: 30 })
  const ringY = useSpring(dotY, { stiffness: 300, damping: 30 })

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (prefersReduced || isTouch) return
    setEnabled(true)
    document.body.classList.add('custom-cursor-active')

    function onMove(e: MouseEvent) {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
      if (!visible) setVisible(true)
      const target = e.target as HTMLElement
      setHovering(!!target.closest(INTERACTIVE_SELECTOR))
      setOverTextField(!!target.closest(TEXT_FIELD_SELECTOR))
    }
    function onLeave() {
      setVisible(false)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.body.classList.remove('custom-cursor-active')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!enabled) return null
  const showCustomVisuals = visible && !overTextField

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-[var(--color-signal)]"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%', opacity: showCustomVisuals ? 1 : 0 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-white/50 mix-blend-difference"
        animate={{ width: hovering ? 44 : 26, height: hovering ? 44 : 26, opacity: showCustomVisuals ? 1 : 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  )
}

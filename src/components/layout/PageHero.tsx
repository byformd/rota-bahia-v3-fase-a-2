import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'

interface PageHeroProps {
  eyebrow: string
  title: ReactNode
  description?: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary-deep)] pb-20 pt-40">
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          background: 'radial-gradient(90% 70% at 85% 0%, rgba(22,58,99,0.85) 0%, rgba(8,26,46,1) 65%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <Container className="relative z-10 max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Eyebrow className="text-white/60">{eyebrow}</Eyebrow>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-5 font-display text-[var(--text-display-lg)] font-medium leading-[1.08] tracking-tight text-white"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 max-w-[48ch] text-lg leading-relaxed text-white/65"
          >
            {description}
          </motion.p>
        )}
      </Container>
    </section>
  )
}

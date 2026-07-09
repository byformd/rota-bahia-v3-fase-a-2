import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { whatsappHref } from '@/data/company'

interface ServiceDetailProps {
  icon: LucideIcon
  title: string
  description: string
  points: string[]
  reversed?: boolean
}

export function ServiceDetail({ icon: Icon, title, description, points, reversed }: ServiceDetailProps) {
  return (
    <div className="py-14 first:pt-0 last:pb-0">
      <Container>
        <div className={`grid gap-12 lg:grid-cols-2 lg:items-center ${reversed ? 'lg:[direction:rtl]' : ''}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            style={{ direction: 'ltr' }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/[0.06] text-[var(--color-primary)]">
              <Icon size={22} strokeWidth={2} />
            </div>
            <h2 className="mt-6 font-display text-[var(--text-display-md)] font-medium tracking-tight text-[var(--color-ink)]">
              {title}
            </h2>
            <p className="mt-4 max-w-[48ch] text-[1.0625rem] leading-relaxed text-[var(--color-ink-soft)]">
              {description}
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-[0.9375rem] text-[var(--color-ink)]">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[var(--color-track)]" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={whatsappHref(`Olá! Quero saber mais sobre ${title}.`)} target="_blank" rel="noopener noreferrer" variant="outline">
                Consultar disponibilidade
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ direction: 'ltr' }}
            className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-deep)] shadow-[var(--shadow-card)]"
          >
            <Icon size={72} strokeWidth={1} className="absolute bottom-6 right-6 text-white/15" />
          </motion.div>
        </div>
      </Container>
    </div>
  )
}

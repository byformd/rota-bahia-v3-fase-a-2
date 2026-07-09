import { motion } from 'framer-motion'
import { Target, Eye, HeartHandshake } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Container } from '@/components/ui/Container'

interface Pillar {
  icon: LucideIcon
  title: string
  description: string
}

const pillars: Pillar[] = [
  {
    icon: Target,
    title: 'Missão',
    description:
      'Conectar operações comerciais e industriais por meio de um transporte confiável, seguro e pontual, do primeiro ao último quilômetro.',
  },
  {
    icon: Eye,
    title: 'Visão',
    description:
      'Ser a transportadora de referência no eixo Bahia–São Paulo, reconhecida pela tecnologia aplicada à logística.',
  },
  {
    icon: HeartHandshake,
    title: 'Valores',
    description:
      'Pontualidade como compromisso, transparência em cada rota e cuidado com cada carga como se fosse própria.',
  },
]

export function MissionValues() {
  return (
    <section className="py-[var(--spacing-section)]">
      <Container className="grid gap-5 md:grid-cols-3">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-card)]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-primary)]/[0.06] text-[var(--color-primary)]">
              <p.icon size={20} strokeWidth={2} />
            </div>
            <h3 className="mt-6 font-display text-lg font-medium tracking-tight text-[var(--color-ink)]">
              {p.title}
            </h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--color-ink-soft)]">
              {p.description}
            </p>
          </motion.div>
        ))}
      </Container>
    </section>
  )
}

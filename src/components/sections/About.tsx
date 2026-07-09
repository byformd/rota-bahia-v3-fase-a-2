import { motion } from 'framer-motion'
import { ArrowRight, Compass, TrendingUp, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { BrandImage } from '@/components/ui/BrandImage'

interface Pillar {
  icon: LucideIcon
  label: string
  text: string
}

const pillars: Pillar[] = [
  { icon: Compass, label: 'Missão', text: 'Conectar operações com transporte confiável do primeiro ao último quilômetro.' },
  { icon: TrendingUp, label: 'Visão', text: 'Ser referência no eixo Bahia–São Paulo em tecnologia aplicada à logística.' },
  { icon: ShieldCheck, label: 'Valores', text: 'Pontualidade como compromisso, transparência em cada rota.' },
]

const milestones = [
  { year: '2017', label: 'Fundação em Simões Filho' },
  { year: '2019', label: 'Expansão para Guarulhos' },
  { year: 'Hoje', label: 'Rastreamento em tempo real' },
]

export function About() {
  return (
    <section className="py-[var(--spacing-section)]">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative order-2 lg:order-1"
        >
          <div className="overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] shadow-[var(--shadow-elevated)]">
            <BrandImage imageKey="about" className="aspect-[4/3] w-full sm:aspect-square lg:aspect-[4/3]" />
          </div>
          <div className="absolute -bottom-5 -right-3 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-4 shadow-[var(--shadow-card)] sm:-bottom-6 sm:-right-6">
            <span className="font-mono text-xl font-medium text-[var(--color-primary)]">10 anos</span>
            <p className="text-[0.75rem] text-[var(--color-ink-faint)]">de estrada, sem parar</p>
          </div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <Eyebrow>Quem somos</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 font-display text-[var(--text-display-md)] font-semibold leading-[1.08] tracking-tight text-[var(--color-ink)]"
          >
            Começamos com um caminhão
            <br />
            e uma palavra: prazo.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-[48ch] text-[1.0625rem] leading-relaxed text-[var(--color-ink-soft)]"
          >
            Com sede em Simões Filho (BA) e uma filial em Guarulhos (SP), a
            Rota Bahia atua no transporte de cargas há quase uma década — sem
            nunca abrir mão do que fundou a empresa: entregar com segurança e
            agilidade, sempre. Hoje isso significa investir continuamente em
            infraestrutura, tecnologia e numa equipe treinada para tratar
            cada carga como prioridade, não como número.
          </motion.p>

          <div className="mt-9 grid gap-6 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <p.icon size={18} strokeWidth={2} className="text-[var(--color-primary)]" />
                <p className="mt-2.5 text-[0.8125rem] font-semibold text-[var(--color-ink)]">{p.label}</p>
                <p className="mt-1 text-[0.8125rem] leading-relaxed text-[var(--color-ink-soft)]">{p.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[var(--color-line)] pt-6">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex items-center gap-2">
                <span className="font-mono text-[0.8125rem] font-semibold text-[var(--color-ink)]">{m.year}</span>
                <span className="text-[0.75rem] text-[var(--color-ink-faint)]">{m.label}</span>
                {i < milestones.length - 1 && <span className="ml-3 hidden h-px w-6 bg-[var(--color-line-strong)] sm:block" />}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button href="/empresa" variant="outline" size="md" icon={<ArrowRight size={16} />}>
              Conheça nossa história
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

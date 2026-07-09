import { motion } from 'framer-motion'
import { FileText, PackageCheck, Truck, Radar, CheckCircle2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'

interface Step {
  icon: LucideIcon
  title: string
  description: string
}

const steps: Step[] = [
  { icon: FileText, title: 'Solicitação', description: 'Você envia os detalhes da carga e recebe a cotação em minutos.' },
  { icon: PackageCheck, title: 'Coleta', description: 'Nossa equipe coleta no endereço combinado, no horário agendado.' },
  { icon: Truck, title: 'Transporte', description: 'A carga segue rota com frota própria e monitoramento constante.' },
  { icon: Radar, title: 'Monitoramento', description: 'Você acompanha cada etapa pelo código de rastreio, em tempo real.' },
  { icon: CheckCircle2, title: 'Entrega', description: 'Confirmação no destino, com assinatura digital de recebimento.' },
]

export function ProcessTimeline() {
  return (
    <section className="bg-[var(--color-surface-raised)] py-[var(--spacing-section)]">
      <Container>
        <div className="max-w-xl">
          <Eyebrow>Como funciona</Eyebrow>
          <h2 className="mt-4 font-display text-[var(--text-display-md)] font-medium tracking-tight text-[var(--color-ink)]">
            Da solicitação à entrega, sem pontos cegos
          </h2>
        </div>

        <div className="relative mt-16">
          {/* linha conectora — desenha progressivamente ao entrar na viewport */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-[var(--color-line-strong)] md:block" />
          <motion.div
            className="absolute left-0 top-6 hidden h-px w-full origin-left bg-gradient-to-r from-[var(--color-signal)] to-[var(--color-primary)] md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
          />

          <div className="grid gap-10 md:grid-cols-5 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-surface-raised)] text-[var(--color-primary)]">
                  <step.icon size={20} strokeWidth={2} />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-signal)] font-mono text-[0.625rem] font-bold text-[var(--color-primary-deep)]">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-[1rem] font-medium tracking-tight text-[var(--color-ink)]">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[26ch] text-[0.8438rem] leading-relaxed text-[var(--color-ink-soft)]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

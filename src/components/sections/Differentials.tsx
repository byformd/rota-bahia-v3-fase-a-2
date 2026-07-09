import { motion } from 'framer-motion'
import { GraduationCap, Globe2, HandCoins } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'

interface Reason {
  icon: LucideIcon
  title: string
  description: string
}

const reasons: Reason[] = [
  {
    icon: GraduationCap,
    title: 'Especialista em transporte',
    description:
      'Nossa equipe é treinada para entender as particularidades da sua operação — e cuida de toda a documentação necessária, do início ao fim do processo.',
  },
  {
    icon: Globe2,
    title: 'Atendemos todo o território nacional',
    description:
      'Cobertura em todo o Brasil, com carga sempre segurada contra roubo e avarias. Onde sua entrega precisar chegar, a gente leva — com a tranquilidade de um atendimento que não some depois da coleta.',
  },
  {
    icon: HandCoins,
    title: 'Custo-benefício de verdade',
    description:
      'Contratar quem entende do assunto sai mais barato no fim da conta. Infraestrutura, equipe e logística de qualidade — com um preço justo, porque valorizar o cliente também é fazer as contas certas.',
  },
]

export function Differentials() {
  return (
    <section className="bg-[var(--color-surface-raised)] py-[var(--spacing-section)]">
      <Container>
        <div className="max-w-xl">
          <Eyebrow>Por que a Rota Bahia</Eyebrow>
          <h2 className="mt-4 font-display text-[var(--text-display-md)] font-medium tracking-tight text-[var(--color-ink)]">
            Confiança que se constrói entrega após entrega
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-elevated)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/[0.06] text-[var(--color-primary)]">
                <reason.icon size={22} strokeWidth={2} />
              </span>
              <h3 className="mt-6 font-display text-[1.0625rem] font-medium tracking-tight text-[var(--color-ink)]">
                {reason.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--color-ink-soft)]">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

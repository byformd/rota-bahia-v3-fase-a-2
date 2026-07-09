import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'

const milestones = [
  { year: '2017', title: 'Fundação', description: 'Início da operação em Simões Filho, Bahia, com uma frota reduzida e foco regional.' },
  { year: '2019', title: 'Expansão para Guarulhos', description: 'Abertura da filial em Guarulhos, São Paulo, consolidando o eixo BA–SP como rota principal.' },
  { year: '2021', title: 'Frota própria ampliada', description: 'Investimento em veículos próprios e manutenção preventiva programada.' },
  { year: '2023', title: 'Rastreamento em tempo real', description: 'Implementação de tecnologia de rastreio para todas as cargas em rota.' },
  { year: 'Hoje', title: 'Referência no eixo BA–SP', description: 'Mais de 15.000 entregas realizadas com 100% de pontualidade.' },
]

export function Timeline() {
  return (
    <section className="bg-[var(--color-surface-raised)] py-[var(--spacing-section)]">
      <Container className="max-w-3xl">
        <Eyebrow>Nossa trajetória</Eyebrow>
        <h2 className="mt-4 font-display text-[var(--text-display-md)] font-medium tracking-tight text-[var(--color-ink)]">
          Quase 10 anos construindo essa rota
        </h2>

        <div className="relative mt-14 border-l border-[var(--color-line-strong)] pl-8">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full bg-[var(--color-signal)] ring-4 ring-[var(--color-surface-raised)]" />
              <span className="font-mono text-[0.8125rem] uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">
                {m.year}
              </span>
              <h3 className="mt-1.5 font-display text-lg font-medium tracking-tight text-[var(--color-ink)]">
                {m.title}
              </h3>
              <p className="mt-2 max-w-[52ch] text-[0.9375rem] leading-relaxed text-[var(--color-ink-soft)]">
                {m.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

import { useCountUp } from '@/hooks/useCountUp'
import { Container } from '@/components/ui/Container'

interface Stat {
  end: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { end: 10, suffix: '+', label: 'Anos de experiência' },
  { end: 15000, suffix: '+', label: 'Entregas realizadas' },
  { end: 100, suffix: '%', label: 'Pontualidade' },
  { end: 24, suffix: 'h', label: 'Suporte e rastreamento' },
]

function StatItem({ end, suffix, label }: Stat) {
  const { ref, value } = useCountUp(end)
  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="font-mono text-[clamp(2rem,1.6rem+2vw,3.25rem)] font-medium tracking-tight text-white">
        {value.toLocaleString('pt-BR')}
        <span className="text-[var(--color-signal)]">{suffix}</span>
      </div>
      <p className="mt-2 text-[0.9rem] text-white/55">{label}</p>
    </div>
  )
}

export function Stats() {
  return (
    <section className="bg-[var(--color-primary-deep)] py-[var(--spacing-section-sm)]">
      <Container className="grid grid-cols-2 gap-10 md:grid-cols-4">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </Container>
    </section>
  )
}

import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'

/**
 * Nomes fictícios — nenhuma marca real. Servem apenas para transmitir
 * prova social de forma visualmente consistente com o Design System.
 */
const clients = [
  'Norlog Distribuição',
  'Cargo Prime',
  'Via Sul Atacado',
  'Grupo Marata',
  'Bahiamix Indústria',
  'Rota Norte Alimentos',
  'Sertão Log',
  'Costa Azul Comércio',
]

export function TrustedBy() {
  const row = [...clients, ...clients]

  return (
    <section className="border-y border-[var(--color-line)] bg-[var(--color-surface)] py-14">
      <Container>
        <Eyebrow className="justify-center md:justify-start">Empresas que confiam na Rota Bahia</Eyebrow>
      </Container>

      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--color-surface)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--color-surface)] to-transparent" />

        <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-16">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 font-display text-xl font-medium tracking-tight text-[var(--color-ink-faint)]/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

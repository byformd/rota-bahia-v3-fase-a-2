import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'

interface PageStubProps {
  eyebrow: string
  title: string
  description: string
}

/**
 * Página reservada para a próxima fase de construção (ver README).
 * Mantém header, footer e Design System ativos para que o site já
 * possa ser navegado e publicado enquanto as demais páginas são
 * construídas.
 */
export function PageStub({ eyebrow, title, description }: PageStubProps) {
  return (
    <section className="flex min-h-[70vh] items-center pt-32 pb-24">
      <Container className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 font-display text-[var(--text-display-md)] font-medium tracking-tight text-[var(--color-ink)]">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-[var(--color-ink-soft)]">
          {description}
        </p>
      </Container>
    </section>
  )
}

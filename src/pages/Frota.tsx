import { PageHero } from '@/components/layout/PageHero'
import { FleetGallery } from '@/components/sections/FleetGallery'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { CTA } from '@/components/sections/CTA'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export default function Frota() {
  useDocumentTitle(
    'Frota',
    'Conheça a frota própria da Rota Bahia: carretas, trucks e furgões prontos para cada tipo de carga.'
  )

  return (
    <>
      <PageHero
        eyebrow="Frota"
        title="Veículos próprios, prontos para cada tipo de rota"
        description="Frota própria significa uma coisa simples: menos variáveis fora do nosso controle, mais previsibilidade para a sua carga."
      />
      <section className="py-[var(--spacing-section)]">
        <Container>
          <Eyebrow>Nossos veículos</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-[var(--text-display-md)] font-medium tracking-tight text-[var(--color-ink)]">
            Capacidade para cada tipo de carga
          </h2>
          <div className="mt-12">
            <FleetGallery />
          </div>
        </Container>
      </section>
      <CTA />
    </>
  )
}

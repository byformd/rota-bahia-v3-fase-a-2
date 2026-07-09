import { PageHero } from '@/components/layout/PageHero'
import { QuoteForm } from '@/components/sections/QuoteForm'
import { Container } from '@/components/ui/Container'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export default function Cotacao() {
  useDocumentTitle(
    'Solicitar Cotação',
    'Peça uma cotação de frete sob medida com a Rota Bahia e receba uma resposta rápida pelo WhatsApp.'
  )

  return (
    <>
      <PageHero
        eyebrow="Cotação"
        title="Solicite um orçamento sob medida"
        description="Dois minutos para preencher. Uma resposta objetiva, direto no seu WhatsApp — sem espera em fila de atendimento."
      />
      <section className="py-[var(--spacing-section)]">
        <Container className="max-w-2xl">
          <QuoteForm />
        </Container>
      </section>
    </>
  )
}

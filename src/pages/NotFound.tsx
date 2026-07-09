import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export default function NotFound() {
  useDocumentTitle('Página não encontrada')

  return (
    <section className="flex min-h-[80vh] items-center pt-24">
      <Container className="max-w-xl text-center">
        <Eyebrow className="justify-center">Erro 404</Eyebrow>
        <h1 className="mt-5 font-display text-[var(--text-display-lg)] font-medium tracking-tight text-[var(--color-ink)]">
          Essa rota não existe.
        </h1>
        <p className="mt-4 text-lg text-[var(--color-ink-soft)]">
          A página que você procura foi movida ou nunca existiu. Vamos te levar de volta ao caminho certo.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" variant="primary" size="lg">
            Voltar para a Home
          </Button>
        </div>
      </Container>
    </section>
  )
}

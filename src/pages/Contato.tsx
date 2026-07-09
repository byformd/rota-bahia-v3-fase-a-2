import { PageHero } from '@/components/layout/PageHero'
import { ContactForm } from '@/components/sections/ContactForm'
import { ContactInfo } from '@/components/sections/ContactInfo'
import { Container } from '@/components/ui/Container'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export default function Contato() {
  useDocumentTitle(
    'Contato',
    'Fale com a Rota Bahia por telefone, WhatsApp ou formulário — matriz em Simões Filho (BA) e filial em Guarulhos (SP).'
  )

  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com a Rota Bahia"
        description="Dúvida, parceria ou suporte — escolha o canal que preferir. Alguém de verdade responde, não um robô."
      />
      <section className="py-[var(--spacing-section)]">
        <Container className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <ContactForm />
          <ContactInfo />
        </Container>
      </section>
    </>
  )
}

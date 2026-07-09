import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { RouteLine } from '@/components/ui/RouteLine'
import { whatsappHref } from '@/data/company'

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary)] py-[var(--spacing-section-sm)]">
      <RouteLine
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 1200 300"
        path="M -50 260 C 200 260, 300 60, 600 100 S 1000 40, 1250 20"
        strokeWidth={2}
        duration={2.4}
      />
      <Container className="relative z-10 flex flex-col items-center gap-7 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl font-display text-[var(--text-display-md)] font-medium tracking-tight text-white"
        >
          Sua próxima entrega pode começar agora.
        </motion.h2>
        <p className="max-w-md text-white/70">
          Fale com nosso time e receba uma cotação sob medida — sem letra miúda, sem enrolação.
        </p>
        <Button
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          variant="signal"
          size="lg"
          icon={<ArrowRight size={18} />}
        >
          Solicitar Cotação Agora
        </Button>
      </Container>
    </section>
  )
}

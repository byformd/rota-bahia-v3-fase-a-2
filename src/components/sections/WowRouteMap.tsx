import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { RouteLine } from '@/components/ui/RouteLine'
import { ParticleField } from '@/components/ui/ParticleField'
import { BrazilSilhouette } from '@/components/illustrations/BrazilSilhouette'
import { whatsappHref } from '@/data/company'

const ROUTE_PATH = 'M 420 155 C 465 250, 425 385, 388 478'
const ROUTE_VIEWBOX = '0 0 600 620'

export function WowRouteMap() {
  return (
    <section className="bg-noise relative overflow-hidden bg-[var(--color-primary-deep)] py-[var(--spacing-section)] text-white">
      <div
        className="absolute inset-0 opacity-70"
        style={{ background: 'radial-gradient(70% 60% at 68% 45%, rgba(22,58,99,0.9) 0%, rgba(8,26,46,1) 70%)' }}
      />
      <ParticleField count={16} className="pointer-events-none absolute inset-0" />

      <Container className="relative z-10 grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <Eyebrow className="text-white/60">Cobertura nacional</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="mt-5 font-display text-[var(--text-display-lg)] font-medium leading-[1.05] tracking-tight text-white"
          >
            Da Bahia a Guarulhos,
            <br />
            <span className="text-white/45">uma rota mapeada</span>
            <br />
            do início ao fim.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-[42ch] text-lg leading-relaxed text-white/60"
          >
            Cada carga que sai do nosso pátio em Simões Filho é acompanhada
            até a entrega — com pontos de controle, previsão de chegada e
            visibilidade total para você em cada etapa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9"
          >
            <Button
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              variant="signal"
              size="lg"
              icon={<ArrowRight size={18} />}
            >
              Solicitar Cotação
            </Button>
          </motion.div>
        </div>

        {/* mapa */}
        <div className="relative mx-auto aspect-square w-full max-w-[520px]">
          <BrazilSilhouette className="absolute inset-0 h-full w-full text-white" />

          <RouteLine
            className="absolute inset-0 h-full w-full"
            viewBox={ROUTE_VIEWBOX}
            path={ROUTE_PATH}
            strokeWidth={2.5}
            duration={2.2}
            delay={0.3}
            color="var(--color-signal)"
            showPulse
            pulseDuration={3.4}
            pulseDelay={2.5}
          />

          {/* nó — Bahia */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="glass-panel absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full py-1.5 pl-1.5 pr-4"
            style={{ left: `${(420 / 600) * 100}%`, top: `${(155 / 620) * 100}%` }}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-signal)] text-[0.65rem] font-bold text-[var(--color-primary-deep)]">
              BA
            </span>
            <span className="text-[0.8rem] font-medium text-white">Simões Filho</span>
          </motion.div>

          {/* nó — Guarulhos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2.2, duration: 0.4 }}
            className="glass-panel absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full py-1.5 pl-1.5 pr-4"
            style={{ left: `${(388 / 600) * 100}%`, top: `${(478 / 620) * 100}%` }}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[0.65rem] font-bold text-[var(--color-primary-deep)]">
              SP
            </span>
            <span className="text-[0.8rem] font-medium text-white">Guarulhos</span>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

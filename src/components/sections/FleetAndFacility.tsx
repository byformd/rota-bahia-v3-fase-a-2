import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Gauge, Warehouse, DoorOpen, Forklift, Layers } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { BrandImage } from '@/components/ui/BrandImage'

const facilityFeatures = [
  { icon: Warehouse, label: '4.200 m² de área coberta' },
  { icon: DoorOpen, label: '12 docas para carga e descarga' },
  { icon: Forklift, label: 'Movimentação com equipamento próprio' },
  { icon: Layers, label: 'Cross-docking para cargas fracionadas' },
]

export function FleetAndFacility() {
  return (
    <section className="py-[var(--spacing-section)]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow>Frota e estrutura</Eyebrow>
            <h2 className="mt-4 font-display text-[var(--text-display-md)] font-medium tracking-tight text-[var(--color-ink)]">
              Veículos próprios. Pátio próprio.
              <br />
              Controle do início ao fim.
            </h2>
          </div>
          <Link
            to="/frota"
            className="inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-[var(--color-primary)]"
          >
            Ver frota completa
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* frota */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] shadow-[var(--shadow-card)]"
          >
            <BrandImage imageKey="fleet" className="aspect-[4/3] w-full sm:aspect-[16/10]" />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(0deg, rgba(8,26,46,0.88) 0%, rgba(8,26,46,0.1) 55%)' }}
            />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <span className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-white/60">Frota própria</span>
              <div className="mt-2 flex items-center gap-2 text-white">
                <Gauge size={16} />
                <span className="text-[0.9375rem] font-medium">Carretas, trucks e furgões — manutenção preventiva programada</span>
              </div>
            </div>
          </motion.div>

          {/* centro logístico */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]"
          >
            <BrandImage imageKey="facility" className="aspect-[16/10] w-full sm:aspect-[16/9]" />
            <div className="p-6 sm:p-8">
              <span className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">
                Centro logístico — Simões Filho
              </span>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--color-ink-soft)]">
                Nosso pátio funciona como ponto de controle da operação: cargas
                conferidas, armazenadas e organizadas antes de seguir rota.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {facilityFeatures.map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/[0.06] text-[var(--color-primary)]">
                      <f.icon size={17} strokeWidth={2} />
                    </span>
                    <span className="text-[0.875rem] text-[var(--color-ink)]">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

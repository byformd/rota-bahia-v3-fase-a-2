import { motion } from 'framer-motion'
import { Satellite, Activity, Users, Headset, ShieldCheck, LayoutDashboard } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { DashboardMockup } from '@/components/illustrations/DashboardMockup'

interface TechItem {
  icon: LucideIcon
  title: string
  description: string
}

const items: TechItem[] = [
  { icon: Satellite, title: 'GPS em toda a frota', description: 'Localização precisa, atualizada continuamente durante toda a rota.' },
  { icon: Activity, title: 'Monitoramento ativo', description: 'Equipe acompanhando cada carga em tempo real, não só o veículo.' },
  { icon: Users, title: 'Equipe especializada', description: 'Motoristas e operadores treinados para cargas sensíveis e prazos apertados.' },
  { icon: Headset, title: 'Atendimento direto', description: 'Um canal, uma resposta — sem transferências entre setores.' },
  { icon: ShieldCheck, title: 'Segurança em camadas', description: 'Rastreamento, seguro e protocolos de verificação em cada etapa.' },
  { icon: LayoutDashboard, title: 'Painel de acompanhamento', description: 'Visibilidade completa da operação, do início da rota até a entrega.' },
]

export function TechShowcase() {
  return (
    <section className="bg-[var(--color-primary-deep)] py-[var(--spacing-section)] text-white">
      <Container className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <Eyebrow className="text-white/60">Tecnologia</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 font-display text-[var(--text-display-md)] font-medium leading-[1.08] tracking-tight text-white"
          >
            Tecnologia que sustenta
            <br />
            cada promessa de prazo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-[46ch] text-[1.0625rem] leading-relaxed text-white/60"
          >
            Pontualidade não é sorte — é o resultado de rastrear, monitorar e
            reagir antes que um imprevisto vire atraso.
          </motion.p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <item.icon size={19} strokeWidth={2} className="text-[var(--color-signal)]" />
                <p className="mt-3 text-[0.9rem] font-medium text-white">{item.title}</p>
                <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-white/50">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="glass-panel rounded-2xl p-3"
          style={{ boxShadow: 'var(--glow-primary)' }}
        >
          <DashboardMockup className="w-full" />
        </motion.div>
      </Container>
    </section>
  )
}

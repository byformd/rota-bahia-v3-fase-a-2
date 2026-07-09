import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Truck, Workflow, Home as HomeIcon, PackageCheck, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import type { LucideIcon } from 'lucide-react'

interface Service {
  index: string
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
}

const services: Service[] = [
  {
    index: '01',
    icon: Truck,
    title: 'Cargas Fechadas e Fracionadas',
    description:
      'Frete dedicado para grandes volumes ou espaço compartilhado para cargas menores, com o mesmo rigor operacional.',
    tags: ['Veículo exclusivo', 'Cotação por m³'],
  },
  {
    index: '02',
    icon: Workflow,
    title: 'Logística Integrada',
    description:
      'Planejamento de rotas, armazenagem e distribuição pensados como uma cadeia única, do pátio até a entrega.',
    tags: ['Armazenagem', 'Rota otimizada'],
  },
  {
    index: '03',
    icon: HomeIcon,
    title: 'Mudanças Comerciais e Residenciais',
    description:
      'Transporte de mudanças com embalagem especializada, seguro e equipe treinada para cargas sensíveis.',
    tags: ['Seguro incluso', 'Equipe treinada'],
  },
  {
    index: '04',
    icon: PackageCheck,
    title: 'Porta a Porta',
    description:
      'Coleta e entrega direta no endereço final, com rastreamento contínuo do início ao fim da rota.',
    tags: ['Coleta agendada', 'Confirmação digital'],
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-[var(--spacing-section)]">
      <Container>
        <div className="max-w-xl">
          <Eyebrow>O que fazemos</Eyebrow>
          <h2 className="mt-4 font-display text-[var(--text-display-md)] font-medium tracking-tight text-[var(--color-ink)]">
            Não existe carga genérica.
            <br />
            Por isso, nosso serviço também não é.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-primary)]/25 hover:shadow-[var(--shadow-elevated)]"
            >
              {/* barra de destaque no topo, revela no hover */}
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[var(--color-signal)] to-[var(--color-primary)] transition-transform duration-500 group-hover:scale-x-100" />

              {/* número-marca d'água */}
              <span className="pointer-events-none absolute -right-2 -top-3 font-mono text-[4.5rem] font-medium leading-none text-[var(--color-ink)]/[0.03] transition-colors duration-500 group-hover:text-[var(--color-primary)]/[0.05]">
                {service.index}
              </span>

              {/* glow que segue o hover */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--color-signal)]/0 blur-3xl transition-colors duration-700 group-hover:bg-[var(--color-signal)]/[0.12]" />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/[0.06] text-[var(--color-primary)] shadow-[0_0_0_0_rgba(15,42,74,0)] transition-all duration-500 group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:shadow-[var(--glow-primary)]">
                <service.icon size={22} strokeWidth={2} />
              </div>

              <h3 className="relative mt-6 font-display text-lg font-medium tracking-tight text-[var(--color-ink)]">
                {service.title}
              </h3>
              <p className="relative mt-3 text-[0.9375rem] leading-relaxed text-[var(--color-ink-soft)]">
                {service.description}
              </p>

              <div className="relative mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--color-line)] bg-[var(--color-canvas)] px-2.5 py-1 text-[0.7rem] font-medium text-[var(--color-ink-soft)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to="/servicos"
                className="relative mt-6 inline-flex items-center gap-1.5 text-[0.875rem] font-medium text-[var(--color-primary)]"
              >
                Saiba mais
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

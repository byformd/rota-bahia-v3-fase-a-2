import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Radio } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { ParticleField } from '@/components/ui/ParticleField'
import { BrandImage } from '@/components/ui/BrandImage'
import { useParallax } from '@/hooks/useParallax'
import { whatsappHref } from '@/data/company'

const ease = [0.16, 1, 0.3, 1] as const

const stats = [
  { value: '100%', label: 'Pontualidade' },
  { value: '15k+', label: 'Entregas' },
  { value: '24h', label: 'Suporte ativo' },
]

export function Hero() {
  const { ref, x, y } = useParallax(14)

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[var(--color-primary-deep)] pt-28 pb-16 sm:pt-24"
    >
      {/* ---------- fotografia de fundo ---------- */}
      <motion.div className="absolute inset-0" style={{ x, y, scale: 1.06 }}>
        <BrandImage imageKey="hero" priority className="h-full w-full" />
      </motion.div>

      {/* gradiente para legibilidade do texto sobre a foto */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(8,26,46,0.88) 0%, rgba(8,26,46,0.82) 40%, rgba(8,26,46,0.94) 100%), radial-gradient(90% 70% at 20% 30%, rgba(8,26,46,0.35) 0%, rgba(8,26,46,0.85) 75%)',
        }}
      />

      <ParticleField count={14} className="pointer-events-none absolute inset-0" />

      {/* ---------- conteúdo ---------- */}
      <Container className="relative z-10">
        <div className="max-w-[38rem]">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            <Eyebrow className="text-white/60">
              <span className="flex items-center gap-1.5">
                <Radio size={12} className="animate-pulse text-[var(--color-signal)]" />
                Transporte de cargas B2B · Bahia ⟶ São Paulo
              </span>
            </Eyebrow>
          </motion.div>

          <h1 className="mt-6 font-display text-[var(--text-display-xl)] leading-[1.02] tracking-tight text-white">
            {['Sua operação exige', 'uma transportadora'].map((line, li) => (
              <span key={li} className="block overflow-hidden">
                <motion.span
                  className="block font-semibold"
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, delay: 0.15 + li * 0.1, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
            <span className="block overflow-hidden">
              <motion.span
                className="block font-normal text-white/50"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.8, delay: 0.35, ease }}
              >
                à altura dela.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease }}
            className="mt-7 max-w-[44ch] text-lg leading-relaxed text-white/70"
          >
            Cargas fechadas, fracionadas e mudanças com frota própria e
            rastreamento em tempo real — para empresas que não têm margem
            para atraso.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.68, ease }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              variant="signal"
              size="lg"
              icon={<ArrowRight size={18} strokeWidth={2.25} />}
              style={{ boxShadow: 'var(--glow-signal)' }}
            >
              Solicitar Cotação
            </Button>
            <Button href="/rastreamento" variant="ghost" size="lg" icon={<MapPin size={18} />} iconPosition="left">
              Rastrear Carga
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-14 flex gap-8 border-t border-white/15 pt-6"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-mono text-xl font-medium text-white">{s.value}</div>
                <div className="mt-1 text-[0.75rem] text-white/50">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute inset-x-0 bottom-6 z-10 hidden flex-col items-center gap-2 text-white/40 sm:flex"
      >
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em]">Role para descobrir</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="h-9 w-[1.5px] bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  )
}

import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, PackageSearch, MapPin, CheckCircle2, AlertCircle } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { fetchShipment, TrackingNotFoundError, type Shipment } from '@/services/trackingApi'
import { shipmentStatusLabels, shipmentStatusColor } from '@/utils/shipmentStatus'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

type RequestState = 'idle' | 'loading' | 'success' | 'not-found' | 'error'

export default function Rastreamento() {
  useDocumentTitle(
    'Rastreamento de Carga',
    'Consulte o status da sua entrega em tempo real usando o código de rastreio da Rota Bahia.'
  )

  const [code, setCode] = useState('')
  const [state, setState] = useState<RequestState>('idle')
  const [shipment, setShipment] = useState<Shipment | null>(null)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!code.trim()) return

    setState('loading')
    try {
      const result = await fetchShipment(code.trim())
      setShipment(result)
      setState('success')
    } catch (err) {
      setShipment(null)
      setState(err instanceof TrackingNotFoundError ? 'not-found' : 'error')
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Rastreamento"
        title="Acompanhe sua carga em tempo real"
        description="Digite o código de rastreio recebido no momento da coleta para ver o status atualizado da sua entrega."
      />

      <section className="py-[var(--spacing-section)]">
        <Container className="max-w-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-ink-faint)]" />
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Ex: RB2026001234"
                className="w-full rounded-xl border border-[var(--color-line-strong)] bg-white py-3.5 pl-11 pr-4 text-[0.9375rem] uppercase tracking-wide text-[var(--color-ink)] placeholder:normal-case placeholder:tracking-normal focus:border-[var(--color-primary)] focus:outline-none"
              />
            </div>
            <Button type="submit" variant="primary" size="lg" disabled={state === 'loading'}>
              {state === 'loading' ? 'Buscando...' : 'Rastrear'}
            </Button>
          </form>

          <AnimatePresence mode="wait">
            {state === 'not-found' && (
              <motion.div
                key="not-found"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 flex items-start gap-3 rounded-xl border border-[#F5C6A0] bg-[#FDF3E8] p-5 text-[0.9375rem] text-[#7A5300]"
              >
                <AlertCircle size={19} className="mt-0.5 shrink-0" />
                Não encontramos nenhuma carga com esse código. Confira se digitou corretamente ou fale com nosso suporte pelo WhatsApp.
              </motion.div>
            )}

            {state === 'error' && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 flex items-start gap-3 rounded-xl border border-[#F1B0A8] bg-[#FCEBE9] p-5 text-[0.9375rem] text-[#96281B]"
              >
                <AlertCircle size={19} className="mt-0.5 shrink-0" />
                Não foi possível consultar o rastreamento agora. Tente novamente em instantes.
              </motion.div>
            )}

            {state === 'success' && shipment && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-card)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">
                      {shipment.trackingCode}
                    </span>
                    <h2 className="mt-1 font-display text-lg font-medium text-[var(--color-ink)]">
                      {shipment.origem} → {shipment.destino}
                    </h2>
                  </div>
                  <span
                    className="rounded-full px-3 py-1.5 text-[0.8125rem] font-medium text-white"
                    style={{ backgroundColor: shipmentStatusColor[shipment.status] }}
                  >
                    {shipmentStatusLabels[shipment.status]}
                  </span>
                </div>

                <div className="mt-8 flex flex-col gap-6 border-l border-[var(--color-line-strong)] pl-6">
                  {shipment.events.length === 0 && (
                    <p className="text-[0.9375rem] text-[var(--color-ink-soft)]">
                      Ainda não há eventos registrados para esta carga.
                    </p>
                  )}
                  {shipment.events.map((event, i) => (
                    <div key={event.id} className="relative">
                      <span className="absolute -left-[1.9rem] top-1 h-2.5 w-2.5 rounded-full bg-[var(--color-signal)] ring-4 ring-[var(--color-surface)]" />
                      <div className="flex items-center gap-2 text-[0.8125rem] text-[var(--color-ink-faint)]">
                        <MapPin size={13} /> {event.location}
                        {i === shipment.events.length - 1 && (
                          <CheckCircle2 size={13} className="text-[var(--color-track)]" />
                        )}
                      </div>
                      <p className="mt-1 text-[0.9375rem] text-[var(--color-ink)]">{event.description}</p>
                      <span className="text-[0.75rem] text-[var(--color-ink-faint)]">
                        {new Date(event.occurredAt).toLocaleString('pt-BR')}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {state === 'idle' && (
            <div className="mt-14 flex flex-col items-center gap-3 text-center text-[var(--color-ink-faint)]">
              <PackageSearch size={32} strokeWidth={1.25} />
              <p className="max-w-xs text-[0.875rem]">
                O código de rastreio é enviado por e-mail ou WhatsApp assim que a coleta é confirmada.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  )
}

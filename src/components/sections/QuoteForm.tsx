import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { quoteSchema, servicoLabels, type QuoteFormValues } from '@/types/quote'
import { Button } from '@/components/ui/Button'
import { company } from '@/data/company'
import { submitQuoteToBackend } from '@/services/leadsApi'
import { cn } from '@/utils/cn'

const inputClass =
  'w-full rounded-xl border border-[var(--color-line-strong)] bg-white px-4 py-3 text-[0.9375rem] text-[var(--color-ink)] ' +
  'placeholder:text-[var(--color-ink-faint)] transition-colors focus:border-[var(--color-primary)] focus:outline-none'

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[0.8125rem] font-medium text-[var(--color-ink-soft)]">{label}</span>
      {children}
      {error && <span className="text-[0.8rem] text-red-600">{error}</span>}
    </label>
  )
}

function buildWhatsAppMessage(data: QuoteFormValues) {
  return (
    `Olá! Quero solicitar uma cotação de frete.\n\n` +
    `*Nome:* ${data.nome}\n` +
    (data.empresa ? `*Empresa:* ${data.empresa}\n` : '') +
    `*Telefone:* ${data.telefone}\n` +
    `*E-mail:* ${data.email}\n` +
    `*Serviço:* ${servicoLabels[data.tipoServico]}\n` +
    `*Origem:* ${data.origem}\n` +
    `*Destino:* ${data.destino}\n` +
    `*Descrição da carga:* ${data.descricaoCarga}`
  )
}

export function QuoteForm() {
  const [sent, setSent] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({ resolver: zodResolver(quoteSchema) })

  const onSubmit = (data: QuoteFormValues) => {
    const message = buildWhatsAppMessage(data)
    window.open(`https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(message)}`, '_blank')
    submitQuoteToBackend(data)
    setSent(true)
    reset()
  }

  return (
    <div className="relative rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-card)] md:p-10">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center py-10 text-center"
          >
            <CheckCircle2 size={40} className="text-[var(--color-track)]" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-lg font-medium text-[var(--color-ink)]">
              Cotação enviada para o WhatsApp
            </h3>
            <p className="mt-2 max-w-[38ch] text-[0.9375rem] text-[var(--color-ink-soft)]">
              Continue a conversa na aba que abrimos para você — nosso time responde em poucos minutos.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-6 text-[0.875rem] font-medium text-[var(--color-primary)] underline underline-offset-4"
            >
              Enviar outra cotação
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="grid gap-5 sm:grid-cols-2"
            noValidate
          >
            <Field label="Nome completo" error={errors.nome?.message}>
              <input className={inputClass} placeholder="Seu nome" {...register('nome')} />
            </Field>
            <Field label="Empresa (opcional)" error={errors.empresa?.message}>
              <input className={inputClass} placeholder="Nome da empresa" {...register('empresa')} />
            </Field>
            <Field label="Telefone / WhatsApp" error={errors.telefone?.message}>
              <input className={inputClass} placeholder="(71) 90000-0000" {...register('telefone')} />
            </Field>
            <Field label="E-mail" error={errors.email?.message}>
              <input className={inputClass} placeholder="voce@empresa.com" {...register('email')} />
            </Field>

            <Field label="Tipo de serviço" error={errors.tipoServico?.message}>
              <select className={cn(inputClass, 'appearance-none')} {...register('tipoServico')} defaultValue="">
                <option value="" disabled>
                  Selecione um serviço
                </option>
                {Object.entries(servicoLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Origem" error={errors.origem?.message}>
                <input className={inputClass} placeholder="Cidade / UF" {...register('origem')} />
              </Field>
              <Field label="Destino" error={errors.destino?.message}>
                <input className={inputClass} placeholder="Cidade / UF" {...register('destino')} />
              </Field>
            </div>

            <div className="sm:col-span-2">
              <Field label="Descrição da carga" error={errors.descricaoCarga?.message}>
                <textarea
                  className={cn(inputClass, 'min-h-[110px] resize-none')}
                  placeholder="Tipo de mercadoria, volume estimado, peso aproximado..."
                  {...register('descricaoCarga')}
                />
              </Field>
            </div>

            <div className="sm:col-span-2">
              <Button type="submit" variant="primary" size="lg" icon={<Send size={17} />} className="w-full sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Cotação'}
              </Button>
              <p className="mt-3 text-[0.8125rem] text-[var(--color-ink-faint)]">
                Ao enviar, você será redirecionado ao WhatsApp com os dados preenchidos.
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AnimatePresence, motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { contactSchema, type ContactFormValues } from '@/types/contact'
import { Button } from '@/components/ui/Button'
import { company } from '@/data/company'
import { submitContactToBackend } from '@/services/leadsApi'

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

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) })

  const onSubmit = (data: ContactFormValues) => {
    const message =
      `Nova mensagem de contato pelo site:\n\n` +
      `*Nome:* ${data.nome}\n*E-mail:* ${data.email}\n*Telefone:* ${data.telefone}\n` +
      `*Assunto:* ${data.assunto}\n*Mensagem:* ${data.mensagem}`
    window.open(`https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(message)}`, '_blank')
    submitContactToBackend(data)
    setSent(true)
    reset()
  }

  return (
    <div className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-card)] md:p-10">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center py-8 text-center"
          >
            <CheckCircle2 size={36} className="text-[var(--color-track)]" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-lg font-medium text-[var(--color-ink)]">Mensagem enviada</h3>
            <p className="mt-2 max-w-[36ch] text-[0.9375rem] text-[var(--color-ink-soft)]">
              Continue a conversa no WhatsApp que abrimos para você.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-5 text-[0.875rem] font-medium text-[var(--color-primary)] underline underline-offset-4"
            >
              Enviar outra mensagem
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={handleSubmit(onSubmit)} className="grid gap-5" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nome completo" error={errors.nome?.message}>
                <input className={inputClass} placeholder="Seu nome" {...register('nome')} />
              </Field>
              <Field label="Telefone" error={errors.telefone?.message}>
                <input className={inputClass} placeholder="(71) 90000-0000" {...register('telefone')} />
              </Field>
            </div>
            <Field label="E-mail" error={errors.email?.message}>
              <input className={inputClass} placeholder="voce@empresa.com" {...register('email')} />
            </Field>
            <Field label="Assunto" error={errors.assunto?.message}>
              <input className={inputClass} placeholder="Sobre o que você quer falar?" {...register('assunto')} />
            </Field>
            <Field label="Mensagem" error={errors.mensagem?.message}>
              <textarea className={`${inputClass} min-h-[120px] resize-none`} placeholder="Escreva sua mensagem" {...register('mensagem')} />
            </Field>
            <Button type="submit" variant="primary" size="lg" icon={<Send size={17} />} disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

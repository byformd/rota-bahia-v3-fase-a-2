import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import { company, whatsappHref } from '@/data/company'

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-5">
      {[company.addresses.matriz, company.addresses.filial].map((addr, i) => (
        <div key={addr.label} className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)]">
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">
            {addr.label}
          </span>
          <div className="mt-3 flex gap-2.5 text-[0.9375rem] text-[var(--color-ink)]">
            <MapPin size={17} className="mt-0.5 shrink-0 text-[var(--color-primary)]" />
            <span>
              {addr.street}
              <br />
              {addr.city} - {addr.state}, {addr.zip}
            </span>
          </div>
          <div className="mt-3 flex items-center gap-2.5 text-[0.9375rem] text-[var(--color-ink)]">
            <Phone size={17} className="shrink-0 text-[var(--color-primary)]" />
            {i === 0 ? company.phones.matriz : company.phones.filial}
          </div>
        </div>
      ))}

      <a
        href={`mailto:${company.email}`}
        className="flex items-center gap-3 rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 text-[var(--color-ink)] shadow-[var(--shadow-card)] transition-colors hover:border-[var(--color-primary)]/30"
      >
        <Mail size={20} className="text-[var(--color-primary)]" />
        <span className="font-medium">{company.email}</span>
      </a>

      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-[var(--radius-card)] border border-[var(--color-track)]/20 bg-[var(--color-track)]/[0.05] p-6 text-[var(--color-track)] transition-colors hover:bg-[var(--color-track)]/[0.08]"
      >
        <MessageCircle size={20} />
        <span className="font-medium">Falar agora pelo WhatsApp — {company.whatsapp.display}</span>
      </a>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { company, navLinks } from '@/data/company'

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-primary-deep)] pt-[var(--spacing-section-sm)] text-white/70">
      <Container>
        <div className="grid gap-10 divide-y divide-white/10 pb-14 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:gap-12 md:divide-y-0">
          <div className="pb-0">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 font-display text-sm font-semibold text-white">
                RB
              </span>
              <span className="font-display text-[1.05rem] font-medium text-white">Rota Bahia</span>
            </div>
            <p className="mt-4 max-w-[26ch] text-[0.9rem] leading-relaxed">
              Movendo a operação de quem não pode parar. Bahia ⟶ Guarulhos, todos os dias.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Instagram, href: company.social.instagram, label: 'Instagram' },
                { icon: Facebook, href: company.social.facebook, label: 'Facebook' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-[var(--color-signal)] hover:bg-[var(--color-signal)] hover:text-[var(--color-primary-deep)]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <a
              href={`mailto:${company.email}`}
              className="mt-5 flex items-center gap-2 text-[0.85rem] transition-colors hover:text-white"
            >
              <Mail size={15} className="text-white/40" />
              {company.email}
            </a>
          </div>

          <div className="pt-10 md:pt-0">
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-white/40">Navegação</p>
            <ul className="mt-4 space-y-2.5 text-[0.9rem]">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-10 md:pt-0">
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-white/40">
              {company.addresses.matriz.label}
            </p>
            <div className="mt-4 flex gap-2.5 text-[0.9rem] leading-relaxed">
              <MapPin size={16} className="mt-0.5 shrink-0 text-white/40" />
              <span>
                {company.addresses.matriz.street}
                <br />
                {company.addresses.matriz.city} - {company.addresses.matriz.state}, {company.addresses.matriz.zip}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-2.5 text-[0.9rem]">
              <Phone size={16} className="shrink-0 text-white/40" />
              {company.phones.matriz}
            </div>
          </div>

          <div className="pt-10 md:pt-0">
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-white/40">
              {company.addresses.filial.label}
            </p>
            <div className="mt-4 flex gap-2.5 text-[0.9rem] leading-relaxed">
              <MapPin size={16} className="mt-0.5 shrink-0 text-white/40" />
              <span>
                {company.addresses.filial.street}
                <br />
                {company.addresses.filial.city} - {company.addresses.filial.state}, {company.addresses.filial.zip}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-2.5 text-[0.9rem]">
              <Phone size={16} className="shrink-0 text-white/40" />
              {company.phones.filial}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-[0.8rem] text-white/40 md:text-left">
          <p>© {new Date().getFullYear()} Rota Bahia Transportadora. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  )
}

import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, MapPin, MessageCircle } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { navLinks, whatsappHref } from '@/data/company'
import { cn } from '@/utils/cn'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Home tem hero escuro/imagem: navbar nasce transparente com texto claro.
  // Demais páginas usam navbar sólida desde o início.
  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        solid
          ? 'bg-white/85 backdrop-blur-lg shadow-[0_1px_0_var(--color-line)]'
          : 'bg-transparent'
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-lg font-display text-sm font-semibold transition-colors',
              solid ? 'bg-[var(--color-primary)] text-white' : 'bg-white text-[var(--color-primary)]'
            )}
          >
            RB
          </span>
          <span
            className={cn(
              'font-display text-[1.05rem] font-medium tracking-tight transition-colors',
              solid ? 'text-[var(--color-ink)]' : 'text-white'
            )}
          >
            Rota Bahia
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'text-[0.9rem] font-medium transition-colors',
                solid
                  ? 'text-[var(--color-ink-soft)] hover:text-[var(--color-primary)]'
                  : 'text-white/85 hover:text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/rastreamento"
            className={cn(
              'flex items-center gap-1.5 text-[0.9rem] font-medium transition-colors',
              solid ? 'text-[var(--color-primary)]' : 'text-white'
            )}
          >
            <MapPin size={16} strokeWidth={2.25} />
            Rastrear Carga
          </Link>
          <Button
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            variant={solid ? 'primary' : 'ghost'}
            size="md"
            icon={<MessageCircle size={17} strokeWidth={2.25} />}
            iconPosition="left"
          >
            Solicitar Cotação
          </Button>
        </div>

        <button
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-full lg:hidden',
            solid ? 'text-[var(--color-ink)]' : 'text-white'
          )}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="rounded-lg px-3 py-3 text-[0.95rem] font-medium text-[var(--color-ink-soft)] hover:bg-[var(--color-canvas)] hover:text-[var(--color-primary)]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2.5 px-3">
                <Button href="/rastreamento" variant="outline" size="md">
                  Rastrear Carga
                </Button>
                <Button
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                  icon={<MessageCircle size={17} />}
                  iconPosition="left"
                >
                  Solicitar Cotação
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

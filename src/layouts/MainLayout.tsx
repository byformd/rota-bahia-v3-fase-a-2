import type { ReactNode } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { useLenis } from '@/hooks/useLenis'

export function MainLayout({ children }: { children: ReactNode }) {
  useLenis()

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[200] -translate-y-24 rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-white transition-transform focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>
      <CustomCursor />
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-[var(--color-ink-faint)]',
        className
      )}
    >
      <span className="h-[5px] w-[5px] rounded-full bg-[var(--color-signal)]" />
      {children}
    </span>
  )
}

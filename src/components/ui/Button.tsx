import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

type Variant = 'primary' | 'signal' | 'ghost' | 'outline'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight ' +
  'transition-all duration-300 ease-out whitespace-nowrap select-none'

const sizes = {
  md: 'h-12 px-6 text-[0.9375rem]',
  lg: 'h-14 px-8 text-base',
}

const variants: Record<Variant, string> = {
  primary:
    'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-2)] ' +
    'shadow-[0_1px_2px_rgba(10,26,47,0.08)] hover:shadow-[0_8px_20px_-6px_rgba(15,42,74,0.45)] hover:-translate-y-0.5',
  signal:
    'bg-[var(--color-signal)] text-[var(--color-primary-deep)] hover:brightness-[1.04] focus-ring-on-signal ' +
    'shadow-[0_1px_2px_rgba(10,26,47,0.08)] hover:shadow-[0_10px_24px_-8px_rgba(227,160,8,0.55)] hover:-translate-y-0.5',
  ghost:
    'bg-white/10 text-white backdrop-blur-md border border-white/25 hover:bg-white/20',
  outline:
    'bg-transparent text-[var(--color-primary)] border border-[var(--color-line-strong)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/[0.03]',
}

interface CommonProps {
  variant?: Variant
  size?: keyof typeof sizes
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  className?: string
  children: ReactNode
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export function Button(props: ButtonAsButton | ButtonAsAnchor) {
  const {
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'right',
    className,
    children,
    ...rest
  } = props

  const classes = cn(base, sizes[size], variants[variant], className)

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  )

  if ('href' in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a href={href} className={cn(classes, 'group')} {...anchorRest}>
        {content}
      </a>
    )
  }

  return (
    <button className={cn(classes, 'group')} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  )
}

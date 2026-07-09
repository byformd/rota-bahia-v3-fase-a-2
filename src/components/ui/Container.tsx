import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section'
}

export function Container({ children, className, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className={cn('mx-auto w-full max-w-[1240px] px-6 md:px-10', className)}>
      {children}
    </Tag>
  )
}

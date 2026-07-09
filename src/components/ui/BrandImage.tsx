import type { ImageKey } from '@/data/images'
import { images } from '@/data/images'
import { cn } from '@/utils/cn'

interface BrandImageProps {
  imageKey: ImageKey
  className?: string
  priority?: boolean
}

/** Imagem de marca com carregamento consistente — troque a fonte em src/data/images.ts */
export function BrandImage({ imageKey, className, priority = false }: BrandImageProps) {
  const img = images[imageKey]
  return (
    <img
      src={img.src}
      alt={img.alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      className={cn('object-cover', className)}
    />
  )
}

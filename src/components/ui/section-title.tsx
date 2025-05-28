import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
}

export function SectionTitle({
  title,
  subtitle,
  className,
  centered = true,
}: SectionTitleProps) {
  return (
    <div
      className={cn('mx-auto max-w-2xl', centered && 'text-center', className)}
    >
      <h2 className="text-3xl tracking-tight text-stone-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-lg leading-8 text-stone-600">{subtitle}</p>
      )}
    </div>
  )
}

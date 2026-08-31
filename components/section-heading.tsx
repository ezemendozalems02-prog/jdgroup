import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className="h-px w-8 bg-accent" />
      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
        {children}
      </span>
    </div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow className={align === 'center' ? 'justify-center' : ''}>
            {eyebrow}
          </Eyebrow>
        </Reveal>
      )}
      <Reveal delay={1}>
        <h2 className="mt-5 font-display text-3xl font-bold leading-[1.05] tracking-display text-balance text-foreground md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={2}>
          <p className="mt-5 text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}

import { Reveal } from '@/components/reveal'
import { Eyebrow } from '@/components/section-heading'

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-graphite">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--color-foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--color-foreground) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-36 md:px-8 md:pb-24 md:pt-44">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.02] tracking-display text-balance text-foreground md:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  )
}

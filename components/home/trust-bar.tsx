import { CountUp } from '@/components/count-up'
import { Reveal } from '@/components/reveal'

const items = [
  { value: <><CountUp to={27} suffix="+" /></>, label: 'Años de experiencia' },
  { value: 'Obras', label: 'En diferentes ubicaciones' },
  { value: 'Seguridad', label: 'Como prioridad' },
  { value: 'Proyectos', label: 'Residenciales y comerciales' },
]

export function TrustBar() {
  return (
    <section className="border-y border-border/60 bg-graphite">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 py-14 md:grid-cols-4 md:px-8 md:py-16">
        {items.map((item, i) => (
          <Reveal
            key={i}
            delay={i}
            className="relative px-2 md:px-6 [&:not(:nth-child(2n+1))]:border-l [&:not(:nth-child(2n+1))]:border-border/60 md:[&:not(:first-child)]:border-l"
          >
            <div className="font-display text-3xl font-bold tracking-display text-foreground md:text-5xl">
              {item.value}
            </div>
            <div className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground md:text-sm">
              {item.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

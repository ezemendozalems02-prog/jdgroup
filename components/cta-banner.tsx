import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--color-foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--color-foreground) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="max-w-4xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Iniciá tu proyecto
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.02] tracking-display text-balance text-foreground md:text-6xl">
              ¿Tenés una superficie que necesita una solución profesional?
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
              Contanos qué necesitás y evaluemos juntos tu proyecto.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <Link
              href="/contacto"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              Solicitar presupuesto
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import { ShieldCheck, HardHat, Cable, LifeBuoy, Anchor, AlertTriangle } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Seguridad y trabajos en altura',
  description:
    'La seguridad es parte de nuestra forma de trabajar. Conocé cómo JD GROUP desarrolla los trabajos en altura con los procedimientos y equipamiento de protección correspondientes.',
}

const equipment = [
  { icon: Anchor, title: 'Silleta', description: 'Sistema de suspensión para trabajos en fachadas y superficies verticales.' },
  { icon: Cable, title: 'Sistema de doble soga', description: 'Redundancia de sujeción para incrementar la seguridad en altura.' },
  { icon: LifeBuoy, title: 'Línea de vida', description: 'Punto de anclaje continuo que acompaña el desplazamiento del operario.' },
  { icon: HardHat, title: 'Arnés', description: 'Elemento de protección personal para trabajos en altura.' },
]

const principles = [
  {
    title: 'Procedimientos según cada obra',
    description:
      'Cada intervención en altura se realiza siguiendo los procedimientos correspondientes a las características del trabajo.',
  },
  {
    title: 'Equipamiento de protección',
    description:
      'Utilizamos los elementos y sistemas de protección necesarios según las condiciones de cada superficie.',
  },
  {
    title: 'Trabajo responsable',
    description:
      'La seguridad forma parte de nuestra manera de trabajar, no es un aspecto secundario.',
  },
]

export default function SeguridadPage() {
  return (
    <>
      <PageHero
        eyebrow="Seguridad"
        title="La altura exige experiencia. La seguridad, compromiso."
        description="En JD GROUP los trabajos en altura se desarrollan con los procedimientos y medios de seguridad correspondientes a cada intervención."
      />

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/altura-worker.webp"
                alt="Operario de JD GROUP trabajando en altura con equipamiento de seguridad"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Nuestro enfoque"
              title="Trabajar en altura es una responsabilidad."
              description="Los trabajos en altura requieren experiencia, planificación y el uso de los elementos de protección adecuados. En cada obra aplicamos estos criterios."
            />
            <div className="mt-10 space-y-6">
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={i}>
                  <div className="flex gap-4">
                    <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-accent" strokeWidth={1.75} />
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-graphite">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <SectionHeading
            eyebrow="Equipamiento"
            title="Los elementos que hacen posible cada trabajo en altura."
            align="center"
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {equipment.map((eq, i) => {
              const Icon = eq.icon
              return (
                <Reveal key={eq.title} delay={i}>
                  <div className="h-full rounded-2xl border border-border bg-card p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                      <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-6 font-display text-lg font-semibold text-foreground">
                      {eq.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {eq.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-navy-deep p-10 md:p-16">
            <AlertTriangle className="h-10 w-10 text-accent" strokeWidth={1.5} />
            <p className="mt-6 max-w-3xl font-display text-2xl font-semibold leading-snug text-balance text-foreground md:text-4xl">
              La seguridad no es un detalle. Es parte de nuestra forma de
              trabajar.
            </p>
          </div>
        </Reveal>
      </section>

      <CtaBanner />
    </>
  )
}

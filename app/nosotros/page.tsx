import type { Metadata } from 'next'
import Image from 'next/image'
import { Target, HeartHandshake, ShieldCheck, Layers } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { CountUp } from '@/components/count-up'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'Conocé JD GROUP: 27 años de experiencia en pintura, impermeabilización y mantenimiento, con foco en el trabajo bien hecho y la responsabilidad.',
}

const values = [
  {
    icon: Target,
    title: 'Trabajo bien hecho',
    description:
      'Hacer el trabajo correctamente y cuidar cada detalle es la base de todo lo que hacemos.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad',
    description:
      'Trabajamos con los procedimientos y elementos de protección correspondientes a cada obra.',
  },
  {
    icon: HeartHandshake,
    title: 'Responsabilidad',
    description:
      'Nos comprometemos con cada proyecto y con las necesidades de cada cliente.',
  },
  {
    icon: Layers,
    title: 'Adaptabilidad',
    description:
      'Nos adaptamos a las características de cada superficie, edificio y proyecto.',
  },
]

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Una empresa construida sobre la experiencia."
        description="JD GROUP cuenta con 27 años de trayectoria en el desarrollo de trabajos de pintura, impermeabilización y mantenimiento."
      />

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/images/altura-worker.png"
                  alt="Profesional de JD GROUP trabajando en altura"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
          <div>
            <SectionHeading
              eyebrow="Nuestra historia"
              title="27 años adaptándonos a cada obra."
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
              <Reveal delay={1}>
                <p>
                  A lo largo de estos años, JD GROUP ha participado en diferentes
                  obras y proyectos, desarrollando trabajos de pintura interior y
                  exterior, impermeabilización, trabajos en altura y
                  mantenimiento.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p>
                  Cada proyecto nos enseñó algo nuevo y nos permitió crecer,
                  adaptándonos a las necesidades de cada superficie, cada edificio
                  y cada cliente.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <p>
                  Trabajamos con la convicción de que hacer el trabajo
                  correctamente, cuidar cada detalle y actuar con responsabilidad
                  es lo que realmente construye una trayectoria.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-graphite">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <SectionHeading
            eyebrow="Lo que nos representa"
            title="Los valores que sostienen cada obra."
            align="center"
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <Reveal key={value.title} delay={i}>
                  <div className="h-full rounded-2xl border border-border bg-card p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                      <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-6 font-display text-lg font-semibold tracking-display text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-10 rounded-3xl border border-border bg-navy-deep p-10 md:grid-cols-3 md:p-16">
          {[
            { value: <><CountUp to={27} suffix="+" /></>, label: 'Años de experiencia' },
            { value: <><CountUp to={1999} duration={2200} /></>, label: 'Año de fundación' },
            { value: '100%', label: 'Compromiso con cada obra' },
          ].map((stat, i) => (
            <Reveal key={i} delay={i} className="text-center md:text-left">
              <div className="font-display text-5xl font-bold tracking-display text-accent md:text-6xl">
                {stat.value}
              </div>
              <div className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

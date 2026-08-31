import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { ServicesGrid } from '@/components/services-grid'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Pintura interior y exterior, impermeabilización, trabajos en altura, trabajos finos y mantenimiento integral para edificios y grandes superficies.',
}

const highlights = [
  {
    title: 'Pintura interior y exterior',
    image: '/images/proj-facade.webp',
    points: [
      'Fachadas y superficies exteriores',
      'Viviendas, edificios y oficinas',
      'Establecimientos y espacios comerciales',
      'Terminaciones prolijas y duraderas',
    ],
  },
  {
    title: 'Impermeabilización y protección',
    image: '/images/proj-commercial.webp',
    points: [
      'Tratamiento de superficies exteriores',
      'Protección frente a humedad',
      'Cuidado de estructuras',
      'Soluciones según cada superficie',
    ],
  },
]

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Todo lo que una superficie puede necesitar."
        description="Desarrollamos trabajos de pintura, impermeabilización, trabajos en altura y mantenimiento, adaptándonos a cada proyecto."
      />

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          eyebrow="Nuestros servicios"
          title="Un servicio para cada tipo de trabajo."
          description="Cubrimos desde intervenciones puntuales hasta proyectos de mantenimiento integral en grandes superficies."
        />
        <div className="mt-14">
          <ServicesGrid />
        </div>
      </section>

      <section className="border-y border-border/60 bg-graphite">
        <div className="mx-auto max-w-7xl space-y-20 px-5 py-24 md:px-8 md:py-32">
          {highlights.map((h, idx) => (
            <div
              key={h.title}
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                idx % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={h.image || '/placeholder.svg'}
                    alt={h.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Reveal>
              <div>
                <Reveal>
                  <h3 className="font-display text-2xl font-bold tracking-display text-balance text-foreground md:text-4xl">
                    {h.title}
                  </h3>
                </Reveal>
                <ul className="mt-8 space-y-4">
                  {h.points.map((p, i) => (
                    <Reveal as="li" key={p} delay={i}>
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15">
                          <Check className="h-3.5 w-3.5 text-accent" strokeWidth={3} />
                        </span>
                        <span className="text-base text-muted-foreground">{p}</span>
                      </div>
                    </Reveal>
                  ))}
                </ul>
                <Reveal delay={2}>
                  <Link
                    href="/contacto"
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground"
                  >
                    Consultar por este servicio
                    <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

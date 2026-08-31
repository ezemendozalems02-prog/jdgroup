import Image from 'next/image'
import { ShieldCheck } from 'lucide-react'
import { Eyebrow } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const equipment = [
  'Silleta',
  'Sistema de doble soga',
  'Línea de vida',
  'Arnés',
  'Equipamiento de protección correspondiente',
]

export function HeightsSafety() {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>Trabajos en altura y seguridad</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-6 font-display text-3xl font-bold leading-[1.05] tracking-display text-balance text-foreground md:text-5xl">
                La altura exige experiencia. La seguridad, compromiso.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
                En JD GROUP, los trabajos en altura se realizan siguiendo los
                procedimientos y medios de seguridad correspondientes a cada
                intervención. Trabajamos utilizando los elementos y sistemas de
                protección necesarios según las características de cada obra.
              </p>
            </Reveal>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {equipment.map((eq, i) => (
                <Reveal as="li" key={eq} delay={i}>
                  <div className="flex items-center gap-3 rounded-lg border border-border/60 bg-card/40 px-4 py-3">
                    <ShieldCheck className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
                    <span className="text-sm font-medium text-foreground">{eq}</span>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={2}>
              <div className="mt-10 border-l-2 border-accent pl-6">
                <p className="font-display text-xl font-semibold leading-snug text-balance text-foreground md:text-2xl">
                  La seguridad no es un detalle. Es parte de nuestra forma de
                  trabajar.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Reveal className="mt-10">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/safety-gear.webp"
                  alt="Equipamiento de seguridad para trabajos en altura de JD GROUP"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/team-work.webp"
                  alt="Equipo de JD GROUP trabajando en altura con sistemas de protección"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

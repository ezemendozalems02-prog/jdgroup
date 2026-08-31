import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contactá a JD GROUP para tu proyecto de pintura, impermeabilización, trabajos en altura o mantenimiento. Coordinamos una visita para evaluar tu edificio o superficie.',
}

const info = [
  {
    icon: Phone,
    title: 'Teléfono',
    detail: '+54 9 11 0000-0000',
    href: 'tel:+5491100000000',
  },
  {
    icon: Mail,
    title: 'Email',
    detail: 'contacto@jdgroup.com',
    href: 'mailto:contacto@jdgroup.com',
  },
  {
    icon: MapPin,
    title: 'Zona de trabajo',
    detail: 'Buenos Aires, Argentina',
  },
  {
    icon: Clock,
    title: 'Horario de atención',
    detail: 'Lunes a viernes, 9 a 18 hs',
  },
]

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Contanos qué necesita tu edificio."
        description="Escribinos, llamanos o completá el formulario. Coordinamos una visita para evaluar la superficie y armar una propuesta a medida."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
          <div className="space-y-4">
            {info.map((item, i) => {
              const Icon = item.icon
              const content = (
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {item.title}
                    </div>
                    <div className="mt-1.5 text-base font-medium text-foreground">
                      {item.detail}
                    </div>
                  </div>
                </div>
              )
              return (
                <Reveal key={item.title} delay={i}>
                  {item.href ? (
                    <a href={item.href} className="block transition-opacity hover:opacity-80">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { FaqAccordion, type Faq } from '@/components/faq-accordion'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Preguntas frecuentes',
  description:
    'Respuestas a las preguntas más frecuentes sobre los servicios de pintura, impermeabilización, trabajos en altura y mantenimiento de JD GROUP.',
}

const faqs: Faq[] = [
  {
    question: '¿Qué tipo de trabajos realiza JD GROUP?',
    answer:
      'Desarrollamos trabajos de pintura interior y exterior, impermeabilización, trabajos en altura, trabajos finos y mantenimiento integral para edificios, grandes superficies y distintos tipos de proyectos.',
  },
  {
    question: '¿Trabajan en edificios y grandes superficies?',
    answer:
      'Sí. A lo largo de 27 años hemos participado en obras de distinta escala, incluyendo edificios residenciales y comerciales, fachadas y grandes superficies.',
  },
  {
    question: '¿Cómo realizan los trabajos en altura?',
    answer:
      'Los trabajos en altura se realizan siguiendo los procedimientos correspondientes y utilizando los elementos de protección adecuados, como silleta, sistema de doble soga, línea de vida y arnés, según las características de cada obra.',
  },
  {
    question: '¿Qué es la impermeabilización y por qué es importante?',
    answer:
      'La impermeabilización es el tratamiento y protección de superficies exteriores para ayudar a preservar las estructuras frente a la humedad y las condiciones ambientales, contribuyendo a su durabilidad.',
  },
  {
    question: '¿Cómo es el proceso de trabajo?',
    answer:
      'Trabajamos con un proceso ordenado: evaluación del proyecto, planificación del trabajo, ejecución de la obra y entrega, cuidando la calidad en cada etapa.',
  },
  {
    question: '¿Cómo puedo solicitar un presupuesto?',
    answer:
      'Podés contactarnos a través de la página de contacto o por teléfono. Contanos qué necesitás y evaluaremos juntos las características de tu proyecto.',
  },
]

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Preguntas frecuentes"
        title="Respuestas claras antes de empezar."
        description="Reunimos las consultas más habituales sobre nuestros servicios. Si tenés otra pregunta, escribinos."
      />

      <section className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <FaqAccordion faqs={faqs} />
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-navy-deep p-8 md:flex-row md:items-center md:p-10">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground md:text-2xl">
                ¿No encontraste tu respuesta?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Escribinos y con gusto te ayudamos con tu proyecto.
              </p>
            </div>
            <Link
              href="/contacto"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              Ir a contacto
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}

'use client'

import { motion } from 'motion/react'
import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    number: '01',
    title: 'Evaluación',
    description:
      'Analizamos el proyecto, la superficie y las necesidades específicas.',
  },
  {
    number: '02',
    title: 'Planificación',
    description:
      'Definimos el alcance del trabajo, materiales, metodología y recursos necesarios.',
  },
  {
    number: '03',
    title: 'Ejecución',
    description:
      'Nuestro equipo desarrolla la obra cuidando cada etapa y cada terminación.',
  },
  {
    number: '04',
    title: 'Entrega',
    description:
      'Revisamos el trabajo terminado y buscamos que el resultado cumpla con los estándares esperados.',
  },
]

export function Process() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        eyebrow="Cómo trabajamos"
        title="Un proceso ordenado, de principio a fin."
        description="Cada obra sigue un método claro que nos permite cuidar la calidad y la previsibilidad en cada etapa."
      />

      <div className="relative mt-16">
        <div className="absolute left-0 top-8 hidden h-px w-full bg-border lg:block" />
        <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              <div className="flex items-center gap-4 lg:block">
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-border bg-card font-display text-lg font-bold text-accent">
                  {step.number}
                </div>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-display text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

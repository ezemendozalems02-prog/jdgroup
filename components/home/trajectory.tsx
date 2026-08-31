'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Eyebrow } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function Trajectory() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow>Una empresa con trayectoria</Eyebrow>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 font-display text-3xl font-bold leading-[1.05] tracking-display text-balance text-foreground md:text-5xl">
              Experiencia que se construyó obra tras obra.
            </h2>
          </Reveal>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
            <Reveal delay={2}>
              <p>
                JD GROUP cuenta con 27 años de experiencia en el desarrollo de
                trabajos de pintura, impermeabilización y mantenimiento.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p>
                A lo largo de estos años, la empresa ha participado en diferentes
                obras y proyectos, adaptándose a las necesidades de cada
                superficie, cada edificio y cada cliente.
              </p>
            </Reveal>
          </div>
          <Reveal delay={4}>
            <div className="mt-8 border-l-2 border-accent pl-6">
              <p className="font-display text-xl font-semibold leading-snug text-balance text-foreground md:text-2xl">
                Hacer el trabajo correctamente, cuidar cada detalle y trabajar
                con responsabilidad.
              </p>
            </div>
          </Reveal>
        </div>

        <div ref={ref} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <motion.div style={{ y }} className="absolute inset-0 -top-[8%] h-[116%]">
              <Image
                src="/images/trajectory.png"
                alt="Obra de gran escala realizada por JD GROUP"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-card px-7 py-5 shadow-xl md:block">
            <div className="font-display text-4xl font-bold tracking-display text-accent">
              1999
            </div>
            <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Nuestro punto de partida
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

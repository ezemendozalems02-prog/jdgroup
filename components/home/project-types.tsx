'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const categories = [
  { label: 'Edificios residenciales', image: '/images/proj-residential.png' },
  { label: 'Edificios comerciales', image: '/images/proj-commercial.png' },
  { label: 'Estaciones de servicio', image: '/images/proj-station.png' },
  { label: 'Fachadas', image: '/images/proj-facade.png' },
  { label: 'Espacios interiores', image: '/images/proj-interior.png' },
  { label: 'Grandes superficies', image: '/images/proj-commercial.png' },
  { label: 'Oficinas', image: '/images/proj-interior.png' },
  { label: 'Proyectos especiales', image: '/images/trajectory.png' },
]

export function ProjectTypes() {
  return (
    <section className="border-t border-border/60 bg-graphite">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          eyebrow="Tipos de proyectos"
          title="Donde otros ven una superficie, nosotros vemos un proyecto."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.label + i}
              href="/obras"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl"
            >
              <Image
                src={cat.image || '/placeholder.svg'}
                alt={cat.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent transition-opacity duration-300 group-hover:from-navy/95" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <h3 className="font-display text-base font-semibold leading-tight text-balance text-foreground md:text-lg">
                  {cat.label}
                </h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

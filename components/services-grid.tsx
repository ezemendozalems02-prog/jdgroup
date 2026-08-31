'use client'

import { motion } from 'motion/react'
import { services } from '@/lib/services'

export function ServicesGrid() {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service, i) => {
        const Icon = service.icon
        return (
          <motion.article
            key={service.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: (i % 4) * 0.06 }}
            className="group relative flex flex-col gap-6 bg-card p-8 transition-colors duration-300 hover:bg-secondary"
          >
            <div className="flex items-start justify-between">
              <span className="font-display text-sm font-bold tracking-[0.1em] text-muted-foreground transition-colors group-hover:text-accent">
                {service.number}
              </span>
              <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
            </div>
            <div className="mt-auto">
              <h3 className="font-display text-xl font-semibold tracking-display text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
            <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
          </motion.article>
        )
      })}
    </div>
  )
}

'use client'

import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { categories, obras } from '@/lib/obras'

export function ObrasGallery() {
  const [active, setActive] = useState<(typeof categories)[number]>('Todos')

  const filtered =
    active === 'Todos' ? obras : obras.filter((o) => o.category === active)

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              'rounded-full border px-5 py-2.5 text-sm font-medium transition-colors',
              active === cat
                ? 'border-accent bg-accent text-accent-foreground'
                : 'border-border bg-card text-muted-foreground hover:border-accent/50 hover:text-foreground',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((obra) => (
            <motion.article
              key={obra.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className={cn(
                'group relative overflow-hidden rounded-2xl border border-border bg-card',
                obra.featured && 'sm:col-span-2 lg:col-span-1',
              )}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={obra.image || '/placeholder.svg'}
                  alt={obra.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground backdrop-blur">
                  {obra.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold tracking-display text-foreground">
                  {obra.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{obra.scope}</p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

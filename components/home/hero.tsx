'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, ArrowDown } from 'lucide-react'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
}

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[82vh] items-center overflow-hidden md:min-h-[88vh]">
      {/* Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: 'easeOut' }}
      >
        <Image
          src="/images/hero-building.webp"
          alt="Fachada de edificio de gran escala siendo intervenida por JD GROUP"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background/95 via-background/80 to-background/35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/85 via-background/45 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-28 md:px-8">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-4xl">
          <motion.div variants={item} className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Pintura · Impermeabilización · Trabajos en altura
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[2.5rem] font-bold leading-[1] tracking-display text-balance text-foreground sm:text-6xl lg:text-7xl"
          >
            Humedad, fachadas, mantenimiento. Resuelto.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl"
          >
            Nos hacemos cargo de todo el proceso —de la evaluación a la
            entrega— con 27 años de experiencia y la seguridad que cada obra
            exige.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contacto"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              Solicitar presupuesto
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-border bg-background/30 px-8 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
            >
              Conocer nuestros servicios
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 md:flex"
      >
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-muted-foreground">
          Scroll para conocer JD GROUP
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-4 w-4 text-accent" />
        </motion.span>
      </motion.div>
    </section>
  )
}

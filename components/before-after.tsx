'use client'

import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'
import { MoveHorizontal } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function BeforeAfter() {
  const [pos, setPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const p = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(0, Math.min(100, p)))
  }, [])

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        eyebrow="Antes / Después"
        title="La diferencia está en el resultado."
        description="Cada proyecto comienza con una necesidad y termina con una superficie transformada. Deslizá para comparar."
      />

      <Reveal delay={2}>
        <div
          ref={containerRef}
          className="relative mt-14 aspect-[16/10] w-full touch-none select-none overflow-hidden rounded-2xl border border-border"
          onPointerMove={(e) => {
            if (dragging.current) updateFromClientX(e.clientX)
          }}
          onPointerUp={() => (dragging.current = false)}
          onPointerLeave={() => (dragging.current = false)}
        >
          {/* After (base) */}
          <Image
            src="/images/after.webp"
            alt="Superficie después de la intervención de JD GROUP"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
            Después
          </span>

          {/* Before (clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <Image
              src="/images/before.webp"
              alt="Superficie antes de la intervención de JD GROUP"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground backdrop-blur">
              Antes
            </span>
          </div>

          {/* Handle */}
          <div
            className="absolute inset-y-0 z-10 w-0.5 bg-accent"
            style={{ left: `${pos}%` }}
          >
            <button
              type="button"
              aria-label="Deslizar para comparar antes y después"
              onPointerDown={(e) => {
                e.preventDefault()
                dragging.current = true
              }}
              className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-accent bg-background text-accent shadow-lg"
            >
              <MoveHorizontal className="h-5 w-5" />
            </button>
          </div>

          {/* Range for accessibility / keyboard */}
          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label="Comparar antes y después"
            className="absolute bottom-4 left-1/2 w-1/2 -translate-x-1/2 accent-[var(--mustard)] opacity-0"
          />
        </div>
      </Reveal>
    </section>
  )
}

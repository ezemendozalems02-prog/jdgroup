'use client'

import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'

export function PremiumShell() {
  const [loading, setLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-[90] h-[2px] origin-left bg-accent"
        style={{ scaleX }}
        aria-hidden
      />

      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-graphite"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <div className="flex flex-col items-center gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-display text-4xl font-bold tracking-display text-foreground"
              >
                JD<span className="text-accent">.</span>GROUP
              </motion.div>
              <div className="h-[2px] w-40 overflow-hidden rounded-full bg-border">
                <motion.div
                  className="h-full bg-accent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '0%' }}
                  transition={{ duration: 1.3, ease: 'easeInOut' }}
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.3 }}
                className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
              >
                27 años de experiencia
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

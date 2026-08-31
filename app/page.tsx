import { Hero } from '@/components/home/hero'
import { TrustBar } from '@/components/home/trust-bar'
import { Trajectory } from '@/components/home/trajectory'
import { Process } from '@/components/home/process'
import { HeightsSafety } from '@/components/home/heights-safety'
import { ProjectTypes } from '@/components/home/project-types'
import { BeforeAfter } from '@/components/before-after'
import { ServicesGrid } from '@/components/services-grid'
import { SectionHeading } from '@/components/section-heading'
import { CtaBanner } from '@/components/cta-banner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Trajectory />

      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <SectionHeading
            eyebrow="Servicios"
            title="Soluciones para cada superficie."
            description="Un abanico completo de servicios de pintura, protección y mantenimiento para proyectos de cualquier escala."
          />
          <div className="mt-14">
            <ServicesGrid />
          </div>
        </div>
      </section>

      <HeightsSafety />
      <Process />
      <ProjectTypes />
      <BeforeAfter />
      <CtaBanner />
    </>
  )
}

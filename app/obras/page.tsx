import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ObrasGallery } from '@/components/obras-gallery'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Obras',
  description:
    'Una muestra de obras y proyectos de JD GROUP: edificios residenciales y comerciales, fachadas, impermeabilización y trabajos en altura.',
}

export default function ObrasPage() {
  return (
    <>
      <PageHero
        eyebrow="Obras y proyectos"
        title="Cada obra cuenta parte de nuestra historia."
        description="A lo largo de 27 años participamos en distintos tipos de proyectos. Esta es una muestra del trabajo realizado."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <ObrasGallery />
      </section>

      <CtaBanner />
    </>
  )
}

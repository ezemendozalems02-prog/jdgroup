export type Obra = {
  title: string
  category: string
  scope: string
  image: string
  featured?: boolean
}

export const categories = [
  'Todos',
  'Residencial',
  'Comercial',
  'Impermeabilización',
  'Altura',
] as const

export const obras: Obra[] = [
  {
    title: 'Fachada de edificio residencial',
    category: 'Residencial',
    scope: 'Pintura exterior · Trabajos en altura',
    image: '/images/proj-residential.webp',
    featured: true,
  },
  {
    title: 'Complejo comercial',
    category: 'Comercial',
    scope: 'Pintura exterior · Mantenimiento',
    image: '/images/proj-commercial.webp',
  },
  {
    title: 'Estación de servicio',
    category: 'Comercial',
    scope: 'Pintura · Mantenimiento integral',
    image: '/images/proj-station.webp',
  },
  {
    title: 'Renovación de fachada',
    category: 'Impermeabilización',
    scope: 'Impermeabilización · Protección',
    image: '/images/proj-facade.webp',
    featured: true,
  },
  {
    title: 'Espacio interior comercial',
    category: 'Comercial',
    scope: 'Pintura interior · Trabajos finos',
    image: '/images/proj-interior.webp',
  },
  {
    title: 'Trabajo en altura sobre fachada',
    category: 'Altura',
    scope: 'Silleta · Doble soga · Línea de vida',
    image: '/images/altura-worker.webp',
  },
  {
    title: 'Intervención en gran superficie',
    category: 'Comercial',
    scope: 'Pintura exterior · Impermeabilización',
    image: '/images/trajectory.webp',
  },
  {
    title: 'Obra residencial en altura',
    category: 'Residencial',
    scope: 'Pintura exterior · Trabajos en altura',
    image: '/images/obra-1.webp',
  },
  {
    title: 'Mantenimiento de edificio',
    category: 'Impermeabilización',
    scope: 'Impermeabilización · Mantenimiento',
    image: '/images/obra-2.webp',
  },
]

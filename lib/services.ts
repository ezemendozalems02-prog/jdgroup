import {
  Building2,
  PaintRoller,
  Sparkles,
  Droplets,
  MountainSnow,
  Wrench,
  LayoutGrid,
  Compass,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Pintura exterior',
    description:
      'Intervención de fachadas y superficies exteriores con foco en terminación, durabilidad y cuidado de la estructura.',
    icon: Building2,
  },
  {
    number: '02',
    title: 'Pintura interior',
    description:
      'Trabajos de pintura interior para viviendas, edificios, oficinas, establecimientos y espacios comerciales.',
    icon: PaintRoller,
  },
  {
    number: '03',
    title: 'Trabajos finos',
    description:
      'Terminaciones interiores donde la precisión, prolijidad y atención al detalle son fundamentales.',
    icon: Sparkles,
  },
  {
    number: '04',
    title: 'Impermeabilización',
    description:
      'Tratamiento y protección de superficies exteriores para ayudar a preservar las estructuras frente a humedad y condiciones ambientales.',
    icon: Droplets,
  },
  {
    number: '05',
    title: 'Trabajos en altura',
    description:
      'Intervenciones profesionales en altura utilizando sistemas y equipamiento de seguridad correspondientes.',
    icon: MountainSnow,
  },
  {
    number: '06',
    title: 'Mantenimiento integral',
    description:
      'Trabajos de mantenimiento, restauración y puesta en valor de diferentes superficies y estructuras.',
    icon: Wrench,
  },
  {
    number: '07',
    title: 'Grandes superficies',
    description:
      'Soluciones para edificios, establecimientos comerciales y proyectos de mayor escala.',
    icon: LayoutGrid,
  },
  {
    number: '08',
    title: 'Proyectos especiales',
    description:
      'Evaluación y planificación de trabajos adaptados a las características específicas de cada obra.',
    icon: Compass,
  },
]

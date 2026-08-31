import Link from 'next/link'
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-graphite">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="font-display text-2xl font-bold tracking-display text-foreground">
              JD<span className="text-accent">.</span>GROUP
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              27 años transformando y protegiendo superficies. Pintura,
              impermeabilización y mantenimiento profesional.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Navegación
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { href: '/servicios', label: 'Servicios' },
                { href: '/obras', label: 'Obras' },
                { href: '/nosotros', label: 'Nosotros' },
                { href: '/contacto', label: 'Contacto' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Servicios
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>Pintura interior y exterior</li>
              <li>Impermeabilización</li>
              <li>Trabajos en altura</li>
              <li>Mantenimiento integral</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Contacto
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href="tel:+5491100000000"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  +54 9 11 0000-0000
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@jdgroup.com"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  contacto@jdgroup.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                Buenos Aires, Argentina
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-border/60 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} JD GROUP. Todos los derechos reservados.
          </p>
          <Link
            href="/contacto"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            Iniciá tu proyecto
            <ArrowUpRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PremiumShell } from '@/components/premium-shell'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jdgroup.example'),
  title: {
    default: 'JD GROUP | Pintura, Impermeabilización y Mantenimiento',
    template: '%s | JD GROUP',
  },
  description:
    'JD GROUP cuenta con 27 años de experiencia en pintura interior y exterior, impermeabilización, trabajos en altura y mantenimiento de edificios y grandes superficies.',
  keywords: [
    'pintura de edificios',
    'impermeabilización',
    'trabajos en altura',
    'mantenimiento de edificios',
    'pintura industrial',
    'JD GROUP',
  ],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'JD GROUP',
    title: 'JD GROUP | Pintura, Impermeabilización y Mantenimiento',
    description:
      '27 años transformando superficies. Pintura, impermeabilización y mantenimiento profesional para edificios y grandes superficies.',
    images: [{ url: '/images/hero-building.webp', width: 1200, height: 630, alt: 'JD GROUP' }],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#141a24',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${sora.variable} bg-background`}>
      <body className="font-sans antialiased grain">
        <PremiumShell />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

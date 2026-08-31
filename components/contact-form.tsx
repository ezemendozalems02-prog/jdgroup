'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Send } from 'lucide-react'
import { services } from '@/lib/services'

const WHATSAPP_NUMBER = '5491100000000'

export function ContactForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !phone.trim()) {
      setError('Completá tu nombre y un teléfono o email de contacto.')
      return
    }
    setError('')

    const lines = [
      `Hola, soy ${name.trim()}.`,
      service && `Me interesa: ${service}.`,
      message.trim() && message.trim(),
      `Mi contacto: ${phone.trim()}`,
    ].filter(Boolean)

    const text = encodeURIComponent(lines.join('\n'))
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-8 md:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Teléfono o email
          </label>
          <input
            id="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Cómo te contactamos"
            className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="text-sm font-medium text-foreground">
          ¿Qué necesitás?
        </label>
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
        >
          <option value="">Seleccioná un servicio (opcional)</option>
          {services.map((s) => (
            <option key={s.number} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Contanos tu proyecto
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Tipo de superficie, ubicación, urgencia..."
          className="mt-2 w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
        />
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <motion.button
        type="submit"
        whileTap={{ scale: 0.98 }}
        className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.02] sm:w-auto"
      >
        Enviar por WhatsApp
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </motion.button>
      <p className="text-xs text-muted-foreground">
        Al enviar, se abre WhatsApp con tu consulta lista para mandar. También podés escribirnos por
        email o llamarnos directamente.
      </p>
    </form>
  )
}

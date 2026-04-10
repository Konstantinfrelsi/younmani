import { Phone, MapPin } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function BookingCTA() {
  useReveal()

  return (
    <section className="relative py-40 px-10 sm:px-16 lg:px-24 overflow-hidden bg-[#080808]">

      {/* Background image strip */}
      <div className="absolute inset-0">
        <img src="/hero-bg.jpg" alt="" aria-hidden
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 50%', filter: 'brightness(0.18) saturate(0.7)' }} />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.75) 100%)' }} />
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-24 right-24 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />
      <div className="absolute bottom-0 left-24 right-24 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />

      <div className="relative z-10 max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <div>
            <p className="reveal section-label mb-8">Termin vereinbaren</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.05, fontSize: 'clamp(2.5rem,4.5vw,4.5rem)' }}
              className="reveal reveal-d1 text-white mb-2">
              Buche deinen Stuhl
            </h2>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em', fontSize: 'clamp(2.5rem,4.5vw,4.5rem)' }}
              className="reveal reveal-d2 gold-text uppercase mb-10">
              in Kassel.
            </h2>

            <p className="reveal reveal-d3 text-white/45 text-sm leading-relaxed max-w-sm mb-12">
              Ein Anruf genügt. Wir reservieren Ihren Termin persönlich und beraten Sie
              zu Ihrem Wunschlook — ohne Warteliste.
            </p>

            <div className="reveal reveal-d4 flex flex-col sm:flex-row gap-4">
              <a href="tel:056147547157" className="btn-gold">
                <Phone size={13} strokeWidth={2.5} />
                0561 475 471 57
              </a>
              <a href="https://maps.app.goo.gl/4ZmXjhG4BzRnKbTq5" target="_blank" rel="noopener noreferrer"
                className="btn-outline">
                <MapPin size={13} strokeWidth={2} />
                Weg zu uns
              </a>
            </div>
          </div>

          {/* Right: info block */}
          <div className="reveal reveal-d2">
            <div className="border border-white/8 p-10" style={{ background: 'rgba(14,14,14,0.6)' }}>
              <p className="section-label mb-8">Öffnungszeiten</p>

              <div className="space-y-6">
                {[
                  { day: 'Montag – Samstag', time: '09:00 – 18:00 Uhr', open: true },
                  { day: 'Sonntag', time: 'Geschlossen', open: false },
                ].map(o => (
                  <div key={o.day} className="flex items-center justify-between">
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 300, fontSize: '0.8rem', letterSpacing: '0.1em' }}
                      className={o.open ? 'text-white/70' : 'text-white/25'}>{o.day}</span>
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: o.open ? 600 : 300, fontSize: '0.8rem' }}
                      className={o.open ? 'text-[#C9A96E]' : 'text-white/25'}>{o.time}</span>
                  </div>
                ))}
              </div>

              <hr className="rule my-8" />

              <div className="space-y-3">
                <p className="section-label">Adresse</p>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.7 }} className="text-white/55">
                  Frankfurter Str. 210<br />34134 Kassel, Deutschland
                </p>
                <a href="mailto:mail@younmani.de"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300, fontSize: '0.75rem', letterSpacing: '0.1em' }}
                  className="text-[#C9A96E]/70 hover:text-[#C9A96E] transition-colors">
                  mail@younmani.de
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

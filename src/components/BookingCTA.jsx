import { Phone, Scissors } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function BookingCTA() {
  useReveal()

  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #0d0d0d 0%, #1a1200 50%, #0d0d0d 100%)`,
      }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 40px,
            rgba(201,169,110,0.04) 40px,
            rgba(201,169,110,0.04) 41px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 40px,
            rgba(201,169,110,0.04) 40px,
            rgba(201,169,110,0.04) 41px
          )`,
        }}
      />

      {/* Gold orb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="reveal mb-6">
          <Scissors size={28} className="text-[#C9A96E] mx-auto mb-4" />
          <p
            className="text-xs font-bold tracking-[0.45em] text-[#C9A96E] uppercase"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Termin vereinbaren
          </p>
        </div>

        <h2
          className="reveal reveal-d1 text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-tight mb-6"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Buche deinen Stuhl<br />
          <span className="text-gold-grad">bei uns in Kassel</span>
        </h2>

        <p className="reveal reveal-d2 text-white/60 text-lg mb-10 max-w-lg mx-auto">
          Rufe uns einfach an und wir vereinbaren gemeinsam Ihren Wunschtermin.
          Montag bis Samstag, 09:00 – 18:00 Uhr.
        </p>

        <div className="reveal reveal-d3 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:056147547157"
            className="flex items-center justify-center gap-3 bg-[#C9A96E] hover:bg-[#e8d5a8] text-black font-black tracking-widest uppercase px-10 py-5 text-base transition-all duration-200 btn-push"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <Phone size={18} />
            0561 475 471 57
          </a>
          <a
            href="https://maps.app.goo.gl/4ZmXjhG4BzRnKbTq5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-[#C9A96E]/40 hover:border-[#C9A96E] text-[#C9A96E] font-bold tracking-widest uppercase px-10 py-5 text-sm transition-all duration-200"
          >
            Weg zu uns
          </a>
        </div>

        {/* Opening hours strip */}
        <div className="reveal reveal-d4 mt-12 flex flex-wrap justify-center gap-x-10 gap-y-2">
          {[
            { day: 'Mo – Sa', time: '09:00 – 18:00' },
            { day: 'Sonntag', time: 'Geschlossen' },
          ].map((o) => (
            <div key={o.day} className="text-center">
              <p className="text-white/40 text-xs tracking-widest uppercase">{o.day}</p>
              <p className="text-white/70 text-sm font-medium">{o.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

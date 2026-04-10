import { Phone, ArrowDown } from 'lucide-react'
import { Clock, MapPin } from 'lucide-react'

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080808]">

      {/* Background image — contained so scissors/table/mirror all visible */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <img
          src="/hero-bg.jpg"
          alt=""
          aria-hidden
          style={{
            height: '92%',
            width: 'auto',
            maxWidth: 'none',
            objectFit: 'contain',
            filter: 'brightness(0.42) saturate(1.05)',
          }}
        />
      </div>

      {/* Radial vignette — darker edges, brighter center focus */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(8,8,8,0.7) 100%)' }} />

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #080808, transparent)' }} />

      {/* ── Centered content ── */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-8 text-center flex flex-col items-center pt-24 pb-16">

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-10"
          style={{ animation: 'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s both' }}>
          <div className="w-10 h-px bg-[#C9A96E]" />
          <span className="section-label">Hair &amp; Beauty Salon · Kassel</span>
          <div className="w-10 h-px bg-[#C9A96E]" />
        </div>

        {/* Headline */}
        <div style={{ animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.25s both' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, lineHeight: 1.0, letterSpacing: '0.01em', fontStyle: 'italic' }}
            className="text-[clamp(4.5rem,10vw,9rem)] text-white">
            You'N
          </h1>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, lineHeight: 0.88, letterSpacing: '-0.04em' }}
            className="text-[clamp(4.5rem,10vw,9rem)] gold-text uppercase mb-6">
            Mani
          </h1>
        </div>

        {/* Subline */}
        <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 200, letterSpacing: '0.22em', fontSize: '0.72rem', animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.4s both' }}
          className="text-white/60 uppercase mb-4">
          Friseur mit Stil und Klasse in Kassel
        </p>

        {/* Thin divider */}
        <div className="w-14 h-px bg-[#C9A96E]/40 mb-8"
          style={{ animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.45s both' }} />

        {/* Body */}
        <p style={{ lineHeight: 1.8, fontSize: '0.9rem', animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.5s both' }}
          className="text-white/50 max-w-sm mb-12">
          Mansoor — Ihr persönlicher Style-Coach für makellos geschnittenes Haar.
          Exklusive Beratung. Kompromisslose Qualität.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          style={{ animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.6s both' }}>
          <a href="tel:056147547157" className="btn-gold">
            <Phone size={13} strokeWidth={2.5} />
            Termin vereinbaren
          </a>
          <button onClick={() => scrollTo('leistungen')} className="btn-outline">
            Leistungen &amp; Preise
          </button>
        </div>

        {/* Stats strip */}
        <div className="flex gap-10 sm:gap-16 pt-10 border-t border-white/10 justify-center"
          style={{ animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.7s both' }}>
          {[
            { n: '240+', l: 'Bewertungen' },
            { n: '4.8★', l: 'Ø Google' },
            { n: '#1', l: 'Friseur Kassel' },
          ].map(s => (
            <div key={s.l} className="text-center">
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em' }}
                className="text-[#C9A96E]">{s.n}</p>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em' }}
                className="text-white/40 uppercase mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <button onClick={() => scrollTo('about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 hover:text-[#C9A96E] transition-colors z-10"
        style={{ animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.9s both' }}>
        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 200, letterSpacing: '0.4em', fontSize: '0.55rem', textTransform: 'uppercase' }}>
          Entdecken
        </span>
        <ArrowDown size={12} strokeWidth={1.5} />
      </button>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

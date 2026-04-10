import { Phone, ArrowDown } from 'lucide-react'

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  return (
    <section className="relative min-h-screen flex overflow-hidden bg-[#080808]">

      {/* ── Left: Content panel ── */}
      <div className="relative z-10 flex flex-col justify-center px-10 sm:px-16 lg:px-24 py-32 w-full lg:w-[52%] xl:w-[48%]">

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-10 opacity-0 animate-[fadeUp_0.8s_0.2s_forwards]"
          style={{ animation: 'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s both' }}>
          <div className="w-10 h-px bg-[#C9A96E]" />
          <span className="section-label">Hair &amp; Beauty Salon · Kassel</span>
        </div>

        {/* Headline */}
        <div style={{ animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.3s both' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, lineHeight: 1.0, letterSpacing: '-0.01em' }}
            className="text-[clamp(4rem,8vw,8rem)] text-white mb-3 italic">
            You'N
          </h1>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em' }}
            className="text-[clamp(4rem,8vw,8rem)] gold-text uppercase mb-8">
            Mani
          </h1>
        </div>

        {/* Subheadline */}
        <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 200, letterSpacing: '0.18em', fontSize: '0.75rem', animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.45s both' }}
          className="text-white/60 uppercase mb-6">
          Friseur mit Stil und Klasse in Kassel
        </p>

        {/* Divider */}
        <div className="w-12 h-px bg-[#C9A96E]/40 mb-8" style={{ animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.5s both' }} />

        {/* Body */}
        <p style={{ animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.55s both', lineHeight: 1.8, fontSize: '0.9rem' }}
          className="text-white/50 max-w-sm mb-12">
          Mansoor — Ihr persönlicher Style-Coach für makellos geschnittenes Haar.
          Exklusive Beratung. Kompromisslose Qualität.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4" style={{ animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.65s both' }}>
          <a href="tel:056147547157" className="btn-gold">
            <Phone size={13} strokeWidth={2.5} />
            Termin vereinbaren
          </a>
          <button onClick={() => scrollTo('leistungen')} className="btn-outline">
            Leistungen &amp; Preise
          </button>
        </div>

        {/* Stats strip */}
        <div className="flex gap-10 mt-16 pt-10 border-t border-white/8"
          style={{ animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.75s both' }}>
          {[
            { n: '240+', l: 'Bewertungen' },
            { n: '4.8★', l: 'Ø Google' },
            { n: '100%', l: 'Leidenschaft' },
          ].map(s => (
            <div key={s.l}>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em' }}
                className="text-[#C9A96E]">{s.n}</p>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em' }}
                className="text-white/40 uppercase mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <button onClick={() => scrollTo('about')}
          className="absolute bottom-10 left-10 sm:left-16 lg:left-24 flex items-center gap-2 text-white/25 hover:text-[#C9A96E] transition-colors"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 200, letterSpacing: '0.35em', fontSize: '0.6rem', textTransform: 'uppercase' }}>
          <ArrowDown size={12} strokeWidth={1.5} />
          Entdecken
        </button>
      </div>

      {/* ── Right: Image panel ── */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[50%] xl:w-[54%]">
        {/* Image */}
        <img
          src="/hero-bg.jpg"
          alt="You'N Mani Salon Atmosphäre"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
        />
        {/* Left edge fade into content */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, #080808 0%, rgba(8,8,8,0.5) 35%, rgba(8,8,8,0) 65%)' }} />
        {/* Subtle gold vignette bottom */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.7) 0%, transparent 40%)' }} />
      </div>

      {/* Mobile: image as background */}
      <div className="lg:hidden absolute inset-0">
        <img src="/hero-bg.jpg" alt="" aria-hidden className="w-full h-full object-cover" style={{ objectPosition: 'center 30%' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #080808 40%, rgba(8,8,8,0.88) 70%, rgba(8,8,8,0.6) 100%)' }} />
      </div>

      {/* Bottom section fade */}
      <div className="absolute bottom-0 inset-x-0 h-28 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #080808, transparent)' }} />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

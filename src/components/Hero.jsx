import { Phone, Clock, MapPin } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function Hero() {
  useReveal()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0d0d]">
      {/* Hero background image */}
      <img
        src="/hero-bg.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: 'brightness(0.55) saturate(1.1)' }}
      />

      {/* Layered overlays: left-to-right dark for text, bottom fade to section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to right, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.65) 55%, rgba(13,13,13,0.25) 100%),
            linear-gradient(to top, rgba(13,13,13,1) 0%, transparent 30%)
          `,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
          {/* Left: Main content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Logo */}
            <div className="reveal mb-6">
              <p className="text-xs font-semibold tracking-[0.5em] text-[#C9A96E] uppercase mb-3">
                Hair &amp; Beauty Salon · Kassel
              </p>
              <h1
                className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tighter text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                YOU'N
                <br />
                <span className="text-gold-grad">MANI</span>
              </h1>
            </div>

            <p
              className="reveal reveal-d1 text-lg sm:text-xl font-semibold tracking-widest text-white/80 uppercase mb-8"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Friseur mit Stil und Klasse in Kassel
            </p>

            <p className="reveal reveal-d2 text-white/60 text-base leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
              Ihr persönlicher Style-Coach für gesundes und perfekt geschnittenes Haar.
              Professionelle Beratung, handwerkliche Exzellenz.
            </p>

            <div className="reveal reveal-d3 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:056147547157"
                className="flex items-center justify-center gap-3 bg-[#C9A96E] hover:bg-[#e8d5a8] text-black font-bold tracking-widest uppercase text-sm px-8 py-4 transition-all duration-200 btn-push"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <Phone size={16} />
                Jetzt buchen
              </a>
              <button
                onClick={() => scrollTo('leistungen')}
                className="flex items-center justify-center gap-2 border border-white/20 hover:border-[#C9A96E] text-white/70 hover:text-[#C9A96E] font-semibold tracking-widest uppercase text-sm px-8 py-4 transition-all duration-200"
              >
                Leistungen &amp; Preise
              </button>
            </div>
          </div>

          {/* Right: Info card */}
          <div className="reveal reveal-d2 flex-shrink-0 w-full max-w-xs">
            <div
              className="border border-[#C9A96E]/20 p-6"
              style={{ background: 'rgba(20,20,20,0.8)' }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-px bg-[#C9A96E]" />
                <span
                  className="text-[10px] font-bold tracking-[0.4em] text-[#C9A96E] uppercase"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Öffnungszeiten
                </span>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <Clock size={15} className="text-[#C9A96E] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Mo – Sa</p>
                  <p className="text-white/60 text-sm">09:00 – 18:00 Uhr</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <Clock size={15} className="text-white/30 flex-shrink-0" />
                <div>
                  <p className="text-white/40 text-sm">Sonntag</p>
                  <p className="text-white/30 text-sm">Geschlossen</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-5">
                <div className="flex items-start gap-3">
                  <MapPin size={15} className="text-[#C9A96E] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm">Frankfurter Str. 210</p>
                    <p className="text-white/60 text-sm">34134 Kassel</p>
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/4ZmXjhG4BzRnKbTq5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-center text-xs font-semibold tracking-widest text-[#C9A96E] border border-[#C9A96E]/30 hover:border-[#C9A96E] py-2 uppercase transition-colors"
                >
                  Route planen
                </a>
              </div>
            </div>

            {/* Rating badge */}
            <div className="mt-3 border border-white/10 p-4 flex items-center gap-3"
              style={{ background: 'rgba(20,20,20,0.6)' }}>
              <div className="text-2xl font-black text-[#C9A96E]" style={{ fontFamily: 'var(--font-heading)' }}>
                4.8
              </div>
              <div>
                <div className="text-yellow-400 text-sm tracking-wider">★★★★★</div>
                <div className="text-white/50 text-xs">240+ Google-Bewertungen</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="reveal reveal-d4 mt-16 lg:mt-20 text-center">
          <p
            className="text-[#C9A96E]/60 text-sm font-medium tracking-[0.35em] uppercase"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Weil Stil kein Zufall ist – sondern Handwerk.
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0d0d0d] to-transparent pointer-events-none" />
    </section>
  )
}

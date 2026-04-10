import { MapPin, Star, ExternalLink } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  useReveal()

  return (
    <section id="about" className="bg-[#080808] py-36 px-10 sm:px-16 lg:px-24">
      <div className="max-w-screen-xl mx-auto">

        <div className="grid lg:grid-cols-[1fr_1px_1fr] gap-0 lg:gap-0 items-start">

          {/* Left */}
          <div className="pr-0 lg:pr-20 pb-16 lg:pb-0">
            <p className="reveal section-label mb-8">Über Uns</p>

            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.01em' }}
              className="reveal reveal-d1 text-[clamp(2.8rem,5vw,5rem)] text-white italic mb-3">
              You and me.
            </h2>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.03em' }}
              className="reveal reveal-d2 text-[clamp(2.8rem,5vw,5rem)] gold-text uppercase mb-12">
              You'N Mani.
            </h2>

            <div className="reveal reveal-d2 space-y-5 text-white/55 leading-[1.85] text-[0.92rem] max-w-md">
              <p>
                Willkommen bei <strong className="text-white font-medium">You'N Mani</strong> — einem der am besten
                bewerteten Friseursalons in Kassel. Gegründet und geleitet von{' '}
                <strong className="text-[#C9A96E] font-medium">Mansoor</strong>, Ihrem persönlichen
                Style-Coach mit Leidenschaft für Ästhetik und handwerkliche Präzision.
              </p>
              <p>
                Ob klassischer Herrenschnitt, aufwändige Balayage-Technik oder exklusives
                Bartstyling — bei uns erhalten Sie professionelle Beratung auf höchstem Niveau
                und verlassen den Salon mit neuem Selbstbewusstsein.
              </p>
              <p>
                Alle eingesetzten Produkte stammen von unserem Premium-Partner{' '}
                <a href="https://www.newsha.de/" target="_blank" rel="noopener noreferrer"
                  className="text-[#C9A96E] hover:underline underline-offset-2">NEWSHA</a>
                {' '}— für gesundes, gepflegtes Haar nach jedem Besuch.
              </p>
            </div>

            <div className="reveal reveal-d3 flex flex-wrap gap-3 mt-10">
              <a href="https://maps.app.goo.gl/4ZmXjhG4BzRnKbTq5" target="_blank" rel="noopener noreferrer"
                className="btn-outline text-[0.65rem]" style={{ padding: '0.75rem 1.5rem' }}>
                <MapPin size={12} /> Google Maps
              </a>
              <a href="https://reviewthis.biz/mani" target="_blank" rel="noopener noreferrer"
                className="btn-outline text-[0.65rem]" style={{ padding: '0.75rem 1.5rem', color: 'rgba(255,255,255,0.4)', borderColor: 'rgba(255,255,255,0.12)' }}>
                <Star size={12} /> Bewertung hinterlassen
              </a>
            </div>
          </div>

          {/* Vertical rule */}
          <div className="hidden lg:block w-px bg-white/8 self-stretch mx-auto" />

          {/* Right */}
          <div className="pl-0 lg:pl-20 pt-16 lg:pt-0">
            {/* Large quote */}
            <div className="reveal reveal-d1 mb-14">
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', lineHeight: 1.4, color: 'rgba(255,255,255,0.9)' }}>
                „Weil Stil kein Zufall ist —<br />sondern Handwerk."
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="w-8 h-px bg-[#C9A96E]" />
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 200, letterSpacing: '0.3em', fontSize: '0.6rem' }}
                  className="text-[#C9A96E] uppercase">Mansoor · Inhaber &amp; Style-Coach</span>
              </div>
            </div>

            <hr className="rule mb-14" />

            {/* Stats grid */}
            <div className="reveal reveal-d2 grid grid-cols-3 gap-px bg-white/8">
              {[
                { n: '240+', l: 'Google-Bewertungen' },
                { n: '4.8', l: 'Ø Bewertung' },
                { n: '#1', l: 'Friseur Kassel' },
              ].map(s => (
                <div key={s.l} className="bg-[#080808] p-6 text-center">
                  <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '2rem', letterSpacing: '-0.03em' }}
                    className="gold-text">{s.n}</p>
                  <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 200, letterSpacing: '0.2em', fontSize: '0.6rem' }}
                    className="text-white/40 uppercase mt-1">{s.l}</p>
                </div>
              ))}
            </div>

            <hr className="rule mt-0" />

            {/* Address card */}
            <div className="reveal reveal-d3 mt-10 space-y-4">
              <p className="section-label">Adresse</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Frankfurter Str. 210<br />34134 Kassel, Deutschland
              </p>
              <p className="text-white/70 text-sm">
                Mo – Sa &nbsp;·&nbsp; 09:00 – 18:00 Uhr
              </p>
              <p className="text-white/30 text-sm">Sonntag geschlossen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

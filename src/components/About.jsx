import { MapPin, Star } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  useReveal()

  return (
    <section className="bg-[#0d0d0d] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="reveal flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#C9A96E]" />
              <span
                className="text-xs font-bold tracking-[0.4em] text-[#C9A96E] uppercase"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Über uns
              </span>
            </div>

            <h2
              className="reveal reveal-d1 text-3xl sm:text-4xl font-black leading-tight text-white uppercase mb-8"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              You'N Mani<br />
              <span className="text-gold-grad">= You and Me</span>
            </h2>

            <div className="reveal reveal-d2 space-y-5 text-white/70 leading-relaxed">
              <p>
                <strong className="text-white">Willkommen bei You'N Mani</strong> – Ihrem Friseur mit
                Stil und Klasse in Kassel. Mein Name ist{' '}
                <strong className="text-[#C9A96E]">Mansoor</strong> und ich bin Ihr persönlicher
                Style-Coach für gesundes und perfekt geschnittenes Haar.
              </p>
              <p>
                Mit einer Leidenschaft für Ästhetik und feinem Gespür für Trends realisiere ich
                Schnitte, die Individualität sichtbar machen – ob Herrenhaarschnitt, Bartstyling
                oder hochwertige Color-Optionen.
              </p>
              <p>
                Bei mir erhalten Sie professionelle Beratung und perfekten Service. Besuchen Sie
                mich in zentraler Lage, erleben Sie eine entspannte Atmosphäre und verlassen Sie
                den Salon mit neuem Selbstbewusstsein.
              </p>
            </div>

            <div className="reveal reveal-d3 mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://maps.app.goo.gl/4ZmXjhG4BzRnKbTq5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-[#C9A96E] border border-[#C9A96E]/30 hover:border-[#C9A96E] px-5 py-3 uppercase tracking-widest transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <MapPin size={14} />
                Route auf Google Maps
              </a>
              <a
                href="https://reviewthis.biz/mani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-[#C9A96E] border border-white/10 hover:border-[#C9A96E]/30 px-5 py-3 uppercase tracking-widest transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <Star size={14} />
                Bewertung hinterlassen
              </a>
            </div>
          </div>

          {/* Right: Accent card */}
          <div className="reveal reveal-d2">
            <div
              className="relative p-10 border border-[#C9A96E]/20"
              style={{ background: 'rgba(20,20,20,0.6)' }}
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#C9A96E]" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#C9A96E]" />

              <blockquote
                className="text-2xl sm:text-3xl font-black text-white leading-tight uppercase mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                "Weil Stil kein Zufall ist –
                <span className="text-gold-grad"> sondern Handwerk.</span>"
              </blockquote>

              <div className="border-t border-[#C9A96E]/20 pt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#C9A96E] flex items-center justify-center text-black font-black text-sm"
                    style={{ fontFamily: 'var(--font-heading)' }}>
                    M
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Mansoor</p>
                    <p className="text-white/50 text-xs tracking-wider">Inhaber &amp; Style-Coach</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
                  {[
                    { num: '240+', label: 'Bewertungen' },
                    { num: '4.8', label: '★ Sterne' },
                    { num: '#1', label: 'in Kassel' },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="text-2xl font-black text-[#C9A96E]" style={{ fontFamily: 'var(--font-heading)' }}>
                        {s.num}
                      </p>
                      <p className="text-white/50 text-xs mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-white/50 text-xs leading-relaxed">
                  Alle Haarprodukte stammen von unserem Partner{' '}
                  <a
                    href="https://www.newsha.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A96E] hover:underline"
                  >
                    NEWSHA
                  </a>{' '}
                  – für gesundes, gepflegtes Haar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

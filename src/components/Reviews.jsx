import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const REVIEWS = [
  {
    name: 'Sylvia U.',
    stars: 5,
    text: 'Ich bin so gut wie nie zum Friseur, weil ich meist unzufriedener raus kam als ich rein ging. Dieses Mal habe ich es mich erneut gewagt – ohne Vorstellung wie ich es eigentlich haben will und mit viel Skepsis. Und ich muss sagen: Top Beratung, perfektes Ergebnis. Ich bin so happy!',
    url: 'https://maps.app.goo.gl/DTL34zkgmKssyGEy7',
  },
  {
    name: 'Ahmed K.',
    stars: 5,
    text: 'Bester Friseur in Kassel! Mansoor versteht sofort was man möchte und setzt es perfekt um. Das All-Inklusive Paket für Herren ist sein Geld mehr als wert. Komme seitdem regelmäßig her.',
    url: 'https://maps.app.goo.gl/4ZmXjhG4BzRnKbTq5',
  },
  {
    name: 'Laura M.',
    stars: 5,
    text: 'Für meinen Balayage bin ich extra weit gefahren und es hat sich absolut gelohnt. Mansoor hat sich viel Zeit für die Beratung genommen und das Ergebnis übertrifft alle Erwartungen. Wunderschön!',
    url: 'https://maps.app.goo.gl/4ZmXjhG4BzRnKbTq5',
  },
]

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'}
        />
      ))}
    </div>
  )
}

export default function Reviews() {
  useReveal()
  const [idx, setIdx] = useState(0)
  const review = REVIEWS[idx]

  return (
    <section id="bewertungen" className="bg-[#0d0d0d] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#C9A96E]" />
            <span
              className="text-xs font-bold tracking-[0.4em] text-[#C9A96E] uppercase"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Google Bewertungen
            </span>
            <div className="w-8 h-px bg-[#C9A96E]" />
          </div>
          <h2
            className="reveal reveal-d1 text-4xl sm:text-5xl font-black text-white uppercase"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Aus Kunden werden{' '}
            <span className="text-gold-grad">Freunde</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Review card */}
          <div className="reveal">
            <div
              className="border border-[#C9A96E]/20 p-8 relative"
              style={{ background: 'rgba(20,20,20,0.8)' }}
            >
              {/* Quote mark */}
              <div
                className="absolute top-5 right-6 text-6xl font-black text-[#C9A96E]/10 leading-none select-none"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                "
              </div>

              <StarRating count={review.stars} />

              <blockquote className="mt-4 text-white/80 leading-relaxed text-sm italic mb-6">
                „{review.text}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 bg-[#C9A96E] flex items-center justify-center text-black font-black text-sm"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{review.name}</p>
                    <p className="text-white/40 text-xs">Google-Bewertung</p>
                  </div>
                </div>
                <a
                  href={review.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#C9A96E] hover:underline tracking-wider uppercase"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Weiterlesen →
                </a>
              </div>

              {/* Nav */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/10">
                <button
                  onClick={() => setIdx((i) => (i - 1 + REVIEWS.length) % REVIEWS.length)}
                  className="w-8 h-8 border border-white/20 hover:border-[#C9A96E] flex items-center justify-center text-white/60 hover:text-[#C9A96E] transition-colors"
                >
                  <ChevronLeft size={14} />
                </button>
                <div className="flex gap-1.5">
                  {REVIEWS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      className={`w-1.5 h-1.5 transition-colors ${
                        i === idx ? 'bg-[#C9A96E]' : 'bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setIdx((i) => (i + 1) % REVIEWS.length)}
                  className="w-8 h-8 border border-white/20 hover:border-[#C9A96E] flex items-center justify-center text-white/60 hover:text-[#C9A96E] transition-colors"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Stats + CTA */}
          <div className="reveal reveal-d2 space-y-5">
            {/* Rating stats */}
            <div
              className="border border-white/10 p-8 grid grid-cols-3 gap-6 text-center"
              style={{ background: 'rgba(18,18,18,0.8)' }}
            >
              {[
                { num: '240+', label: 'Bewertungen' },
                { num: '4.8', label: '⭐ Ø Sterne' },
                { num: '#1', label: 'in Kassel' },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="text-3xl font-black text-[#C9A96E]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {s.num}
                  </p>
                  <p className="text-white/50 text-xs mt-1 tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Google bar */}
            <div
              className="border border-white/10 p-6 flex items-center justify-between gap-4"
              style={{ background: 'rgba(18,18,18,0.8)' }}
            >
              <div>
                <p
                  className="text-white font-bold text-sm uppercase tracking-widest"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Waren Sie schon bei uns?
                </p>
                <p className="text-white/50 text-xs mt-1">
                  Über eine ehrliche Bewertung würden wir uns sehr freuen.
                </p>
              </div>
              <a
                href="https://reviewthis.biz/mani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 bg-[#C9A96E] hover:bg-[#e8d5a8] text-black text-xs font-black tracking-widest uppercase px-5 py-3 transition-colors btn-push"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Bewerten
              </a>
            </div>

            {/* Testimonial quote */}
            <div className="border-l-2 border-[#C9A96E] pl-5">
              <p className="text-white/60 text-sm italic leading-relaxed">
                „Wir sind stolz – mit über <strong className="text-white">240 authentischen
                Bewertungen</strong> und einer durchschnittlichen Bewertung von{' '}
                <strong className="text-[#C9A96E]">4,8 Sternen</strong> zählt You'N Mani zu den
                bestbewerteten Friseuren in Kassel."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

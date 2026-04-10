import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const REVIEWS = [
  {
    name: 'Sylvia U.',
    stars: 5,
    text: 'Ich bin so gut wie nie zum Friseur, weil ich meist unzufriedener raus kam als ich rein ging. Und ich muss sagen — Top Beratung, perfektes Ergebnis. Ich bin so happy!',
    url: 'https://maps.app.goo.gl/DTL34zkgmKssyGEy7',
  },
  {
    name: 'Ahmed K.',
    stars: 5,
    text: 'Bester Friseur in Kassel. Mansoor versteht sofort was man möchte und setzt es perfekt um. Das All-Inklusive Paket ist sein Geld mehr als wert.',
    url: 'https://maps.app.goo.gl/4ZmXjhG4BzRnKbTq5',
  },
  {
    name: 'Laura M.',
    stars: 5,
    text: 'Für meinen Balayage bin ich extra weit gefahren — es hat sich absolut gelohnt. Mansoor nahm sich viel Zeit für Beratung und das Ergebnis übertrifft alle Erwartungen.',
    url: 'https://maps.app.goo.gl/4ZmXjhG4BzRnKbTq5',
  },
]

export default function Reviews() {
  useReveal()
  const [idx, setIdx] = useState(0)
  const r = REVIEWS[idx]

  return (
    <section id="bewertungen" className="bg-[#0a0a0a] py-36 px-10 sm:px-16 lg:px-24">
      <div className="max-w-screen-xl mx-auto">

        {/* Top rule */}
        <hr className="rule mb-20" />

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">

          {/* Left: meta */}
          <div>
            <p className="reveal section-label mb-8">Google Bewertungen</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.05, fontSize: 'clamp(2.5rem,4vw,4rem)' }}
              className="reveal reveal-d1 text-white mb-2">
              Aus Kunden
            </h2>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em', fontSize: 'clamp(2.5rem,4vw,4rem)' }}
              className="reveal reveal-d2 gold-text uppercase mb-14">
              werden Freunde.
            </h2>

            {/* Stats */}
            <div className="reveal reveal-d2 space-y-6">
              {[
                { n: '240+', l: 'authentische Bewertungen' },
                { n: '4.8 / 5', l: 'durchschnittliche Bewertung' },
              ].map(s => (
                <div key={s.l} className="flex items-baseline gap-5">
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2.2rem', letterSpacing: '-0.03em' }}
                    className="gold-text">{s.n}</span>
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 200, letterSpacing: '0.18em', fontSize: '0.65rem' }}
                    className="text-white/40 uppercase">{s.l}</span>
                </div>
              ))}
            </div>

            <hr className="rule my-10" />

            <a href="https://reviewthis.biz/mani" target="_blank" rel="noopener noreferrer"
              className="reveal reveal-d3 btn-outline text-[0.65rem]" style={{ padding: '0.75rem 1.5rem' }}>
              Bewertung hinterlassen
            </a>
          </div>

          {/* Right: review slider */}
          <div className="reveal reveal-d1">
            {/* Large quote */}
            <div className="border border-white/8 p-10 lg:p-14 relative overflow-hidden"
              style={{ background: 'rgba(14,14,14,0.7)' }}>

              {/* Decorative quote mark */}
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '10rem', lineHeight: 1, color: 'rgba(201,169,110,0.06)', position: 'absolute', top: '-1rem', right: '1.5rem', userSelect: 'none' }}>
                "
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(r.stars)].map((_, i) => (
                  <span key={i} style={{ fontSize: '0.8rem' }} className="text-[#C9A96E]">★</span>
                ))}
              </div>

              {/* Quote text */}
              <blockquote style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(1.2rem,2vw,1.6rem)', lineHeight: 1.5, color: 'rgba(255,255,255,0.85)' }}
                className="mb-10 relative z-10">
                „{r.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.85rem', background: '#C9A96E', color: '#000', width: '2.2rem', height: '2.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {r.name[0]}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: '0.82rem' }} className="text-white">{r.name}</p>
                    <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 200, letterSpacing: '0.2em', fontSize: '0.6rem' }} className="text-white/35 uppercase">Google-Bewertung</p>
                  </div>
                </div>
                <a href={r.url} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300, letterSpacing: '0.2em', fontSize: '0.6rem' }}
                  className="text-[#C9A96E]/60 hover:text-[#C9A96E] uppercase transition-colors hidden sm:block">
                  Weiterlesen →
                </a>
              </div>
            </div>

            {/* Nav */}
            <div className="flex items-center gap-4 mt-6">
              <button onClick={() => setIdx(i => (i - 1 + REVIEWS.length) % REVIEWS.length)}
                className="w-9 h-9 border border-white/12 hover:border-[#C9A96E]/50 flex items-center justify-center text-white/40 hover:text-[#C9A96E] transition-all">
                <ChevronLeft size={14} />
              </button>
              <div className="flex gap-2">
                {REVIEWS.map((_, i) => (
                  <button key={i} onClick={() => setIdx(i)}
                    className="transition-all duration-300"
                    style={{ width: i === idx ? '1.5rem' : '0.4rem', height: '1px', background: i === idx ? '#C9A96E' : 'rgba(255,255,255,0.2)' }} />
                ))}
              </div>
              <button onClick={() => setIdx(i => (i + 1) % REVIEWS.length)}
                className="w-9 h-9 border border-white/12 hover:border-[#C9A96E]/50 flex items-center justify-center text-white/40 hover:text-[#C9A96E] transition-all">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

        <hr className="rule mt-20" />
      </div>
    </section>
  )
}

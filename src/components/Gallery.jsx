import { useReveal } from '../hooks/useReveal'
import { ExternalLink } from 'lucide-react'

const IMAGES = [
  {
    src: 'https://younmani.de/wp-content/uploads/2025/08/1-1.png',
    alt: 'Alicia – Vorher/Nachher: Aufgebaut zur Vollblondierung',
    label: 'Vollblondierung',
  },
  {
    src: 'https://younmani.de/wp-content/uploads/2025/08/2-1.png',
    alt: 'Sylvia – Balayage Ergebnis',
    label: 'Balayage',
  },
  {
    src: 'https://younmani.de/wp-content/uploads/2025/08/3-1.png',
    alt: 'JK – Dunkel auf Blond',
    label: 'Colorierung',
  },
  {
    src: 'https://younmani.de/wp-content/uploads/2025/08/4.png',
    alt: 'Alina – Balayage',
    label: 'Balayage',
  },
  {
    src: 'https://younmani.de/wp-content/uploads/2025/08/10-1.jpg',
    alt: 'Ergebnis You\'N Mani',
    label: 'Styling',
  },
  {
    src: 'https://younmani.de/wp-content/uploads/2025/08/YOU-N-MANI-BALAYAGE-KI-GENERATED.png',
    alt: 'Balayage Beispiel You\'N Mani',
    label: 'Balayage',
  },
  {
    src: 'https://younmani.de/wp-content/uploads/2025/08/12-1.jpg',
    alt: 'Mansoor beim Haarschneiden',
    label: 'Handwerk',
  },
  {
    src: 'https://younmani.de/wp-content/uploads/2025/08/11-1.png',
    alt: 'Ergebnis You\'N Mani',
    label: 'Styling',
  },
]

export default function Gallery() {
  useReveal()

  return (
    <section id="galerie" className="bg-[#080808] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="reveal flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#C9A96E]" />
            <span
              className="text-xs font-bold tracking-[0.4em] text-[#C9A96E] uppercase"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Unsere Arbeit
            </span>
            <div className="w-8 h-px bg-[#C9A96E]" />
          </div>
          <h2
            className="reveal reveal-d1 text-4xl sm:text-5xl font-black text-white uppercase"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Bilder &amp;{' '}
            <span className="text-gold-grad">Referenzen</span>
          </h2>
          <p className="reveal reveal-d2 mt-4 text-white/50 max-w-md mx-auto">
            Echte Ergebnisse. Echte Kunden. Jeder Schnitt erzählt eine Geschichte.
          </p>
        </div>

        {/* Grid */}
        <div className="reveal reveal-d2 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          {IMAGES.map((img, i) => (
            <a
              key={i}
              href={img.src}
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-card relative aspect-square block group"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.parentElement.style.background = '#1a1a1a'
                  e.target.style.display = 'none'
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <ExternalLink size={20} className="text-[#C9A96E] mx-auto mb-1" />
                  <p
                    className="text-[#C9A96E] text-xs font-bold tracking-widest uppercase"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {img.label}
                  </p>
                </div>
              </div>
              {/* Label badge */}
              <div className="absolute bottom-2 left-2">
                <span
                  className="text-[9px] font-bold tracking-widest text-black bg-[#C9A96E] px-2 py-0.5 uppercase opacity-80"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {img.label}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="reveal reveal-d3 mt-8 text-center">
          <a
            href="https://www.instagram.com/youandmani/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-[#C9A96E] border border-white/10 hover:border-[#C9A96E]/30 px-6 py-3 uppercase tracking-widest transition-colors"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Mehr auf Instagram @youandmani
          </a>
        </div>
      </div>
    </section>
  )
}

import { useReveal } from '../hooks/useReveal'

const IMAGES = [
  { src: 'https://younmani.de/wp-content/uploads/2025/08/1-1.png', label: 'Vollblondierung', size: 'tall' },
  { src: 'https://younmani.de/wp-content/uploads/2025/08/2-1.png', label: 'Balayage', size: 'normal' },
  { src: 'https://younmani.de/wp-content/uploads/2025/08/3-1.png', label: 'Colorierung', size: 'normal' },
  { src: 'https://younmani.de/wp-content/uploads/2025/08/4.png', label: 'Balayage', size: 'tall' },
  { src: 'https://younmani.de/wp-content/uploads/2025/08/12-1.jpg', label: 'Handwerk', size: 'normal' },
  { src: 'https://younmani.de/wp-content/uploads/2025/08/10-1.jpg', label: 'Styling', size: 'normal' },
  { src: 'https://younmani.de/wp-content/uploads/2025/08/YOU-N-MANI-BALAYAGE-KI-GENERATED.png', label: 'Balayage', size: 'normal' },
  { src: 'https://younmani.de/wp-content/uploads/2025/08/11-1.png', label: 'Ergebnis', size: 'normal' },
]

export default function Gallery() {
  useReveal()

  return (
    <section id="galerie" className="bg-[#080808] py-36 px-10 sm:px-16 lg:px-24">
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <p className="reveal section-label mb-6">Referenzen</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.0, fontSize: 'clamp(2.8rem,5vw,5rem)' }}
              className="reveal reveal-d1 text-white">
              Ergebnisse,
            </h2>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em', fontSize: 'clamp(2.8rem,5vw,5rem)' }}
              className="reveal reveal-d2 gold-text uppercase">
              die sprechen.
            </h2>
          </div>
          <a href="https://www.instagram.com/youandmani/" target="_blank" rel="noopener noreferrer"
            className="reveal reveal-d2 btn-outline self-start lg:self-end"
            style={{ padding: '0.7rem 1.5rem', fontSize: '0.65rem' }}>
            @youandmani auf Instagram
          </a>
        </div>

        {/* Masonry grid */}
        <div className="reveal reveal-d1 columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {IMAGES.map((img, i) => (
            <a key={i} href={img.src} target="_blank" rel="noopener noreferrer"
              className="gallery-item relative block overflow-hidden break-inside-avoid group">
              <img
                src={img.src}
                alt={img.label}
                loading="lazy"
                className="w-full"
                style={{ display: 'block' }}
                onError={e => { e.target.parentElement.style.display = 'none' }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500
                flex items-end justify-start p-4 opacity-0 group-hover:opacity-100">
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 200, letterSpacing: '0.3em', fontSize: '0.6rem' }}
                  className="text-[#C9A96E] uppercase">{img.label}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

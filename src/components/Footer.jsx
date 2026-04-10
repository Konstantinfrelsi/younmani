import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'

function InstagramIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer id="kontakt" className="bg-[#060606] border-t border-white/6">

      {/* Main */}
      <div className="max-w-screen-xl mx-auto px-10 sm:px-16 lg:px-24 py-20">
        <div className="grid lg:grid-cols-[2fr_1fr_1fr] gap-14">

          {/* Brand */}
          <div>
            <div className="mb-6">
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, letterSpacing: '0.2em', fontSize: '1.1rem' }}
                className="text-white">YOU'N MANI</p>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 200, letterSpacing: '0.45em', fontSize: '0.55rem' }}
                className="text-[#C9A96E] uppercase mt-1">Hair &amp; Beauty Salon · Kassel</p>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.8 }} className="text-white/40 max-w-xs mb-8">
              Ihr persönlicher Style-Coach in Kassel. Exklusive Beratung, handwerkliche Präzision —
              weil Stil kein Zufall ist.
            </p>
            <a href="https://www.instagram.com/youandmani/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#C9A96E]/60 hover:text-[#C9A96E] transition-colors"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300, letterSpacing: '0.2em', fontSize: '0.65rem' }}>
              <InstagramIcon size={14} />
              @youandmani
            </a>
          </div>

          {/* Nav */}
          <div>
            <p className="section-label mb-6">Navigation</p>
            <nav className="flex flex-col gap-4">
              {[
                { label: 'Leistungen & Preise', id: 'leistungen' },
                { label: 'Galerie', id: 'galerie' },
                { label: 'Bewertungen', id: 'bewertungen' },
              ].map(l => (
                <button key={l.id} onClick={() => scrollTo(l.id)}
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300, letterSpacing: '0.15em', fontSize: '0.72rem', textTransform: 'uppercase', textAlign: 'left' }}
                  className="text-white/40 hover:text-[#C9A96E] transition-colors cursor-pointer">
                  {l.label}
                </button>
              ))}
              <a href="https://reviewthis.biz/mani" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300, letterSpacing: '0.15em', fontSize: '0.72rem', textTransform: 'uppercase' }}
                className="text-white/40 hover:text-[#C9A96E] transition-colors">
                Bewertung hinterlassen
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-6">Kontakt</p>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={13} className="text-[#C9A96E] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <p style={{ fontSize: '0.8rem', lineHeight: 1.7 }} className="text-white/50">
                  Frankfurter Str. 210<br />34134 Kassel
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={13} className="text-[#C9A96E] flex-shrink-0" strokeWidth={1.5} />
                <a href="tel:056147547157"
                  style={{ fontSize: '0.8rem', fontFamily: 'var(--font-heading)', fontWeight: 300, letterSpacing: '0.05em' }}
                  className="text-white/50 hover:text-[#C9A96E] transition-colors">
                  0561 475 471 57
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={13} className="text-[#C9A96E] flex-shrink-0" strokeWidth={1.5} />
                <a href="mailto:mail@younmani.de"
                  style={{ fontSize: '0.8rem', fontFamily: 'var(--font-heading)', fontWeight: 300, letterSpacing: '0.05em' }}
                  className="text-white/50 hover:text-[#C9A96E] transition-colors">
                  mail@younmani.de
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={13} className="text-[#C9A96E] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div style={{ fontSize: '0.8rem', lineHeight: 1.7 }} className="text-white/50">
                  <p>Mo – Sa: 09:00 – 18:00</p>
                  <p className="text-white/25">So: Geschlossen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-screen-xl mx-auto px-10 sm:px-16 lg:px-24 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 200, letterSpacing: '0.15em', fontSize: '0.6rem' }}
            className="text-white/20 uppercase">
            © {year} You'N Mani · Mohammed Shaib Mansoor
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: 'Impressum', to: '/impressum' },
              { label: 'Datenschutz', to: '/datenschutz' },
            ].map(l => (
              <Link key={l.to} to={l.to}
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 200, letterSpacing: '0.2em', fontSize: '0.6rem' }}
                className="text-white/25 hover:text-[#C9A96E] uppercase transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

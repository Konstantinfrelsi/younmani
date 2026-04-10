import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock } from 'lucide-react'

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer id="kontakt" className="bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <p
                className="text-2xl font-black tracking-widest text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                YOU'N MANI
              </p>
              <p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mt-0.5">
                Hair &amp; Beauty Salon
              </p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Ihr persönlicher Style-Coach in Kassel. Weil Stil kein Zufall ist –
              sondern Handwerk.
            </p>
            <a
              href="https://www.instagram.com/youandmani/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C9A96E] hover:text-white transition-colors text-sm font-medium"
            >
              <InstagramIcon size={16} />
              @youandmani
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs font-bold tracking-[0.35em] text-[#C9A96E] uppercase mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Leistungen & Preise', id: 'leistungen' },
                { label: 'Galerie', id: 'galerie' },
                { label: 'Bewertungen', id: 'bewertungen' },
              ].map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="text-white/50 hover:text-[#C9A96E] text-sm text-left uppercase tracking-wider transition-colors cursor-pointer"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {l.label}
                </button>
              ))}
              <a
                href="https://reviewthis.biz/mani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#C9A96E] text-sm uppercase tracking-wider transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Bewertung hinterlassen
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-bold tracking-[0.35em] text-[#C9A96E] uppercase mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Kontakt &amp; Öffnungszeiten
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-[#C9A96E] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm">Frankfurter Str. 210</p>
                  <p className="text-white/50 text-sm">34134 Kassel</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-[#C9A96E] flex-shrink-0" />
                <a
                  href="tel:056147547157"
                  className="text-white/70 hover:text-[#C9A96E] text-sm transition-colors"
                >
                  0561 475 471 57
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={14} className="text-[#C9A96E] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm">Mo – Sa: 09:00 – 18:00</p>
                  <p className="text-white/40 text-sm">Sonntag: Geschlossen</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs tracking-wider">
            © {year} You'N Mani – Mohammed Shaib Mansoor. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/impressum"
              className="text-white/30 hover:text-[#C9A96E] text-xs uppercase tracking-widest transition-colors"
            >
              Impressum
            </Link>
            <span className="text-white/20">|</span>
            <Link
              to="/datenschutz"
              className="text-white/30 hover:text-[#C9A96E] text-xs uppercase tracking-widest transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

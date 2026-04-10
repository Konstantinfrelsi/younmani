import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const NAV = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Bewertungen', href: '#bewertungen' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (href) => {
    setOpen(false)
    if (!isHome) return
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 50)
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${scrolled || open ? 'nav-blur' : 'bg-transparent'}`}>
      <div className="max-w-screen-xl mx-auto px-8 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none gap-0.5">
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, letterSpacing: '0.22em', fontSize: '1.05rem' }}
            className="text-white tracking-widest uppercase">
            YOU'N MANI
          </span>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 200, letterSpacing: '0.45em', fontSize: '0.55rem' }}
            className="text-[#C9A96E] uppercase">
            Hair &amp; Beauty · Kassel
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {isHome && NAV.map(l => (
            <button key={l.href} onClick={() => go(l.href)}
              className="cursor-pointer"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300, letterSpacing: '0.22em', fontSize: '0.65rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#C9A96E'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}>
              {l.label}
            </button>
          ))}
          <a href="tel:056147547157" className="btn-gold text-[0.65rem]" style={{ padding: '0.7rem 1.6rem' }}>
            <Phone size={11} strokeWidth={2.5} />
            Termin buchen
          </a>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white/70 hover:text-white">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu md:hidden fixed inset-0 bg-[#080808] flex flex-col items-center justify-center gap-10 ${open ? 'open' : ''}`}>
        <button onClick={() => setOpen(false)} className="absolute top-6 right-8 text-white/50 hover:text-white">
          <X size={20} />
        </button>
        <Link to="/" onClick={() => setOpen(false)} className="flex flex-col items-center gap-1 mb-6">
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, letterSpacing: '0.22em', fontSize: '1.4rem' }} className="text-white">YOU'N MANI</span>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 200, letterSpacing: '0.45em', fontSize: '0.55rem' }} className="text-[#C9A96E]">HAIR & BEAUTY · KASSEL</span>
        </Link>
        <hr className="rule-gold w-16" />
        {isHome && NAV.map(l => (
          <button key={l.href} onClick={() => go(l.href)}
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300, letterSpacing: '0.35em', fontSize: '0.75rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}
            className="cursor-pointer hover:text-[#C9A96E] transition-colors">
            {l.label}
          </button>
        ))}
        <a href="tel:056147547157" className="btn-gold mt-4" onClick={() => setOpen(false)}>
          <Phone size={13} /> Jetzt anrufen
        </a>
      </div>
    </header>
  )
}

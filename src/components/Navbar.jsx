import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const NAV_LINKS = [
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
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    if (!isHome) return
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open ? 'nav-glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none">
          <span
            style={{ fontFamily: 'var(--font-heading)' }}
            className="text-xl font-black tracking-widest text-white"
          >
            YOU'N MANI
          </span>
          <span className="text-[9px] font-medium tracking-[0.35em] text-[#C9A96E] uppercase">
            Hair &amp; Beauty Salon
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {isHome &&
            NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-xs font-semibold tracking-widest text-white/70 hover:text-[#C9A96E] uppercase transition-colors duration-200 cursor-pointer"
              >
                {l.label}
              </button>
            ))}
          <a
            href="tel:056147547157"
            className="flex items-center gap-2 bg-[#C9A96E] hover:bg-[#e8d5a8] text-black text-xs font-bold tracking-widest uppercase px-4 py-2 transition-colors duration-200 btn-push"
          >
            <Phone size={13} />
            Termin buchen
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-1"
          aria-label="Menü"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu md:hidden absolute inset-0 min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center gap-8 ${
          open ? 'open' : ''
        }`}
      >
        <button onClick={() => setOpen(false)} className="absolute top-5 right-6 text-white">
          <X size={24} />
        </button>
        {isHome &&
          NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="text-2xl font-black tracking-widest text-white uppercase hover:text-[#C9A96E] transition-colors cursor-pointer"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {l.label}
            </button>
          ))}
        <a
          href="tel:056147547157"
          className="flex items-center gap-2 bg-[#C9A96E] text-black text-sm font-bold tracking-widest uppercase px-6 py-3 mt-4"
          onClick={() => setOpen(false)}
        >
          <Phone size={15} />
          Jetzt anrufen
        </a>
      </div>
    </header>
  )
}

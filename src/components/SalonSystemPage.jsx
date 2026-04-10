import {
  Phone, ArrowDown, Check, X, Calendar, Bell, Star,
  RefreshCw, Users, MessageCircle, LayoutDashboard,
  TrendingUp, ArrowRight, Sparkles, ChevronRight
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

/* ─────────────────────────────────────────
   Scroll helper
───────────────────────────────────────── */
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const PAIN_POINTS = [
  { icon: Phone,       text: 'Viele Termine kommen nur telefonisch rein' },
  { icon: X,          text: 'Kunden erscheinen nicht zum Termin (No-Shows)' },
  { icon: Users,      text: 'Wenig Stammkunden — einmalige Besuche dominieren' },
  { icon: Star,       text: 'Kaum neue Google-Bewertungen trotz guter Arbeit' },
  { icon: RefreshCw,  text: 'Viel manueller Aufwand im täglichen Betrieb' },
]

const FEATURES = [
  {
    icon: Calendar,
    title: 'Online-Terminbuchung',
    desc: 'Kunden buchen 24/7 – auch außerhalb der Öffnungszeiten. Vollautomatisch.',
  },
  {
    icon: Bell,
    title: 'Automatische Erinnerungen',
    desc: 'Reduzieren Sie No-Shows durch SMS & WhatsApp Erinnerungen vor dem Termin.',
  },
  {
    icon: Star,
    title: 'Bewertungs-System',
    desc: 'Mehr 5-Sterne Bewertungen automatisch nach jedem Termin — ohne Mehraufwand.',
  },
  {
    icon: RefreshCw,
    title: 'Kunden-Reaktivierung',
    desc: 'Kunden kommen automatisch wieder zurück – durch smarte Follow-up-Sequenzen.',
  },
  {
    icon: Users,
    title: 'CRM-System',
    desc: 'Alle Kundendaten & Besuche übersichtlich an einem Ort. Kein Excel, kein Chaos.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Integration',
    desc: 'Direkter Kontakt & schnelle Terminabwicklung über den beliebtesten Kanal.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard',
    desc: 'Alle wichtigen Kennzahlen auf einen Blick — Termine, Bewertungen, Umsatz.',
    premium: true,
  },
]

const RESULTS = [
  { n: '+40 %',   l: 'Stammkunden' },
  { n: '−60 %',  l: 'No-Shows' },
  { n: '3×',     l: 'mehr Bewertungen' },
  { n: '100 %',  l: 'planbarer Umsatz' },
]

const PLANS = [
  {
    name: 'Basic',
    price: '79',
    highlighted: false,
    items: ['Hosting', 'Wartung', 'Support'],
    cta: 'Anfragen',
  },
  {
    name: 'Growth',
    price: '199',
    highlighted: true,
    badge: 'Empfohlen',
    items: [
      'Alles aus Basic',
      'Erinnerungen',
      'Bewertungs-System',
      'Kunden-Reaktivierung',
      'CRM',
    ],
    cta: 'Jetzt starten',
  },
  {
    name: 'Premium',
    price: '349',
    highlighted: false,
    items: [
      'Alles aus Growth',
      'Automationen',
      'Dashboard',
      'Erweiterte Funktionen',
    ],
    cta: 'Anfragen',
  },
]

/* ─────────────────────────────────────────
   SECTIONS
───────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080808]">

      {/* Subtle gradient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(201,169,110,0.06) 0%, transparent 70%)' }} />

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #080808, transparent)' }} />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-8 text-center flex flex-col items-center pt-28 pb-20">

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-10"
          style={{ animation: 'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s both' }}>
          <div className="w-10 h-px bg-[#C9A96E]" />
          <span className="section-label">Speziell entwickelt für lokale Friseursalons</span>
          <div className="w-10 h-px bg-[#C9A96E]" />
        </div>

        {/* Headline */}
        <h1 style={{ animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.25s both' }}
          className="text-[clamp(2.8rem,6vw,5.5rem)] text-white leading-[1.0] mb-6">
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic' }}>
            Mehr Termine.{' '}
          </span>
          <br />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic' }}>
            Weniger No-Shows.
          </span>
          <br />
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, letterSpacing: '-0.03em' }}
            className="gold-text uppercase">
            Mehr Stammkunden.
          </span>
        </h1>

        {/* Thin divider */}
        <div className="w-14 h-px bg-[#C9A96E]/40 mb-8"
          style={{ animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.45s both' }} />

        {/* Subheadline */}
        <p style={{ lineHeight: 1.8, fontSize: '1rem', animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.5s both' }}
          className="text-white/50 max-w-md mb-12">
          Ein automatisiertes System für Ihren Friseursalon —
          direkt über Ihre Website.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.6s both' }}>
          <button onClick={() => scrollTo('module')} className="btn-gold">
            <Sparkles size={13} strokeWidth={2} />
            System entdecken
          </button>
          <button onClick={() => scrollTo('preise')} className="btn-outline">
            Preise ansehen
          </button>
        </div>
      </div>

      {/* Scroll cue */}
      <button onClick={() => scrollTo('problem')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 hover:text-[#C9A96E] transition-colors z-10"
        style={{ animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.9s both' }}>
        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 200, letterSpacing: '0.4em', fontSize: '0.55rem', textTransform: 'uppercase' }}>
          Mehr erfahren
        </span>
        <ArrowDown size={12} strokeWidth={1.5} />
      </button>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

function PainPoints() {
  useReveal()
  return (
    <section id="problem" className="py-36 px-10 sm:px-16 lg:px-24"
      style={{ background: 'linear-gradient(180deg, #080808 0%, #0a0a0a 100%)' }}>
      <div className="max-w-screen-lg mx-auto">

        <p className="reveal section-label mb-6">Das Problem</p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(2.4rem,4.5vw,4rem)', lineHeight: 1.05 }}
          className="reveal reveal-d1 text-white mb-2">
          Kommt Ihnen das
        </h2>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, letterSpacing: '-0.04em', fontSize: 'clamp(2.4rem,4.5vw,4rem)', lineHeight: 0.9 }}
          className="reveal reveal-d2 gold-text uppercase mb-16">
          bekannt vor?
        </h2>

        <div className="reveal reveal-d2 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {PAIN_POINTS.map(({ icon: Icon, text }, i) => (
            <div key={i}
              className="flex items-start gap-4 border border-white/8 p-5"
              style={{ background: 'linear-gradient(135deg, #141414 0%, #111111 100%)' }}>
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-white/10"
                style={{ background: 'rgba(201,169,110,0.06)' }}>
                <Icon size={14} className="text-[#C9A96E]/70" strokeWidth={1.5} />
              </div>
              <p style={{ fontSize: '0.84rem', lineHeight: 1.6 }} className="text-white/55 pt-0.5">
                {text}
              </p>
            </div>
          ))}

          {/* Connector card */}
          <div className="flex items-center justify-center border border-[#C9A96E]/20 p-5 sm:col-span-2 lg:col-span-1"
            style={{ background: 'linear-gradient(135deg, rgba(201,169,110,0.07) 0%, rgba(201,169,110,0.03) 100%)' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: '1.15rem', lineHeight: 1.5 }}
              className="text-white/80 text-center">
              „Dann wird es Zeit<br />für ein System."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function SolutionOverview() {
  useReveal()
  return (
    <section className="py-28 px-10 sm:px-16 lg:px-24 relative overflow-hidden"
      style={{ background: '#0d0d0d' }}>

      {/* Gold top line */}
      <div className="absolute top-0 left-24 right-24 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.25), transparent)' }} />

      <div className="max-w-screen-lg mx-auto">
        <div className="grid lg:grid-cols-[1fr_1px_1fr] gap-0 items-center">

          {/* Left */}
          <div className="pr-0 lg:pr-20 pb-12 lg:pb-0">
            <p className="reveal section-label mb-8">Die Lösung</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: 1.1 }}
              className="reveal reveal-d1 text-white mb-2">
              Ein System,
            </h2>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, letterSpacing: '-0.04em', fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: 0.9 }}
              className="reveal reveal-d2 gold-text uppercase mb-10">
              das für Sie arbeitet.
            </h2>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.8 }} className="reveal reveal-d3 text-white/45 max-w-sm">
              Basierend auf Ihrer neuen Website erweitern wir Ihren Salon um
              ein smartes System, das wichtige Prozesse automatisiert und
              Ihren Umsatz planbar steigert.
            </p>
          </div>

          {/* Vertical rule */}
          <div className="hidden lg:block w-px bg-white/8 self-stretch mx-auto" />

          {/* Right: mini steps */}
          <div className="pl-0 lg:pl-20 pt-12 lg:pt-0 space-y-0">
            {[
              { n: '01', t: 'Website als Basis', d: 'Professioneller Online-Auftritt, der Vertrauen schafft' },
              { n: '02', t: 'System-Module', d: 'Schritt für Schritt erweitern, was Sie brauchen' },
              { n: '03', t: 'Automatisch skalieren', d: 'Das System läuft – Sie arbeiten an Ihrem Salon' },
            ].map(({ n, t, d }, i) => (
              <div key={i}
                className={`reveal reveal-d${i + 1} flex gap-6 py-7 ${i < 2 ? 'border-b border-white/8' : ''}`}>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.2em', paddingTop: '0.15rem' }}
                  className="text-[#C9A96E]/50 flex-shrink-0">{n}</span>
                <div>
                  <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.88rem', letterSpacing: '0.05em' }}
                    className="text-white mb-1">{t}</p>
                  <p style={{ fontSize: '0.78rem', lineHeight: 1.6 }} className="text-white/35">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gold bottom line */}
      <div className="absolute bottom-0 left-24 right-24 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.25), transparent)' }} />
    </section>
  )
}

function FeatureModules() {
  useReveal()
  return (
    <section id="module" className="py-36 px-10 sm:px-16 lg:px-24"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 100%)' }}>
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="reveal section-label mb-6">Feature-Module</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.0, fontSize: 'clamp(2.4rem,5vw,4.5rem)' }}
                className="reveal reveal-d1 text-white">
                Was das System
              </h2>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em', fontSize: 'clamp(2.4rem,5vw,4.5rem)' }}
                className="reveal reveal-d2 gold-text uppercase">
                kann.
              </h2>
            </div>
            <p className="reveal reveal-d2 text-white/35 text-sm max-w-xs leading-relaxed">
              Jedes Modul löst ein konkretes Problem in Ihrem Salon —
              einzeln oder als komplettes System.
            </p>
          </div>
        </div>

        {/* Feature grid */}
        <div className="reveal reveal-d1 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {FEATURES.map(({ icon: Icon, title, desc, premium }, i) => (
            <div key={i}
              className={`relative flex flex-col border overflow-hidden p-7 ${
                premium
                  ? 'border-[#C9A96E]/30'
                  : 'border-white/8'
              }`}
              style={{
                background: premium
                  ? 'linear-gradient(135deg, rgba(201,169,110,0.09) 0%, rgba(201,169,110,0.03) 100%)'
                  : 'linear-gradient(160deg, #161616 0%, #111111 100%)',
              }}>

              {/* Premium left bar */}
              {premium && (
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#C9A96E]" />
              )}

              {/* Icon */}
              <div className={`w-10 h-10 flex items-center justify-center mb-5 ${
                premium ? 'border border-[#C9A96E]/30' : 'border border-white/10'
              }`}
                style={{ background: premium ? 'rgba(201,169,110,0.1)' : 'rgba(255,255,255,0.03)' }}>
                <Icon size={16} className={premium ? 'text-[#C9A96E]' : 'text-[#C9A96E]/60'} strokeWidth={1.5} />
              </div>

              {/* Premium badge */}
              {premium && (
                <div className="flex items-center gap-1.5 mb-3">
                  <Sparkles size={9} className="text-[#C9A96E]" strokeWidth={1.5} />
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 300, letterSpacing: '0.3em', fontSize: '0.55rem' }}
                    className="text-[#C9A96E] uppercase">Premium</span>
                </div>
              )}

              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.03em' }}
                className={`mb-3 ${premium ? 'text-white' : 'text-white/85'}`}>
                {title}
              </h3>
              <p style={{ fontSize: '0.78rem', lineHeight: 1.65 }}
                className={premium ? 'text-[#C9A96E]/55' : 'text-white/35'}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Results() {
  useReveal()
  return (
    <section className="py-36 px-10 sm:px-16 lg:px-24 relative overflow-hidden"
      style={{ background: '#080808' }}>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-24 right-24 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.25), transparent)' }} />
      <div className="absolute bottom-0 left-24 right-24 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.25), transparent)' }} />

      <div className="max-w-screen-lg mx-auto">

        <div className="text-center mb-16">
          <p className="reveal section-label mb-6">Ergebnisse</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(2.4rem,5vw,4rem)', lineHeight: 1.1 }}
            className="reveal reveal-d1 text-white mb-2">
            Was das konkret
          </h2>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, letterSpacing: '-0.04em', fontSize: 'clamp(2.4rem,5vw,4rem)', lineHeight: 0.9 }}
            className="reveal reveal-d2 gold-text uppercase">
            für Sie bedeutet.
          </h2>
        </div>

        {/* Stats grid */}
        <div className="reveal reveal-d2 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
          {RESULTS.map(({ n, l }, i) => (
            <div key={i} className="bg-[#080808] p-10 text-center">
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(2.2rem,4vw,3.2rem)', letterSpacing: '-0.03em' }}
                className="gold-text mb-2">{n}</p>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 200, letterSpacing: '0.25em', fontSize: '0.62rem' }}
                className="text-white/40 uppercase">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  useReveal()
  return (
    <section id="preise" className="py-36 px-10 sm:px-16 lg:px-24"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 100%)' }}>
      <div className="max-w-screen-lg mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="reveal section-label mb-6">Monatliches Paket</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.0, fontSize: 'clamp(2.4rem,5vw,4.5rem)' }}
                className="reveal reveal-d1 text-white">
                Klar kalkuliert,
              </h2>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em', fontSize: 'clamp(2.4rem,5vw,4.5rem)' }}
                className="reveal reveal-d2 gold-text uppercase">
                sofort planbar.
              </h2>
            </div>
            <p className="reveal reveal-d2 text-white/35 text-sm max-w-xs leading-relaxed">
              Monatlich kündbar. Keine versteckten Kosten.
              Wir wachsen mit Ihrem Salon.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="reveal reveal-d1 grid md:grid-cols-3 gap-4 items-start">
          {PLANS.map(({ name, price, highlighted, badge, items, cta }) => (
            <div key={name}
              className={`relative flex flex-col border overflow-hidden ${
                highlighted
                  ? 'border-[#C9A96E]/50'
                  : 'border-white/8'
              }`}
              style={{
                background: highlighted
                  ? 'linear-gradient(160deg, #1a1710 0%, #141210 100%)'
                  : 'linear-gradient(160deg, #161616 0%, #111111 100%)',
              }}>

              {/* Highlighted top bar */}
              {highlighted && (
                <div className="h-0.5 w-full"
                  style={{ background: 'linear-gradient(to right, #A88B4A, #C9A96E, #E8D5A8, #C9A96E, #A88B4A)' }} />
              )}

              {/* Badge */}
              {badge && (
                <div className="absolute top-5 right-5">
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.58rem', letterSpacing: '0.2em' }}
                    className="text-[#080808] bg-[#C9A96E] px-2.5 py-1 uppercase">
                    {badge}
                  </span>
                </div>
              )}

              {/* Header */}
              <div className={`px-8 pt-8 pb-7 border-b ${highlighted ? 'border-[#C9A96E]/15' : 'border-white/8'}`}>
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.4em' }}
                  className={`uppercase mb-4 ${highlighted ? 'text-[#C9A96E]' : 'text-white/40'}`}>
                  {name}
                </p>
                <div className="flex items-end gap-1">
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '3rem', letterSpacing: '-0.04em', lineHeight: 1 }}
                    className={highlighted ? 'gold-text' : 'text-white'}>
                    {price}€
                  </span>
                  <span style={{ fontSize: '0.78rem', paddingBottom: '0.35rem' }}
                    className="text-white/30">/ Monat</span>
                </div>
              </div>

              {/* Features */}
              <div className="px-8 py-7 flex-1 space-y-3">
                {items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={13} className={highlighted ? 'text-[#C9A96E]' : 'text-white/30'} strokeWidth={2.5} />
                    <span style={{ fontSize: '0.82rem' }}
                      className={highlighted ? 'text-white/80' : 'text-white/45'}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="px-8 pb-8">
                <button
                  className={highlighted ? 'btn-gold w-full justify-center' : 'btn-outline w-full justify-center'}
                  style={!highlighted ? { color: 'rgba(255,255,255,0.3)', borderColor: 'rgba(255,255,255,0.1)' } : {}}>
                  {cta}
                  <ArrowRight size={12} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Setup cost */}
        <div className="reveal reveal-d2 mt-8 border border-white/8 px-8 py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          style={{ background: 'linear-gradient(90deg, rgba(201,169,110,0.05) 0%, transparent 100%)' }}>
          <div className="flex items-center gap-4">
            <div className="w-0.5 h-10 bg-[#C9A96E]" />
            <div>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.05em' }}
                className="text-white mb-1">
                Einmalige Einrichtung: 1.500 – 2.000 €
              </p>
              <p style={{ fontSize: '0.75rem' }} className="text-white/30">
                Individuelle Einrichtung, Integration und Anpassung auf Ihren Salon
              </p>
            </div>
          </div>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 200, letterSpacing: '0.3em', fontSize: '0.58rem' }}
            className="text-[#C9A96E] uppercase flex-shrink-0">Einmalig</span>
        </div>
      </div>
    </section>
  )
}

function ROI() {
  useReveal()
  return (
    <section className="py-28 px-10 sm:px-16 lg:px-24"
      style={{ background: '#0a0a0a' }}>
      <div className="max-w-screen-lg mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: question */}
          <div>
            <p className="reveal section-label mb-8">Rentabilität</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: 1.1 }}
              className="reveal reveal-d1 text-white mb-2">
              Rechnet sich
            </h2>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, letterSpacing: '-0.04em', fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: 0.9 }}
              className="reveal reveal-d2 gold-text uppercase mb-10">
              das?
            </h2>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.8 }} className="reveal reveal-d3 text-white/45 max-w-sm">
              Schon <strong className="text-white">2 zusätzliche Termine pro Woche</strong> können
              das System komplett refinanzieren.
            </p>
          </div>

          {/* Right: example calc */}
          <div className="reveal reveal-d2 border border-white/8 overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #161616 0%, #111111 100%)' }}>
            <div className="px-8 py-5 border-b border-white/8"
              style={{ background: 'linear-gradient(90deg, rgba(201,169,110,0.08) 0%, transparent 100%)' }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.4em' }}
                className="text-white uppercase">Beispielrechnung</p>
            </div>
            <div className="px-8 py-6 space-y-4">
              {[
                { label: '2 Termine / Woche extra', value: '~160 €', muted: false },
                { label: '× 4 Wochen', value: '~640 € / Monat', muted: false },
                { label: 'Growth-Paket', value: '199 € / Monat', muted: true },
                { label: 'Differenz', value: '+441 € / Monat', gold: true },
              ].map(({ label, value, muted, gold }, i) => (
                <div key={i} className={`flex items-center justify-between py-3 ${i < 3 ? 'border-b border-white/5' : ''}`}>
                  <span style={{ fontSize: '0.82rem' }} className={muted ? 'text-white/30' : 'text-white/60'}>{label}</span>
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: gold ? 800 : 500, fontSize: '0.88rem' }}
                    className={gold ? 'text-[#C9A96E]' : muted ? 'text-white/30' : 'text-white/70'}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  useReveal()
  return (
    <section className="relative py-44 px-10 sm:px-16 lg:px-24 overflow-hidden"
      style={{ background: '#080808' }}>

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,169,110,0.07) 0%, transparent 65%)' }} />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-24 right-24 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.30), transparent)' }} />

      <div className="relative z-10 max-w-screen-lg mx-auto text-center flex flex-col items-center">

        <div className="flex items-center gap-4 mb-10">
          <div className="w-10 h-px bg-[#C9A96E]" />
          <span className="section-label">Nächster Schritt</span>
          <div className="w-10 h-px bg-[#C9A96E]" />
        </div>

        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(2.5rem,5vw,5rem)', lineHeight: 1.05 }}
          className="reveal reveal-d1 text-white mb-4">
          Bereit, Ihren Salon
        </h2>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, letterSpacing: '-0.04em', fontSize: 'clamp(2.5rem,5vw,5rem)', lineHeight: 0.88 }}
          className="reveal reveal-d2 gold-text uppercase mb-12">
          planbar wachsen zu lassen?
        </h2>

        <div className="w-14 h-px bg-[#C9A96E]/30 mb-12" />

        <div className="reveal reveal-d3 flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="btn-gold" style={{ padding: '1.1rem 3rem', fontSize: '0.75rem' }}>
            <Sparkles size={14} strokeWidth={2} />
            Jetzt starten
          </button>
          <a href="tel:" className="btn-outline" style={{ padding: '1.1rem 3rem', fontSize: '0.75rem' }}>
            <Phone size={13} strokeWidth={2} />
            Persönlich beraten lassen
          </a>
        </div>

        <p style={{ fontSize: '0.78rem' }} className="reveal reveal-d4 text-white/25 max-w-xs leading-relaxed">
          Unverbindliche Umsetzung & persönliche Einrichtung.
          Speziell auf Ihren Salon zugeschnitten.
        </p>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   PAGE ROOT
───────────────────────────────────────── */
export default function SalonSystemPage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <SolutionOverview />
      <FeatureModules />
      <Results />
      <Pricing />
      <ROI />
      <FinalCTA />
    </>
  )
}

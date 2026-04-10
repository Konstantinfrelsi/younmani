import { useReveal } from '../hooks/useReveal'
import { Sparkles } from 'lucide-react'

const DAMEN = [
  { name: 'Haarschnitt', price: 'ab 43 €', desc: 'Waschen · Kopfmassage · Schneiden · Föhnen · Frisieren' },
  { name: 'Waschen & Föhnen', price: 'ab 25 €', desc: 'Kopfmassage inklusive' },
  { name: 'Komplettfärbung', price: 'ab 45 €', desc: 'Vollfarbe' },
  { name: 'Intensivtönung', price: 'ab 40 €', desc: 'Tönen · Gloss' },
  { name: 'Balayage', price: 'ab 180 €', desc: 'Freihand · Folie · Ombré · Babylights', premium: true },
  { name: 'Ansatzfarbe', price: '43 €', desc: '' },
  { name: 'Foliensträhnen', price: '2,50 € / Folie', desc: '' },
  { name: 'Haarpflege', price: 'ab 10 €', desc: 'Haarkur · Intensivpflege' },
  { name: 'Haarbotox', price: 'ab 45 €', desc: 'Verjüngung · Intensiver Haaraufbau', premium: true },
]

const HERREN = [
  { name: 'All Inclusive', price: '40 €', desc: 'Waschen · Schneiden · Bart · Pflege · Stylen', premium: true },
  { name: 'Haarschnitt', price: 'ab 27 €', desc: 'Waschen · Schneiden · Föhnen · Stylen' },
  { name: 'Trockenschnitt', price: '22 €', desc: 'Schnitt & Styling' },
  { name: 'Bart Rasur', price: 'ab 13 €', desc: 'Schneiden · Formen · Nassrasur · warme Kompresse' },
  { name: 'Kopf Rasieren', price: 'ab 18 €', desc: 'Trimmen auf 0 mm · Nassrasur' },
  { name: 'Haare Färben', price: 'ab 25 €', desc: 'Strähnen · Grauabdeckung · Tönen' },
  { name: 'Augenbrauen', price: '8 €', desc: 'Faden · Pinzette · Klinge' },
  { name: 'Heißwachs', price: 'ab 10 €', desc: 'Gesichtshaarentfernung inkl. Ohren & Nase' },
]

function PremiumRow({ item }) {
  return (
    <div className="relative my-2 border border-[#C9A96E]/25 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgba(201,169,110,0.07) 0%, rgba(201,169,110,0.03) 100%)' }}>
      {/* Gold left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#C9A96E]" />

      <div className="flex items-start justify-between gap-6 px-5 py-4 pl-6">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles size={11} className="text-[#C9A96E] flex-shrink-0" strokeWidth={1.5} />
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.84rem', letterSpacing: '0.04em' }}
              className="text-white">{item.name}</span>
          </div>
          {item.desc && (
            <p style={{ fontSize: '0.71rem', lineHeight: 1.5, paddingLeft: '1.4rem' }}
              className="text-[#C9A96E]/50">{item.desc}</p>
          )}
        </div>
        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.04em' }}
          className="text-[#C9A96E] flex-shrink-0 whitespace-nowrap">{item.price}</span>
      </div>
    </div>
  )
}

function StandardRow({ item }) {
  return (
    <div className="price-row flex items-start justify-between gap-6 py-4 border-b border-white/6 last:border-0 px-1">
      <div className="flex-1 min-w-0">
        <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: '0.84rem', letterSpacing: '0.03em' }}
          className="text-white/80">{item.name}</p>
        {item.desc && (
          <p style={{ fontSize: '0.71rem', lineHeight: 1.5 }} className="text-white/30 mt-0.5">{item.desc}</p>
        )}
      </div>
      <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 300, fontSize: '0.84rem' }}
        className="text-[#C9A96E]/80 flex-shrink-0 whitespace-nowrap">{item.price}</span>
    </div>
  )
}

function PriceCard({ title, items }) {
  return (
    <div className="flex flex-col border border-white/8 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #161616 0%, #111111 100%)' }}>

      {/* Card header */}
      <div className="px-8 py-6 border-b border-white/8"
        style={{ background: 'linear-gradient(90deg, rgba(201,169,110,0.08) 0%, transparent 100%)' }}>
        <div className="flex items-center gap-4">
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.45em' }}
            className="text-white uppercase">{title}</span>
          <div className="flex-1 h-px bg-[#C9A96E]/20" />
        </div>
      </div>

      {/* Rows */}
      <div className="px-8 py-6 flex-1">
        {items.map((item, i) =>
          item.premium
            ? <PremiumRow key={i} item={item} />
            : <StandardRow key={i} item={item} />
        )}
      </div>
    </div>
  )
}

export default function Prices() {
  useReveal()

  return (
    <section id="leistungen" className="py-36 px-10 sm:px-16 lg:px-24"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 100%)' }}>
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="reveal section-label mb-6">Leistungen &amp; Preise</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.0, fontSize: 'clamp(2.8rem,5vw,5rem)' }}
                className="reveal reveal-d1 text-white">
                Exzellenz,
              </h2>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em', fontSize: 'clamp(2.8rem,5vw,5rem)' }}
                className="reveal reveal-d2 gold-text uppercase">
                Preislich klar.
              </h2>
            </div>
            <p className="reveal reveal-d2 text-white/35 text-sm max-w-xs leading-relaxed">
              Transparente Preise, keine Überraschungen.
              Höchste Qualität bei jedem Besuch.
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className="reveal flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2 border border-[#C9A96E]/25 px-3 py-1.5"
            style={{ background: 'rgba(201,169,110,0.06)' }}>
            <Sparkles size={10} className="text-[#C9A96E]" strokeWidth={1.5} />
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 300, letterSpacing: '0.25em', fontSize: '0.58rem' }}
              className="text-[#C9A96E] uppercase">Premium Service</span>
          </div>
          <span style={{ fontSize: '0.7rem' }} className="text-white/25">= hervorgehobene Behandlung mit besonderem Ergebnis</span>
        </div>

        {/* Two column price cards */}
        <div className="reveal reveal-d1 grid lg:grid-cols-2 gap-4">
          <PriceCard title="Damen" items={DAMEN} />
          <PriceCard title="Herren" items={HERREN} />
        </div>

        {/* Kinder + NEWSHA */}
        <div className="reveal reveal-d2 grid sm:grid-cols-2 gap-4 mt-4">
          <div className="border border-white/8 px-8 py-5 flex items-center justify-between"
            style={{ background: 'linear-gradient(160deg, #161616 0%, #111111 100%)' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: '0.84rem', letterSpacing: '0.03em' }}
                className="text-white/80">Kinder</p>
              <p style={{ fontSize: '0.71rem' }} className="text-white/30 mt-0.5">Mädchen &amp; Jungs</p>
            </div>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 300, fontSize: '0.84rem' }}
              className="text-[#C9A96E]/80">ab 15 €</span>
          </div>
          <div className="border border-white/8 px-8 py-5 flex items-center gap-4"
            style={{ background: 'linear-gradient(160deg, #161616 0%, #111111 100%)' }}>
            <div className="w-6 h-px bg-[#C9A96E]/30 flex-shrink-0" />
            <p style={{ fontSize: '0.72rem', lineHeight: 1.6 }} className="text-white/30">
              Alle Produkte von unserem Partner{' '}
              <a href="https://www.newsha.de/" target="_blank" rel="noopener noreferrer"
                className="text-[#C9A96E]/70 hover:text-[#C9A96E] underline-offset-2 hover:underline transition-colors">
                NEWSHA
              </a>
              {' '}— Premium-Qualität für optimale Haarpflege.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

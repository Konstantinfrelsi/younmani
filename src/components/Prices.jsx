import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const DAMEN = [
  { name: 'Haarschnitte', price: 'ab 43 €', desc: 'Waschen · Kopfmassage · Schneiden · Föhnen · Frisieren' },
  { name: 'Waschen & Föhnen', price: 'ab 25 €', desc: 'Waschen mit Kopfmassage, anschließend Frisieren' },
  { name: 'Färben', price: 'ab 45 €', desc: 'Komplettfarbe' },
  { name: 'Intensivtönung', price: 'ab 40 €', desc: 'Haare tönen / Gloss' },
  { name: 'Balayage', price: 'ab 180 €', desc: 'Freihandtechnik · Folientechnik · Ombré · Babylights' },
  { name: 'Ansatzfarbe', price: '43 €', desc: '' },
  { name: 'Foliensträhnen', price: '2,50 € / Folie', desc: '' },
  { name: 'Pflege', price: 'ab 10 €', desc: 'Haarkur · Intensivhaarkur' },
  { name: 'Haarbotox', price: 'ab 45 €', desc: 'Haarverjüngung · Intensiver Haaraufbau' },
]

const HERREN = [
  { name: 'All Inklusive Paket', price: '40 €', desc: 'Waschen · Kopfmassage · Schneiden · Bart · Pflege · Stylen', highlight: true },
  { name: 'Haarschnitt', price: 'ab 27 €', desc: 'Waschen · Kopfmassage · Schneiden · Föhnen · Stylen' },
  { name: 'Trockenschnitt', price: '22 €', desc: 'Schnitt und Styling' },
  { name: 'Bart Rasur', price: 'ab 13 €', desc: 'Schneiden · Trimmen · Formen · Rasieren · Pflegen + warme Kompresse' },
  { name: 'Kopf Rasieren', price: 'ab 18 €', desc: 'Trimmen auf 0 mm + Nassrasur inkl. Pflege' },
  { name: 'Haare Färben', price: 'ab 25 €', desc: 'Strähnen · Grauabdeckung · Färben/Tönen' },
  { name: 'Augenbrauen zupfen', price: '8 €', desc: 'Faden · Pinzette · Klinge' },
  { name: 'Heißwachs', price: 'ab 10 €', desc: 'Gesichtshaarentfernung inkl. Ohren und Nase' },
]

function PriceRow({ item }) {
  return (
    <div
      className={`price-row px-4 py-4 border-b border-white/5 last:border-0 ${
        item.highlight ? 'bg-[#C9A96E]/8 border-[#C9A96E]/20' : ''
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            {item.highlight && (
              <span className="text-[9px] font-black tracking-widest text-black bg-[#C9A96E] px-2 py-0.5 uppercase"
                style={{ fontFamily: 'var(--font-heading)' }}>
                Beliebt
              </span>
            )}
            <p
              className="text-sm font-semibold text-white truncate"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {item.name}
            </p>
          </div>
          {item.desc && (
            <p className="text-xs text-white/40 mt-1 leading-relaxed">{item.desc}</p>
          )}
        </div>
        <div className="flex-shrink-0">
          <span
            className="text-sm font-bold text-[#C9A96E] whitespace-nowrap"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {item.price}
          </span>
        </div>
      </div>
    </div>
  )
}

function PriceCard({ title, items, accent }) {
  return (
    <div className="flex-1">
      <div className="border border-white/10 overflow-hidden">
        <div
          className="px-6 py-5 border-b"
          style={{
            background: accent
              ? 'rgba(201,169,110,0.12)'
              : 'rgba(26,26,26,0.8)',
            borderColor: accent ? 'rgba(201,169,110,0.2)' : 'rgba(255,255,255,0.08)',
          }}
        >
          <h3
            className="text-xl font-black tracking-widest text-white uppercase"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {title}
          </h3>
        </div>
        <div style={{ background: 'rgba(18,18,18,0.95)' }}>
          {items.map((item) => (
            <PriceRow key={item.name} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Prices() {
  useReveal()
  const [tab, setTab] = useState('all')

  return (
    <section id="leistungen" className="bg-[#0d0d0d] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#C9A96E]" />
            <span
              className="text-xs font-bold tracking-[0.4em] text-[#C9A96E] uppercase"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Leistungen &amp; Preise
            </span>
            <div className="w-8 h-px bg-[#C9A96E]" />
          </div>
          <h2
            className="reveal reveal-d1 text-4xl sm:text-5xl font-black text-white uppercase"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Was wir für<br />
            <span className="text-gold-grad">Sie tun</span>
          </h2>
        </div>

        {/* Price grid */}
        <div className="reveal reveal-d2 flex flex-col lg:flex-row gap-6">
          <PriceCard title="Damen" items={DAMEN} />
          <PriceCard title="Herren" items={HERREN} accent />
        </div>

        {/* Kinder */}
        <div className="reveal reveal-d3 mt-6 border border-white/10 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5"
            style={{ background: 'rgba(18,18,18,0.95)' }}>
            <div>
              <h3
                className="text-lg font-black tracking-widest text-white uppercase"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Kinder
              </h3>
              <p className="text-xs text-white/40 mt-1">Mädchen &amp; Jungs</p>
            </div>
            <span
              className="text-lg font-bold text-[#C9A96E]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              ab 15 €
            </span>
          </div>
        </div>

        {/* NEWSHA notice */}
        <div className="reveal reveal-d4 mt-6 p-4 border border-[#C9A96E]/10 bg-[#C9A96E]/5 text-center">
          <p className="text-xs text-white/50">
            Alle eingesetzten Haarprodukte stammen von unserem Partner{' '}
            <a href="https://www.newsha.de/" target="_blank" rel="noopener noreferrer"
              className="text-[#C9A96E] hover:underline font-semibold">
              NEWSHA
            </a>{' '}
            – für optimale Pflege und gesundes Haar.
          </p>
        </div>
      </div>
    </section>
  )
}

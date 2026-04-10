import { useReveal } from '../hooks/useReveal'

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

function MenuRow({ item, index }) {
  return (
    <div className={`price-row flex items-start justify-between gap-6 py-5 border-b border-white/6 last:border-0 ${item.premium ? 'group' : ''}`}>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3">
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: item.premium ? 600 : 400, fontSize: '0.85rem', letterSpacing: '0.05em' }}
            className={item.premium ? 'text-white' : 'text-white/80'}>
            {item.name}
          </span>
          {item.premium && (
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 200, letterSpacing: '0.3em', fontSize: '0.5rem' }}
              className="text-[#C9A96E] uppercase border border-[#C9A96E]/30 px-1.5 py-0.5">
              Premium
            </span>
          )}
        </div>
        {item.desc && (
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', lineHeight: 1.5 }}
            className="text-white/30 mt-1">{item.desc}</p>
        )}
      </div>
      <div className="flex-shrink-0 text-right">
        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 300, fontSize: '0.85rem', letterSpacing: '0.05em' }}
          className="text-[#C9A96E] whitespace-nowrap">
          {item.price}
        </span>
      </div>
    </div>
  )
}

export default function Prices() {
  useReveal()

  return (
    <section id="leistungen" className="bg-[#0a0a0a] py-36 px-10 sm:px-16 lg:px-24">
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <p className="reveal section-label mb-6">Leistungen &amp; Preise</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.0, fontSize: 'clamp(3rem,5vw,5.5rem)' }}
                className="reveal reveal-d1 text-white">
                Exzellenz,
              </h2>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em', fontSize: 'clamp(3rem,5vw,5.5rem)' }}
                className="reveal reveal-d2 gold-text uppercase">
                Preislich klar.
              </h2>
            </div>
            <p className="reveal reveal-d2 text-white/40 text-sm max-w-xs leading-relaxed">
              Transparente Preise ohne Überraschungen. Höchste Qualität bei jedem Besuch.
            </p>
          </div>
        </div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-px bg-white/8">

          {/* Damen */}
          <div className="bg-[#0a0a0a] p-8 lg:p-12">
            <div className="reveal flex items-center gap-4 mb-10">
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.4em' }}
                className="text-white uppercase">Damen</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="reveal reveal-d1">
              {DAMEN.map((item, i) => <MenuRow key={i} item={item} index={i} />)}
            </div>
          </div>

          {/* Herren */}
          <div className="bg-[#0a0a0a] p-8 lg:p-12">
            <div className="reveal flex items-center gap-4 mb-10">
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.4em' }}
                className="text-white uppercase">Herren</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="reveal reveal-d1">
              {HERREN.map((item, i) => <MenuRow key={i} item={item} index={i} />)}
            </div>
          </div>
        </div>

        {/* Kinder + NEWSHA */}
        <div className="reveal reveal-d2 grid sm:grid-cols-2 gap-px bg-white/8 mt-px">
          <div className="bg-[#0a0a0a] px-8 lg:px-12 py-7 flex items-center justify-between">
            <div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: '0.85rem', letterSpacing: '0.05em' }}
                className="text-white/80">Kinder</span>
              <p style={{ fontSize: '0.72rem' }} className="text-white/30 mt-0.5">Mädchen &amp; Jungs</p>
            </div>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 300, fontSize: '0.85rem' }}
              className="text-[#C9A96E]">ab 15 €</span>
          </div>
          <div className="bg-[#0a0a0a] px-8 lg:px-12 py-7 flex items-center gap-4">
            <div className="w-8 h-px bg-[#C9A96E]/40 flex-shrink-0" />
            <p style={{ fontSize: '0.72rem', lineHeight: 1.6 }} className="text-white/35">
              Alle Haarprodukte von unserem Partner{' '}
              <a href="https://www.newsha.de/" target="_blank" rel="noopener noreferrer"
                className="text-[#C9A96E] hover:underline underline-offset-2">NEWSHA</a>
              {' '}— Premium-Qualität für optimale Pflege.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

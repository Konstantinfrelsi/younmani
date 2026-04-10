import { useEffect } from 'react'

export default function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="min-h-screen bg-[#0d0d0d] pt-28 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <p
            className="text-xs font-bold tracking-[0.45em] text-[#C9A96E] uppercase mb-3"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Rechtliches
          </p>
          <h1
            className="text-4xl font-black text-white uppercase"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Impressum
          </h1>
        </div>

        <div className="space-y-8 text-white/70 text-sm leading-relaxed">
          <div>
            <h2 className="text-base font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              Angaben nach §5 TMG
            </h2>
            <p>Mohammed Shaib Mansoor</p>
            <p>Frankfurter Str. 210</p>
            <p>34134 Kassel</p>
            <p>Deutschland</p>
          </div>

          <div>
            <h2 className="text-base font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              Kontakt
            </h2>
            <p>Telefon: 0561 – 457 471 57</p>
            <p>
              E-Mail:{' '}
              <a href="mailto:mail@younmani.de" className="text-[#C9A96E] hover:underline">
                mail@younmani.de
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              Inhaltlich Verantwortlicher
            </h2>
            <p>Mohammed Shaib Mansoor</p>
            <p>Frankfurter Str. 210, 34134 Kassel</p>
          </div>

          <div>
            <h2 className="text-base font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              Aufsichtsbehörde
            </h2>
            <p>IHK Kassel-Marburg</p>
            <p>Kurfürstenstraße 9, 34117 Kassel</p>
            <p>
              <a href="https://www.ihk.de/kassel-marburg/" target="_blank" rel="noopener noreferrer"
                className="text-[#C9A96E] hover:underline">
                www.ihk.de/kassel-marburg
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              EU-Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer"
                className="text-[#C9A96E] hover:underline">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p className="mt-2">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              Haftungsausschluss
            </h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die
              Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich
              deren Betreiber verantwortlich.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

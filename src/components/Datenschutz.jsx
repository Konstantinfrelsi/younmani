import { useEffect } from 'react'

export default function Datenschutz() {
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
            Datenschutz&shy;erklärung
          </h1>
        </div>

        <div className="space-y-8 text-white/70 text-sm leading-relaxed">
          <div>
            <h2 className="text-base font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              1. Verantwortlicher
            </h2>
            <p>Mohammed Shaib Mansoor</p>
            <p>Frankfurter Str. 210, 34134 Kassel</p>
            <p>E-Mail: mail@younmani.de</p>
            <p>Telefon: 0561 – 457 471 57</p>
          </div>

          <div>
            <h2 className="text-base font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              2. Erhebung und Verarbeitung von Daten
            </h2>
            <p>
              Diese Website ist eine statische Informationsseite. Es werden keine personenbezogenen
              Daten aktiv erhoben oder gespeichert. Beim Aufruf der Website werden durch den Browser
              automatisch Informationen an unseren Server übermittelt (z.B. IP-Adresse, Browsertyp,
              Datum und Uhrzeit des Abrufs). Diese Daten werden nicht mit anderen Datenquellen
              zusammengeführt.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              3. Cookies
            </h2>
            <p>
              Diese Website verwendet ausschließlich technisch notwendige Cookies (z.B. zur
              Speicherung Ihrer Cookie-Einwilligung). Es werden keine Tracking- oder
              Marketing-Cookies eingesetzt.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              4. Externe Dienste
            </h2>
            <p>
              Diese Website bindet Google Fonts über Google-Server ein. Dabei wird Ihre IP-Adresse
              an Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA übertragen.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
              korrekten Darstellung).
            </p>
            <p className="mt-3">
              Links zu Google Maps, Instagram und Google Bewertungen führen zu externen Diensten.
              Für deren Datenschutzpraktiken sind die jeweiligen Anbieter verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              5. Ihre Rechte
            </h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
              Verarbeitung, Datenübertragbarkeit und Widerspruch. Wenden Sie sich dazu an:
              mail@younmani.de
            </p>
            <p className="mt-3">
              Sie haben außerdem das Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde
              zu beschweren.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              6. Hosting
            </h2>
            <p>
              Diese Website wird über Netlify (Netlify, Inc., 512 2nd Street, Suite 200,
              San Francisco, CA 94107, USA) gehostet. Beim Seitenaufruf wird Ihre IP-Adresse
              verarbeitet. Weitere Informationen:{' '}
              <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer"
                className="text-[#C9A96E] hover:underline">
                netlify.com/privacy
              </a>
            </p>
          </div>

          <p className="text-white/40 text-xs pt-4 border-t border-white/10">
            Stand: April 2026
          </p>
        </div>
      </div>
    </section>
  )
}

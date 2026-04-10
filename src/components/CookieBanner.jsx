import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('ynm_cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('ynm_cookie_consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('ynm_cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div
        className="max-w-3xl mx-auto border border-[#C9A96E]/20 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        style={{ background: 'rgba(13,13,13,0.97)', backdropFilter: 'blur(20px)' }}
      >
        <p className="text-white/70 text-sm leading-relaxed flex-1">
          Diese Website verwendet technisch notwendige Cookies. Weitere Informationen in unserer{' '}
          <Link to="/datenschutz" className="text-[#C9A96E] hover:underline">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-xs font-semibold text-white/50 hover:text-white border border-white/20 px-4 py-2 uppercase tracking-widest transition-colors"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="text-xs font-bold text-black bg-[#C9A96E] hover:bg-[#e8d5a8] px-4 py-2 uppercase tracking-widest transition-colors btn-push"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  )
}

'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [consented, setConsented] = useState(null)

  useEffect(() => {
    setConsented(localStorage.getItem('pa-cookie-consent') === 'true')
  }, [])

  if (consented !== false) return null

  function handleAccept() {
    localStorage.setItem('pa-cookie-consent', 'true')
    setConsented(true)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg">
      <div className="max-w-3xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-gray-600 dark:text-gray-300 flex-1 min-w-0">
          We use cookies for analytics and personalized ads.{' '}
          <Link href="/privacy" className="underline text-garden-600 dark:text-garden-400 hover:text-garden-800 dark:hover:text-garden-300">
            Privacy Policy
          </Link>
        </p>
        <button
          onClick={handleAccept}
          className="flex-shrink-0 bg-garden-600 hover:bg-garden-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          OK, Got It
        </button>
      </div>
    </div>
  )
}

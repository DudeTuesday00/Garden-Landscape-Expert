'use client'

import { useState } from 'react'

// To connect a real email list, replace the fetch URL with your
// Mailchimp, ConvertKit, or other provider's form endpoint.
// Currently uses Formspree as an interim capture (sends to site owner email).
const FORM_ENDPOINT = 'https://formspree.io/f/mlgpgdny'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, _subject: 'Newsletter signup — Planting Atlas' }),
      })
    } catch {
      // fail silently
    }
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="bg-garden-50 dark:bg-gray-800 rounded-2xl border border-garden-200 dark:border-garden-700 p-6 text-center">
        <div className="text-3xl mb-2">🌱</div>
        <p className="font-semibold text-garden-800 dark:text-garden-300">You&apos;re in!</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Thanks for subscribing. Seasonal gardening tips coming your way.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-garden-50 dark:bg-gray-800 rounded-2xl border border-garden-200 dark:border-garden-700 p-6">
      <p className="font-semibold text-garden-800 dark:text-garden-300 text-base mb-0.5">
        🌿 Get Seasonal Gardening Tips
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        New guides, planting reminders, and growing tips — straight to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-2.5 rounded-xl border border-garden-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-garden-400 dark:focus:ring-garden-500"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-garden-600 hover:bg-garden-700 disabled:opacity-60 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap"
        >
          {status === 'loading' ? 'Subscribing…' : 'Subscribe →'}
        </button>
      </form>
      <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">No spam. Unsubscribe anytime.</p>
    </div>
  )
}

// Thin wrapper around GA4's gtag() — layout.jsx defines window.gtag as a
// plain global via its inline GA4 init script. Falls back to a raw
// dataLayer push (still catchable by a GTM custom-event trigger) if gtag
// hasn't loaded yet, and no-ops entirely during SSR.
export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined') return

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
    return
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: eventName, ...params })
}

// Fires a Google Ads conversion event. No-ops until NEXT_PUBLIC_GOOGLE_ADS_ID
// is set (see layout.jsx) — safe to call unconditionally from the moments
// worth tracking (wizard_complete, newsletter_signup, shop_etsy_click, etc.)
// even before a real Ads account exists.
export function reportConversion(conversionLabel, params = {}) {
  if (typeof window === 'undefined') return
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
  if (!adsId || typeof window.gtag !== 'function') return

  window.gtag('event', 'conversion', {
    send_to: `${adsId}/${conversionLabel}`,
    ...params,
  })
}

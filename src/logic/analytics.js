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

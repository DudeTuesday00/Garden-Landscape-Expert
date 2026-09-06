'use client'

import { trackEvent } from '../../logic/analytics.js'

export default function AffiliateLink({ guideId, title, link, linkText }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={() => trackEvent('affiliate_click', { guide_id: guideId, product: title })}
      className="inline-block text-center bg-garden-600 hover:bg-garden-700 text-white font-semibold text-sm rounded-xl px-5 py-2.5 transition-colors self-start mt-1"
    >
      {linkText || 'View on Amazon'} →
    </a>
  )
}

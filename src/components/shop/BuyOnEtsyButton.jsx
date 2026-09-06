'use client'

import { trackEvent } from '../../logic/analytics.js'

export default function BuyOnEtsyButton({ productId, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent('shop_etsy_click', { product_id: productId })}
      className="w-full block text-center bg-garden-600 hover:bg-garden-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-sm"
    >
      🛍️ Buy on Etsy →
    </a>
  )
}

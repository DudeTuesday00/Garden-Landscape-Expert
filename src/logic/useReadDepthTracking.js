'use client'

import { useEffect, useRef } from 'react'
import { trackEvent } from './analytics.js'

/**
 * Fires `guide_read_50` / `guide_read_90` once each, the moment an
 * IntersectionObserver sees the corresponding sentinel element (looked up
 * by DOM id, since these sentinels are rendered by a server component and
 * refs can't cross that boundary) scroll into view — same one-shot-per-mount
 * discipline as `useToolUsageTracking` (a `fired` ref per milestone prevents
 * double-firing).
 *
 * @param {string} guideId
 * @param {{ fiftyId: string, ninetyId: string }} sentinelIds
 */
export function useReadDepthTracking(guideId, { fiftyId, ninetyId }) {
  const fired = useRef({ 50: false, 90: false })

  useEffect(() => {
    const targets = [
      { el: document.getElementById(fiftyId), milestone: 50, event: 'guide_read_50' },
      { el: document.getElementById(ninetyId), milestone: 90, event: 'guide_read_90' },
    ].filter((t) => t.el)

    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const target = targets.find((t) => t.el === entry.target)
          if (!target || fired.current[target.milestone]) continue
          fired.current[target.milestone] = true
          trackEvent(target.event, { guide_id: guideId })
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0 }
    )

    for (const t of targets) observer.observe(t.el)
    return () => observer.disconnect()
  }, [guideId, fiftyId, ninetyId])
}

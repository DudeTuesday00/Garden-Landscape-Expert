'use client'

import { useReadDepthTracking } from '../../logic/useReadDepthTracking.js'

// Invisible — just wires up the IntersectionObserver against the
// server-rendered sentinel divs matching these ids. Renders nothing itself.
export default function ReadDepthTracker({ guideId, fiftyId, ninetyId }) {
  useReadDepthTracking(guideId, { fiftyId, ninetyId })
  return null
}

'use client'

import { useEffect, useRef, useState } from 'react'
import { trackEvent } from './analytics.js'

/**
 * Fires a `tool_used` GA4 event exactly once per mount, the moment a tool
 * has BOTH a real, non-empty result AND (unless disabled) genuine user
 * interaction — several of these tools pre-populate their inputs with
 * sensible defaults, so a result already exists on first render with no
 * user action at all. Without the interaction gate, "usage" would really
 * just be measuring page views a second time under a different event name.
 *
 * Returns capture-phase onChange/onClick props to spread onto the tool's
 * outer wrapper element — React's event bubbling means one pair of handlers
 * up top catches every input/button interaction inside without touching
 * each individual control.
 *
 * @param {string} toolId - matches the `id` field in src/data/tools.js
 * @param {boolean} resultReady - true once the tool has a real result to show
 * @param {{ requireInteraction?: boolean }} [options] - set false for tools
 *   that start with an empty/no-result state, where the null→non-null
 *   transition itself already proves the user did something (a ZIP lookup,
 *   a symptom click) — no interaction gate needed there.
 */
export function useToolUsageTracking(toolId, resultReady, { requireInteraction = true } = {}) {
  const [hasInteracted, setHasInteracted] = useState(!requireInteraction)
  const fired = useRef(false)

  useEffect(() => {
    if (fired.current) return
    if (hasInteracted && resultReady) {
      trackEvent('tool_used', { tool_id: toolId })
      fired.current = true
    }
  }, [hasInteracted, resultReady, toolId])

  const markInteracted = () => setHasInteracted(true)

  return requireInteraction
    ? { onChangeCapture: markInteracted, onClickCapture: markInteracted }
    : {}
}

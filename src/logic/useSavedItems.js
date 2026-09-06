'use client'

import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'pa-my-garden'
const EMPTY = { plants: [], guides: [] }

function readStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return EMPTY
    const parsed = JSON.parse(raw)
    return {
      plants: Array.isArray(parsed.plants) ? parsed.plants : [],
      guides: Array.isArray(parsed.guides) ? parsed.guides : [],
    }
  } catch {
    return EMPTY
  }
}

function writeStore(next) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  } catch {
    // localStorage unavailable (private mode, quota, etc.) — no-op
  }
}

/**
 * Shared "My Garden" saved-items store, backed by localStorage under the
 * `pa-my-garden` key (matching the `pa-` prefix already used by
 * `pa-cookie-consent`). SSR-safe via the same `useState(null)` +
 * `useEffect` hydration-guard pattern as `CookieBanner.jsx` — `data` stays
 * `null` until the client-only effect reads real state, so a server-rendered
 * page never mismatches a visitor's actual saved items.
 *
 * Multiple components calling this hook on the same page (e.g. a
 * `SaveButton` and a page listing saved items) stay in sync via a
 * `storage`-like custom event dispatched on every write.
 */
export function useSavedItems() {
  const [data, setData] = useState(null)

  useEffect(() => {
    setData(readStore())
    function onChange() {
      setData(readStore())
    }
    window.addEventListener('pa-my-garden-change', onChange)
    return () => window.removeEventListener('pa-my-garden-change', onChange)
  }, [])

  const toggle = useCallback((type, id) => {
    const key = type === 'plant' ? 'plants' : 'guides'
    const current = readStore()
    const has = current[key].includes(id)
    const next = {
      ...current,
      [key]: has ? current[key].filter((x) => x !== id) : [...current[key], id],
    }
    writeStore(next)
    setData(next)
    window.dispatchEvent(new Event('pa-my-garden-change'))
  }, [])

  const isSaved = useCallback(
    (type, id) => {
      if (!data) return false
      return type === 'plant' ? data.plants.includes(id) : data.guides.includes(id)
    },
    [data]
  )

  return { data: data || EMPTY, ready: data !== null, toggle, isSaved }
}

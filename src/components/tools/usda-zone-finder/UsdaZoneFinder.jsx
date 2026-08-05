'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { getZoneInfo, isWizardSupportedZone } from '../../../data/hardiness-zone-info.js'
import GaugeStrip from '../shared/GaugeStrip.jsx'

const RELATED_GUIDES = [
  { id: 'four-season-garden', title: 'Four-Season Garden Design', emoji: '🍂', description: 'Keep your garden interesting every month of the year.' },
  { id: 'xeriscape', title: 'Xeriscape Design', emoji: '🌵', description: 'Beautiful, water-wise landscaping for dry climates and drought-prone regions.' },
  { id: 'winter-garden-prep', title: 'Winter Garden Prep', emoji: '❄️', description: 'Protect your plants, prepare your soil, and set the stage for spring.' },
]

export default function UsdaZoneFinder() {
  const [zip, setZip] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | found | not-found | error
  const [result, setResult] = useState(null)
  const dataRef = useRef(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const cleanZip = zip.trim().slice(0, 5)

    if (!/^\d{5}$/.test(cleanZip)) {
      setStatus('error')
      setResult(null)
      return
    }

    setStatus('loading')

    try {
      if (!dataRef.current) {
        const res = await fetch('/data/hardiness-zones.json')
        if (!res.ok) throw new Error('fetch failed')
        dataRef.current = await res.json()
      }

      const zone = dataRef.current[cleanZip]
      if (!zone) {
        setStatus('not-found')
        setResult(null)
        return
      }

      setResult({ zip: cleanZip, zone, info: getZoneInfo(zone) })
      setStatus('found')
    } catch {
      setStatus('error')
      setResult(null)
    }
  }

  const wholeZone = result ? parseInt(result.zone, 10) : null
  const wizardHref = wholeZone && isWizardSupportedZone(wholeZone) ? `/wizard/?zone=${wholeZone}` : '/wizard/'

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href="/tools/"
        className="inline-flex items-center gap-1 text-sm text-garden-600 dark:text-garden-400 hover:underline mb-4"
      >
        ← Back to Garden Tools
      </Link>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-garden-800 dark:text-garden-300">
          Find Your USDA Hardiness Zone
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Enter your ZIP code to look up your USDA Plant Hardiness Zone — the average annual
          minimum winter temperature that determines which perennials, shrubs, and trees will
          survive winter in your garden.
        </p>
      </div>

      {/* Lookup form */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={5}
            value={zip}
            onChange={(e) => setZip(e.target.value.replace(/\D/g, ''))}
            placeholder="Enter your 5-digit ZIP code"
            className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-garden-600 focus:border-transparent transition"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-garden-600 hover:bg-garden-700 disabled:opacity-60 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors"
          >
            {status === 'loading' ? 'Looking up…' : 'Find My Zone'}
          </button>
        </form>

        {status === 'error' && (
          <p className="mt-3 text-sm text-red-600 dark:text-red-400">
            Enter a valid 5-digit US ZIP code.
          </p>
        )}

        {status === 'not-found' && (
          <p className="mt-3 text-sm text-red-600 dark:text-red-400">
            That ZIP code isn't in our dataset (it may be a PO-box-only or newly assigned code).
            Try a nearby ZIP code, or use the{' '}
            <a
              href="https://planthardiness.ars.usda.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              official USDA map
            </a>.
          </p>
        )}

        {status === 'found' && result && (
          <div className="mt-5 bg-garden-50 dark:bg-gray-900 rounded-xl border border-garden-200 dark:border-garden-700 p-5">
            <p className="text-xs text-gray-500 dark:text-gray-400">ZIP {result.zip}</p>
            <p className="text-3xl font-bold text-garden-800 dark:text-garden-300 mt-1">
              Zone {result.zone}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Average annual extreme minimum temperature: {result.info?.trange}°F
            </p>

            <div className="mt-4 mb-1">
              <GaugeStrip
                min={1}
                max={13}
                value={wholeZone}
                gradient="cold-warm"
                ticks={['1', '3', '5', '7', '9', '11', '13']}
                valueLabel={`Zone ${result.zone}`}
                trackLabel="Coldest (Zone 1) to warmest (Zone 13)"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={wizardHref}
                className="bg-garden-600 hover:bg-garden-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
              >
                🌱 Use this zone in the Garden Architect →
              </Link>
              <Link
                href={`/tools/gardening-calendar/?zip=${result.zip}`}
                className="bg-earth-500 hover:bg-earth-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
              >
                📅 Get my planting calendar →
              </Link>
              <Link
                href="/infographics/"
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-garden-400 text-sm font-medium px-4 py-2 rounded-xl transition-colors text-gray-700 dark:text-gray-300"
              >
                🗺️ See the full zone &amp; frost-date chart
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* USDA / PRISM attribution + disclaimer */}
      <div className="mt-6 text-xs text-gray-500 dark:text-gray-400 leading-relaxed bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
        <p>
          Zone data is drawn from the same GIS dataset behind the{' '}
          <a
            href="https://planthardiness.ars.usda.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-garden-600 dark:hover:text-garden-400"
          >
            2023 USDA Plant Hardiness Zone Map
          </a>{' '}
          (USDA Agricultural Research Service), produced by the{' '}
          <a
            href="https://prism.oregonstate.edu/phzm/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-garden-600 dark:hover:text-garden-400"
          >
            PRISM Climate Group at Oregon State University
          </a>{' '}
          under a cooperative agreement with USDA-ARS.
        </p>
        <p className="mt-2 font-medium">
          This is an independent, unofficial lookup tool — not the official USDA Plant Hardiness
          Zone Map. For the definitive zone at your exact address, or to explore the full
          interactive map, visit{' '}
          <a
            href="https://planthardiness.ars.usda.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-garden-600 dark:hover:text-garden-400"
          >
            planthardiness.ars.usda.gov
          </a>.
        </p>
      </div>

      {/* Related guides */}
      <div className="mt-10">
        <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-4">
          Guides that use your zone
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {RELATED_GUIDES.map((g) => (
            <Link
              key={g.id}
              href={`/guides/${g.id}/`}
              className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-garden-400 dark:hover:border-garden-500 p-4 transition-colors"
            >
              <span className="text-2xl">{g.emoji}</span>
              <h3 className="font-semibold text-sm text-garden-800 dark:text-garden-300 mt-2 group-hover:underline">
                {g.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {g.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

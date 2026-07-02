'use client'

import { useState, useRef, useMemo, useEffect } from 'react'
import Link from 'next/link'
import plants from '../../../data/plants.js'
import { plantTypeOptions } from '../../../data/fertilizer-recommendations.js'
import { typeGuides } from '../../../data/type-guides.js'
import { getFrostEstimate, formatMonthDay } from '../../../data/frost-date-estimates.js'
import { computeAnnualCalendar, computeSeasonalBand } from '../../../logic/plantingCalendar.js'

const MONTH_LABELS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']

const RELATED_GUIDES = [
  { id: 'four-season-garden', title: 'Four-Season Garden Design', emoji: '🍂' },
  { id: 'winter-garden-prep', title: 'Winter Garden Prep', emoji: '❄️' },
  { id: 'spring-startup', title: 'Spring Garden Startup', emoji: '🌱' },
  { id: 'fall-planting', title: 'Fall Planting Guide', emoji: '🍁' },
]

// Priority order when a single month cell is touched by more than one
// activity — the most specific/urgent activity wins the cell's color.
const ACTIVITY_ORDER = ['harvest', 'fallSow', 'plantOutdoor', 'indoorStart']

const ACTIVITY_META = {
  indoorStart: { label: 'Start Indoors', letter: 'S', classes: 'bg-[#2a78d6] dark:bg-[#3987e5]' },
  plantOutdoor: { label: 'Plant Outdoors', letter: 'P', classes: 'bg-[#5eae3d] dark:bg-[#458f3c]' },
  harvest: { label: 'Harvest Window', letter: 'H', classes: 'bg-[#a8742c] dark:bg-[#c4711f]' },
  fallSow: { label: 'Fall Planting', letter: 'F', classes: 'bg-[#eb6834] dark:bg-[#d95926]' },
  seasonal: { label: 'Best Season (general)', letter: '', classes: 'bg-[#4a3aa7] dark:bg-[#9085e9]' },
}

function buildRow(plant, wholeZone) {
  const annual = computeAnnualCalendar(plant, wholeZone)
  if (annual) {
    const cells = {}
    for (const key of ACTIVITY_ORDER) {
      const months = annual[key]
      if (!months) continue
      for (const m of months) {
        if (!cells[m]) cells[m] = key
      }
    }
    return { plant, cells, precise: true, activities: annual }
  }

  const seasonal = computeSeasonalBand(plant)
  const cells = {}
  for (const m of seasonal) cells[m] = 'seasonal'
  return { plant, cells, precise: false, activities: null }
}

export default function GardenCalendar() {
  const [zip, setZip] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | found | not-found | error
  const [zoneCode, setZoneCode] = useState(null)
  const [typeFilter, setTypeFilter] = useState(null)
  const [query, setQuery] = useState('')
  const [viewMode, setViewMode] = useState('timeline') // timeline | table
  const dataRef = useRef(null)

  useEffect(() => {
    const prefill = new URLSearchParams(window.location.search).get('zip')
    if (prefill) {
      setZip(prefill)
      lookup(prefill)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function lookup(rawZip) {
    const cleanZip = rawZip.trim().slice(0, 5)
    if (!/^\d{5}$/.test(cleanZip)) {
      setStatus('error')
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
        return
      }
      setZoneCode(zone)
      setStatus('found')
    } catch {
      setStatus('error')
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    lookup(zip)
  }

  const wholeZone = zoneCode ? parseInt(zoneCode, 10) : null
  const frostEstimate = wholeZone ? getFrostEstimate(wholeZone) : null

  const rows = useMemo(() => {
    if (!wholeZone) return []
    const q = query.trim().toLowerCase()
    return plants
      .filter((p) => p.zones.includes(wholeZone))
      .filter((p) => !typeFilter || p.type === typeFilter)
      .filter((p) => !q || p.name.toLowerCase().includes(q))
      .map((p) => buildRow(p, wholeZone))
      .sort((a, b) => a.plant.name.localeCompare(b.plant.name))
  }, [wholeZone, typeFilter, query])

  return (
    <div className="max-w-6xl mx-auto">
      <Link
        href="/tools/"
        className="inline-flex items-center gap-1 text-sm text-garden-600 dark:text-garden-400 hover:underline mb-4"
      >
        ← Back to Garden Tools
      </Link>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-garden-800 dark:text-garden-300">
          Garden Planting Calendar
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Enter your ZIP code to see when to start seeds indoors, plant outdoors, and harvest —
          for every plant in our 150-plant database, not just vegetables.
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
            {status === 'loading' ? 'Looking up…' : 'Build My Calendar'}
          </button>
        </form>

        {status === 'error' && (
          <p className="mt-3 text-sm text-red-600 dark:text-red-400">
            Enter a valid 5-digit US ZIP code.
          </p>
        )}
        {status === 'not-found' && (
          <p className="mt-3 text-sm text-red-600 dark:text-red-400">
            That ZIP code isn't in our dataset. Try a nearby ZIP, or use the{' '}
            <Link href="/tools/usda-zone-finder/" className="underline">
              Zone Finder
            </Link>{' '}
            to confirm your zone.
          </p>
        )}

        {status === 'found' && wholeZone && frostEstimate && (
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Zone <strong className="text-garden-700 dark:text-garden-400">{zoneCode}</strong>
            {frostEstimate.frostFree ? (
              <> — essentially frost-free. Showing general seasonal guidance rather than frost-relative dates.</>
            ) : (
              <>
                {' '}— estimated last spring frost <strong>{formatMonthDay(frostEstimate.lastFrost)}</strong>,
                first fall frost <strong>{formatMonthDay(frostEstimate.firstFrost)}</strong>.{' '}
                <span className="text-xs">(Zone-based estimate, not a station-precise date.)</span>
              </>
            )}
          </div>
        )}
      </div>

      {status === 'found' && wholeZone && (
        <>
          {/* Filter bar */}
          <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 flex flex-col gap-3">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setTypeFilter(null)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  typeFilter === null
                    ? 'bg-garden-600 text-white border-garden-600'
                    : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-garden-400'
                }`}
              >
                All Types
              </button>
              {plantTypeOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setTypeFilter(opt.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                    typeFilter === opt.id
                      ? 'bg-garden-600 text-white border-garden-600'
                      : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-garden-400'
                  }`}
                >
                  {opt.emoji} {opt.label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search plants…"
                className="flex-1 min-w-[180px] px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-garden-400"
              />
              <div className="flex gap-1 bg-gray-100 dark:bg-gray-900 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('timeline')}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${viewMode === 'timeline' ? 'bg-white dark:bg-gray-700 text-garden-700 dark:text-garden-300 shadow-sm' : 'text-gray-500 dark:text-gray-400'}`}
                >
                  📊 Timeline
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${viewMode === 'table' ? 'bg-white dark:bg-gray-700 text-garden-700 dark:text-garden-300 shadow-sm' : 'text-gray-500 dark:text-gray-400'}`}
                >
                  📋 Table
                </button>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-600 dark:text-gray-400">
            {Object.entries(ACTIVITY_META).map(([key, meta]) => (
              <span key={key} className="inline-flex items-center gap-1.5">
                <span className={`w-3 h-3 rounded-sm inline-block ${meta.classes}`} />
                {meta.label}
              </span>
            ))}
          </div>

          {/* Results */}
          <div className="mt-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              {rows.length} plant{rows.length !== 1 ? 's' : ''} match your zone
              {typeFilter ? ` and filter` : ''}.
            </p>

            {rows.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">No plants match — try a different filter.</p>
            ) : viewMode === 'timeline' ? (
              <TimelineView rows={rows} />
            ) : (
              <TableView rows={rows} />
            )}
          </div>
        </>
      )}

      {/* Related guides */}
      <div className="mt-10">
        <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-4">
          Seasonal guides to pair with your calendar
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {RELATED_GUIDES.map((g) => (
            <Link
              key={g.id}
              href={`/guides/${g.id}/`}
              className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-garden-400 dark:hover:border-garden-500 p-4 transition-colors flex items-center gap-2"
            >
              <span className="text-xl">{g.emoji}</span>
              <span className="text-sm font-medium text-garden-800 dark:text-garden-300 group-hover:underline">
                {g.title}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Estimate disclaimer */}
      <div className="mt-6 text-xs text-gray-500 dark:text-gray-400 leading-relaxed bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
        <p>
          Frost dates are estimated from your{' '}
          <Link href="/tools/usda-zone-finder/" className="underline hover:text-garden-600 dark:hover:text-garden-400">
            USDA Hardiness Zone
          </Link>
          , not a specific weather station — actual timing varies with microclimate and elevation.
          Sowing offsets for vegetables and herbs are compiled from standard home-gardening
          convention (weeks relative to frost dates); other plant types show a broader seasonal
          window instead of week-level precision.
        </p>
      </div>
    </div>
  )
}

function TimelineView({ rows }) {
  return (
    <div className="flex flex-col gap-1.5 print:gap-1">
      {/* Month header */}
      <div className="flex items-center gap-3 px-1">
        <div className="w-40 sm:w-48 flex-shrink-0" />
        <div className="flex-1 grid grid-cols-12 gap-[2px] text-center text-[10px] text-gray-400 dark:text-gray-500">
          {MONTH_LABELS.map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>

      {rows.map(({ plant, cells, precise }) => (
        <div key={plant.id} className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 px-3 py-2">
          <div className="w-40 sm:w-48 flex-shrink-0 flex items-center gap-2 min-w-0">
            <span className="text-lg">{plant.emoji}</span>
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-800 dark:text-gray-100 truncate">{plant.name}</p>
              {typeGuides[plant.type]?.[0] && (
                <Link
                  href={`/guides/${typeGuides[plant.type][0].id}/`}
                  className="text-[11px] text-garden-600 dark:text-garden-400 hover:underline"
                >
                  📖 {typeGuides[plant.type][0].title}
                </Link>
              )}
            </div>
          </div>
          <div className="flex-1 grid grid-cols-12 gap-[2px]">
            {MONTH_LABELS.map((_, i) => {
              const month = i + 1
              const activity = cells[month]
              const meta = activity ? ACTIVITY_META[activity] : null
              return (
                <div
                  key={i}
                  className={`h-6 rounded-[3px] flex items-center justify-center text-[9px] font-bold ${
                    meta ? `${meta.classes} text-white` : 'bg-gray-50 dark:bg-gray-900'
                  }`}
                  title={meta ? (precise ? meta.label : 'Best planting season') : ''}
                >
                  {meta && precise ? meta.letter : ''}
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

function TableView({ rows }) {
  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700 text-left text-gray-500 dark:text-gray-400">
            <th className="px-4 py-2.5 font-medium">Plant</th>
            <th className="px-4 py-2.5 font-medium">Type</th>
            <th className="px-4 py-2.5 font-medium">Start Indoors</th>
            <th className="px-4 py-2.5 font-medium">Plant Outdoors</th>
            <th className="px-4 py-2.5 font-medium">Harvest</th>
            <th className="px-4 py-2.5 font-medium">Fall Planting</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ plant, precise, activities }) => (
            <tr key={plant.id} className="border-b border-gray-100 dark:border-gray-700 last:border-0">
              <td className="px-4 py-2.5 font-medium text-gray-800 dark:text-gray-100 whitespace-nowrap">
                {plant.emoji} {plant.name}
              </td>
              <td className="px-4 py-2.5 text-gray-500 dark:text-gray-400 capitalize">{plant.type}</td>
              {precise ? (
                <>
                  <td className="px-4 py-2.5 text-gray-600 dark:text-gray-300">{monthList(activities.indoorStart)}</td>
                  <td className="px-4 py-2.5 text-gray-600 dark:text-gray-300">{monthList(activities.plantOutdoor)}</td>
                  <td className="px-4 py-2.5 text-gray-600 dark:text-gray-300">{monthList(activities.harvest)}</td>
                  <td className="px-4 py-2.5 text-gray-600 dark:text-gray-300">{monthList(activities.fallSow)}</td>
                </>
              ) : (
                <td colSpan={4} className="px-4 py-2.5 text-gray-500 dark:text-gray-400 italic">
                  Best planting season shown in the timeline view — see guide link for details
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const FULL_MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function monthList(monthSet) {
  if (!monthSet || monthSet.size === 0) return '—'
  return [...monthSet].sort((a, b) => a - b).map((m) => FULL_MONTH_NAMES[m - 1]).join(', ')
}

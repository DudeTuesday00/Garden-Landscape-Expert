'use client'

import { useState, useRef, useMemo } from 'react'
import Link from 'next/link'
import plants from '../../../data/plants.js'
import { successionCrops } from '../../../data/succession-crops.js'
import { computeSuccessionPlan, formatDate } from '../../../logic/successionPlanner.js'
import Timeline, { MONTH_STARTS } from '../shared/Timeline.jsx'

function monthDayToDay(md) {
  return MONTH_STARTS[md.month - 1] + (md.day - 1)
}

const SUCCESSION_PLANTS = Object.keys(successionCrops)
  .map((id) => plants.find((p) => p.id === id))
  .filter(Boolean)
  .sort((a, b) => a.name.localeCompare(b.name))

export default function SuccessionPlanner() {
  const [zip, setZip] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | found | not-found | error
  const [wholeZone, setWholeZone] = useState(null)
  const [plantId, setPlantId] = useState('radish')
  const dataRef = useRef(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const cleanZip = zip.trim().slice(0, 5)
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
      const zoneCode = dataRef.current[cleanZip]
      if (!zoneCode) {
        setStatus('not-found')
        return
      }
      setWholeZone(parseInt(zoneCode, 10))
      setStatus('found')
    } catch {
      setStatus('error')
    }
  }

  const plan = useMemo(
    () => (wholeZone ? computeSuccessionPlan(plantId, wholeZone) : null),
    [plantId, wholeZone]
  )
  const plantInfo = plants.find((p) => p.id === plantId)

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        href="/tools/"
        className="inline-flex items-center gap-1 text-sm text-garden-600 dark:text-garden-400 hover:underline mb-4"
      >
        ← Back to Garden Tools
      </Link>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-garden-800 dark:text-garden-300">
          Succession Planting Planner
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          See how many rounds of a fast crop like radishes or lettuce fit in your season, with
          suggested sowing dates for each round.
        </p>
      </div>

      {/* ZIP form */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
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
        {status === 'error' && <p className="mt-3 text-sm text-red-600 dark:text-red-400">Enter a valid 5-digit US ZIP code.</p>}
        {status === 'not-found' && <p className="mt-3 text-sm text-red-600 dark:text-red-400">That ZIP code isn't in our dataset — try a nearby ZIP.</p>}
        {status === 'found' && <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">Zone <strong className="text-garden-700 dark:text-garden-400">{wholeZone}</strong> found.</p>}
      </div>

      {/* Crop picker */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Which crop?
        </label>
        <div className="flex flex-wrap gap-2">
          {SUCCESSION_PLANTS.map((p) => (
            <button
              key={p.id}
              onClick={() => setPlantId(p.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                plantId === p.id
                  ? 'bg-garden-600 text-white border-garden-600'
                  : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-garden-400'
              }`}
            >
              {p.emoji} {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {status === 'found' && wholeZone && (
        <div>
          {!plan ? (
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-2xl p-6 text-sm text-amber-800 dark:text-amber-300">
              Zone {wholeZone} is essentially frost-free, so frost-relative succession windows
              don't apply the same way there — {plantInfo?.name} can generally be grown
              nearly year-round with staggered sowings on your own schedule.
            </div>
          ) : (
            <>
              <Timeline
                rows={[
                  {
                    id: plantId,
                    label: plantInfo?.name,
                    icon: plantInfo?.emoji,
                    bands: [
                      ...(plan.springWindow
                        ? [{ startDay: monthDayToDay(plan.springWindow.start), endDay: monthDayToDay(plan.springWindow.end), colorIndex: 0, tooltip: `Spring window: ${formatDate(plan.springWindow.start)} – ${formatDate(plan.springWindow.end)}` }]
                        : []),
                      ...(plan.fallWindow
                        ? [{ startDay: monthDayToDay(plan.fallWindow.start), endDay: monthDayToDay(plan.fallWindow.end), colorIndex: 1, tooltip: `Fall window: ${formatDate(plan.fallWindow.start)} – ${formatDate(plan.fallWindow.end)}` }]
                        : []),
                    ],
                    ticks: [...(plan.springWindow?.sowings || []), ...(plan.fallWindow?.sowings || [])].map((d) => ({
                      day: monthDayToDay(d),
                      tooltip: formatDate(d),
                    })),
                  },
                ]}
              />
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-[#5eae3d] dark:bg-[#4f9e3a]" /> Spring window</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-[#a8742c] dark:bg-[#9a6a1e]" /> Fall window</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full border-2 border-earth-600 dark:border-earth-400" /> Individual sowing</span>
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-6">
                <SuccessionWindowCard title="🌱 Spring Window" window={plan.springWindow} />
                <SuccessionWindowCard title="🍂 Fall Window" window={plan.fallWindow} />
              </div>
            </>
          )}

          {plan && (
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 italic">{plan.note}</p>
          )}
        </div>
      )}

      {/* Related guides */}
      <div className="mt-10">
        <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-4">
          More on succession planting
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <Link
            href="/guides/salad-garden/"
            className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-garden-400 dark:hover:border-garden-500 p-4 transition-colors flex items-center gap-2"
          >
            <span className="text-xl">🥗</span>
            <span className="text-sm font-medium text-garden-800 dark:text-garden-300 group-hover:underline">Salad Garden</span>
          </Link>
          <Link
            href="/guides/square-foot-gardening/"
            className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-garden-400 dark:hover:border-garden-500 p-4 transition-colors flex items-center gap-2"
          >
            <span className="text-xl">📐</span>
            <span className="text-sm font-medium text-garden-800 dark:text-garden-300 group-hover:underline">Square Foot Gardening</span>
          </Link>
          <Link
            href="/tools/gardening-calendar/"
            className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-garden-400 dark:hover:border-garden-500 p-4 transition-colors flex items-center gap-2"
          >
            <span className="text-xl">📅</span>
            <span className="text-sm font-medium text-garden-800 dark:text-garden-300 group-hover:underline">Garden Planting Calendar</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

function SuccessionWindowCard({ title, window }) {
  if (!window) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Not typically succession-sown in this window.</p>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">{title}</h3>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
        {formatDate(window.start)} – {formatDate(window.end)}
      </p>
      <p className="text-2xl font-bold text-garden-800 dark:text-garden-300 mb-3">
        {window.count} sowing{window.count !== 1 ? 's' : ''}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {window.sowings.map((d, i) => (
          <span key={i} className="text-xs px-2 py-1 rounded-full bg-garden-50 dark:bg-gray-900 border border-garden-100 dark:border-gray-700 text-garden-700 dark:text-garden-300">
            {formatDate(d)}
          </span>
        ))}
      </div>
    </div>
  )
}

'use client'

import { useState, useRef, useMemo } from 'react'
import Link from 'next/link'
import plants from '../../../data/plants.js'
import { computeWateringPlan } from '../../../logic/wateringCalculator.js'

const WATER_LEVEL_LABELS = { low: '💧 Low', moderate: '💧💧 Moderate', high: '💧💧💧 High' }

export default function WateringCalculator() {
  const [query, setQuery] = useState('')
  const [plantId, setPlantId] = useState('tomato')
  const [growingMethod, setGrowingMethod] = useState('in-ground')
  const [zip, setZip] = useState('')
  const [zipStatus, setZipStatus] = useState('idle') // idle | loading | found | not-found | error
  const [wholeZone, setWholeZone] = useState(null)
  const dataRef = useRef(null)

  const plant = plants.find((p) => p.id === plantId)

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return plants.filter((p) => p.name.toLowerCase().includes(q)).slice(0, 8)
  }, [query])

  async function handleZipSubmit(e) {
    e.preventDefault()
    const cleanZip = zip.trim().slice(0, 5)
    if (!/^\d{5}$/.test(cleanZip)) {
      setZipStatus('error')
      return
    }
    setZipStatus('loading')
    try {
      if (!dataRef.current) {
        const res = await fetch('/data/hardiness-zones.json')
        if (!res.ok) throw new Error('fetch failed')
        dataRef.current = await res.json()
      }
      const zoneCode = dataRef.current[cleanZip]
      if (!zoneCode) {
        setZipStatus('not-found')
        return
      }
      setWholeZone(parseInt(zoneCode, 10))
      setZipStatus('found')
    } catch {
      setZipStatus('error')
    }
  }

  const plan = useMemo(
    () => computeWateringPlan(plant, growingMethod, wholeZone),
    [plant, growingMethod, wholeZone]
  )

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
          Watering Schedule Calculator
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A concrete watering plan for any of our 185 plants — tailored to your growing method
          and climate, not just a generic "water regularly."
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* INPUTS */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              1. Which plant?
            </label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search 185 plants…"
              className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-garden-600"
            />
            {matches.length > 0 && (
              <div className="mt-2 border border-gray-200 dark:border-gray-700 rounded-xl divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden">
                {matches.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setPlantId(p.id)
                      setQuery('')
                    }}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-garden-50 dark:hover:bg-gray-900 transition-colors flex items-center gap-2"
                  >
                    <span>{p.emoji}</span>
                    <span className="text-gray-800 dark:text-gray-100">{p.name}</span>
                  </button>
                ))}
              </div>
            )}
            {plant && (
              <div className="mt-3 flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-lg">{plant.emoji}</span>
                <span className="font-medium">{plant.name}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  ({WATER_LEVEL_LABELS[plant.water] || plant.water})
                </span>
              </div>
            )}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              2. Growing method
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: 'in-ground', label: 'In-Ground' },
                { value: 'container', label: 'Container' },
                { value: 'hydroponic', label: 'Hydroponic' },
              ].map((m) => (
                <button
                  key={m.value}
                  onClick={() => setGrowingMethod(m.value)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all border text-center ${
                    growingMethod === m.value
                      ? 'bg-earth-500 text-white border-earth-500'
                      : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-earth-400'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {growingMethod !== 'hydroponic' && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                3. Your climate (optional)
              </label>
              <form onSubmit={handleZipSubmit} className="flex gap-2">
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={5}
                  value={zip}
                  onChange={(e) => setZip(e.target.value.replace(/\D/g, ''))}
                  placeholder="ZIP code"
                  className="flex-1 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-garden-600"
                />
                <button
                  type="submit"
                  disabled={zipStatus === 'loading'}
                  className="bg-garden-600 hover:bg-garden-700 disabled:opacity-60 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  Set
                </button>
              </form>
              {zipStatus === 'error' && <p className="mt-2 text-xs text-red-600 dark:text-red-400">Enter a valid 5-digit ZIP code.</p>}
              {zipStatus === 'not-found' && <p className="mt-2 text-xs text-red-600 dark:text-red-400">That ZIP code isn't in our dataset.</p>}
              {zipStatus === 'found' && <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Zone {wholeZone} — climate adjustment applied.</p>}
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Skip this and we'll use a moderate-climate baseline.</p>
            </div>
          )}
        </div>

        {/* RESULTS */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 lg:sticky lg:top-20">
            <h2 className="text-xl font-bold text-garden-800 dark:text-garden-300 mb-4">
              Watering plan for {plant?.name}
            </h2>

            {plan?.type === 'hydroponic' && (
              <div className="bg-earth-50 dark:bg-gray-900 border border-earth-200 dark:border-earth-700 rounded-xl p-5 text-sm text-gray-700 dark:text-gray-300">
                Hydroponic systems don't run on a "watering schedule" the way soil-grown plants
                do — the reservoir supplies water and nutrients continuously or on a pump cycle.
                What matters instead is EC/pH monitoring and reservoir refresh timing.{' '}
                <Link href="/tools/fertilizer-calculator/" className="text-garden-600 dark:text-garden-400 underline">
                  See the hydroponic mode of the Fertilizer Calculator →
                </Link>
              </div>
            )}

            {plan?.type === 'in-ground' && (
              <>
                <div className="grid grid-cols-2 gap-3 text-center mb-5">
                  <Stat label="Times per Week" value={plan.timesPerWeek} />
                  <Stat label="Inches per Week" value={plan.inchesPerWeek} />
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-sm text-gray-700 dark:text-gray-300">
                  {plan.note}
                </div>
                {plan.climateLabel && (
                  <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                    Adjusted for: <strong>{plan.climateLabel}</strong>
                  </p>
                )}
              </>
            )}

            {plan?.type === 'container' && (
              <>
                <div className="grid grid-cols-2 gap-3 text-center mb-5">
                  <Stat label="Check Every" value={`${plan.checkEveryDays} day${plan.checkEveryDays !== 1 ? 's' : ''}`} />
                  <Stat label="Water When Dry To" value={`${plan.dryDepthIn}"`} />
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-sm text-gray-700 dark:text-gray-300">
                  {plan.note}
                </div>
                {plan.climateLabel && (
                  <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                    Adjusted for: <strong>{plan.climateLabel}</strong>
                  </p>
                )}
              </>
            )}

            <p className="mt-5 text-xs text-gray-500 dark:text-gray-400">
              General guidance based on this plant's water needs — always check the soil directly
              and adjust for rainfall, wind, and your specific soil type (fast-draining sandy soil
              needs more frequent watering than clay).
            </p>
          </div>
        </div>
      </div>

      {/* Related tools */}
      <div className="mt-10">
        <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-4">
          More garden planning tools
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <Link
            href="/tools/soil-calculator/"
            className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-garden-400 dark:hover:border-garden-500 p-4 transition-colors flex items-center gap-2"
          >
            <span className="text-xl">🪨</span>
            <span className="text-sm font-medium text-garden-800 dark:text-garden-300 group-hover:underline">Soil &amp; Raised Bed Calculator</span>
          </Link>
          <Link
            href="/tools/mulch-calculator/"
            className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-garden-400 dark:hover:border-garden-500 p-4 transition-colors flex items-center gap-2"
          >
            <span className="text-xl">🪵</span>
            <span className="text-sm font-medium text-garden-800 dark:text-garden-300 group-hover:underline">Mulch Calculator</span>
          </Link>
          <Link
            href="/tools/usda-zone-finder/"
            className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-garden-400 dark:hover:border-garden-500 p-4 transition-colors flex items-center gap-2"
          >
            <span className="text-xl">🗺️</span>
            <span className="text-sm font-medium text-garden-800 dark:text-garden-300 group-hover:underline">Find Your USDA Hardiness Zone</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="bg-garden-50 dark:bg-gray-900 rounded-xl py-3 px-2 border border-garden-100 dark:border-gray-700">
      <p className="text-lg font-bold text-garden-800 dark:text-garden-300">{value}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{label}</p>
    </div>
  )
}

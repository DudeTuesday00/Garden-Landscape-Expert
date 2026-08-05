'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import plants from '../../../data/plants.js'
import { plantYields } from '../../../data/plant-yields.js'
import { computeYieldForSelection, summarizeYields } from '../../../logic/yieldEstimator.js'
import RangeBarChart from '../shared/RangeBarChart.jsx'

const YIELD_PLANTS = Object.keys(plantYields)
  .map((id) => {
    const p = plants.find((pl) => pl.id === id)
    if (!p) return null
    return { id, name: p.name, emoji: p.emoji, daysToHarvest: p.daysToHarvest, ...plantYields[id] }
  })
  .filter(Boolean)
  .sort((a, b) => a.name.localeCompare(b.name))

const RELATED_GUIDES = [
  { id: 'salad-garden', title: 'Salad Garden', emoji: '🥗' },
  { id: 'salsa-garden', title: 'Salsa Garden', emoji: '🌶️' },
  { id: 'square-foot-gardening', title: 'Square Foot Gardening', emoji: '📐' },
]

export default function YieldEstimator() {
  const [selections, setSelections] = useState({ tomato: 3, zucchini: 1 })

  function togglePlant(id) {
    setSelections((prev) => {
      const next = { ...prev }
      if (id in next) {
        delete next[id]
      } else {
        next[id] = 1
      }
      return next
    })
  }

  function updateQuantity(id, value) {
    setSelections((prev) => ({ ...prev, [id]: Math.max(0, parseInt(value, 10) || 0) }))
  }

  const results = useMemo(() => {
    return Object.entries(selections)
      .filter(([, qty]) => qty > 0)
      .map(([id, qty]) => {
        const plant = YIELD_PLANTS.find((p) => p.id === id)
        const result = computeYieldForSelection(id, qty, plant?.daysToHarvest)
        return result ? { ...result, id, name: plant.name, emoji: plant.emoji } : null
      })
      .filter(Boolean)
  }, [selections])

  const { totalLbRange, weightResults, ongoingResults } = useMemo(() => summarizeYields(results), [results])

  return (
    <div className="max-w-5xl mx-auto">
      <Link
        href="/tools/"
        className="inline-flex items-center gap-1 text-sm text-garden-600 dark:text-garden-400 hover:underline mb-4"
      >
        ← Back to Garden Tools
      </Link>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-garden-800 dark:text-garden-300">
          Garden Yield Estimator
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          See how much harvest to expect from your plants — plan a garden sized to feed your household.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Plant picker */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              What are you growing?
            </label>
            <div className="flex flex-wrap gap-2 mb-4">
              {YIELD_PLANTS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => togglePlant(p.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                    p.id in selections
                      ? 'bg-garden-600 text-white border-garden-600'
                      : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-garden-400'
                  }`}
                >
                  {p.emoji} {p.name}
                </button>
              ))}
            </div>

            {Object.keys(selections).filter((id) => selections[id] > 0).length > 0 && (
              <div className="space-y-3">
                {Object.entries(selections)
                  .filter(([, qty]) => qty > 0)
                  .map(([id]) => {
                    const plant = YIELD_PLANTS.find((p) => p.id === id)
                    return (
                      <div key={id} className="flex items-center justify-between gap-3 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2">
                        <span className="text-sm text-gray-800 dark:text-gray-100 truncate">{plant.emoji} {plant.name}</span>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <input
                            type="number"
                            min="0"
                            step="1"
                            value={selections[id]}
                            onChange={(e) => updateQuantity(id, e.target.value)}
                            className="w-14 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm text-center"
                          />
                          <span className="text-xs text-gray-400">plants</span>
                        </div>
                      </div>
                    )
                  })}
              </div>
            )}
          </div>
        </div>

        {/* RESULTS */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 lg:sticky lg:top-20">
            <h2 className="text-xl font-bold text-garden-800 dark:text-garden-300 mb-4">
              Expected harvest
            </h2>

            {results.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">Pick at least one plant to see an estimate.</p>
            ) : (
              <>
                {weightResults.length > 0 && (
                  <div className="mb-5 bg-garden-50 dark:bg-gray-900 rounded-xl border border-garden-100 dark:border-gray-700 p-4 text-center">
                    <p className="text-2xl font-bold text-garden-800 dark:text-garden-300">
                      {totalLbRange[0].toFixed(1)}–{totalLbRange[1].toFixed(1)} lbs
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Total estimated harvest, all weighable crops</p>
                  </div>
                )}

                {weightResults.length > 0 && (
                  <RangeBarChart
                    unit=" lbs"
                    rows={weightResults.map((r) => ({
                      id: r.id,
                      label: `${r.quantity}× ${r.name}`,
                      emoji: r.emoji,
                      low: r.lbRange[0],
                      high: r.lbRange[1],
                      note: r.note + (typeof r.avgDays === 'number' ? ` First harvest in ~${Math.round(r.avgDays)} days.` : ''),
                    }))}
                  />
                )}

                {ongoingResults.length > 0 && (
                  <div className={weightResults.length > 0 ? 'mt-4 space-y-2' : 'space-y-2'}>
                    {ongoingResults.map((r) => (
                      <div key={r.id} className="flex items-start justify-between border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5">
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-gray-800 dark:text-gray-100">
                            {r.emoji} {r.quantity}× {r.name}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{r.note}</div>
                        </div>
                        <div className="text-xs font-medium text-earth-600 dark:text-earth-400 whitespace-nowrap flex-shrink-0 pl-3">Ongoing harvest</div>
                      </div>
                    ))}
                  </div>
                )}

                <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                  Ranges assume healthy, well-fed, full-season plants — actual harvest varies with
                  variety, climate, and care. Herbs and cut-and-come-again greens are shown as
                  ongoing harvest rather than a one-time weight.
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Related guides */}
      <div className="mt-10">
        <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-4">
          Put your harvest to use
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {RELATED_GUIDES.map((g) => (
            <Link
              key={g.id}
              href={`/guides/${g.id}/`}
              className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-garden-400 dark:hover:border-garden-500 p-4 transition-colors flex items-center gap-2"
            >
              <span className="text-xl">{g.emoji}</span>
              <span className="text-sm font-medium text-garden-800 dark:text-garden-300 group-hover:underline">{g.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { mulchApplications, mulchTypes, getMulchApplication } from '../../../data/mulch-types.js'
import { computeMulchVolume, estimateMulchCost } from '../../../logic/mulchCalculator.js'
import RangeBarChart from '../shared/RangeBarChart.jsx'
import { useToolUsageTracking } from '../../../logic/useToolUsageTracking.js'

export default function MulchCalculator() {
  const [length, setLength] = useState('20')
  const [width, setWidth] = useState('10')
  const [applicationId, setApplicationId] = useState('perennial-beds')
  const [depth, setDepth] = useState(() => String(getMulchApplication('perennial-beds').depthIn))
  const [depthTouched, setDepthTouched] = useState(false)
  const [mulchTypeId, setMulchTypeId] = useState('hardwood-bark')

  function handleApplicationChange(id) {
    setApplicationId(id)
    if (!depthTouched) {
      setDepth(String(getMulchApplication(id).depthIn))
    }
  }

  const areaSqFt = useMemo(() => {
    const l = parseFloat(length)
    const w = parseFloat(width)
    return l > 0 && w > 0 ? l * w : 0
  }, [length, width])

  const volume = useMemo(() => computeMulchVolume(areaSqFt, parseFloat(depth)), [areaSqFt, depth])
  const cost = useMemo(() => (volume ? estimateMulchCost(volume.cuYd, mulchTypeId) : null), [volume, mulchTypeId])

  const usageTracking = useToolUsageTracking('mulch-calculator', !!volume)

  return (
    <div className="max-w-4xl mx-auto" {...usageTracking}>
      <Link
        href="/tools/"
        className="inline-flex items-center gap-1 text-sm text-garden-600 dark:text-garden-400 hover:underline mb-4"
      >
        ← Back to Garden Tools
      </Link>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-garden-800 dark:text-garden-300">
          Mulch Calculator
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Figure out exactly how much mulch to buy — with depth recommendations tailored to
          what you're mulching, and a bagged-vs-bulk cost comparison.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* INPUTS */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              1. Area to mulch
            </label>
            <div className="grid grid-cols-2 gap-3">
              <NumberField label="Length (ft)" value={length} onChange={setLength} />
              <NumberField label="Width (ft)" value={width} onChange={setWidth} />
            </div>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              {areaSqFt > 0 ? `${areaSqFt.toLocaleString()} sq ft` : 'Enter dimensions'} — for an
              irregular bed, estimate the closest rectangle.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              2. What are you mulching?
            </label>
            <select
              value={applicationId}
              onChange={(e) => handleApplicationChange(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm"
            >
              {mulchApplications.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.label}
                </option>
              ))}
            </select>

            <div className="mt-4">
              <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Depth (inches)</label>
              <input
                type="number"
                min="0.5"
                step="0.5"
                value={depth}
                onChange={(e) => {
                  setDepth(e.target.value)
                  setDepthTouched(true)
                }}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-garden-600"
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Defaulted to our Mulching Guide's recommended depth for this application — adjust if needed.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              3. Mulch type
            </label>
            <div className="space-y-2">
              {mulchTypes.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMulchTypeId(m.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all border ${
                    mulchTypeId === m.id
                      ? 'bg-garden-600 text-white border-garden-600'
                      : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-garden-400'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RESULTS */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 lg:sticky lg:top-20">
            <h2 className="text-xl font-bold text-garden-800 dark:text-garden-300 mb-4">
              You&rsquo;ll need
            </h2>

            {volume ? (
              <>
                <div className="grid grid-cols-3 gap-3 text-center mb-5">
                  <Stat label="Cubic Feet" value={volume.cuFt.toFixed(0)} />
                  <Stat label="Cubic Yards" value={volume.cuYd.toFixed(2)} />
                  <Stat label="2 cu ft Bags" value={volume.bags} />
                </div>

                <DepthRuler depthIn={parseFloat(depth) || 0} />

                {cost && (
                  <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                      Estimated cost — {cost.type.label}
                    </h3>
                    {(cost.baggedCostRange || typeof cost.bulkCost === 'number') && cost.bulkCost !== 0 && (
                      <RangeBarChart
                        unit=""
                        formatValue={(v) => `$${v.toFixed(0)}`}
                        rows={[
                          cost.baggedCostRange && { id: 'bagged', label: 'Bagged (retail)', low: cost.baggedCostRange[0], high: cost.baggedCostRange[1] },
                          typeof cost.bulkCost === 'number' && cost.bulkCost > 0 && { id: 'bulk', label: 'Bulk delivered', low: cost.bulkCost, high: cost.bulkCost },
                        ].filter(Boolean)}
                      />
                    )}
                    {!cost.baggedCostRange && !cost.bulkCost && cost.bulkCost !== 0 && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">{cost.type.bagCostRange}</p>
                    )}
                    {cost.bulkCost === 0 && (
                      <p className="text-sm text-garden-600 dark:text-garden-400 font-medium">Free — generate or source locally.</p>
                    )}
                    {volume.cuYd > 2.5 && cost.bulkCost !== 0 && (
                      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                        Over ~2–3 cu yd, bulk delivery is usually far more economical than bags.
                      </p>
                    )}
                  </div>
                )}

                <Link
                  href="/guides/mulching-guide/"
                  className="mt-4 inline-block text-sm text-garden-600 dark:text-garden-400 hover:underline"
                >
                  📖 Read the full Mulching Guide →
                </Link>
              </>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">Enter your area and depth to see results.</p>
            )}
          </div>
        </div>
      </div>

      {/* Related guides */}
      <div className="mt-10">
        <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-4">
          More on mulching
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/guides/mulching-guide/"
            className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-garden-400 dark:hover:border-garden-500 p-4 transition-colors flex items-center gap-2"
          >
            <span className="text-xl">🪵</span>
            <span className="text-sm font-medium text-garden-800 dark:text-garden-300 group-hover:underline">Mulching Guide</span>
          </Link>
          <Link
            href="/guides/no-dig-gardening/"
            className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-garden-400 dark:hover:border-garden-500 p-4 transition-colors flex items-center gap-2"
          >
            <span className="text-xl">🌱</span>
            <span className="text-sm font-medium text-garden-800 dark:text-garden-300 group-hover:underline">No-Dig Gardening</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

function NumberField({ label, value, onChange }) {
  return (
    <div>
      <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">{label}</label>
      <input
        type="number"
        min="0"
        step="1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-garden-600"
      />
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

// Horizontal ruler, 0-6 inches, with the entered depth filled in — makes an
// abstract "3 inches" tangible against a real inch scale.
const RULER_MAX_IN = 6

function DepthRuler({ depthIn }) {
  const pct = (v) => (Math.min(v, RULER_MAX_IN) / RULER_MAX_IN) * 100
  return (
    <div className="mb-5">
      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">Mulch depth</p>
      <div className="relative h-6">
        <div className="absolute inset-x-0 top-1.5 h-3 rounded-full bg-gray-100 dark:bg-gray-900" />
        <div
          className="absolute top-1.5 left-0 h-3 rounded-full bg-[#a8742c] dark:bg-[#9a6a1e] transition-all duration-300"
          style={{ width: `${pct(depthIn)}%` }}
        />
        <div
          className="absolute -translate-x-1/2 -top-0.5 flex flex-col items-center transition-all duration-300"
          style={{ left: `${pct(depthIn)}%` }}
        >
          <span className="text-[10px] font-bold text-white bg-[#a8742c] dark:bg-[#9a6a1e] px-1.5 py-0.5 rounded whitespace-nowrap">
            {depthIn}&quot;
          </span>
        </div>
      </div>
      <div className="flex justify-between mt-1">
        {Array.from({ length: RULER_MAX_IN + 1 }, (_, i) => (
          <span key={i} className="text-[9px] text-gray-400 dark:text-gray-500">{i}&quot;</span>
        ))}
      </div>
    </div>
  )
}

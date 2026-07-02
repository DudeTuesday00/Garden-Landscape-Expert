'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { compostMaterials } from '../../../data/compost-materials.js'
import { computeCompostPlan, pilePresets } from '../../../logic/compostCalculator.js'

const BROWN_MATERIALS = compostMaterials.filter((m) => m.category === 'brown')
const GREEN_MATERIALS = compostMaterials.filter((m) => m.category === 'green')

export default function CompostCalculator() {
  const [presetId, setPresetId] = useState('medium')
  const [customCuFt, setCustomCuFt] = useState('64')
  const [brownIds, setBrownIds] = useState(['dry-leaves'])
  const [greenIds, setGreenIds] = useState(['kitchen-scraps'])

  function toggleMaterial(id, list, setList) {
    setList(list.includes(id) ? list.filter((x) => x !== id) : [...list, id])
  }

  const totalCuFt = useMemo(() => {
    if (presetId === 'custom') return parseFloat(customCuFt) || 0
    return pilePresets.find((p) => p.id === presetId)?.cuFt || 0
  }, [presetId, customCuFt])

  const plan = useMemo(
    () => computeCompostPlan({ totalCuFt, brownIds, greenIds }),
    [totalCuFt, brownIds, greenIds]
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
          Compost Calculator
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Get the right browns-to-greens ratio for a hot compost pile of any size, using the
          materials you actually have on hand.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* INPUTS */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              1. Pile or bin size
            </label>
            <div className="space-y-2">
              {pilePresets.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPresetId(p.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all border ${
                    presetId === p.id
                      ? 'bg-garden-600 text-white border-garden-600'
                      : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-garden-400'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
            {presetId === 'custom' && (
              <div className="mt-3">
                <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Total cubic feet</label>
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={customCuFt}
                  onChange={(e) => setCustomCuFt(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-garden-600"
                />
              </div>
            )}
            {plan && !plan.isValidHotPile && (
              <p className="mt-2 text-xs text-amber-600 dark:text-amber-400">
                Below 3×3×3 ft (27 cu ft), a pile loses heat too fast for reliable hot composting —
                consider cold composting instead, which works fine at any size.
              </p>
            )}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              2. Browns you have (carbon)
            </label>
            <div className="flex flex-wrap gap-2">
              {BROWN_MATERIALS.map((m) => (
                <button
                  key={m.id}
                  onClick={() => toggleMaterial(m.id, brownIds, setBrownIds)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                    brownIds.includes(m.id)
                      ? 'bg-earth-500 text-white border-earth-500'
                      : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-earth-400'
                  }`}
                >
                  {m.name}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              3. Greens you have (nitrogen)
            </label>
            <div className="flex flex-wrap gap-2">
              {GREEN_MATERIALS.map((m) => (
                <button
                  key={m.id}
                  onClick={() => toggleMaterial(m.id, greenIds, setGreenIds)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                    greenIds.includes(m.id)
                      ? 'bg-garden-600 text-white border-garden-600'
                      : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-garden-400'
                  }`}
                >
                  {m.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RESULTS */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 lg:sticky lg:top-20">
            <h2 className="text-xl font-bold text-garden-800 dark:text-garden-300 mb-4">
              Your pile recipe
            </h2>

            {plan ? (
              <>
                <div className="grid grid-cols-2 gap-3 text-center mb-5">
                  <Stat label="Browns (75% by volume)" value={`${plan.brownsCuFt.toFixed(0)} cu ft`} />
                  <Stat label="Greens (25% by volume)" value={`${plan.greensCuFt.toFixed(0)} cu ft`} />
                </div>

                {plan.brownBreakdown.length > 0 && (
                  <MaterialList title="Browns" items={plan.brownBreakdown} tone="earth" />
                )}
                {plan.greenBreakdown.length > 0 && (
                  <MaterialList title="Greens" items={plan.greenBreakdown} tone="garden" />
                )}
                {plan.brownBreakdown.length === 0 && plan.greenBreakdown.length === 0 && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Select at least one brown and one green material to see the breakdown.
                  </p>
                )}

                <div className="mt-5 text-xs text-gray-500 dark:text-gray-400 space-y-1">
                  <p>Layer 4–6 in of coarse browns at the base, then alternate 2–4 in green layers with 4–6 in brown layers. Each layer should feel like a wrung-out sponge — moist, not dripping.</p>
                  <p>Finished compost is much less volume than what you start with, as materials break down and settle.</p>
                </div>

                <Link
                  href="/guides/organic-fertilizing/"
                  className="mt-4 inline-block text-sm text-garden-600 dark:text-garden-400 hover:underline"
                >
                  📖 Read the full composting section in Organic Fertilizing →
                </Link>
              </>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">Choose a pile size to see results.</p>
            )}
          </div>
        </div>
      </div>

      {/* Related guides */}
      <div className="mt-10">
        <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-4">
          More on composting
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/guides/organic-fertilizing/"
            className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-garden-400 dark:hover:border-garden-500 p-4 transition-colors flex items-center gap-2"
          >
            <span className="text-xl">🌿</span>
            <span className="text-sm font-medium text-garden-800 dark:text-garden-300 group-hover:underline">Organic Fertilizing</span>
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

function MaterialList({ title, items, tone }) {
  const toneClasses = tone === 'earth' ? 'text-earth-700 dark:text-earth-400' : 'text-garden-700 dark:text-garden-400'
  return (
    <div className="mb-4">
      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">{title}</h3>
      <div className="space-y-2">
        {items.map((m) => (
          <div key={m.id} className="flex items-center justify-between border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5">
            <div>
              <div className="text-sm font-medium text-gray-800 dark:text-gray-100">{m.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">C:N {m.cnRatio} — {m.notes}</div>
            </div>
            <div className={`text-lg font-bold whitespace-nowrap pl-3 ${toneClasses}`}>{m.cuFt.toFixed(0)} cu ft</div>
          </div>
        ))}
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

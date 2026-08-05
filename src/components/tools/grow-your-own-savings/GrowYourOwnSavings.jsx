'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import plants from '../../../data/plants.js'
import { produceEconomics } from '../../../data/produce-economics.js'
import { computeSavingsForSelection, summarizeSavings } from '../../../logic/growYourOwnSavings.js'
import RangeBarChart from '../shared/RangeBarChart.jsx'

const SAVINGS_PLANTS = Object.keys(produceEconomics)
  .map((id) => plants.find((p) => p.id === id))
  .filter(Boolean)
  .sort((a, b) => a.name.localeCompare(b.name))

function formatMoney(n) {
  return `$${n.toFixed(2)}`
}

export default function GrowYourOwnSavings() {
  const [selections, setSelections] = useState({ tomato: 3, zucchini: 1, lettuce: 4 })
  const [copied, setCopied] = useState(false)

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
        const plant = SAVINGS_PLANTS.find((p) => p.id === id)
        const result = computeSavingsForSelection(id, qty, plant?.daysToHarvest)
        return result ? { ...result, id, name: plant.name, emoji: plant.emoji } : null
      })
      .filter(Boolean)
  }, [selections])

  const summary = useMemo(() => summarizeSavings(results), [results])

  async function handleShare() {
    const text = `My garden could be worth ${formatMoney(summary.netSavingsRange[0])}–${formatMoney(summary.netSavingsRange[1])} in grocery savings this season! Plan your own at plantingatlas.com/tools/grow-your-own-savings/`
    if (navigator.share) {
      try {
        await navigator.share({ title: 'My Garden Savings', text })
      } catch {
        // user cancelled — no-op
      }
      return
    }
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable — no-op
    }
  }

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
          Value of Growing Your Own
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          See how much a home-grown harvest is worth compared to grocery store prices —
          and what it actually costs to grow it.
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
              {SAVINGS_PLANTS.map((p) => (
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
                    const plant = SAVINGS_PLANTS.find((p) => p.id === id)
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
              Estimated value
            </h2>

            {results.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">Pick at least one plant to see an estimate.</p>
            ) : (
              <>
                <div className="mb-5 bg-garden-50 dark:bg-gray-900 rounded-xl border border-garden-100 dark:border-gray-700 p-4 text-center">
                  <p className={`text-2xl font-bold ${summary.netSavingsRange[0] >= 0 ? 'text-garden-800 dark:text-garden-300' : 'text-amber-700 dark:text-amber-400'}`}>
                    {formatMoney(summary.netSavingsRange[0])}–{formatMoney(summary.netSavingsRange[1])}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Estimated net savings this season</p>

                  <SavingsWaterfall summary={summary} />

                  <button
                    onClick={handleShare}
                    className="mt-4 bg-earth-500 hover:bg-earth-600 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors"
                  >
                    {copied ? '✅ Copied!' : '🔗 Share My Savings'}
                  </button>
                </div>

                <RangeBarChart
                  unit=""
                  formatValue={(v) => formatMoney(v)}
                  rows={results.map((r) => ({
                    id: r.id,
                    label: `${r.quantity}× ${r.name}`,
                    emoji: r.emoji,
                    low: Math.max(0, r.netSavingsRange[0]),
                    high: Math.max(0, r.netSavingsRange[1]),
                    note: `${r.lbRange[0].toFixed(1)}–${r.lbRange[1].toFixed(1)} lbs at $${r.groceryPricePerLb.toFixed(2)}/lb grocery price. Net savings: ${formatMoney(r.netSavingsRange[0])}–${formatMoney(r.netSavingsRange[1])}.`,
                  }))}
                />

                <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                  Grocery prices are representative national averages, not today's price at any one
                  store. Growing cost is a simplified one-time seed/transplant estimate and doesn't
                  include soil, water, or fertilizer — see the Soil, Compost, and Fertilizer
                  calculators for those. Perennials (strawberries, blackberries) show their
                  establishment cost against a single season's harvest, so a modest first-year loss
                  is normal — they pay off in following years.
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Related tools */}
      <div className="mt-10">
        <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-4">
          Plan the rest of your garden
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <Link
            href="/tools/yield-estimator/"
            className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-garden-400 dark:hover:border-garden-500 p-4 transition-colors flex items-center gap-2"
          >
            <span className="text-xl">🧺</span>
            <span className="text-sm font-medium text-garden-800 dark:text-garden-300 group-hover:underline">Garden Yield Estimator</span>
          </Link>
          <Link
            href="/tools/soil-calculator/"
            className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-garden-400 dark:hover:border-garden-500 p-4 transition-colors flex items-center gap-2"
          >
            <span className="text-xl">🪨</span>
            <span className="text-sm font-medium text-garden-800 dark:text-garden-300 group-hover:underline">Soil &amp; Raised Bed Calculator</span>
          </Link>
          <Link
            href="/tools/fertilizer-calculator/"
            className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-garden-400 dark:hover:border-garden-500 p-4 transition-colors flex items-center gap-2"
          >
            <span className="text-xl">🧪</span>
            <span className="text-sm font-medium text-garden-800 dark:text-garden-300 group-hover:underline">Fertilizer Calculator</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

function SavingsWaterfall({ summary }) {
  return (
    <div className="mt-4 flex items-stretch justify-center gap-1.5 text-center">
      <WaterfallTile
        label="Grocery value"
        value={`${formatMoney(summary.groceryValueRange[0])}–${formatMoney(summary.groceryValueRange[1])}`}
        tint="bg-[#5eae3d] dark:bg-[#4f9e3a]"
      />
      <Connector symbol="−" />
      <WaterfallTile label="Growing cost" value={formatMoney(summary.growingCost)} tint="bg-[#a8742c] dark:bg-[#9a6a1e]" />
      <Connector symbol="=" />
      <WaterfallTile
        label="Net savings"
        value={`${formatMoney(summary.netSavingsRange[0])}–${formatMoney(summary.netSavingsRange[1])}`}
        tint="bg-[#2563eb] dark:bg-[#3b82f6]"
        emphasize
      />
    </div>
  )
}

function WaterfallTile({ label, value, tint, emphasize }) {
  return (
    <div className={`flex-1 min-w-0 rounded-lg px-2 py-2 text-white ${tint} ${emphasize ? 'ring-2 ring-offset-1 ring-offset-white dark:ring-offset-gray-900 ring-[#2563eb]/40' : ''}`}>
      <p className="text-[10px] font-medium opacity-90 truncate">{label}</p>
      <p className="text-xs sm:text-sm font-bold truncate">{value}</p>
    </div>
  )
}

function Connector({ symbol }) {
  return <span className="self-center text-gray-400 dark:text-gray-500 font-bold text-sm px-0.5">{symbol}</span>
}

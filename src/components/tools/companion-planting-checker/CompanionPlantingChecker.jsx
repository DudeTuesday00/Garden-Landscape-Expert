'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import plants from '../../../data/plants.js'
import { checkCompanionship, companionCheckerPlantIds } from '../../../data/companion-pairings.js'
import RelationshipLink from '../shared/RelationshipLink.jsx'
import { STATUS } from '../shared/palette.js'

const CHECKER_PLANTS = companionCheckerPlantIds
  .map((id) => plants.find((p) => p.id === id))
  .filter(Boolean)
  .sort((a, b) => a.name.localeCompare(b.name))

const VERDICT_META = {
  good: { label: 'Good Companions', emoji: '✅', classes: 'bg-garden-50 dark:bg-gray-900 border-garden-300 dark:border-garden-700 text-garden-800 dark:text-garden-300' },
  avoid: { label: 'Keep Apart', emoji: '⚠️', classes: 'bg-red-50 dark:bg-gray-900 border-red-300 dark:border-red-800 text-red-800 dark:text-red-300' },
  neutral: { label: 'No Strong Relationship', emoji: '🤷', classes: 'bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300' },
}

export default function CompanionPlantingChecker() {
  const [plantA, setPlantA] = useState('tomato')
  const [plantB, setPlantB] = useState('basil')

  const result = useMemo(() => {
    if (!plantA || !plantB || plantA === plantB) return null
    const match = checkCompanionship(plantA, plantB)
    return match || { type: 'neutral', reason: "We don't have a documented relationship for this pair — that doesn't mean they're incompatible, just that there's no strong reported effect either way. Most plant pairings fall into this category." }
  }, [plantA, plantB])

  const plantAInfo = plants.find((p) => p.id === plantA)
  const plantBInfo = plants.find((p) => p.id === plantB)

  const compatibilityGrid = useMemo(() => {
    return CHECKER_PLANTS.filter((p) => p.id !== plantA).map((p) => {
      const match = checkCompanionship(plantA, p.id)
      return { plant: p, verdict: match?.type || 'neutral' }
    })
  }, [plantA])

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href="/tools/"
        className="inline-flex items-center gap-1 text-sm text-garden-600 dark:text-garden-400 hover:underline mb-4"
      >
        ← Back to Garden Tools
      </Link>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-garden-800 dark:text-garden-300">
          Companion Planting Checker
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Check whether two plants make good neighbors, should be kept apart, or have no strong
          documented relationship either way.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <PlantSelect label="Plant 1" value={plantA} onChange={setPlantA} />
          <PlantSelect label="Plant 2" value={plantB} onChange={setPlantB} />
        </div>

        {plantA === plantB ? (
          <p className="mt-5 text-sm text-gray-500 dark:text-gray-400 text-center">Pick two different plants to compare.</p>
        ) : result ? (
          <div className={`mt-5 rounded-xl border p-5 ${VERDICT_META[result.type].classes}`}>
            <RelationshipLink plantA={plantAInfo} plantB={plantBInfo} verdict={result.type} />
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xl">{VERDICT_META[result.type].emoji}</span>
              <span className="font-bold">{VERDICT_META[result.type].label}</span>
            </div>
            <p className="text-sm text-center leading-relaxed">{result.reason}</p>
          </div>
        ) : null}

        {compatibilityGrid.length > 0 && (
          <div className="mt-6">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              {plantAInfo?.emoji} {plantAInfo?.name}&rsquo;s compatibility at a glance
            </p>
            <div className="flex flex-wrap gap-2">
              {compatibilityGrid.map(({ plant, verdict }) => {
                const status = STATUS[verdict]
                return (
                  <button
                    key={plant.id}
                    onClick={() => setPlantB(plant.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium border transition-colors ${status.ring} ${
                      plant.id === plantB ? `${status.bg} text-white` : `bg-white dark:bg-gray-900 ${status.text}`
                    }`}
                    title={verdict === 'good' ? 'Good companions' : verdict === 'avoid' ? 'Keep apart' : 'No strong documented relationship'}
                  >
                    <span>{plant.emoji}</span>
                    <span>{plant.name}</span>
                  </button>
                )
              })}
            </div>
            <div className="mt-2.5 flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1.5"><span className={`w-2.5 h-2.5 rounded-full ${STATUS.good.bg}`} /> Good companions</span>
              <span className="flex items-center gap-1.5"><span className={`w-2.5 h-2.5 rounded-full ${STATUS.avoid.bg}`} /> Keep apart</span>
              <span className="flex items-center gap-1.5"><span className={`w-2.5 h-2.5 rounded-full ${STATUS.neutral.bg}`} /> No strong relationship</span>
            </div>
          </div>
        )}

        <p className="mt-5 text-xs text-gray-500 dark:text-gray-400">
          Companion planting mechanisms vary widely in how well-supported they are — some (like
          allium scent confusing carrot fly) have real research behind them, others are garden
          tradition passed down without formal study. Treat this as a helpful starting point, not
          a guarantee.
        </p>
      </div>

      {/* Related guides */}
      <div className="mt-10">
        <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-4">
          Learn more
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/guides/companion-planting/"
            className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-garden-400 dark:hover:border-garden-500 p-4 transition-colors flex items-center gap-2"
          >
            <span className="text-xl">🤝</span>
            <span className="text-sm font-medium text-garden-800 dark:text-garden-300 group-hover:underline">Companion Planting</span>
          </Link>
          <Link
            href="/guides/three-sisters/"
            className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-garden-400 dark:hover:border-garden-500 p-4 transition-colors flex items-center gap-2"
          >
            <span className="text-xl">🌽</span>
            <span className="text-sm font-medium text-garden-800 dark:text-garden-300 group-hover:underline">Three Sisters Garden</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

function PlantSelect({ label, value, onChange }) {
  return (
    <div>
      <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm"
      >
        {CHECKER_PLANTS.map((p) => (
          <option key={p.id} value={p.id}>
            {p.emoji} {p.name}
          </option>
        ))}
      </select>
    </div>
  )
}

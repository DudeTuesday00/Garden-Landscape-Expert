'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { locationOptions, getEntriesForLocations } from '../../../data/symptom-key.js'
import PlantDiagram from './PlantDiagram.jsx'
import { useToolUsageTracking } from '../../../logic/useToolUsageTracking.js'

const GUIDE_TITLES = {
  'garden-pests': 'Garden Pests ID & Control',
  'common-diseases': 'Common Garden Diseases',
}

export default function PlantSymptomChecker() {
  const [locations, setLocations] = useState([])
  const [selectedId, setSelectedId] = useState(null)

  function toggleLocation(id) {
    setLocations((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
    setSelectedId(null)
  }

  const candidates = useMemo(() => getEntriesForLocations(locations), [locations])
  const selected = candidates.find((e) => e.id === selectedId)

  useToolUsageTracking('plant-symptom-checker', !!selected, { requireInteraction: false })

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
          Garden Symptom Diagnostic
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Answer two quick questions about what you're seeing to narrow down the likely pest or
          disease — then jump straight to the full profile.
        </p>
      </div>

      {/* Step 1 */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          1. Where do you see the problem?
        </label>
        <div className="flex flex-col sm:flex-row gap-5">
          <PlantDiagram activeLocations={locations} className="flex-shrink-0 self-center sm:self-start" />
          <div className="flex-1">
            <div className="flex flex-wrap gap-2">
              {locationOptions.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => toggleLocation(loc.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                    locations.includes(loc.id)
                      ? 'bg-garden-600 text-white border-garden-600'
                      : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-garden-400'
                  }`}
                >
                  {loc.emoji} {loc.label}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              Select one or more — leave all unselected to browse every symptom.
            </p>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          2. Which of these matches what you see?
        </label>
        <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
          {candidates.map((e) => (
            <button
              key={e.id}
              onClick={() => setSelectedId(e.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all border ${
                selectedId === e.id
                  ? 'bg-garden-600 text-white border-garden-600'
                  : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-garden-400'
              }`}
            >
              <span className="mr-1.5">{e.source === 'pest' ? '🐛' : '🦠'}</span>
              {e.whatYouSee}
            </button>
          ))}
          {candidates.length === 0 && (
            <p className="text-sm text-gray-500 dark:text-gray-400">No symptoms match that location.</p>
          )}
        </div>
      </div>

      {/* Result */}
      {selected && (
        <div className="bg-garden-50 dark:bg-gray-900 rounded-2xl border border-garden-200 dark:border-garden-700 p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white dark:bg-gray-800 border border-garden-200 dark:border-garden-700 text-garden-700 dark:text-garden-300">
              {selected.source === 'pest' ? '🐛 Likely Pest' : '🦠 Likely Disease'}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-garden-800 dark:text-garden-300">{selected.likelyCause}</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium text-gray-700 dark:text-gray-300">Where:</span> {selected.where}
          </p>
          {selected.clue && (
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium text-gray-700 dark:text-gray-300">Confirming clue:</span> {selected.clue}
            </p>
          )}
          <Link
            href={`/guides/${selected.guideId}/#${selected.sectionAnchor}`}
            className="mt-4 inline-block bg-garden-600 hover:bg-garden-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
          >
            📖 See the full profile in {GUIDE_TITLES[selected.guideId]} →
          </Link>
          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
            This is a starting point, not a lab diagnosis — many symptoms have multiple possible
            causes. For a persistent or spreading problem, your state's cooperative extension
            plant diagnostic lab can confirm with certainty.
          </p>
        </div>
      )}

      {/* Related guides */}
      <div className="mt-10">
        <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-4">
          Full diagnostic guides
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/guides/garden-pests/"
            className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-garden-400 dark:hover:border-garden-500 p-4 transition-colors flex items-center gap-2"
          >
            <span className="text-xl">🐛</span>
            <span className="text-sm font-medium text-garden-800 dark:text-garden-300 group-hover:underline">Garden Pests ID &amp; Control</span>
          </Link>
          <Link
            href="/guides/common-diseases/"
            className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-garden-400 dark:hover:border-garden-500 p-4 transition-colors flex items-center gap-2"
          >
            <span className="text-xl">🦠</span>
            <span className="text-sm font-medium text-garden-800 dark:text-garden-300 group-hover:underline">Common Garden Diseases</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

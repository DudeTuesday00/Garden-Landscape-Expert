'use client'

import Link from 'next/link'
import plants from '../data/plants.js'
import { guideCategories } from '../data/guides.js'
import { useSavedItems } from '../logic/useSavedItems.js'

const allGuides = guideCategories.flatMap((cat) => cat.guides)

export default function MyGarden() {
  const { data, ready, toggle } = useSavedItems()

  const savedPlants = data.plants
    .map((id) => plants.find((p) => p.id === id))
    .filter(Boolean)
  const savedGuides = data.guides
    .map((id) => allGuides.find((g) => g.id === id))
    .filter(Boolean)

  const isEmpty = ready && savedPlants.length === 0 && savedGuides.length === 0

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-garden-800 dark:text-garden-300">
            ❤️ My Garden
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Plants and guides you've saved, stored right in this browser — no account needed.
          </p>
        </div>

        {!ready && (
          <p className="text-center text-gray-400 dark:text-gray-500">Loading…</p>
        )}

        {isEmpty && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-10 text-center">
            <p className="text-4xl mb-3">🌱</p>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Nothing saved yet</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Look for the "Save to My Garden" button on any{' '}
              <Link href="/plants/" className="underline text-garden-600 dark:text-garden-400">plant</Link>{' '}
              or{' '}
              <Link href="/guides/" className="underline text-garden-600 dark:text-garden-400">guide</Link>{' '}
              page.
            </p>
          </div>
        )}

        {savedPlants.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-3">
              Saved Plants ({savedPlants.length})
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {savedPlants.map((p) => (
                <div
                  key={p.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-4 flex items-center gap-3"
                >
                  <Link href={`/plants/${p.id}/`} className="flex-1 min-w-0 flex items-center gap-3">
                    <span className="text-2xl flex-shrink-0">{p.emoji}</span>
                    <span className="font-semibold text-sm text-gray-800 dark:text-gray-100 truncate">{p.name}</span>
                  </Link>
                  <button
                    onClick={() => toggle('plant', p.id)}
                    className="flex-shrink-0 text-xs text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                    title="Remove from My Garden"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {savedGuides.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-3">
              Saved Guides ({savedGuides.length})
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {savedGuides.map((g) => (
                <div
                  key={g.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-4 flex items-center gap-3"
                >
                  <Link href={`/guides/${g.id}/`} className="flex-1 min-w-0 flex items-center gap-3">
                    <span className="text-2xl flex-shrink-0">{g.emoji}</span>
                    <span className="font-semibold text-sm text-gray-800 dark:text-gray-100 truncate">{g.title}</span>
                  </Link>
                  <button
                    onClick={() => toggle('guide', g.id)}
                    className="flex-shrink-0 text-xs text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                    title="Remove from My Garden"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

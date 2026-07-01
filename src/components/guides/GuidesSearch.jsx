'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import CategorySection from './CategorySection.jsx'

export default function GuidesSearch({ visibleCategories }) {
  const [query, setQuery] = useState('')

  // Pre-fill from ?q= so the sitewide SearchAction (see layout.jsx JSON-LD) actually works
  useEffect(() => {
    const initial = new URLSearchParams(window.location.search).get('q')
    if (initial) setQuery(initial)
  }, [])

  const q = query.trim().toLowerCase()

  // When searching: flatten all live guides matching the query across all categories
  const searchResults = q
    ? visibleCategories
        .flatMap((cat) => cat.guides.filter((g) => !g.comingSoon))
        .filter(
          (g) =>
            g.title.toLowerCase().includes(q) ||
            g.description.toLowerCase().includes(q)
        )
    : []

  return (
    <>
      {/* Search bar */}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">🔍</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search guides…"
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-garden-400 dark:focus:ring-garden-600 transition"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-lg leading-none"
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      {/* Search results */}
      {q && (
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
          {searchResults.length === 0 ? (
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
              No guides found for <strong>"{query}"</strong> — try a different keyword.
            </p>
          ) : (
            <>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {searchResults.length} guide{searchResults.length !== 1 ? 's' : ''} matching <strong>"{query}"</strong>
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {searchResults.map((guide) => (
                  <Link
                    key={guide.id}
                    href={`/guides/${guide.id}/`}
                    className="bg-white dark:bg-gray-800 rounded-2xl border border-garden-200 dark:border-garden-700 shadow-sm p-4 flex gap-3 items-start hover:shadow-md hover:border-garden-400 dark:hover:border-garden-500 transition-shadow"
                  >
                    <span className="text-2xl flex-shrink-0">{guide.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-garden-900 dark:text-garden-300 leading-tight">{guide.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{guide.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Category list — hidden while searching */}
      {!q && visibleCategories.map((category) => (
        <div key={category.id} className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
          <CategorySection category={category} />
        </div>
      ))}
    </>
  )
}

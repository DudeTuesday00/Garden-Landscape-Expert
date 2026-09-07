'use client'

import { useState } from 'react'
import Link from 'next/link'
import { searchSite } from '../data/search-index.js'

export default function HomeSearchBar() {
  const [query, setQuery] = useState('')
  const results = searchSite(query)
  const q = query.trim()

  return (
    <div className="w-full">
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none">
          🔍
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search guides, plants, tools & more…"
          className="w-full pl-11 pr-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-garden-400 dark:focus:ring-garden-600"
        />
      </div>

      {q && (
        <div className="mt-2 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden">
          {results.length === 0 ? (
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-6">
              No results for &ldquo;{q}&rdquo;
            </p>
          ) : (
            results.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-start gap-3 px-4 py-3 hover:bg-garden-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-lg flex-shrink-0">{item.emoji}</span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-garden-900 dark:text-garden-200 leading-tight truncate">{item.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-snug truncate">{item.description}</p>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  )
}

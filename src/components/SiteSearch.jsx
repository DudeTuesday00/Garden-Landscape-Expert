'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { guideCategories } from '../data/guides.js'

// Key static pages worth surfacing in global search alongside guides
const staticPages = [
  { title: 'Garden Architect', emoji: '🌱', description: 'Get personalized plant recommendations from 148 plants.', href: '/wizard/' },
  { title: 'Plantopedia', emoji: '📖', description: 'Browse 88 expert growing guides by category.', href: '/guides/' },
  { title: 'Garden Infographics', emoji: '🗺️', description: 'Visual quick-reference guides for planting and growing.', href: '/infographics/' },
  { title: 'Gardening Videos', emoji: '🎬', description: 'Curated YouTube channels and original Planting Atlas videos.', href: '/videos/' },
  { title: 'Gardening Podcasts', emoji: '🎙️', description: 'Curated podcasts and original Planting Atlas episodes.', href: '/podcasts/' },
  { title: 'About David Rodgers', emoji: '👤', description: '40+ years of hands-on gardening experience.', href: '/about/' },
  { title: 'Contact Us', emoji: '✉️', description: 'Questions, feedback, or partnership inquiries.', href: '/contact/' },
]

// Flatten every live guide across all categories into a searchable index, built once at module load
const guideIndex = guideCategories.flatMap((cat) =>
  cat.guides
    .filter((g) => !g.comingSoon)
    .map((g) => ({
      title: g.title,
      emoji: g.emoji,
      description: g.description,
      href: `/guides/${g.id}/`,
    }))
)

const searchIndex = [...staticPages, ...guideIndex]

export default function SiteSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const containerRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false)
    }
    function handleEscape(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  function close() {
    setOpen(false)
    setQuery('')
  }

  const q = query.trim().toLowerCase()
  const results = q
    ? searchIndex
        .filter((item) => item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q))
        .slice(0, 8)
    : []

  return (
    <div ref={containerRef} className="relative print:hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-label="Search the site"
        aria-expanded={open}
      >
        🔍
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 max-w-[90vw] bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-3 z-30">
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides, tools & pages…"
            className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-garden-400 dark:focus:ring-garden-600"
          />

          {q && (
            <div className="mt-2 max-h-80 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-700">
              {results.length === 0 ? (
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center py-4">
                  No results for &ldquo;{query}&rdquo;
                </p>
              ) : (
                results.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    className="flex items-start gap-2.5 px-2 py-2.5 hover:bg-garden-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
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
      )}
    </div>
  )
}

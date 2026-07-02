'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import plants from '../../data/plants.js'
import { plantProfiles } from '../../data/plant-profiles.js'
import { plantTypeOptions } from '../../data/fertilizer-recommendations.js'

const SUN_OPTIONS = [
  { value: 'full-sun', label: '☀️ Full Sun' },
  { value: 'partial-shade', label: '⛅ Partial Shade' },
  { value: 'full-shade', label: '🌑 Full Shade' },
]
const WATER_OPTIONS = [
  { value: 'low', label: '💧 Low' },
  { value: 'moderate', label: '💧💧 Moderate' },
  { value: 'high', label: '💧💧💧 High' },
]
const LIFECYCLE_OPTIONS = [
  { value: 'annual', label: 'Annual' },
  { value: 'perennial', label: 'Perennial' },
  { value: 'biennial', label: 'Biennial' },
]
const EXPERIENCE_OPTIONS = [
  { value: 'beginner', label: '🌱 Beginner' },
  { value: 'intermediate', label: '🌿 Intermediate' },
  { value: 'advanced', label: '🌳 Advanced' },
]

const enriched = plants.map((p) => ({ ...p, profile: plantProfiles[p.id] }))

function FilterGroup({ label, options, value, onChange }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-2">{label}</p>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onChange(null)}
          className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
            value === null
              ? 'bg-garden-600 text-white border-garden-600'
              : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-garden-400'
          }`}
        >
          All
        </button>
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
              value === opt.value
                ? 'bg-garden-600 text-white border-garden-600'
                : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-garden-400'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function PlantDatabase() {
  const [query, setQuery] = useState('')
  const [typeFilter, setTypeFilter] = useState(null)
  const [sunFilter, setSunFilter] = useState(null)
  const [waterFilter, setWaterFilter] = useState(null)
  const [lifecycleFilter, setLifecycleFilter] = useState(null)
  const [experienceFilter, setExperienceFilter] = useState(null)
  const [hydroOnly, setHydroOnly] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return enriched
      .filter((p) => !q || p.name.toLowerCase().includes(q) || p.profile?.scientificName?.toLowerCase().includes(q))
      .filter((p) => !typeFilter || p.type === typeFilter)
      .filter((p) => !sunFilter || p.sunlight.includes(sunFilter))
      .filter((p) => !waterFilter || p.water === waterFilter)
      .filter((p) => !lifecycleFilter || p.profile?.lifecycle === lifecycleFilter)
      .filter((p) => !experienceFilter || p.experience === experienceFilter)
      .filter((p) => !hydroOnly || p.hydroponic)
      .sort((a, b) => a.name.localeCompare(b.name))
  }, [query, typeFilter, sunFilter, waterFilter, lifecycleFilter, experienceFilter, hydroOnly])

  const activeFilterCount = [typeFilter, sunFilter, waterFilter, lifecycleFilter, experienceFilter, hydroOnly || null].filter(Boolean).length

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-garden-800 dark:text-garden-300">
          Plant Database
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Search and filter all 150 plants — common and scientific names, sun and water needs,
          lifecycle, native range, pet safety, bloom characteristics, and more.
        </p>
      </div>

      {/* Search + filter toggle */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by common or scientific name…"
            className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-garden-600"
          />
          <button
            onClick={() => setShowFilters((s) => !s)}
            className="px-4 py-2.5 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:border-garden-400 transition-colors whitespace-nowrap"
          >
            🔎 Filters {activeFilterCount > 0 ? `(${activeFilterCount})` : ''}
          </button>
        </div>

        {showFilters && (
          <div className="mt-5 space-y-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            <FilterGroup
              label="Plant Type"
              options={plantTypeOptions.map((o) => ({ value: o.id, label: `${o.emoji} ${o.label}` }))}
              value={typeFilter}
              onChange={setTypeFilter}
            />
            <FilterGroup label="Sun" options={SUN_OPTIONS} value={sunFilter} onChange={setSunFilter} />
            <FilterGroup label="Water" options={WATER_OPTIONS} value={waterFilter} onChange={setWaterFilter} />
            <FilterGroup label="Lifecycle" options={LIFECYCLE_OPTIONS} value={lifecycleFilter} onChange={setLifecycleFilter} />
            <FilterGroup label="Experience Level" options={EXPERIENCE_OPTIONS} value={experienceFilter} onChange={setExperienceFilter} />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-2">Growing Method</p>
              <button
                onClick={() => setHydroOnly((h) => !h)}
                className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                  hydroOnly
                    ? 'bg-garden-600 text-white border-garden-600'
                    : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-garden-400'
                }`}
              >
                💧 Hydroponic-Compatible Only
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        Showing {results.length} of {enriched.length} plants
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((p) => (
          <Link
            key={p.id}
            href={`/plants/${p.id}/`}
            className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-garden-400 dark:hover:border-garden-500 shadow-sm hover:shadow-md transition-all p-5 flex flex-col"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className="text-3xl">{p.emoji}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-garden-50 dark:bg-garden-900/30 text-garden-700 dark:text-garden-300 border border-garden-100 dark:border-garden-800 capitalize whitespace-nowrap">
                {p.type}
              </span>
            </div>
            <h2 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-garden-700 dark:group-hover:text-garden-300 transition-colors">
              {p.name}
            </h2>
            {p.profile?.scientificName && (
              <p className="text-xs italic text-gray-500 dark:text-gray-400 mt-0.5">{p.profile.scientificName}</p>
            )}
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed flex-1">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5 text-xs text-gray-400 dark:text-gray-500">
              {p.profile?.lifecycle && <span className="capitalize">{p.profile.lifecycle}</span>}
              <span>·</span>
              <span className="capitalize">{p.water} water</span>
            </div>
          </Link>
        ))}
      </div>

      {results.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 py-12">
          No plants match those filters — try broadening your search.
        </p>
      )}
    </div>
  )
}

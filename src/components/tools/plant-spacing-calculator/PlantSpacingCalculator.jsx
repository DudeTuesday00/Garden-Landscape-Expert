'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import plants from '../../../data/plants.js'
import { plantSpacing } from '../../../data/plant-spacing.js'
import { plantCountForSquares, buildSpacingGrid } from '../../../logic/spacingPlanner.js'
import BedGrid from '../shared/BedGrid.jsx'
import { gridTintAt } from '../shared/palette.js'
import { useToolUsageTracking } from '../../../logic/useToolUsageTracking.js'

const SPACING_PLANTS = Object.keys(plantSpacing)
  .map((id) => {
    const p = plants.find((pl) => pl.id === id)
    if (!p) return null
    return { id, name: p.name, emoji: p.emoji, ...plantSpacing[id] }
  })
  .filter(Boolean)
  .sort((a, b) => a.name.localeCompare(b.name))

export default function PlantSpacingCalculator() {
  const [length, setLength] = useState('8')
  const [width, setWidth] = useState('4')
  const [selections, setSelections] = useState({ radish: 4, tomato: 4, basil: 4 })

  const totalSquares = useMemo(() => {
    const l = Math.round(parseFloat(length))
    const w = Math.round(parseFloat(width))
    return l > 0 && w > 0 ? l * w : 0
  }, [length, width])

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

  function updateSquares(id, value) {
    setSelections((prev) => ({ ...prev, [id]: Math.max(0, parseInt(value, 10) || 0) }))
  }

  const assignments = useMemo(() => {
    return Object.entries(selections)
      .filter(([, squares]) => squares > 0)
      .map(([id, squares], i) => {
        const plant = SPACING_PLANTS.find((p) => p.id === id)
        return {
          plantId: id,
          name: plant?.name,
          emoji: plant?.emoji,
          perSqFt: plant?.perSqFt,
          note: plant?.note,
          squares,
          count: plantCountForSquares(plant?.perSqFt, squares),
          tint: gridTintAt(i),
        }
      })
  }, [selections])

  const assignedSquares = assignments.reduce((sum, a) => sum + a.squares, 0)
  const over = assignedSquares > totalSquares

  const { grid } = useMemo(
    () =>
      buildSpacingGrid(
        Math.round(parseFloat(length)) || 0,
        Math.round(parseFloat(width)) || 0,
        assignments.map((a) => ({ plantId: a.plantId, emoji: a.emoji, squares: a.squares }))
      ),
    [length, width, assignments]
  )

  const infoByPlantId = Object.fromEntries(assignments.map((a) => [a.plantId, a]))
  const displayGrid = grid.map((row) =>
    row.map((cell) => {
      if (!cell) return null
      const info = infoByPlantId[cell.plantId]
      return { plantId: cell.plantId, emoji: cell.emoji, name: info?.name || cell.plantId, tint: info?.tint || gridTintAt(0) }
    })
  )

  const usageTracking = useToolUsageTracking('plant-spacing-calculator', assignments.length > 0 && assignedSquares > 0)

  return (
    <div className="max-w-5xl mx-auto" {...usageTracking}>
      <Link
        href="/tools/"
        className="inline-flex items-center gap-1 text-sm text-garden-600 dark:text-garden-400 hover:underline mb-4"
      >
        ← Back to Garden Tools
      </Link>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-garden-800 dark:text-garden-300">
          Plant Spacing &amp; Square Foot Garden Planner
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          See exactly how many plants fit in your bed, with a visual grid — using the plants-per-square-foot
          reference from our Square Foot Gardening guide.
        </p>
      </div>

      {/* Bed size */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Bed size (whole feet — one square per foot)
        </label>
        <div className="grid grid-cols-2 gap-3 max-w-sm">
          <NumberField label="Length (ft)" value={length} onChange={setLength} />
          <NumberField label="Width (ft)" value={width} onChange={setWidth} />
        </div>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {totalSquares} total squares.{' '}
          <span className={over ? 'text-red-600 dark:text-red-400 font-medium' : ''}>
            {assignedSquares} assigned{over ? ' — over capacity, reduce a plant below' : ''}
          </span>
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Plant picker */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Pick your plants
            </label>
            <div className="flex flex-wrap gap-2 mb-4">
              {SPACING_PLANTS.map((p) => (
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

            {assignments.length > 0 && (
              <div className="space-y-3">
                {assignments.map((a) => (
                  <div key={a.plantId} className="flex items-center justify-between gap-3 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className={`w-3 h-3 rounded-sm flex-shrink-0 ${a.tint}`} />
                      <span className="text-sm text-gray-800 dark:text-gray-100 truncate">{a.emoji} {a.name}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <input
                        type="number"
                        min="0"
                        step="1"
                        value={a.squares}
                        onChange={(e) => updateSquares(a.plantId, e.target.value)}
                        className="w-14 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm text-center"
                      />
                      <span className="text-xs text-gray-400">sq</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Grid + results */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 lg:sticky lg:top-20">
            <h2 className="text-xl font-bold text-garden-800 dark:text-garden-300 mb-4">
              Your bed layout
            </h2>

            {totalSquares > 0 && totalSquares <= 400 ? (
              <div className="mb-5">
                <BedGrid
                  grid={displayGrid}
                  cols={Math.round(parseFloat(length)) || 1}
                  legend={assignments.map((a) => ({ plantId: a.plantId, emoji: a.emoji, name: a.name, tint: a.tint }))}
                />
              </div>
            ) : totalSquares > 400 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
                Bed too large to render as a grid here (400+ squares) — the plant counts below are still accurate.
              </p>
            ) : null}

            {assignments.length > 0 ? (
              <div className="space-y-2">
                {assignments.map((a) => (
                  <div key={a.plantId} className="flex items-start justify-between border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5">
                    <div>
                      <div className="text-sm font-medium text-gray-800 dark:text-gray-100">{a.emoji} {a.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{a.note}</div>
                    </div>
                    <div className="text-right flex-shrink-0 pl-3">
                      <div className="text-lg font-bold text-garden-700 dark:text-garden-300">{a.count}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">plants</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">Pick at least one plant to see your layout.</p>
            )}

            <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
              This is a suggested reference layout (squares fill in the order you add plants), not an
              optimized or companion-planting-aware arrangement — rearrange as you like once you know your counts.
            </p>

            <Link
              href="/guides/square-foot-gardening/"
              className="mt-4 inline-block text-sm text-garden-600 dark:text-garden-400 hover:underline"
            >
              📖 Read the full Square Foot Gardening guide →
            </Link>
          </div>
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
        min="1"
        step="1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-garden-600"
      />
    </div>
  )
}

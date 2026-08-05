'use client'

import { useState } from 'react'

/**
 * Horizontal bars comparing a magnitude (with a min-max range) across
 * categories. Single sequential hue (garden) — never per-category color,
 * since these rows are the same series (e.g. "estimated value"), not
 * distinct categories needing identity. The low->high range within each
 * row is shown as a lighter fill (0->low) plus a solid fill (low->high),
 * both the same hue at different steps of the ramp.
 *
 * rows: [{ id, label, emoji, low, high, note? }]
 */
export default function RangeBarChart({ rows, unit = '', formatValue = (v) => v.toFixed(1) }) {
  const [hoverId, setHoverId] = useState(null)
  if (!rows.length) return null

  const max = Math.max(...rows.map((r) => r.high), 0.001)

  return (
    <div className="space-y-3">
      {rows.map((r) => {
        const lowPct = (r.low / max) * 100
        const highPct = (r.high / max) * 100
        const isHover = hoverId === r.id
        return (
          <div
            key={r.id}
            className="group"
            onMouseEnter={() => setHoverId(r.id)}
            onMouseLeave={() => setHoverId(null)}
          >
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="font-medium text-gray-800 dark:text-gray-100 truncate flex items-center gap-1.5">
                {r.emoji && <span>{r.emoji}</span>}
                {r.label}
              </span>
              <span className="text-garden-700 dark:text-garden-400 font-bold whitespace-nowrap pl-2">
                {formatValue(r.low)}–{formatValue(r.high)}{unit}
              </span>
            </div>
            <div className="relative h-3 rounded-full bg-garden-100 dark:bg-gray-700 overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-garden-300 dark:bg-garden-800 transition-all duration-300"
                style={{ width: `${highPct}%` }}
              />
              <div
                className={`absolute inset-y-0 left-0 rounded-full bg-garden-600 dark:bg-garden-500 transition-all duration-300 ${isHover ? 'brightness-110' : ''}`}
                style={{ width: `${lowPct}%` }}
              />
            </div>
            {(isHover && r.note) && (
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{r.note}</p>
            )}
          </div>
        )
      })}
    </div>
  )
}

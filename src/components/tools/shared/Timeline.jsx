'use client'

import { useState } from 'react'
import { categoricalAt } from './palette.js'

const MONTH_LABELS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
export const MONTH_STARTS = [1, 32, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366]

function dayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0)
  return Math.floor((date - start) / 86400000)
}

// 1-based calendar month (1-12) -> that month's [startDay, endDay) in
// day-of-year terms, for callers building bands from month sets rather than
// exact dates (e.g. Garden Calendar's per-plant activity months).
export function monthRange(month) {
  return { startDay: MONTH_STARTS[month - 1], endDay: MONTH_STARTS[month] }
}

// Merge a 1-based month -> value map into contiguous same-value bands
// (so 3 consecutive "harvest" months render as ONE band, not three).
// valueToBand(value) must return { colorClass|colorIndex, tooltip }.
export function mergeMonthCellsToBands(cells, valueToBand) {
  const months = Object.keys(cells).map(Number).sort((a, b) => a - b)
  const bands = []
  let run = null
  for (const m of months) {
    const v = cells[m]
    if (run && run.value === v && run.endMonth === m - 1) {
      run.endMonth = m
    } else {
      if (run) bands.push(run)
      run = { value: v, startMonth: m, endMonth: m }
    }
  }
  if (run) bands.push(run)
  return bands.map((r) => ({
    startDay: monthRange(r.startMonth).startDay,
    endDay: monthRange(r.endMonth).endDay,
    ...valueToBand(r.value),
  }))
}

/**
 * Horizontal day-of-year axis strip. Continuous rounded bands (a multi-month
 * span renders as ONE bar, not one block per unit) with a hover tooltip
 * layer, an optional today marker, and optional point ticks within a band
 * (e.g. individual sowing dates inside a planting window).
 *
 * rows: [{ id, label, icon?, bands: [{ startDay, endDay, colorIndex, tooltip }], ticks?: [{ day, tooltip }] }]
 */
export default function Timeline({ rows, showTodayMarker = false, dense = false }) {
  const [hover, setHover] = useState(null) // { rowId, bandIndex } | null
  const todayDay = showTodayMarker ? dayOfYear(new Date()) : null
  const pct = (day) => (day / 365) * 100

  return (
    <div className={dense ? 'space-y-1' : 'space-y-2'}>
      {/* Month axis header */}
      <div className="flex items-center gap-3 px-1">
        <div className="w-32 sm:w-40 flex-shrink-0" />
        <div className="flex-1 relative h-4">
          {MONTH_LABELS.map((m, i) => (
            <span
              key={i}
              className="absolute -translate-x-1/2 text-[10px] text-gray-400 dark:text-gray-500"
              style={{ left: `${pct(MONTH_STARTS[i] + 15)}%` }}
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      {rows.map((row) => (
        <div key={row.id} className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 px-3 py-2">
          <div className="w-32 sm:w-40 flex-shrink-0 flex items-center gap-2 min-w-0">
            {row.icon && <span className="text-lg">{row.icon}</span>}
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-800 dark:text-gray-100 truncate">{row.label}</p>
              {row.sub}
            </div>
          </div>

          <div className="flex-1 relative h-6">
            {/* month gridlines */}
            {MONTH_STARTS.slice(0, 12).map((d, i) => (
              <span key={i} className="absolute top-0 bottom-0 w-px bg-gray-100 dark:bg-gray-700/60" style={{ left: `${pct(d)}%` }} />
            ))}

            {todayDay && (
              <span
                className="absolute -top-0.5 -bottom-0.5 w-0.5 bg-earth-500 dark:bg-earth-400 z-10"
                style={{ left: `${pct(todayDay)}%` }}
                title="Today"
              />
            )}

            {row.bands.map((b, i) => {
              const left = pct(b.startDay)
              const width = Math.max(pct(b.endDay - b.startDay), 1.2)
              // colorClass lets a caller with its own already-distinct
              // multi-way palette (e.g. Garden Calendar's 5 activity types)
              // opt out of the shared 3-slot categorical set rather than
              // forcing a mismatched palette size.
              const colorBg = b.colorClass || categoricalAt(b.colorIndex ?? 0).bg
              const isHover = hover && hover.rowId === row.id && hover.bandIndex === i
              return (
                <div
                  key={i}
                  className={`absolute top-0.5 bottom-0.5 rounded-full cursor-default transition-[filter] ${colorBg} ${isHover ? 'brightness-110 ring-2 ring-offset-1 ring-offset-white dark:ring-offset-gray-800 ring-gray-300 dark:ring-gray-600' : ''}`}
                  style={{ left: `${left}%`, width: `${width}%` }}
                  onMouseEnter={() => setHover({ rowId: row.id, bandIndex: i })}
                  onMouseLeave={() => setHover(null)}
                  title={b.tooltip}
                />
              )
            })}

            {(row.ticks || []).map((t, i) => (
              <span
                key={i}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white dark:bg-gray-900 border-2 border-earth-600 dark:border-earth-400 z-10"
                style={{ left: `${pct(t.day)}%` }}
                title={t.tooltip}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

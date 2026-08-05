'use client'

import { categoricalAt } from './palette.js'

/**
 * Segmented horizontal bar for a part-of-whole split (2-4 segments).
 * segments: [{ label, value, sublabel? }] — color is assigned by fixed
 * categorical order (never per-value), so the same label always gets the
 * same color across renders/filters.
 *
 * Legend is always rendered (dataviz check 6: legend present for >=2 series);
 * in-bar labels only show on segments wide enough to hold them (>=12%),
 * matching the "selective direct labels" mark spec.
 */
export default function RatioBar({ segments, unit = '', formatValue = (v) => v.toFixed(0) }) {
  const total = segments.reduce((sum, s) => sum + (s.value > 0 ? s.value : 0), 0)
  if (!(total > 0)) return null

  return (
    <div>
      <div
        className="flex w-full h-9 rounded-xl overflow-hidden gap-[2px] bg-gray-100 dark:bg-gray-900"
        role="img"
        aria-label={segments.map((s) => `${s.label}: ${formatValue(s.value)}${unit}`).join(', ')}
      >
        {segments.map((s, i) => {
          const pct = (s.value / total) * 100
          if (!(pct > 0)) return null
          const color = categoricalAt(i)
          return (
            <div
              key={s.label}
              className={`h-full flex items-center justify-center transition-all duration-300 ${color.bg} first:rounded-l-lg last:rounded-r-lg`}
              style={{ width: `${pct}%` }}
              title={`${s.label}: ${formatValue(s.value)}${unit} (${pct.toFixed(0)}%)`}
            >
              {pct >= 12 && (
                <span className="text-[11px] font-bold text-white whitespace-nowrap drop-shadow-sm">
                  {pct.toFixed(0)}%
                </span>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
        {segments.map((s, i) => {
          const color = categoricalAt(i)
          const pct = (s.value / total) * 100
          return (
            <div key={s.label} className="flex items-center gap-1.5 text-xs">
              <span className={`w-2.5 h-2.5 rounded-sm flex-shrink-0 ${color.bg}`} />
              <span className="text-gray-600 dark:text-gray-300 font-medium">{s.label}</span>
              <span className="text-gray-400 dark:text-gray-500">
                {formatValue(s.value)}{unit} · {pct.toFixed(0)}%
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

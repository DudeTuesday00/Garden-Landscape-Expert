'use client'

/**
 * Formalized bed-layout grid: ruler labels on both edges, a hover title per
 * cell, and a real legend row (color swatch + emoji + name), replacing an
 * inline color-dot list. Identity is color + emoji together, never color
 * alone, per the grid tint palette's design note.
 *
 * grid: 2D array (rows x cols), each cell either null or { plantId, emoji, name, tint }
 * legend: [{ plantId, emoji, name, tint }]
 */
export default function BedGrid({ grid, legend, cols }) {
  if (!grid.length) return null

  return (
    <div>
      <div className="flex">
        <div className="w-5 flex-shrink-0" />
        <div className="flex-1 grid gap-1 mb-1" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
          {Array.from({ length: cols }, (_, i) => (
            <span key={i} className="text-[9px] text-center text-gray-400 dark:text-gray-500">{i + 1}</span>
          ))}
        </div>
      </div>

      <div className="flex">
        <div className="w-5 flex-shrink-0 flex flex-col gap-1">
          {grid.map((_, r) => (
            <span key={r} className="flex-1 flex items-center justify-center text-[9px] text-gray-400 dark:text-gray-500">
              {r + 1}
            </span>
          ))}
        </div>
        <div className="flex-1 grid gap-1" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
          {grid.flat().map((cell, i) => (
            <div
              key={i}
              className={`aspect-square rounded-md flex items-center justify-center text-sm border border-gray-100 dark:border-gray-700 transition-colors ${
                cell ? cell.tint : 'bg-gray-50 dark:bg-gray-900'
              }`}
              title={cell ? cell.name : 'empty'}
            >
              {cell ? cell.emoji : ''}
            </div>
          ))}
        </div>
      </div>

      {legend?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
          {legend.map((l) => (
            <div key={l.plantId} className="flex items-center gap-1.5 text-xs">
              <span className={`w-3 h-3 rounded-sm flex-shrink-0 border border-black/5 dark:border-white/10 ${l.tint}`} />
              <span>{l.emoji}</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">{l.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

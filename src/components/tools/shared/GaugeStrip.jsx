'use client'

// Continuous position-on-a-scale gauge. Two gradient presets, both
// perceptually ordered (light->dark / cool->warm reads low->high) rather
// than a set of categories needing pairwise distinctness — this is the
// "sequential ramp" case the dataviz skill treats via lightness
// monotonicity, not adjacent-pair CVD.
const GRADIENTS = {
  // Coldest (deep blue) -> mildest (garden green) -> warmest (earth gold).
  'cold-warm': 'linear-gradient(90deg, #2f5fb8 0%, #4f9e3a 50%, #c99538 100%)',
  // Light -> dark, single hue (blue), for a low->high amount gauge.
  'sequential-blue': 'linear-gradient(90deg, #cfe4fb 0%, #2563eb 100%)',
}

export default function GaugeStrip({ min, max, value, gradient = 'cold-warm', ticks, valueLabel, trackLabel }) {
  const clamped = Math.min(max, Math.max(min, value))
  const pct = ((clamped - min) / (max - min)) * 100

  return (
    <div>
      {trackLabel && <p className="text-xs text-gray-500 dark:text-gray-400 mb-1.5">{trackLabel}</p>}
      <div className="relative pt-6 pb-1">
        {/* Pin marker */}
        <div
          className="absolute top-0 -translate-x-1/2 flex flex-col items-center transition-all duration-300"
          style={{ left: `${pct}%` }}
        >
          <span className="text-[11px] font-bold text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-800 px-1.5 py-0.5 rounded-md border border-gray-200 dark:border-gray-600 shadow-sm whitespace-nowrap">
            {valueLabel}
          </span>
          <span className="w-0.5 h-2 bg-gray-700 dark:bg-gray-300" />
        </div>

        <div
          className="h-3 rounded-full border border-black/5 dark:border-white/10"
          style={{ background: GRADIENTS[gradient] }}
        />

        {ticks && (
          <div className="flex justify-between mt-1 px-0.5">
            {ticks.map((t) => (
              <span key={t} className="text-[10px] text-gray-400 dark:text-gray-500">{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

'use client'

// Simple illustrated plant cross-section — Step 1's location picker
// highlights the matching part here instead of staying a plain text list.
// 'whole-plant' and 'seedlings' both highlight the entire silhouette (a
// mature-plant diagram has no separate "seedling" region to point at).
const HIGHLIGHT = 'fill-[#5eae3d] dark:fill-[#4f9e3a] stroke-[#4f8a30] dark:stroke-[#6cbd57]'
const DIM = 'fill-gray-200 dark:fill-gray-700 stroke-gray-300 dark:stroke-gray-600'

export default function PlantDiagram({ activeLocations = [], className = '' }) {
  const on = (key) => activeLocations.includes(key) || activeLocations.includes('whole-plant') || activeLocations.includes('seedlings')
  const cls = (key) => `${on(key) ? HIGHLIGHT : DIM} transition-colors duration-300`

  return (
    <svg viewBox="0 0 120 160" className={`w-24 h-32 ${className}`} role="img" aria-label="Plant diagram">
      {/* soil */}
      <rect x="0" y="130" width="120" height="30" className="fill-[#a8742c] dark:fill-[#9a6a1e]" opacity="0.35" />
      <line x1="0" y1="130" x2="120" y2="130" className="stroke-[#a8742c] dark:stroke-[#9a6a1e]" strokeWidth="2" />

      {/* roots */}
      <g className={cls('roots')} strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d="M60,130 Q48,142 40,155" />
        <path d="M60,130 Q60,145 60,158" />
        <path d="M60,130 Q72,142 80,155" />
      </g>

      {/* stem */}
      <rect x="56" y="55" width="8" height="76" rx="3" className={cls('stems')} strokeWidth="1.5" />

      {/* leaves */}
      <g className={cls('leaves')} strokeWidth="1.5">
        <ellipse cx="38" cy="90" rx="18" ry="10" transform="rotate(-25 38 90)" />
        <ellipse cx="82" cy="78" rx="18" ry="10" transform="rotate(25 82 78)" />
        <ellipse cx="42" cy="62" rx="16" ry="9" transform="rotate(-15 42 62)" />
      </g>

      {/* fruit */}
      <g className={cls('fruit')} strokeWidth="1.5">
        <circle cx="70" cy="95" r="7" />
        <circle cx="48" cy="105" r="6" />
      </g>

      {/* flowers */}
      <g className={cls('flowers')} strokeWidth="1.5">
        <circle cx="60" cy="38" r="6" />
        <circle cx="49" cy="42" r="5" />
        <circle cx="71" cy="42" r="5" />
        <circle cx="60" cy="30" r="5" />
      </g>
    </svg>
  )
}

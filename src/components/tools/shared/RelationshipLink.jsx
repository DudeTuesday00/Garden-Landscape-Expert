'use client'

import { STATUS } from './palette.js'

const VERDICT_ICON = { good: '✓', avoid: '✕', neutral: '–' }

/**
 * Two plant nodes joined by a link whose STYLE (not just color) encodes the
 * verdict — solid = good, dashed = avoid, dotted = neutral — so the
 * distinction survives grayscale/print/CVD, not just the reserved status
 * color.
 */
export default function RelationshipLink({ plantA, plantB, verdict }) {
  const status = STATUS[verdict] || STATUS.neutral
  const dash = verdict === 'avoid' ? '6 5' : verdict === 'neutral' ? '1 5' : '0'

  return (
    <div className="flex items-center justify-center gap-2 py-2" aria-hidden="true">
      <Node emoji={plantA.emoji} name={plantA.name} />

      <svg viewBox="0 0 100 24" className="w-20 sm:w-28 h-6 flex-shrink-0" preserveAspectRatio="none">
        <line
          x1="2" y1="12" x2="98" y2="12"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={dash}
          className={status.stroke}
        />
      </svg>

      <span
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 bg-white dark:bg-gray-800 ${status.ring} ${status.text}`}
      >
        {VERDICT_ICON[verdict] || '–'}
      </span>

      <svg viewBox="0 0 100 24" className="w-20 sm:w-28 h-6 flex-shrink-0" preserveAspectRatio="none">
        <line
          x1="2" y1="12" x2="98" y2="12"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={dash}
          className={status.stroke}
        />
      </svg>

      <Node emoji={plantB.emoji} name={plantB.name} />
    </div>
  )
}

function Node({ emoji, name }) {
  return (
    <div className="flex flex-col items-center gap-1 flex-shrink-0">
      <span className="w-14 h-14 rounded-full bg-garden-50 dark:bg-gray-900 border border-garden-200 dark:border-gray-700 flex items-center justify-center text-2xl">
        {emoji}
      </span>
      <span className="text-[10px] text-gray-500 dark:text-gray-400 max-w-[4rem] text-center leading-tight">{name}</span>
    </div>
  )
}

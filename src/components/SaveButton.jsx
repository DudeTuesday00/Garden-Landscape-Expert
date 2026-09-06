'use client'

import { useSavedItems } from '../logic/useSavedItems.js'

// Heart/bookmark toggle for saving a plant or guide to "My Garden"
// (localStorage-backed, no account needed). `type` matches the two
// buckets in useSavedItems' store shape.
export default function SaveButton({ type, id, label }) {
  const { ready, isSaved, toggle } = useSavedItems()
  const saved = isSaved(type, id)

  return (
    <button
      type="button"
      disabled={!ready}
      onClick={() => toggle(type, id)}
      aria-pressed={saved}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors disabled:opacity-50 ${
        saved
          ? 'bg-red-50 dark:bg-red-950/30 border-red-300 dark:border-red-800 text-red-600 dark:text-red-400'
          : 'bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-red-300 dark:hover:border-red-700'
      }`}
    >
      <span>{saved ? '❤️' : '🤍'}</span>
      <span>{saved ? 'Saved' : label || 'Save'}</span>
    </button>
  )
}

'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <div className="text-7xl mb-4">🍂</div>
      <h1 className="text-2xl font-bold text-garden-800 dark:text-garden-300 mb-3">
        Something wilted
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-sm mx-auto leading-relaxed">
        An unexpected error knocked this page over. Try again, or head back to solid ground.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => reset()}
          className="px-6 py-2.5 rounded-xl bg-garden-600 hover:bg-garden-700 text-white font-semibold text-sm transition-colors"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-6 py-2.5 rounded-xl border-2 border-garden-600 text-garden-700 dark:text-garden-400 hover:bg-garden-50 dark:hover:bg-gray-800 font-semibold text-sm transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}

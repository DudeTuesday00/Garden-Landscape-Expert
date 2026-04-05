'use client'
import { useState } from 'react'
import Link from 'next/link'

function GuideCard({ guide }) {
  const isLive = !guide.comingSoon

  const cardCls = `bg-white dark:bg-gray-800 rounded-2xl border shadow-sm p-4 flex gap-3 items-start transition-shadow ${
    isLive
      ? 'border-garden-200 dark:border-garden-700 hover:shadow-md hover:border-garden-400 dark:hover:border-garden-500'
      : 'border-gray-200 dark:border-gray-700 opacity-80'
  }`

  const inner = (
    <>
      <span className="text-2xl flex-shrink-0">{guide.emoji}</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className="font-semibold text-sm text-garden-900 dark:text-garden-300 leading-tight">{guide.title}</h4>
          {guide.comingSoon ? (
            <span className="inline-flex items-center gap-1.5 flex-shrink-0">
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">
                Coming Soon
              </span>
              <Link
                href="/contact"
                onClick={(e) => e.stopPropagation()}
                className="text-xs font-medium text-garden-600 dark:text-garden-400 hover:text-garden-800 dark:hover:text-garden-200 underline underline-offset-2 transition-colors"
              >
                ✉️ Notify me
              </Link>
            </span>
          ) : (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-garden-100 dark:bg-garden-900/30 text-garden-700 dark:text-garden-300 flex-shrink-0">
              Read Guide →
            </span>
          )}
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{guide.description}</p>
      </div>
    </>
  )

  if (isLive) {
    return (
      <Link href={`/guides/${guide.id}`} className={cardCls}>
        {inner}
      </Link>
    )
  }

  return <div className={cardCls}>{inner}</div>
}

export default function CategorySection({ category }) {
  const [showComingSoon, setShowComingSoon] = useState(false)

  const liveGuides = category.guides.filter((g) => !g.comingSoon)
  const comingSoonGuides = category.guides.filter((g) => g.comingSoon)
  const hasComingSoon = comingSoonGuides.length > 0

  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{category.emoji}</span>
        <div>
          <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300">{category.title}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">{category.description}</p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {liveGuides.map((guide) => (
          <GuideCard key={guide.id} guide={guide} />
        ))}
      </div>

      {hasComingSoon && (
        <>
          {showComingSoon && (
            <div className="grid gap-3 sm:grid-cols-2 mt-3">
              {comingSoonGuides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          )}
          <button
            onClick={() => setShowComingSoon((s) => !s)}
            className="mt-3 inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors cursor-pointer"
          >
            {showComingSoon
              ? 'Hide in-development guides ↑'
              : `Show ${comingSoonGuides.length} in development →`}
          </button>
        </>
      )}
    </section>
  )
}

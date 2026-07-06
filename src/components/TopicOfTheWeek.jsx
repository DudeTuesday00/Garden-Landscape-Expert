'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { topicOfWeek, pinnedTopic } from '../data/topic-of-the-week.js'
import { getTopicOfWeek } from '../logic/topicOfWeek.js'

export default function TopicOfTheWeek() {
  const [topic, setTopic] = useState(null)

  // Computed client-side (needs "today"), so this renders nothing on the
  // statically pre-rendered HTML and fills in on mount — same SSR-safe
  // pattern as the dark-mode toggle and CookieBanner.
  useEffect(() => {
    setTopic(getTopicOfWeek(new Date(), topicOfWeek, pinnedTopic))
  }, [])

  if (!topic) return null

  return (
    <div className="w-full bg-white dark:bg-gray-800 border border-earth-200 dark:border-earth-700 rounded-2xl shadow-sm p-5 flex flex-col sm:flex-row sm:items-center gap-4">
      <span className="text-4xl flex-shrink-0" aria-hidden="true">{topic.emoji}</span>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold uppercase tracking-widest text-earth-600 dark:text-earth-400 mb-1">
          🗓️ {topic.kicker} of the Week
        </p>
        <h3 className="text-base font-bold text-garden-800 dark:text-garden-300">{topic.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">{topic.teaser}</p>
      </div>
      <Link
        href={topic.href}
        className="flex-shrink-0 bg-earth-500 hover:bg-earth-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl text-center transition-colors duration-200 whitespace-nowrap"
      >
        {topic.ctaLabel}
      </Link>
    </div>
  )
}

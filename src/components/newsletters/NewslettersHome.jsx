import Link from 'next/link'
import { newsletters } from '../../data/newsletters.js'
import newsletterHeaderImg from './newsletter-page-header.png'

export default function NewslettersHome() {
  const sorted = [...newsletters].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">

        {/* Header */}
        <div className="bg-gradient-to-br from-garden-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-lg border border-garden-100 dark:border-gray-600 overflow-hidden text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={newsletterHeaderImg.src}
            alt="Planting Atlas Newsletter"
            className="w-full h-auto"
          />
          <div className="p-6 sm:p-8">
            <h1 className="text-2xl font-bold text-garden-800 dark:text-white">Planting Atlas Newsletter</h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
              Zone-specific, no-fluff gardening advice from 40 years of backyard trial and error — a new issue
              whenever there&apos;s something genuinely worth telling you.
            </p>
          </div>
        </div>

        {/* Issue list */}
        {sorted.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              The first issue is on its way — check back soon, or sign up below to get it the moment it&apos;s live.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {sorted.map((n) => (
              <Link
                key={n.id}
                href={`/newsletters/${n.slug}/`}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5 flex gap-4 items-start hover:shadow-md hover:border-garden-300 dark:hover:border-garden-600 transition-shadow"
              >
                {n.heroImage && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={n.heroImage}
                    alt={n.title}
                    className="w-20 h-20 rounded-xl object-cover flex-shrink-0 hidden sm:block"
                  />
                )}
                <div className="flex-1 min-w-0">
                  {n.mode === 'series' && n.seriesName ? (
                    <p className="text-xs font-semibold uppercase tracking-wide text-earth-500 mb-1">
                      {n.seriesName} · Part {n.partNumber}
                    </p>
                  ) : null}
                  <h2 className="font-bold text-garden-900 dark:text-garden-300 leading-tight">{n.title}</h2>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{n.date}</p>
                  {n.excerpt && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed line-clamp-2">{n.excerpt}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

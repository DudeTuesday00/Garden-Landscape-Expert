import Link from 'next/link'
import AuthorBox from '../guides/AuthorBox.jsx'
import NewsletterSignup from '../NewsletterSignup.jsx'

export default function NewsletterDetail({ meta, content }) {
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">Newsletter issue not found.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">

        {/* Back button */}
        <Link
          href="/newsletters/"
          className="flex items-center gap-1.5 text-sm text-garden-700 hover:text-garden-900 dark:text-gray-300 dark:hover:text-white font-medium transition-colors self-start"
        >
          <span>←</span>
          <span>Back to Newsletters</span>
        </Link>

        {/* Hero */}
        <div className="bg-gradient-to-br from-garden-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-lg border border-garden-100 dark:border-gray-600 overflow-hidden text-center">
          {meta.heroImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={meta.heroImage} alt={meta.title} className="w-full h-auto" />
          )}
          <div className="p-6 sm:p-8">
            {meta.mode === 'series' && meta.seriesName ? (
              <p className="text-xs font-semibold uppercase tracking-wide text-earth-500 mb-1">
                {meta.seriesName} · Part {meta.partNumber}
              </p>
            ) : null}
            <h1 className="text-2xl font-bold text-garden-800 dark:text-white">{meta.title}</h1>
            <p className="mt-1.5 text-xs text-gray-400 dark:text-gray-500">
              Written by <span className="font-medium">David Rodgers</span> — {meta.date}
            </p>
            {meta.subtitle && (
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-lg mx-auto">{meta.subtitle}</p>
            )}
            {meta.kicker && (
              <p className="mt-3 text-sm italic text-garden-700 dark:text-garden-300">{meta.kicker}</p>
            )}
            {meta.tags?.length ? (
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {meta.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-garden-100 text-garden-800 dark:bg-gray-700 dark:text-garden-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {/* Body */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
          <div
            className="newsletter-body text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content.bodyHtml }}
          />
        </div>

        {/* Call to action */}
        {meta.callToAction && (
          <div className="bg-garden-50 dark:bg-gray-800 rounded-3xl border border-garden-100 dark:border-gray-700 p-6 sm:p-8">
            <h2 className="text-base font-bold text-garden-800 dark:text-garden-300 mb-2">Your turn</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{meta.callToAction}</p>
          </div>
        )}

        {/* Next issue preview */}
        {meta.nextIssuePreview && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
            <h2 className="text-base font-bold text-garden-800 dark:text-garden-300 mb-2">Next issue</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{meta.nextIssuePreview}</p>
          </div>
        )}

        {/* Related resources */}
        {meta.relatedResources?.length ? (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
            <h2 className="text-base font-bold text-garden-800 dark:text-garden-300 mb-3">Apply this next</h2>
            <ul className="space-y-2">
              {meta.relatedResources.map((r, i) => (
                <li key={i}>
                  <Link href={r.path} className="text-sm text-garden-700 dark:text-garden-400 hover:underline font-medium">
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* Newsletter signup */}
        <NewsletterSignup />

        {/* Author box */}
        <AuthorBox />

        {/* Footer nav */}
        <div className="text-center pb-4">
          <Link
            href="/newsletters/"
            className="text-sm text-garden-700 hover:text-garden-900 dark:text-gray-300 dark:hover:text-white font-medium transition-colors"
          >
            ← Back to All Newsletters
          </Link>
        </div>

      </div>
    </div>
  )
}

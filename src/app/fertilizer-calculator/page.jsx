import Link from 'next/link'

// This tool moved under /tools/. Static export (output: 'export') can't do a
// server-side redirect, so this stub carries a canonical tag + meta refresh
// for search engines/browsers, plus a manual link as a fallback.
export const metadata = {
  title: 'Fertilizer Calculator — Moved',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://plantingatlas.com/tools/fertilizer-calculator/',
  },
}

export default function FertilizerCalculatorMovedPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/tools/fertilizer-calculator/" />
      <div className="max-w-md mx-auto px-4 py-24 text-center">
        <div className="text-5xl mb-4">🧪</div>
        <h1 className="text-xl font-bold text-garden-800 dark:text-garden-300 mb-3">
          This tool has moved
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
          The Fertilizer Calculator now lives on the Garden Tools page.
        </p>
        <Link
          href="/tools/fertilizer-calculator/"
          className="inline-block px-6 py-2.5 rounded-xl bg-garden-600 hover:bg-garden-700 text-white font-semibold text-sm transition-colors"
        >
          Go to Fertilizer Calculator →
        </Link>
      </div>
    </>
  )
}

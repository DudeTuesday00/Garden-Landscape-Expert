import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <div className="text-7xl mb-4">🌱</div>
      <p className="text-8xl font-bold text-garden-100 dark:text-gray-800 leading-none mb-2">
        404
      </p>
      <h1 className="text-2xl font-bold text-garden-800 dark:text-garden-300 mb-3">
        Oops — this page doesn't exist
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-sm mx-auto leading-relaxed">
        Looks like this seed didn't sprout. The page you're looking for may have been
        transplanted or may never have existed.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="px-6 py-2.5 rounded-xl bg-garden-600 hover:bg-garden-700 text-white font-semibold text-sm transition-colors"
        >
          Go Home
        </Link>
        <Link
          href="/guides/"
          className="px-6 py-2.5 rounded-xl bg-earth-500 hover:bg-earth-600 text-white font-semibold text-sm transition-colors"
        >
          Browse Guides
        </Link>
        <Link
          href="/wizard/"
          className="px-6 py-2.5 rounded-xl border-2 border-garden-600 text-garden-700 dark:text-garden-400 hover:bg-garden-50 dark:hover:bg-gray-800 font-semibold text-sm transition-colors"
        >
          Garden Architect
        </Link>
      </div>
    </div>
  )
}

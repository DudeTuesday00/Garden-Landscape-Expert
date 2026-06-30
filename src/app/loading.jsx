export default function Loading() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
      <div className="w-10 h-10 border-4 border-garden-200 dark:border-gray-700 border-t-garden-600 rounded-full animate-spin mb-4" />
      <p className="text-sm text-gray-400 dark:text-gray-500">Loading…</p>
    </div>
  )
}

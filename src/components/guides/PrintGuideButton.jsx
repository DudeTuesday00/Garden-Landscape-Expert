'use client'

export default function PrintGuideButton() {
  return (
    <button
      onClick={() => window.print()}
      className="print:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-garden-400 dark:hover:border-garden-500 transition-colors self-start"
    >
      🖨️ Print This Guide
    </button>
  )
}

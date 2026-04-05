import { guideCategories } from '../../data/guides.js'
import plantopediaImg from './Plantopedia.png'
import GuidesSearch from './GuidesSearch.jsx'

export default function GuidesHome() {
  const totalGuides = guideCategories.reduce((sum, cat) => sum + cat.guides.length, 0)
  const liveGuides = guideCategories.reduce(
    (sum, cat) => sum + cat.guides.filter((g) => !g.comingSoon).length,
    0
  )
  // Only show categories with at least 2 live guides — avoids near-empty sections
  const visibleCategories = guideCategories.filter(
    (cat) => cat.guides.filter((g) => !g.comingSoon).length >= 2
  )

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
          <img
            src={plantopediaImg.src}
            alt="Plantopedia"
            className="w-full max-w-2xl mx-auto block h-auto"
          />
          <div className="text-center p-6 sm:p-8">
            <h1 className="text-3xl font-bold text-garden-800 dark:text-garden-300">Plantopedia</h1>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm max-w-lg mx-auto">
              Your Green Thumb Repository — in-depth guides and tutorials for every gardening topic,
              from shade trees to post-harvest prep.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 text-xs font-medium bg-garden-50 dark:bg-gray-700 text-garden-700 dark:text-garden-400 border border-garden-200 dark:border-garden-700 px-4 py-2 rounded-full">
                <span>✅</span>
                <span>{liveGuides} guides available now</span>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-medium bg-amber-50 dark:bg-gray-700 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-700 px-4 py-2 rounded-full">
                <span>🚧</span>
                <span>{totalGuides - liveGuides} guides in development</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search + category list (client island) */}
        <GuidesSearch visibleCategories={visibleCategories} />

        <p className="text-center text-xs text-gray-400 dark:text-gray-500 pb-4">
          Planting Atlas · Plantopedia — more guides added regularly
        </p>
      </div>
    </div>
  )
}

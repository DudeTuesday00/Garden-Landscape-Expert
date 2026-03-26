import Link from 'next/link'
import { guideCategories } from '../../data/guides.js'
import plantopediaImg from './Plantopedia.png'

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
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 flex-shrink-0">
              Coming Soon
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

function CategorySection({ category }) {
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
        {category.guides.map((guide) => (
          <GuideCard key={guide.id} guide={guide} />
        ))}
      </div>
    </section>
  )
}

export default function GuidesHome() {
  const totalGuides = guideCategories.reduce((sum, cat) => sum + cat.guides.length, 0)
  const liveGuides = guideCategories.reduce(
    (sum, cat) => sum + cat.guides.filter((g) => !g.comingSoon).length,
    0
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

        {/* Guide Categories */}
        {guideCategories.map((category) => (
          <div key={category.id} className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
            <CategorySection category={category} />
          </div>
        ))}

        <p className="text-center text-xs text-gray-400 dark:text-gray-500 pb-4">
          Planting Atlas · Plantopedia — more guides added regularly
        </p>
      </div>
    </div>
  )
}

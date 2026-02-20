import { guideCategories } from '../../data/guides.js'

function GuideCard({ guide }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex gap-3 items-start hover:shadow-md transition-shadow opacity-90">
      <span className="text-2xl flex-shrink-0">{guide.emoji}</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className="font-semibold text-sm text-garden-900 leading-tight">{guide.title}</h4>
          {guide.comingSoon && (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 flex-shrink-0">
              Coming Soon
            </span>
          )}
        </div>
        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{guide.description}</p>
      </div>
    </div>
  )
}

function CategorySection({ category }) {
  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{category.emoji}</span>
        <div>
          <h2 className="text-lg font-bold text-garden-800">{category.title}</h2>
          <p className="text-sm text-gray-500">{category.description}</p>
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

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8">
          <div className="text-center">
            <div className="text-5xl mb-3">📖</div>
            <h1 className="text-3xl font-bold text-garden-800">Planting Guides</h1>
            <p className="mt-2 text-gray-500 text-sm max-w-lg mx-auto">
              In-depth guides and tutorials for every gardening topic — from shade trees to post-harvest prep.
              We're building these one at a time.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 px-4 py-2 rounded-full">
              <span>🚧</span>
              <span>{totalGuides} guides in development — check back as we publish each one</span>
            </div>
          </div>
        </div>

        {/* Guide Categories */}
        {guideCategories.map((category) => (
          <div key={category.id} className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8">
            <CategorySection category={category} />
          </div>
        ))}

        <p className="text-center text-xs text-gray-400 pb-4">
          Garden Landscape Expert · Planting Guides — more added regularly
        </p>
      </div>
    </div>
  )
}

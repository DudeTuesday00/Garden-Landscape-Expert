import { useState } from 'react'
import Link from 'next/link'

const waterLabel = { low: '💧 Low', moderate: '💧💧 Moderate', high: '💧💧💧 High' }

function formatAnswer(question, value) {
  if (value === undefined || value === null) return '—'
  const opts = question.options || []
  if (Array.isArray(value) && !question.multi) {
    // zone value is an array like [5,6] stored as a single answer
    const match = opts.find((o) => JSON.stringify(o.value) === JSON.stringify(value))
    return match ? `${match.emoji} ${match.label}` : JSON.stringify(value)
  }
  if (Array.isArray(value)) {
    return value
      .map((v) => {
        const match = opts.find((o) => o.value === v)
        return match ? `${match.emoji} ${match.label}` : v
      })
      .join(', ')
  }
  const match = opts.find((o) => o.value === value)
  return match ? `${match.emoji} ${match.label}` : String(value)
}

// Maps plant type → up to 2 relevant guide IDs (live guides only)
const typeGuides = {
  flower:      [{ id: 'plants-for-color',          title: 'Plants for Color' },          { id: 'pollinator-garden',      title: 'Pollinator Garden' }],
  vegetable:   [{ id: 'salad-garden',               title: 'Salad Garden' },               { id: 'square-foot-gardening',  title: 'Square Foot Gardening' }],
  fruit:       [{ id: 'fruit-trees',                title: 'Fruit Trees' },                { id: 'salsa-garden',           title: 'Salsa Garden' }],
  herb:        [{ id: 'culinary-herb-garden',        title: 'Culinary Herb Garden' },       { id: 'medicinal-garden',       title: 'Medicinal Garden' }],
  tree:        [{ id: 'shade-trees',                 title: 'Shade Trees' },                { id: 'ornamental-trees',       title: 'Ornamental Trees' }],
  shrub:       [{ id: 'cottage-garden',              title: 'Cottage Garden' },             { id: 'curb-appeal',            title: 'Curb Appeal' }],
  vine:        [{ id: 'plants-for-smell',            title: 'Plants for Fragrance' },       { id: 'cottage-garden',         title: 'Cottage Garden' }],
  bulb:        [{ id: 'spring-bulb-garden',          title: 'Spring Bulb Garden' },         { id: 'plants-for-color',       title: 'Plants for Color' }],
  grass:       [{ id: 'xeriscape',                   title: 'Xeriscape Design' },           { id: 'four-season-garden',     title: 'Four-Season Garden' }],
  succulent:   [{ id: 'xeriscape',                   title: 'Xeriscape Design' },           { id: 'porch-plants',           title: 'Porch Plants' }],
  fern:        [{ id: 'shade-trees',                 title: 'Shade Garden Guide' },         { id: 'japanese-garden',        title: 'Japanese Garden' }],
  groundcover: [{ id: 'xeriscape',                   title: 'Xeriscape Design' },           { id: 'curb-appeal',            title: 'Curb Appeal' }],
}
const spaceLabel  = { container: '🪴 Container', small: '🌱 Small Bed', large: '🏡 Large Garden' }
const typeColors  = {
  flower:      'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
  vegetable:   'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  fruit:       'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  herb:        'bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-300',
  tree:        'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
  shrub:       'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
  vine:        'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  bulb:        'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  grass:       'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
  succulent:   'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  fern:        'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
  groundcover: 'bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300',
}

const hydroSystemLabel = {
  kratky:    'Kratky / Passive',
  dwc:       'Deep Water Culture',
  nft:       'Nutrient Film (NFT)',
  'ebb-flow':'Ebb & Flow',
}

function PlantCard({ plant, isHydro }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {/* Card header */}
      <div className="bg-garden-50 dark:bg-gray-700 px-5 py-4 border-b border-gray-100 dark:border-gray-600 flex items-center gap-3">
        <span className="text-4xl">{plant.emoji}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg text-garden-900 dark:text-garden-200 leading-tight">{plant.name}</h3>
          <div className="flex flex-wrap gap-1.5 mt-1">
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize ${typeColors[plant.type] || 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'}`}>
              {plant.type}
            </span>
            {plant.hydroponic && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                💧 Hydroponic
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-5 py-4 flex flex-col gap-3">
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{plant.description}</p>

        {/* Quick stats */}
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 dark:text-gray-400">
          {!isHydro && (
            <div className="flex items-center gap-1.5">
              <span>🗺️</span>
              <span>Zones {plant.zones[0]}–{plant.zones[plant.zones.length - 1]}</span>
            </div>
          )}
          {isHydro && (
            <div className="flex items-center gap-1.5">
              <span>🌍</span>
              <span>Grows year-round indoors</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <span>{waterLabel[plant.water]}</span>
          </div>
          {!isHydro && (
            <div className="flex items-center gap-1.5">
              <span>📅</span>
              <span className="capitalize">{plant.seasons.join(', ')}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <span>{spaceLabel[plant.space?.[0]]}</span>
          </div>
        </div>

        {/* Days to harvest */}
        {plant.daysToHarvest && (
          <div className="flex items-center gap-1.5 text-xs text-earth-700 dark:text-earth-300 font-medium bg-earth-50 dark:bg-gray-700 rounded-lg px-3 py-1.5">
            <span>⏱️</span>
            <span>Harvest: {plant.daysToHarvest}</span>
          </div>
        )}

        {/* Hydroponic-specific notes */}
        {isHydro && plant.hydroponicsNotes && (
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg px-3 py-2 text-xs text-blue-800 dark:text-blue-300 leading-relaxed">
            <span className="font-semibold">💧 Hydro tip: </span>{plant.hydroponicsNotes}
          </div>
        )}

        {/* Standard care tip (shown for soil growers, or as secondary for hydro) */}
        {(!isHydro || !plant.hydroponicsNotes) && (
          <div className="bg-garden-50 dark:bg-gray-700 rounded-lg px-3 py-2 text-xs text-garden-800 dark:text-garden-300 leading-relaxed">
            <span className="font-semibold">Care tip: </span>{plant.careNotes}
          </div>
        )}

        {/* Related guide links */}
        {typeGuides[plant.type] && (
          <div className="pt-1 flex flex-wrap gap-2">
            {typeGuides[plant.type].map((g) => (
              <Link
                key={g.id}
                href={`/guides/${g.id}/`}
                className="inline-flex items-center gap-1 text-xs font-medium text-garden-700 dark:text-garden-400 hover:text-garden-900 dark:hover:text-garden-200 underline underline-offset-2 transition-colors"
              >
                📖 {g.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Results({ plants, answers, activeQuestions, onRestart, onGoToStep }) {
  const [showRefine, setShowRefine] = useState(false)
  const isHydro = answers.growingMethod === 'hydroponic'
  const hydroSystem = hydroSystemLabel[answers.hydroSystem]

  if (plants.length === 0) {
    return (
      <div className="flex flex-col items-center text-center gap-6 py-8">
        <div className="text-6xl">🔍</div>
        <div>
          <h2 className="text-2xl font-bold text-garden-800 dark:text-garden-300">No exact matches found</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-sm">
            {isHydro
              ? 'Try selecting different plant types — not all plants are well-suited for hydroponics.'
              : 'Try adjusting a few of your answers — for example, broadening your sunlight or soil type preferences.'}
          </p>
        </div>
        <button
          onClick={onRestart}
          className="bg-garden-600 hover:bg-garden-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
        >
          Start Over
        </button>
      </div>
    )
  }

  const topScore = plants[0]?.score ?? 0
  const threshold = Math.max(topScore * 0.75, 6)
  const topPicks = plants.filter((p) => p.score >= threshold)
  const others   = plants.filter((p) => p.score < threshold)

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="text-center">
        <div className="text-5xl mb-3">{isHydro ? '💧' : '🌿'}</div>
        <h2 className="text-3xl font-bold text-garden-800 dark:text-garden-300">Your Plant Recommendations</h2>
        <p className="mt-1 text-gray-500 dark:text-gray-400 text-sm">
          {plants.length} plant{plants.length !== 1 ? 's' : ''} matched your garden profile
        </p>
        {isHydro && hydroSystem && (
          <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
            <span>💧</span> Optimized for {hydroSystem} system
          </p>
        )}
      </div>

      {/* Refine answers */}
      <div className="bg-garden-50 dark:bg-gray-700/50 rounded-2xl border border-garden-100 dark:border-gray-600 overflow-hidden">
        <button
          onClick={() => setShowRefine((s) => !s)}
          className="w-full flex items-center justify-between px-5 py-3 text-sm font-medium text-garden-800 dark:text-garden-300 hover:bg-garden-100 dark:hover:bg-gray-700 transition-colors"
        >
          <span>✏️ Refine your answers</span>
          <span className="text-gray-400 dark:text-gray-500 text-xs">{showRefine ? '▲ Hide' : '▼ Show'}</span>
        </button>
        {showRefine && activeQuestions && (
          <div className="border-t border-garden-100 dark:border-gray-600 divide-y divide-garden-100 dark:divide-gray-600">
            {activeQuestions.map((q, i) => (
              <div key={q.id} className="flex items-center justify-between px-5 py-2.5 gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight">{q.title}</p>
                  <p className="text-sm font-medium text-garden-900 dark:text-garden-200 leading-snug mt-0.5 truncate">
                    {formatAnswer(q, answers[q.id])}
                  </p>
                </div>
                <button
                  onClick={() => { setShowRefine(false); onGoToStep(i) }}
                  className="flex-shrink-0 text-xs font-medium text-garden-600 dark:text-garden-400 hover:text-garden-800 dark:hover:text-garden-200 underline underline-offset-2 transition-colors"
                >
                  Change
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Top picks */}
      {topPicks.length > 0 && (
        <section>
          <h3 className="text-lg font-semibold text-garden-700 dark:text-garden-400 mb-3 flex items-center gap-2">
            <span>⭐</span> Top Picks for You
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {topPicks.map((plant) => (
              <PlantCard key={plant.id} plant={plant} isHydro={isHydro} />
            ))}
          </div>
        </section>
      )}

      {/* Also consider */}
      {others.length > 0 && (
        <section>
          <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
            <span>🌱</span> Also Consider
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {others.map((plant) => (
              <PlantCard key={plant.id} plant={plant} isHydro={isHydro} />
            ))}
          </div>
        </section>
      )}

      {/* Restart */}
      <div className="flex justify-center pt-2">
        <button
          onClick={onRestart}
          className="border-2 border-garden-500 text-garden-700 dark:text-garden-400 hover:bg-garden-50 dark:hover:bg-gray-700 font-semibold px-8 py-2.5 rounded-xl transition-colors"
        >
          ↩ Start Over
        </button>
      </div>
    </div>
  )
}

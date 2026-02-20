const waterLabel = { low: '💧 Low', moderate: '💧💧 Moderate', high: '💧💧💧 High' }
const spaceLabel  = { container: '🪴 Container', small: '🌱 Small Bed', large: '🏡 Large Garden' }
const typeColors  = {
  flower:      'bg-pink-100 text-pink-700',
  vegetable:   'bg-green-100 text-green-700',
  fruit:       'bg-red-100 text-red-700',
  herb:        'bg-lime-100 text-lime-700',
  tree:        'bg-emerald-100 text-emerald-700',
  shrub:       'bg-teal-100 text-teal-700',
  vine:        'bg-green-100 text-green-800',
  bulb:        'bg-purple-100 text-purple-700',
  grass:       'bg-yellow-100 text-yellow-700',
  succulent:   'bg-orange-100 text-orange-700',
  fern:        'bg-cyan-100 text-cyan-700',
  groundcover: 'bg-lime-100 text-lime-800',
}

const hydroSystemLabel = {
  kratky:    'Kratky / Passive',
  dwc:       'Deep Water Culture',
  nft:       'Nutrient Film (NFT)',
  'ebb-flow':'Ebb & Flow',
}

function PlantCard({ plant, isHydro }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {/* Card header */}
      <div className="bg-garden-50 px-5 py-4 border-b border-gray-100 flex items-center gap-3">
        <span className="text-4xl">{plant.emoji}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg text-garden-900 leading-tight">{plant.name}</h3>
          <div className="flex flex-wrap gap-1.5 mt-1">
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize ${typeColors[plant.type] || 'bg-gray-100 text-gray-600'}`}>
              {plant.type}
            </span>
            {plant.hydroponic && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                💧 Hydroponic
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-5 py-4 flex flex-col gap-3">
        <p className="text-sm text-gray-600 leading-relaxed">{plant.description}</p>

        {/* Quick stats */}
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
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
          <div className="flex items-center gap-1.5 text-xs text-earth-700 font-medium bg-earth-50 rounded-lg px-3 py-1.5">
            <span>⏱️</span>
            <span>Harvest: {plant.daysToHarvest}</span>
          </div>
        )}

        {/* Hydroponic-specific notes */}
        {isHydro && plant.hydroponicsNotes && (
          <div className="bg-blue-50 rounded-lg px-3 py-2 text-xs text-blue-800 leading-relaxed">
            <span className="font-semibold">💧 Hydro tip: </span>{plant.hydroponicsNotes}
          </div>
        )}

        {/* Standard care tip (shown for soil growers, or as secondary for hydro) */}
        {(!isHydro || !plant.hydroponicsNotes) && (
          <div className="bg-garden-50 rounded-lg px-3 py-2 text-xs text-garden-800 leading-relaxed">
            <span className="font-semibold">Care tip: </span>{plant.careNotes}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Results({ plants, answers, onRestart }) {
  const isHydro = answers.growingMethod === 'hydroponic'
  const hydroSystem = hydroSystemLabel[answers.hydroSystem]

  if (plants.length === 0) {
    return (
      <div className="flex flex-col items-center text-center gap-6 py-8">
        <div className="text-6xl">🔍</div>
        <div>
          <h2 className="text-2xl font-bold text-garden-800">No exact matches found</h2>
          <p className="mt-2 text-gray-500 max-w-sm">
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
        <h2 className="text-3xl font-bold text-garden-800">Your Plant Recommendations</h2>
        <p className="mt-1 text-gray-500 text-sm">
          {plants.length} plant{plants.length !== 1 ? 's' : ''} matched your garden profile
        </p>
        {isHydro && hydroSystem && (
          <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
            <span>💧</span> Optimized for {hydroSystem} system
          </p>
        )}
      </div>

      {/* Top picks */}
      {topPicks.length > 0 && (
        <section>
          <h3 className="text-lg font-semibold text-garden-700 mb-3 flex items-center gap-2">
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
          <h3 className="text-lg font-semibold text-gray-500 mb-3 flex items-center gap-2">
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
          className="border-2 border-garden-500 text-garden-700 hover:bg-garden-50 font-semibold px-8 py-2.5 rounded-xl transition-colors"
        >
          ↩ Start Over
        </button>
      </div>
    </div>
  )
}

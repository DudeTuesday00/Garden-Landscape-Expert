import Link from 'next/link'
import plants from '../../data/plants.js'
import { plantProfiles } from '../../data/plant-profiles.js'
import { typeGuides } from '../../data/type-guides.js'
import { plantSpacing } from '../../data/plant-spacing.js'
import { plantYields } from '../../data/plant-yields.js'
import { companionCheckerPlantIds } from '../../data/companion-pairings.js'
import { plantingWindows } from '../../data/planting-windows.js'
import { plantCareDetails } from '../../data/plant-care-details.js'
import ImageGallery from '../shop/ImageGallery.jsx'

// Every plant in public/plants/<id>/ ships the same 4-file set (verified
// 1:1 against plants.js before shipping) — no per-plant existence check
// needed; ImageGallery already falls back to the plant's emoji per-image
// if a given file is ever missing or fails to load.
const GALLERY_FILES = ['primary.jpg', 'secondary-1.jpg', 'secondary-2.jpg', 'secondary-3.jpg']

const SUN_LABELS = { 'full-sun': '☀️ Full Sun', 'partial-shade': '⛅ Partial Shade', 'full-shade': '🌑 Full Shade' }
const WATER_LABELS = { low: '💧 Low', moderate: '💧💧 Moderate', high: '💧💧💧 High' }
const SPACE_LABELS = { container: '🪴 Container', small: '🌱 Small Bed', large: '🏡 Large Garden' }
const SEASON_LABELS = { spring: 'Spring', summer: 'Summer', fall: 'Fall', winter: 'Winter' }
const EXPERIENCE_LABELS = { beginner: '🌱 Beginner', intermediate: '🌿 Intermediate', advanced: '🌳 Advanced' }
const GROWTH_RATE_LABELS = { slow: '🐢 Slow', moderate: '🌿 Moderate', fast: '🐇 Fast' }

const DEER_STYLES = {
  'rarely damaged': 'bg-garden-50 dark:bg-garden-900/20 border-garden-200 dark:border-garden-700 text-garden-800 dark:text-garden-300',
  'seldom damaged': 'bg-garden-50 dark:bg-garden-900/20 border-garden-200 dark:border-garden-700 text-garden-800 dark:text-garden-300',
  'occasionally damaged': 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300',
  'frequently damaged': 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-300',
}
const POLLINATOR_STYLES = {
  high: 'bg-earth-50 dark:bg-earth-900/20 border-earth-200 dark:border-earth-700 text-earth-800 dark:text-earth-300',
  moderate: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300',
  low: 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300',
  none: 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300',
}

function formatZones(zones) {
  if (!zones || zones.length === 0) return '—'
  const min = Math.min(...zones)
  const max = Math.max(...zones)
  return min === max ? `Zone ${min}` : `Zones ${min}–${max}`
}

export default function PlantDetail({ plantId }) {
  const plant = plants.find((p) => p.id === plantId)
  const profile = plantProfiles[plantId]

  if (!plant) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-5xl mb-4">🌱</p>
          <h1 className="text-2xl font-bold text-garden-800 dark:text-garden-300 mb-2">Plant not found</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-6">This plant may have been removed or renamed.</p>
          <Link href="/plants/" className="px-5 py-2.5 bg-garden-600 hover:bg-garden-700 text-white rounded-xl text-sm font-medium transition-colors">
            ← Back to Plant Database
          </Link>
        </div>
      </div>
    )
  }

  const guides = typeGuides[plant.type] || []
  const hasSpacingData = plantId in plantSpacing
  const hasYieldData = plantId in plantYields
  const hasCompanionData = companionCheckerPlantIds.includes(plantId)
  const hasCalendarData = plantId in plantingWindows
  const galleryImages = GALLERY_FILES.map((file) => `/plants/${plantId}/${file}`)
  const care = plantCareDetails[plantId]

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="w-full max-w-5xl mx-auto">

        {/* Breadcrumb */}
        <nav className="text-xs text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-garden-600 dark:hover:text-garden-400">Home</Link>
          <span>/</span>
          <Link href="/plants/" className="hover:text-garden-600 dark:hover:text-garden-400">Plant Database</Link>
          <span>/</span>
          <span className="text-gray-700 dark:text-gray-300">{plant.name}</span>
        </nav>

        {/* Photo gallery + header */}
        <div className="grid gap-6 lg:grid-cols-2 mb-5">

          {/* Left: photo gallery */}
          <div>
            <ImageGallery images={galleryImages} productName={plant.name} emoji={plant.emoji} />
          </div>

          {/* Right: header info */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 sm:p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span className="text-xs font-medium text-garden-600 dark:text-garden-400 bg-garden-50 dark:bg-garden-900/20 px-2.5 py-1 rounded-full border border-garden-200 dark:border-garden-700 capitalize">
                {plant.type}
              </span>
              {profile?.lifecycle && (
                <span className="text-xs font-medium text-earth-700 dark:text-earth-400 bg-earth-50 dark:bg-earth-900/20 px-2.5 py-1 rounded-full border border-earth-200 dark:border-earth-700 capitalize">
                  {profile.lifecycle}
                </span>
              )}
              {plant.hydroponic && (
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2.5 py-1 rounded-full border border-blue-200 dark:border-blue-700">
                  💧 Hydroponic-Compatible
                </span>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              <span className="mr-1.5" aria-hidden="true">{plant.emoji}</span>
              {plant.name}
            </h1>
            {profile?.scientificName && (
              <p className="mt-0.5 text-base italic text-gray-500 dark:text-gray-400">{profile.scientificName}</p>
            )}
            <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">{plant.description}</p>
          </div>

        </div>

        {/* Quick facts */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 sm:p-8 mb-5">
          <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-4">Quick Facts</h2>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
            <Fact label="Sun" value={plant.sunlight.map((s) => SUN_LABELS[s] || s).join(', ')} />
            <Fact label="Water" value={WATER_LABELS[plant.water] || plant.water} />
            <Fact label="USDA Zones" value={formatZones(plant.zones)} />
            <Fact label="Space" value={plant.space.map((s) => SPACE_LABELS[s] || s).join(', ')} />
            <Fact label="Soil" value={plant.soil.map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(', ')} />
            <Fact label="Best Season(s)" value={plant.seasons.map((s) => SEASON_LABELS[s] || s).join(', ')} />
            <Fact label="Experience Level" value={EXPERIENCE_LABELS[plant.experience] || plant.experience} />
            {profile?.nativeRange && <Fact label="Native Range" value={profile.nativeRange} />}
            {profile?.bloomColor && <Fact label="Bloom Color" value={profile.bloomColor} />}
            {profile?.bloomCycle && <Fact label="Bloom Cycle" value={profile.bloomCycle} />}
            {plant.daysToHarvest && <Fact label="Days to Harvest" value={plant.daysToHarvest} />}
            {profile?.harvestCycle && (
              <Fact
                label="Harvest Pattern"
                value={
                  profile.harvestCycle === 'continuous'
                    ? 'Continuous / cut-and-come-again'
                    : profile.harvestCycle === 'perennial'
                      ? 'Perennial — produces year after year'
                      : 'Single harvest per planting'
                }
              />
            )}
          </div>
        </div>

        {/* Care notes */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 sm:p-8 mb-5">
          <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-3">Care Notes</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">{plant.careNotes}</p>
          {plant.hydroponic && plant.hydroponicsNotes && (
            <div className="mt-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-xl p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">💧 Hydroponic Notes</p>
              <p className="text-sm text-blue-900 dark:text-blue-200 leading-relaxed">{plant.hydroponicsNotes}</p>
            </div>
          )}
        </div>

        {/* Growing details */}
        {care && (care.matureSize || care.growthRate || care.zoneNotes) && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 sm:p-8 mb-5">
            <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-4">Growing Details</h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm mb-4">
              <Fact label="Mature Size" value={care.matureSize} />
              <Fact label="Growth Rate" value={GROWTH_RATE_LABELS[care.growthRate] || care.growthRate} />
            </div>
            {care.zoneNotes && (
              <div className="pt-3 border-t border-gray-100 dark:border-gray-700">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-1.5">Zone Performance</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{care.zoneNotes}</p>
              </div>
            )}
          </div>
        )}

        {/* Companions & wildlife */}
        {care && (care.companions?.length > 0 || care.deerResistance || care.pollinatorValue) && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 sm:p-8 mb-5">
            <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-4">Companions &amp; Wildlife</h2>
            {(care.deerResistance || care.pollinatorValue) && (
              <div className="grid sm:grid-cols-2 gap-3 mb-4">
                {care.deerResistance && (
                  <div className={`rounded-xl border p-4 ${DEER_STYLES[care.deerResistance.rating] || 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300'}`}>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-1">🦌 Deer Resistance</p>
                    <p className="text-sm font-medium capitalize">{care.deerResistance.rating}</p>
                    <p className="text-xs mt-1 opacity-90 leading-relaxed">{care.deerResistance.note}</p>
                  </div>
                )}
                {care.pollinatorValue && (
                  <div className={`rounded-xl border p-4 ${POLLINATOR_STYLES[care.pollinatorValue.rating] || 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300'}`}>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-1">🐝 Pollinator Value</p>
                    <p className="text-sm font-medium capitalize">{care.pollinatorValue.rating}</p>
                    <p className="text-xs mt-1 opacity-90 leading-relaxed">{care.pollinatorValue.note}</p>
                  </div>
                )}
              </div>
            )}
            {care.companions?.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-2">Good Companions</p>
                <div className="space-y-2">
                  {care.companions.map((c, i) => (
                    <p key={i} className="text-sm leading-relaxed">
                      <span className="font-medium text-gray-800 dark:text-gray-200">{c.name}</span>
                      <span className="text-gray-500 dark:text-gray-400"> — {c.reason}</span>
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Troubleshooting */}
        {care?.troubleshooting?.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 sm:p-8 mb-5">
            <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-4">Troubleshooting</h2>
            <div className="space-y-3">
              {care.troubleshooting.map((t, i) => (
                <div key={i} className="text-sm">
                  <p className="font-medium text-gray-800 dark:text-gray-200">⚠️ {t.issue}</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-0.5 leading-relaxed">{t.fix}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pet safety */}
        {profile?.toxicity && (
          <div
            className={`rounded-2xl border shadow-sm p-6 sm:p-8 mb-5 ${
              profile.toxicity.petSafe === true
                ? 'bg-garden-50 dark:bg-gray-800 border-garden-200 dark:border-garden-700'
                : 'bg-amber-50 dark:bg-gray-800 border-amber-200 dark:border-amber-800'
            }`}
          >
            <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-2">
              {profile.toxicity.petSafe === true ? '✅ Pet Safety' : '⚠️ Pet Safety'}
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{profile.toxicity.notes}</p>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              Informational only — always check with a veterinarian if you suspect your pet has eaten something it shouldn't have.
            </p>
          </div>
        )}

        {/* Medicinal benefits */}
        {profile?.medicinalBenefits && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 sm:p-8 mb-5">
            <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-2">🌿 Traditional &amp; Medicinal Use</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{profile.medicinalBenefits}</p>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              Informational only, not medical advice — consult a healthcare provider before using any plant medicinally.
            </p>
          </div>
        )}

        {/* Cross-links: guides */}
        {guides.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 sm:p-8 mb-5">
            <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-3">Related Guides</h2>
            <div className="flex flex-wrap gap-3">
              {guides.map((g) => (
                <Link
                  key={g.id}
                  href={`/guides/${g.id}/`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-garden-700 dark:text-garden-400 bg-garden-50 dark:bg-garden-900/20 border border-garden-200 dark:border-garden-700 px-4 py-2 rounded-xl hover:bg-garden-100 dark:hover:bg-garden-900/40 transition-colors"
                >
                  📖 {g.title}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Cross-links: tools */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 sm:p-8 mb-5">
          <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-3">Plan With This Plant</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/wizard/`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-xl hover:border-garden-400 transition-colors"
            >
              🌱 Garden Architect
            </Link>
            <Link
              href="/tools/fertilizer-calculator/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-xl hover:border-garden-400 transition-colors"
            >
              🧪 Fertilizer Calculator
            </Link>
            <Link
              href="/tools/watering-calculator/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-xl hover:border-garden-400 transition-colors"
            >
              💧 Watering Calculator
            </Link>
            {hasCalendarData && (
              <Link
                href="/tools/gardening-calendar/"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-xl hover:border-garden-400 transition-colors"
              >
                📅 Planting Calendar
              </Link>
            )}
            {hasSpacingData && (
              <Link
                href="/tools/plant-spacing-calculator/"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-xl hover:border-garden-400 transition-colors"
              >
                📐 Spacing Planner
              </Link>
            )}
            {hasYieldData && (
              <Link
                href="/tools/yield-estimator/"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-xl hover:border-garden-400 transition-colors"
              >
                🧺 Yield Estimator
              </Link>
            )}
            {hasCompanionData && (
              <Link
                href="/tools/companion-planting-checker/"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-xl hover:border-garden-400 transition-colors"
              >
                🤝 Companion Checker
              </Link>
            )}
          </div>
        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <Link
            href="/plants/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium hover:border-garden-400 dark:hover:border-garden-500 transition-colors shadow-sm"
          >
            ← Back to Plant Database
          </Link>
        </div>

      </div>
    </div>
  )
}

function Fact({ label, value }) {
  if (!value) return null
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-gray-500 dark:text-gray-400 flex-shrink-0">{label}:</span>
      <span className="text-gray-800 dark:text-gray-200 font-medium">{value}</span>
    </div>
  )
}

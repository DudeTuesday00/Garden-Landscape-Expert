import { guideCategories } from './guides.js'
import plants from './plants.js'
import { plantProfiles } from './plant-profiles.js'

// Key static pages worth surfacing in global search alongside guides
const staticPages = [
  { title: 'Garden Architect', emoji: '🌱', description: 'Get personalized plant recommendations from 185 plants.', href: '/wizard/' },
  { title: 'Plant Database', emoji: '🌿', description: 'Search and filter all 185 plants by common or scientific name, type, sun, water, and more.', href: '/plants/' },
  { title: 'Garden Tools', emoji: '🧰', description: 'Fertilizer calculator, gardening calendar, USDA zone finder, and more.', href: '/tools/' },
  { title: 'Fertilizer Calculator', emoji: '🧪', description: 'Personalized fertilizer recommendations by plant type, size, and growing method.', href: '/tools/fertilizer-calculator/' },
  { title: 'Find Your USDA Hardiness Zone', emoji: '🗺️', description: 'Look up your exact zone by ZIP code.', href: '/tools/usda-zone-finder/' },
  { title: 'Garden Planting Calendar', emoji: '📅', description: 'A personalized planting timeline by ZIP code for 185 plants.', href: '/tools/gardening-calendar/' },
  { title: 'Soil & Raised Bed Calculator', emoji: '🪨', description: 'How much soil to buy for a raised bed, container, or Square Foot Garden.', href: '/tools/soil-calculator/' },
  { title: 'Mulch Calculator', emoji: '🪵', description: 'How much mulch you need by area and depth.', href: '/tools/mulch-calculator/' },
  { title: 'Compost Calculator', emoji: '♻️', description: 'The right browns-to-greens ratio for a compost pile of any size.', href: '/tools/compost-calculator/' },
  { title: 'Plant Spacing & Square Foot Planner', emoji: '📐', description: 'See how many plants fit in your bed with a visual grid.', href: '/tools/plant-spacing-calculator/' },
  { title: 'Garden Yield Estimator', emoji: '🧺', description: 'How much harvest to expect from your plants.', href: '/tools/yield-estimator/' },
  { title: 'Garden Symptom Diagnostic', emoji: '🩺', description: 'Find the likely pest or disease behind what you\'re seeing.', href: '/tools/plant-symptom-checker/' },
  { title: 'Companion Planting Checker', emoji: '🤝', description: 'Check whether two plants make good neighbors.', href: '/tools/companion-planting-checker/' },
  { title: 'Succession Planting Planner', emoji: '🔁', description: 'How many rounds of a fast crop fit in your season.', href: '/tools/succession-planner/' },
  { title: 'Value of Growing Your Own', emoji: '💰', description: 'How much a home-grown harvest saves compared to store prices.', href: '/tools/grow-your-own-savings/' },
  { title: 'Watering Schedule Calculator', emoji: '💧', description: 'A concrete watering plan for any of our 185 plants.', href: '/tools/watering-calculator/' },
  { title: 'Plantopedia', emoji: '📖', description: 'Browse 87 expert growing guides by category.', href: '/guides/' },
  { title: 'Garden Infographics', emoji: '🗺️', description: 'Visual quick-reference guides for planting and growing.', href: '/infographics/' },
  { title: 'Gardening Videos', emoji: '🎬', description: 'Curated YouTube channels and original Planting Atlas videos.', href: '/videos/' },
  { title: 'Gardening Podcasts', emoji: '🎙️', description: 'Curated podcasts and original Planting Atlas episodes.', href: '/podcasts/' },
  { title: 'My Garden', emoji: '❤️', description: 'Your saved plants and guides, stored locally in your browser.', href: '/my-garden/' },
  { title: 'About David Rodgers', emoji: '👤', description: '40+ years of hands-on gardening experience.', href: '/about/' },
  { title: 'Contact Us', emoji: '✉️', description: 'Questions, feedback, or partnership inquiries.', href: '/contact/' },
]

// Flatten every live guide across all categories into a searchable index, built once at module load
const guideIndex = guideCategories.flatMap((cat) =>
  cat.guides
    .filter((g) => !g.comingSoon)
    .map((g) => ({
      title: g.title,
      emoji: g.emoji,
      description: g.description,
      href: `/guides/${g.id}/`,
    }))
)

// All 185 plants now have individual detail pages (/plants/<id>/), so they
// belong in the global search index — description carries the scientific
// name so a search for "Solanum lycopersicum" surfaces Tomato.
const plantIndex = plants.map((p) => {
  const scientificName = plantProfiles[p.id]?.scientificName
  return {
    title: p.name,
    emoji: p.emoji,
    description: scientificName ? `${scientificName} — ${p.description}` : p.description,
    href: `/plants/${p.id}/`,
  }
})

export const searchIndex = [...staticPages, ...guideIndex, ...plantIndex]

export function searchSite(query, limit = 8) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return searchIndex
    .filter((item) => item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q))
    .slice(0, limit)
}

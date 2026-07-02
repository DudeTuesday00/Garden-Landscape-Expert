/**
 * Garden Tools registry — drives the /tools/ landing page grid and the sitemap.
 * Add a new tool here once its route exists; set status: 'live' to make its
 * card clickable, or 'coming-soon' to show it as a preview-only card.
 */
export const tools = [
  {
    id: 'fertilizer-calculator',
    name: 'Fertilizer Calculator',
    tagline: 'Personalized, organic-first fertilizer recommendations for any plant, size, and growing method.',
    emoji: '🧪',
    href: '/tools/fertilizer-calculator/',
    status: 'live',
  },
  {
    id: 'gardening-calendar',
    name: 'Garden Planting Calendar',
    tagline: 'A personalized planting timeline by ZIP code — for 148 plants, not just vegetables.',
    emoji: '📅',
    href: '/tools/gardening-calendar/',
    status: 'live',
  },
  {
    id: 'usda-zone-finder',
    name: 'Find Your USDA Hardiness Zone',
    tagline: 'Look up your exact zone by ZIP code to get accurate planting and frost-date guidance.',
    emoji: '🗺️',
    href: '/tools/usda-zone-finder/',
    status: 'live',
  },
  {
    id: 'soil-calculator',
    name: 'Soil & Raised Bed Calculator',
    tagline: 'How much soil to buy for a raised bed, container, or Square Foot Garden — with a real mix ratio.',
    emoji: '🪨',
    href: '/tools/soil-calculator/',
    status: 'live',
  },
  {
    id: 'mulch-calculator',
    name: 'Mulch Calculator',
    tagline: 'How much mulch you need by area and depth, using our guide’s own depth recommendations.',
    emoji: '🪵',
    href: '/tools/mulch-calculator/',
    status: 'live',
  },
  {
    id: 'compost-calculator',
    name: 'Compost Calculator',
    tagline: 'Get the right browns-to-greens ratio for a bin or pile of any size.',
    emoji: '♻️',
    href: '/tools/compost-calculator/',
    status: 'coming-soon',
  },
  {
    id: 'plant-spacing-calculator',
    name: 'Plant Spacing & Square Foot Planner',
    tagline: 'See exactly how many plants fit in your bed with a visual grid.',
    emoji: '📐',
    href: '/tools/plant-spacing-calculator/',
    status: 'coming-soon',
  },
  {
    id: 'yield-estimator',
    name: 'Garden Yield Estimator',
    tagline: 'How much harvest to expect from your plants — plan a garden sized to your household.',
    emoji: '🧺',
    href: '/tools/yield-estimator/',
    status: 'coming-soon',
  },
  {
    id: 'plant-symptom-checker',
    name: 'Garden Symptom Diagnostic',
    tagline: 'Answer a few questions about what’s wrong with a plant to find the likely culprit.',
    emoji: '🩺',
    href: '/tools/plant-symptom-checker/',
    status: 'coming-soon',
  },
  {
    id: 'companion-planting-checker',
    name: 'Companion Planting Checker',
    tagline: 'Check whether two plants make good neighbors — or should be kept apart.',
    emoji: '🤝',
    href: '/tools/companion-planting-checker/',
    status: 'coming-soon',
  },
  {
    id: 'succession-planner',
    name: 'Succession Planting Planner',
    tagline: 'How many rounds of fast crops like lettuce and radishes fit in your season.',
    emoji: '🔁',
    href: '/tools/succession-planner/',
    status: 'coming-soon',
  },
  {
    id: 'grow-your-own-savings',
    name: 'Value of Growing Your Own',
    tagline: 'See how much money a home-grown harvest saves compared to store prices.',
    emoji: '💰',
    href: '/tools/grow-your-own-savings/',
    status: 'coming-soon',
  },
  {
    id: 'watering-calculator',
    name: 'Watering Schedule Calculator',
    tagline: 'A concrete watering plan for your plant, container size, and climate.',
    emoji: '💧',
    href: '/tools/watering-calculator/',
    status: 'coming-soon',
  },
]

export function getTool(id) {
  return tools.find((t) => t.id === id)
}

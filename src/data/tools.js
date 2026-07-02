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
]

export function getTool(id) {
  return tools.find((t) => t.id === id)
}

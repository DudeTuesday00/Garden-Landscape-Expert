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
    name: 'Gardening Calendar',
    tagline: 'Month-by-month planting and care tasks tailored to your USDA hardiness zone.',
    emoji: '📅',
    href: '/tools/gardening-calendar/',
    status: 'coming-soon',
  },
  {
    id: 'usda-zone-finder',
    name: 'Find Your USDA Hardiness Zone',
    tagline: 'Look up your exact zone by ZIP code to get accurate planting and frost-date guidance.',
    emoji: '🗺️',
    href: '/tools/usda-zone-finder/',
    status: 'coming-soon',
  },
]

export function getTool(id) {
  return tools.find((t) => t.id === id)
}

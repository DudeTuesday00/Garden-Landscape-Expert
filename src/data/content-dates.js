// Real publish/modified dates, generated from git history by
// scripts/generate-content-dates.mjs (npm run dates). Regenerate before
// committing content changes so schema dates, the byline, and the sitemap stay honest.
import raw from './content-dates.json'

export function getGuideDates(guideId) {
  return raw.guides[guideId] || null
}

export function getToolModified(toolId) {
  return raw.tools[toolId] || null
}

export function getStaticPageModified(route) {
  return raw.staticPages[route] || null
}

export const plantDatabaseDates = raw.plantDatabase

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

// 'YYYY-MM-DD' -> 'September 2026' (no Date object, so no timezone drift)
export function formatMonthYear(iso) {
  if (!iso) return null
  const [y, m] = iso.split('-')
  return `${MONTHS[Number(m) - 1]} ${y}`
}

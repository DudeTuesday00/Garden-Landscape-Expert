/**
 * The site's hydroponics content set — one source of truth for the
 * hydroponics RSS feed and for feed autodiscovery on hydroponic pages.
 * Dates are the days each item first shipped (from git history).
 */

export const HYDROPONICS_SERIES_NAME = 'Hydroponics From Scratch'

export const hydroponicGuides = [
  { id: 'hydroponics-for-beginners', date: '2026-09-23' },
  { id: 'kratky-method', date: '2026-09-23' },
  { id: 'hydroponic-nutrients-ph-ec', date: '2026-09-23' },
  { id: 'deep-water-culture', date: '2026-09-24' },
  { id: 'nft-hydroponics', date: '2026-09-24' },
  { id: 'hydroponic-grow-lights', date: '2026-09-24' },
  { id: 'ebb-and-flow-hydroponics', date: '2026-09-24' },
  { id: 'dutch-bucket-hydroponics', date: '2026-09-24' },
  { id: 'hydroponic-troubleshooting', date: '2026-09-24' },
  { id: 'vertical-hydroponic-towers', date: '2026-09-24' },
  { id: 'wick-system-hydroponics', date: '2026-09-24' },
  { id: 'best-plants-for-hydroponics', date: '2026-09-24' },
]

export const hydroponicTools = [
  { id: 'hydroponic-system-chooser', date: '2026-09-23' },
  { id: 'hydroponic-ec-ph-calculator', date: '2026-09-23' },
  { id: 'hydroponic-nutrient-dosing-calculator', date: '2026-09-23' },
  { id: 'hydroponic-light-calculator', date: '2026-09-23' },
]

export const hydroponicGuideIds = new Set(hydroponicGuides.map((g) => g.id))

// A newsletter issue belongs in the hydroponics feed if it is part of the
// dedicated series or clearly about soilless growing.
export function isHydroponicsNewsletter(issue) {
  if (!issue) return false
  if (issue.seriesName && issue.seriesName.toLowerCase() === HYDROPONICS_SERIES_NAME.toLowerCase()) return true
  const haystack = [issue.title, issue.subtitle, issue.excerpt, ...(issue.tags || [])].join(' ')
  return /hydropon|soilless|kratky|nutrient film|deep water culture/i.test(haystack)
}

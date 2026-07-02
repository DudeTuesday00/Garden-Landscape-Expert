/**
 * Estimated average last spring / first fall frost date per whole USDA zone.
 *
 * These are zone-correlated ESTIMATES, not station-precise dates — Option A
 * from the Garden Planting Calendar build plan. Real frost timing varies by
 * microclimate, elevation, and proximity to water even within one zone; for
 * a station-precise date, link out to NOAA/the official USDA map. Zones
 * 11+ are effectively frost-free in a typical year.
 *
 * month is 1-indexed (1 = January).
 */
export const frostDateEstimates = {
  1:  { lastFrost: { month: 7, day: 1 },  firstFrost: { month: 8, day: 5 },  frostFree: false },
  2:  { lastFrost: { month: 6, day: 15 }, firstFrost: { month: 8, day: 20 }, frostFree: false },
  3:  { lastFrost: { month: 6, day: 1 },  firstFrost: { month: 9, day: 1 },  frostFree: false },
  4:  { lastFrost: { month: 5, day: 15 }, firstFrost: { month: 9, day: 25 }, frostFree: false },
  5:  { lastFrost: { month: 5, day: 1 },  firstFrost: { month: 10, day: 10 }, frostFree: false },
  6:  { lastFrost: { month: 4, day: 20 }, firstFrost: { month: 10, day: 15 }, frostFree: false },
  7:  { lastFrost: { month: 4, day: 5 },  firstFrost: { month: 10, day: 30 }, frostFree: false },
  8:  { lastFrost: { month: 3, day: 20 }, firstFrost: { month: 11, day: 10 }, frostFree: false },
  9:  { lastFrost: { month: 2, day: 20 }, firstFrost: { month: 11, day: 25 }, frostFree: false },
  10: { lastFrost: { month: 1, day: 30 }, firstFrost: { month: 12, day: 15 }, frostFree: false },
  11: { lastFrost: null, firstFrost: null, frostFree: true },
  12: { lastFrost: null, firstFrost: null, frostFree: true },
  13: { lastFrost: null, firstFrost: null, frostFree: true },
}

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function formatMonthDay({ month, day }) {
  return `${MONTH_NAMES[month - 1]} ${day}`
}

export function getFrostEstimate(wholeZone) {
  const clamped = Math.min(13, Math.max(1, wholeZone))
  return frostDateEstimates[clamped]
}

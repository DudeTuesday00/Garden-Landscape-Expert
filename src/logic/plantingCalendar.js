import { getFrostEstimate } from '../data/frost-date-estimates.js'
import { getPlantingWindow } from '../data/planting-windows.js'

const WEEKS_PER_MONTH = 4.345
const SEASON_MONTHS = {
  spring: [3, 4, 5],
  summer: [6, 7, 8],
  fall: [9, 10, 11],
  winter: [12, 1, 2],
}

function toDecimalMonth({ month, day }) {
  return month + (day - 1) / 30
}

// Returns the set of 1-12 month numbers touched by a [startDecimalMonth, endDecimalMonth]
// span, wrapping across the year boundary when the span crosses December→January.
function monthsInDecimalRange(start, end) {
  const months = new Set()
  const span = Math.max(0, end - start)
  const steps = Math.max(1, Math.ceil(span))
  for (let i = 0; i <= steps; i++) {
    const m = Math.floor(((start - 1 + i) % 12 + 12) % 12) + 1
    months.add(m)
  }
  return months
}

function offsetMonths(anchorMonthDay, weeks) {
  return toDecimalMonth(anchorMonthDay) + weeks / WEEKS_PER_MONTH
}

function parseAverageDays(daysToHarvestStr) {
  if (!daysToHarvestStr) return null
  const match = daysToHarvestStr.match(/(\d+)\s*[–-]\s*(\d+)/)
  if (match) return (parseInt(match[1], 10) + parseInt(match[2], 10)) / 2
  const single = daysToHarvestStr.match(/(\d+)/)
  return single ? parseInt(single[1], 10) : null
}

/**
 * Computes the set of calendar months touched by each activity for a single
 * plant, given its estimated frost dates. Returns null if the plant has no
 * compiled week-precision data (caller should fall back to the seasonal band)
 * or if the zone is frost-free (frost-relative math doesn't apply there).
 */
export function computeAnnualCalendar(plant, wholeZone) {
  const window = getPlantingWindow(plant.id)
  if (!window) return null

  const frost = getFrostEstimate(wholeZone)
  if (frost.frostFree) return null

  const { lastFrost, firstFrost } = frost
  const result = { indoorStart: null, plantOutdoor: null, harvest: null, fallSow: null }

  if (window.startIndoors) {
    const [minW, maxW] = window.startIndoors
    result.indoorStart = monthsInDecimalRange(
      offsetMonths(lastFrost, -maxW),
      offsetMonths(lastFrost, -minW)
    )
  }

  // Merge directSow + transplant into one "plant outdoors" activity band —
  // a home gardener cares that it's time to get the plant in the ground,
  // not whether that's by seed or transplant.
  const outdoorRanges = [window.directSow, window.transplant].filter(Boolean)
  if (outdoorRanges.length > 0) {
    const allMins = outdoorRanges.map((r) => r[0])
    const allMaxs = outdoorRanges.map((r) => r[1])
    const minW = Math.min(...allMins)
    const maxW = Math.max(...allMaxs)
    result.plantOutdoor = monthsInDecimalRange(offsetMonths(lastFrost, minW), offsetMonths(lastFrost, maxW))
  }

  if (window.fallSow) {
    const [minW, maxW] = window.fallSow
    result.fallSow = monthsInDecimalRange(
      offsetMonths(firstFrost, -maxW),
      offsetMonths(firstFrost, -minW)
    )
  }

  // Harvest estimate: from the earliest outdoor planting date + average days-to-harvest.
  const avgDays = parseAverageDays(plant.daysToHarvest)
  if (avgDays && outdoorRanges.length > 0) {
    const earliestPlantWeek = Math.min(...outdoorRanges.map((r) => r[0]))
    const plantDecimalMonth = offsetMonths(lastFrost, earliestPlantWeek)
    const harvestDecimalMonth = plantDecimalMonth + avgDays / 30
    result.harvest = monthsInDecimalRange(harvestDecimalMonth, harvestDecimalMonth + 0.5)
  }

  return result
}

/**
 * Broad, non-frost-relative seasonal band for plant types where week-level
 * sowing precision isn't a meaningful convention (trees, shrubs, perennial
 * flowers, etc.) — derived from the plant's existing `seasons` field.
 */
export function computeSeasonalBand(plant) {
  const months = new Set()
  for (const season of plant.seasons || []) {
    for (const m of SEASON_MONTHS[season] || []) months.add(m)
  }
  return months
}

export function zoneFromZip(zoneCode) {
  return parseInt(zoneCode, 10)
}

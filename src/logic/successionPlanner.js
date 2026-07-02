import { getFrostEstimate } from '../data/frost-date-estimates.js'
import { getPlantingWindow } from '../data/planting-windows.js'
import { getSuccessionCrop } from '../data/succession-crops.js'

const REF_YEAR = 2025 // arbitrary non-leap reference year for date math; display only

function monthDayToDate(monthDay) {
  return new Date(REF_YEAR, monthDay.month - 1, monthDay.day)
}

function addDays(date, days) {
  const next = new Date(date)
  next.setDate(next.getDate() + days)
  return next
}

function dateToMonthDay(date) {
  return { month: date.getMonth() + 1, day: date.getDate() }
}

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
export function formatDate(monthDay) {
  return `${MONTH_NAMES[monthDay.month - 1]} ${monthDay.day}`
}

/**
 * Computes how many succession sowings fit within a [minWeeks, maxWeeks]
 * window relative to an anchor date (last or first frost), given a fixed
 * interval in days. Returns the window bounds and the list of sowing dates.
 *
 * `sign` distinguishes the two week-offset conventions used in
 * planting-windows.js: directSow weeks are relative to last frost (negative
 * = before, positive = after — pass sign=1 to use them as-is). fallSow
 * weeks are always "N weeks BEFORE first frost" as positive numbers, so
 * they must be negated (pass sign=-1) rather than added directly.
 */
function computeWindowSuccessions(anchorMonthDay, weekRange, intervalDays, sign = 1) {
  if (!weekRange) return null
  const [minWeeks, maxWeeks] = weekRange
  const anchor = monthDayToDate(anchorMonthDay)
  const offsetA = addDays(anchor, sign * minWeeks * 7)
  const offsetB = addDays(anchor, sign * maxWeeks * 7)
  const start = offsetA <= offsetB ? offsetA : offsetB
  const end = offsetA <= offsetB ? offsetB : offsetA

  const sowings = []
  let cursor = new Date(start)
  while (cursor <= end) {
    sowings.push(dateToMonthDay(cursor))
    cursor = addDays(cursor, intervalDays)
  }

  return {
    start: dateToMonthDay(start),
    end: dateToMonthDay(end),
    sowings,
    count: sowings.length,
  }
}

/**
 * Full succession plan for a crop at a given whole USDA zone: a spring
 * window (from the crop's directSow range) and, if the crop has one, a
 * fall window (from its fallSow range). Returns null if the crop isn't a
 * succession candidate or the zone is frost-free (frost-relative windows
 * don't apply there).
 */
export function computeSuccessionPlan(plantId, wholeZone) {
  const successionData = getSuccessionCrop(plantId)
  const window = getPlantingWindow(plantId)
  if (!successionData || !window) return null

  const frost = getFrostEstimate(wholeZone)
  if (frost.frostFree) return null

  const springWindow = window.directSow
    ? computeWindowSuccessions(frost.lastFrost, window.directSow, successionData.intervalDays, 1)
    : null
  const fallWindow = window.fallSow
    ? computeWindowSuccessions(frost.firstFrost, window.fallSow, successionData.intervalDays, -1)
    : null

  return { intervalDays: successionData.intervalDays, note: successionData.note, springWindow, fallWindow }
}

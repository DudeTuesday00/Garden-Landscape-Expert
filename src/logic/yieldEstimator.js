import { getPlantYield } from '../data/plant-yields.js'
import { parseAverageDays } from './plantingCalendar.js'

/**
 * Given a plant id, quantity of plants, and its plants.js daysToHarvest
 * string, returns the estimated total yield for that selection.
 */
export function computeYieldForSelection(plantId, quantity, daysToHarvestStr) {
  const yieldData = getPlantYield(plantId)
  if (!yieldData || !(quantity > 0)) return null

  const avgDays = parseAverageDays(daysToHarvestStr)

  if (yieldData.yieldType === 'weight') {
    const [minLb, maxLb] = yieldData.lbPerPlant
    return {
      type: 'weight',
      quantity,
      lbRange: [minLb * quantity, maxLb * quantity],
      perPlantRange: [minLb, maxLb],
      note: yieldData.note,
      avgDays,
    }
  }

  return {
    type: 'ongoing',
    quantity,
    note: yieldData.note,
    avgDays,
  }
}

/**
 * Sums weight-type selections into a household-facing total, keeping
 * ongoing-type (herb) selections as a separate list rather than folding
 * them into a fabricated weight total.
 */
export function summarizeYields(results) {
  const weightResults = results.filter((r) => r?.type === 'weight')
  const ongoingResults = results.filter((r) => r?.type === 'ongoing')

  const totalLbRange = weightResults.reduce(
    (acc, r) => [acc[0] + r.lbRange[0], acc[1] + r.lbRange[1]],
    [0, 0]
  )

  return { totalLbRange, weightResults, ongoingResults }
}

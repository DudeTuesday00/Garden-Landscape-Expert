import { inGroundWatering, containerWatering, getClimateModifier } from '../data/watering-guide.js'

/**
 * Builds a concrete watering plan for a plant given its growing method and
 * (optionally) a whole USDA zone for a climate adjustment. Hydroponic
 * systems don't follow a "watering schedule" in the same sense — reservoir
 * management (EC/pH, refresh interval) is a different paradigm, covered by
 * the Fertilizer Calculator's hydroponic mode — so this returns a redirect
 * marker instead of fabricating a day-count for hydro.
 */
export function computeWateringPlan(plant, growingMethod, wholeZone) {
  if (!plant) return null

  if (growingMethod === 'hydroponic') {
    return { type: 'hydroponic' }
  }

  const climate = getClimateModifier(wholeZone)
  const waterLevel = plant.water || 'moderate'

  if (growingMethod === 'container') {
    const base = containerWatering[waterLevel]
    const adjustedDays = Math.max(1, Math.round(base.checkEveryDays / climate.frequencyMultiplier))
    return {
      type: 'container',
      waterLevel,
      checkEveryDays: adjustedDays,
      dryDepthIn: base.dryDepthIn,
      note: base.note,
      climateLabel: climate.label,
    }
  }

  // in-ground (default)
  const base = inGroundWatering[waterLevel]
  const adjustedTimesPerWeek = Math.max(1, Math.round(base.timesPerWeek * climate.frequencyMultiplier))
  return {
    type: 'in-ground',
    waterLevel,
    timesPerWeek: adjustedTimesPerWeek,
    inchesPerWeek: base.inchesPerWeek,
    note: base.note,
    climateLabel: climate.label,
  }
}

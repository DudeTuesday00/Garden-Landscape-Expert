import { getMulchType } from '../data/mulch-types.js'

const CU_FT_PER_CU_YD = 27
const BAG_SIZE_CU_FT = 2 // standard bagged mulch unit, per mulching-guide.js

/**
 * Mulch volume formula (from guide-content/mulching-guide.js):
 * square footage ÷ 12 × desired depth in inches = cubic feet; ÷ 27 = cubic yards.
 */
export function computeMulchVolume(areaSqFt, depthInches) {
  if (!(areaSqFt > 0) || !(depthInches > 0)) return null
  const cuFt = (areaSqFt / 12) * depthInches
  return {
    cuFt,
    cuYd: cuFt / CU_FT_PER_CU_YD,
    bags: Math.ceil(cuFt / BAG_SIZE_CU_FT),
  }
}

/**
 * Cost estimate — only computed for materials actually priced per bag
 * ('bag') or bulk cubic yard. Bale-priced materials (straw, pine straw)
 * aren't a fixed cu-ft unit, so those show the guide's reference text
 * instead of a computed total (see mulch-types.js `soldAs`).
 */
export function estimateMulchCost(cuYd, mulchTypeId) {
  const type = getMulchType(mulchTypeId)
  if (!type || !(cuYd > 0)) return null

  const bulkCost = typeof type.bulkAvg === 'number' ? type.bulkAvg * cuYd : null

  // bagCostRange for 'bag' materials is quoted "per cu yd equivalent" in the
  // source guide table (i.e. the total bag cost to cover one cubic yard),
  // not a single bag's price — scale by cuYd, not by bag count.
  let baggedCostRange = null
  if (type.soldAs === 'bag') {
    const bagMatch = type.bagCostRange.match(/\$(\d+)[–-](\d+)/)
    if (bagMatch) {
      const [, low, high] = bagMatch
      baggedCostRange = [parseInt(low, 10) * cuYd, parseInt(high, 10) * cuYd]
    }
  }

  return { type, bulkCost, baggedCostRange }
}

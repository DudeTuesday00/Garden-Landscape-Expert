import { computeYieldForSelection } from './yieldEstimator.js'
import { getProduceEconomics } from '../data/produce-economics.js'

/**
 * Computes the estimated grocery-equivalent value, growing cost, and net
 * savings for a selection of one plant type and quantity. Reuses the
 * Yield Estimator's own yield computation rather than re-deriving it, so
 * the two tools never disagree on how much a given plant produces.
 * Returns null for crops without a weight-based yield (herbs, etc.) —
 * there's no total weight to price against, so no fabricated dollar figure.
 */
export function computeSavingsForSelection(plantId, quantity, daysToHarvestStr) {
  const yieldResult = computeYieldForSelection(plantId, quantity, daysToHarvestStr)
  const economics = getProduceEconomics(plantId)
  if (!yieldResult || yieldResult.type !== 'weight' || !economics) return null

  const [minLb, maxLb] = yieldResult.lbRange
  const groceryValueRange = [minLb * economics.groceryPricePerLb, maxLb * economics.groceryPricePerLb]
  const growingCost = economics.growingCostPerPlant * quantity
  const netSavingsRange = [groceryValueRange[0] - growingCost, groceryValueRange[1] - growingCost]

  return {
    quantity,
    lbRange: yieldResult.lbRange,
    groceryPricePerLb: economics.groceryPricePerLb,
    groceryValueRange,
    growingCost,
    netSavingsRange,
  }
}

/** Sums a list of per-selection results into a household-facing total. */
export function summarizeSavings(results) {
  const valid = results.filter(Boolean)
  return valid.reduce(
    (acc, r) => ({
      groceryValueRange: [acc.groceryValueRange[0] + r.groceryValueRange[0], acc.groceryValueRange[1] + r.groceryValueRange[1]],
      growingCost: acc.growingCost + r.growingCost,
      netSavingsRange: [acc.netSavingsRange[0] + r.netSavingsRange[0], acc.netSavingsRange[1] + r.netSavingsRange[1]],
    }),
    { groceryValueRange: [0, 0], growingCost: 0, netSavingsRange: [0, 0] }
  )
}

/**
 * Grocery price and growing cost estimates for the Value of Growing Your
 * Own Calculator. Compiled reference figures — the same category of
 * knowledge as a USDA retail produce price report, not scraped from any
 * live pricing source, so treat them as representative national averages
 * rather than today's exact price at any one store.
 *
 * groceryPricePerLb: typical US retail price per pound for the
 * conventional (non-organic) equivalent produce.
 * growingCostPerPlant: a simplified, one-time estimate of what it costs
 * to get one plant producing — seed packet cost amortized across a
 * typical packet's seed count for direct-sown crops, or a single nursery
 * transplant/set/crown price for crops usually bought as starts. Doesn't
 * account for soil, water, or fertilizer, which the Soil, Compost, and
 * Fertilizer calculators already cover separately. Perennials (strawberry,
 * blackberry) show their one-time establishment cost, not amortized across
 * the multiple years they'll actually produce — a deliberately simple,
 * conservative model, not a full multi-year ROI projection.
 */
export const produceEconomics = {
  tomato: { groceryPricePerLb: 2.5, growingCostPerPlant: 3 },
  zucchini: { groceryPricePerLb: 1.8, growingCostPerPlant: 0.5 },
  cucumber: { groceryPricePerLb: 1.5, growingCostPerPlant: 0.5 },
  'bell-pepper': { groceryPricePerLb: 3, growingCostPerPlant: 3 },
  'hot-pepper': { groceryPricePerLb: 4, growingCostPerPlant: 3 },
  eggplant: { groceryPricePerLb: 2.2, growingCostPerPlant: 3.5 },
  'green-bean': { groceryPricePerLb: 2.5, growingCostPerPlant: 0.2 },
  peas: { groceryPricePerLb: 3.5, growingCostPerPlant: 0.2 },
  kale: { groceryPricePerLb: 3, growingCostPerPlant: 0.3 },
  lettuce: { groceryPricePerLb: 2.5, growingCostPerPlant: 0.15 },
  spinach: { groceryPricePerLb: 4, growingCostPerPlant: 0.15 },
  'swiss-chard': { groceryPricePerLb: 3.5, growingCostPerPlant: 0.3 },
  'collard-greens': { groceryPricePerLb: 2, growingCostPerPlant: 0.3 },
  'bok-choy': { groceryPricePerLb: 2.5, growingCostPerPlant: 0.3 },
  arugula: { groceryPricePerLb: 5, growingCostPerPlant: 0.15 },
  broccoli: { groceryPricePerLb: 2, growingCostPerPlant: 2.5 },
  cabbage: { groceryPricePerLb: 0.8, growingCostPerPlant: 2.5 },
  carrot: { groceryPricePerLb: 1.2, growingCostPerPlant: 0.1 },
  beet: { groceryPricePerLb: 2.5, growingCostPerPlant: 0.15 },
  radish: { groceryPricePerLb: 2.5, growingCostPerPlant: 0.08 },
  onion: { groceryPricePerLb: 1.2, growingCostPerPlant: 0.75 },
  garlic: { groceryPricePerLb: 6, growingCostPerPlant: 0.5 },
  'sweet-potato': { groceryPricePerLb: 1.3, growingCostPerPlant: 1.5 },
  corn: { groceryPricePerLb: 1.2, growingCostPerPlant: 0.2 },
  pumpkin: { groceryPricePerLb: 0.5, growingCostPerPlant: 0.5 },
  'winter-squash': { groceryPricePerLb: 1.5, growingCostPerPlant: 0.5 },
  okra: { groceryPricePerLb: 3.5, growingCostPerPlant: 0.2 },
  strawberry: { groceryPricePerLb: 4, growingCostPerPlant: 2.5 },
  watermelon: { groceryPricePerLb: 0.45, growingCostPerPlant: 0.4 },
  blackberry: { groceryPricePerLb: 6, growingCostPerPlant: 12 },
}

export function getProduceEconomics(plantId) {
  return produceEconomics[plantId]
}

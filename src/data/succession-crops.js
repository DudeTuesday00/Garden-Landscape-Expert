/**
 * Succession-sowing intervals for the Succession Planting Planner.
 * Only includes crops where our guide content explicitly recommends
 * succession sowing as standard practice (fast-maturing, direct-sown,
 * repeat-harvest crops) — intervals are sourced directly from those
 * guides rather than invented:
 *   - Radish: "succession sow every 10 days" (salad-garden.js)
 *   - Lettuce: "succession plant 1 square every 2 weeks" (square-foot-gardening.js)
 *   - Green Bean: "succession plant every 2–3 weeks" (square-foot-gardening.js)
 *   - Cilantro / Dill: "succession sow every 2–3 weeks" (square-foot-gardening.js, salad-garden.js)
 *   - Spinach / Arugula: grouped with lettuce/radish/cilantro/dill in salad-garden.js's
 *     "sow little, sow often ... every 2–3 weeks" fast-growing-crop guidance
 *
 * Peas, beets, carrots, bok choy, and corn follow the same "every 2–3
 * weeks" convention commonly applied to fast root and quick-succession
 * crops generally, extended from the explicitly-cited crops above rather
 * than separately sourced per crop.
 *
 * This reuses the SAME spring (directSow) and fall (fallSow) week-offset
 * windows already compiled in planting-windows.js for the Garden Planting
 * Calendar — no new date-window data, only the succession interval itself
 * is new here.
 */
export const successionCrops = {
  radish: { intervalDays: 10, note: 'The fastest-maturing vegetable you can grow — the shortest succession interval in the garden.' },
  lettuce: { intervalDays: 14, note: 'Sow a new short row every 2 weeks so a fresh planting is always ready as the last one finishes.' },
  spinach: { intervalDays: 14, note: 'Bolts quickly once it warms up — frequent small sowings beat one large one.' },
  arugula: { intervalDays: 14, note: 'Fast and heat-sensitive — succession sow for a steady supply rather than one big flush.' },
  cilantro: { intervalDays: 18, note: 'Bolts quickly in heat — succession sowing is the standard way to keep a steady supply.' },
  dill: { intervalDays: 18, note: 'Grouped with lettuce, radish, and cilantro as a classic "sow little, sow often" crop.' },
  'green-bean': { intervalDays: 18, note: 'Succession sowing staggers harvest instead of one large flush all at once.' },
  peas: { intervalDays: 14, note: 'A short, cool-season window rewards a few staggered sowings rather than one planting.' },
  beet: { intervalDays: 18, note: 'A single-harvest root crop — succession sowing spreads the harvest over more of the season.' },
  carrot: { intervalDays: 18, note: 'A single-harvest root crop — succession sowing spreads the harvest over more of the season.' },
  'bok-choy': { intervalDays: 14, note: 'Fast-maturing brassica green — succession sows well alongside lettuce and spinach.' },
  corn: { intervalDays: 14, note: 'Staggering sweet corn plantings spreads out the harvest instead of getting it all in one short window.' },
}

export function getSuccessionCrop(plantId) {
  return successionCrops[plantId]
}

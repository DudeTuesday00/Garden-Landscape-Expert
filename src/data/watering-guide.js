/**
 * Watering convention matrix for the Watering Schedule Calculator.
 * Every plant in plants.js already carries a `water: 'low'|'moderate'|'high'`
 * field, so this tool doesn't need new per-plant data — only the
 * frequency/amount conventions themselves, compiled from widely-cited
 * horticultural rules of thumb:
 *   - In-ground: the classic "about 1 inch of water per week" rule
 *     (moderate), scaled down for drought-tolerant/low-water plants and
 *     up for thirsty/high-water plants — deep, infrequent watering to
 *     encourage deep roots, not daily shallow sprinkling.
 *   - Container: containers dry out far faster than garden soil and are
 *     best watered by checking soil dryness rather than a fixed calendar
 *     interval — same "top N inches dry" convention used in
 *     guide-content/indoor-houseplants.js's own watering table.
 */
export const inGroundWatering = {
  low: { timesPerWeek: 1, inchesPerWeek: 0.5, note: 'Water deeply once a week — established drought-tolerant plants only need supplemental water during dry spells.' },
  moderate: { timesPerWeek: 2, inchesPerWeek: 1, note: 'The classic "1 inch of water per week" rule — split across 1–2 deep waterings rather than daily light sprinkling.' },
  high: { timesPerWeek: 3, inchesPerWeek: 1.5, note: 'Consistent moisture matters — don\'t let the soil fully dry out between waterings.' },
}

export const containerWatering = {
  low: { checkEveryDays: 4, dryDepthIn: 2, note: 'Check every 3–4 days. Water when the top 2 inches of soil are dry.' },
  moderate: { checkEveryDays: 2, dryDepthIn: 1, note: 'Check every 1–2 days. Water when the top 1 inch of soil is dry — containers dry out much faster than garden beds.' },
  high: { checkEveryDays: 1, dryDepthIn: 0.5, note: 'Check daily. Water as soon as the soil surface starts to dry — thirsty plants in containers have little moisture reserve.' },
}

// Climate modifier applied to in-ground/container frequency based on whole
// USDA zone — hot zones need more frequent watering, cold zones less.
export function getClimateModifier(wholeZone) {
  if (!wholeZone) return { label: null, frequencyMultiplier: 1 }
  if (wholeZone >= 9) return { label: 'Hot climate (Zone 9+)', frequencyMultiplier: 1.3 }
  if (wholeZone <= 5) return { label: 'Cool climate (Zone 5 or below)', frequencyMultiplier: 0.8 }
  return { label: 'Moderate climate (Zone 6–8)', frequencyMultiplier: 1 }
}

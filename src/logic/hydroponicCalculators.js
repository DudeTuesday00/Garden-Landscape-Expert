import { tdsScales } from '../data/hydroponic-targets.js'

export const LITERS_PER_GALLON = 3.78541
export const ML_PER_TSP = 4.92892
export const ML_PER_TBSP = 14.7868

const scaleFactor = (scaleId) => tdsScales.find((s) => s.id === scaleId)?.factor ?? 1

/** Convert a reading in the given scale to EC in mS/cm. */
export function toEc(value, scaleId) {
  return value / scaleFactor(scaleId)
}

/** Convert an EC (mS/cm) to a reading in the given scale. */
export function fromEc(ec, scaleId) {
  return ec * scaleFactor(scaleId)
}

export function toLiters(volume, unit) {
  return unit === 'gal' ? volume * LITERS_PER_GALLON : volume
}

export function fromLiters(liters, unit) {
  return unit === 'gal' ? liters / LITERS_PER_GALLON : liters
}

/**
 * Assess an EC reading against a target range.
 * dilute: if too strong, plain water to add to bring the reservoir to the
 * middle of the range (assumes EC scales linearly with concentration, which
 * holds well for typical hydroponic strengths).
 */
export function assessEc({ ec, range, volumeLiters }) {
  const [low, high] = range
  if (!(ec > 0)) return null
  if (ec > high) {
    const mid = (low + high) / 2
    const addLiters = volumeLiters > 0 ? volumeLiters * (ec / mid - 1) : null
    return { status: 'high', addWaterLiters: addLiters, targetEc: mid }
  }
  if (ec < low) return { status: 'low' }
  return { status: 'ok' }
}

export function assessPh(ph, range) {
  const [low, high] = range
  if (!(ph > 0)) return null
  if (ph > high) return { status: 'high' }
  if (ph < low) return { status: 'low' }
  return { status: 'ok' }
}

/**
 * Nutrient dosing. `parts` = [{ name, mlPerLiter }] already normalised to a
 * per-liter label rate; `strengthPct` scales the label rate (e.g. 50 for a
 * half-strength seedling mix).
 */
export function computeDosing({ volumeLiters, parts, strengthPct }) {
  const scale = strengthPct / 100
  return parts.map((p) => {
    const ml = p.mlPerLiter * volumeLiters * scale
    return {
      name: p.name,
      ml,
      tsp: ml / ML_PER_TSP,
      tbsp: ml / ML_PER_TBSP,
    }
  })
}

/** Daily light integral (mol/m²/day) from canopy PPFD (µmol/m²/s) and hours. */
export function computeDli(ppfd, hours) {
  return (ppfd * hours * 3600) / 1e6
}

/** Hours of light per day needed to hit a DLI at a given PPFD. */
export function hoursForDli(targetDli, ppfd) {
  if (!(ppfd > 0)) return null
  return (targetDli * 1e6) / (ppfd * 3600)
}

/** PPFD needed to hit a DLI over a given photoperiod. */
export function ppfdForDli(targetDli, hours) {
  if (!(hours > 0)) return null
  return (targetDli * 1e6) / (hours * 3600)
}

export function assessDli(dli, range) {
  const [low, high] = range
  if (!(dli > 0)) return null
  if (dli < low) return { status: 'low' }
  if (dli > high) return { status: 'high' }
  return { status: 'ok' }
}

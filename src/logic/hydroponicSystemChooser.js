import {
  hydroponicSystems,
  plantSystemClass,
  systemPlantFit,
} from '../data/hydroponic-systems.js'

export const GOAL_OPTIONS = [
  { value: 'greens', label: 'Greens & herbs', hint: 'Lettuce, basil, kale, mint' },
  { value: 'fruiting', label: 'Fruiting crops', hint: 'Tomatoes, peppers, cucumbers' },
  { value: 'both', label: 'A bit of both', hint: 'Mixed garden' },
]

export const POWER_OPTIONS = [
  { value: 0, label: 'No electricity', hint: 'Fully passive only' },
  { value: 1, label: 'One air pump is fine', hint: 'A small aquarium-style pump' },
  { value: 2, label: 'Pumps & timers are fine', hint: 'Happy to tinker' },
]

export const BUDGET_OPTIONS = [
  { value: 'low', label: 'Under $50', cap: 50 },
  { value: 'mid', label: '$50 – $150', cap: 150 },
  { value: 'high', label: '$150 or more', cap: Infinity },
]

export const SPACE_OPTIONS = [
  { value: 0, label: 'Windowsill', hint: 'One to a few plants' },
  { value: 1, label: 'Shelf or countertop', hint: 'A few to a dozen plants' },
  { value: 2, label: 'Grow tent or bench', hint: 'A dedicated grow area' },
  { value: 3, label: 'Greenhouse or garage', hint: 'Room for large plants' },
]

export const TIME_OPTIONS = [
  { value: 0, label: 'Under 15 min/week', hint: 'Set it and forget it' },
  { value: 1, label: '15 – 45 min/week', hint: 'A regular check-in' },
  { value: 2, label: '45+ min/week', hint: 'I enjoy tending it' },
]

const POWER_LABEL = ['no electricity', 'an air pump', 'pumps and a timer']
const SPACE_LABEL = ['a windowsill', 'a shelf or countertop', 'a grow tent or bench', 'a greenhouse or garage']

function goalSuitability(system, goal) {
  const { greens, fruiting } = system.goalFit
  if (goal === 'greens') return greens
  if (goal === 'fruiting') return fruiting
  return (greens + fruiting) / 2
}

function ineligibleReason(system, prefs) {
  const budgetCap = BUDGET_OPTIONS.find((b) => b.value === prefs.budget)?.cap ?? Infinity

  if (goalSuitability(system, prefs.goal) < 0.5) {
    return prefs.goal === 'fruiting'
      ? 'Poorly suited to fruiting crops like tomatoes and peppers'
      : prefs.goal === 'greens'
        ? 'Poorly suited to leafy greens and herbs'
        : 'Poorly suited to a mixed garden'
  }
  if (system.powerLevel > prefs.power) {
    return `Needs ${POWER_LABEL[system.powerLevel]}`
  }
  if (system.costMin > budgetCap) {
    return `Typically starts around $${system.costMin}`
  }
  if (system.spaceMin > prefs.space) {
    return `Needs ${SPACE_LABEL[system.spaceMin]} or more room`
  }
  return null
}

function scoreSystem(system, prefs) {
  const goalScore = goalSuitability(system, prefs.goal) * 50

  const timeGap = Math.max(0, system.timeLevel - prefs.time)
  const timeScore = Math.max(0, 25 - timeGap * 12)

  const complexity = 0.5 * (system.powerLevel / 2) + 0.5 * (Math.min(system.costMin, 300) / 300)
  const simplicityScore = 25 * (1 - complexity)

  return Math.round(goalScore + timeScore + simplicityScore)
}

function buildReasons(system, prefs) {
  const reasons = []
  if (system.powerLevel === 0) reasons.push('Needs no electricity')
  else if (system.powerLevel === 1) reasons.push('Only needs one small air pump')

  const g = goalSuitability(system, prefs.goal)
  if (g >= 0.85) {
    reasons.push(
      prefs.goal === 'fruiting'
        ? 'A proven choice for fruiting crops'
        : prefs.goal === 'greens'
          ? 'One of the best choices for greens and herbs'
          : 'Handles both greens and fruiting crops well'
    )
  }
  if (system.timeLevel <= prefs.time) reasons.push(`Fits your time budget (about ${system.weeklyMinutes} min/week)`)
  if (system.spaceMin === 0 && prefs.space === 0) reasons.push('Fits a windowsill')
  return reasons.slice(0, 4)
}

/**
 * Rank the home hydroponic systems for a set of preferences.
 *
 * @param {{ goal: 'greens'|'fruiting'|'both', power: 0|1|2, budget: 'low'|'mid'|'high', space: 0|1|2|3, time: 0|1|2 }} prefs
 * @returns {{ ranked: Array, ruledOut: Array }} ranked = eligible systems best first
 *   (each with score and reasons); ruledOut = systems dropped and why.
 */
export function chooseHydroponicSystems(prefs) {
  const ranked = []
  const ruledOut = []

  for (const system of hydroponicSystems) {
    const reason = ineligibleReason(system, prefs)
    if (reason) {
      ruledOut.push({ system, reason })
    } else {
      ranked.push({ system, score: scoreSystem(system, prefs), reasons: buildReasons(system, prefs) })
    }
  }

  ranked.sort((a, b) => b.score - a.score || a.system.costMin - b.system.costMin)
  return { ranked, ruledOut }
}

/**
 * Which hydroponic-compatible plants suit a given system. `plants` is the
 * plants.js array (passed in so this stays pure and testable).
 *
 * @returns {{ great: Array, ok: Array }}
 */
export function plantsForSystem(systemId, plants) {
  const fits = systemPlantFit[systemId]
  const great = []
  const ok = []
  if (!fits) return { great, ok }

  for (const plant of plants) {
    if (!plant.hydroponic) continue
    const cls = plantSystemClass[plant.id] || 'leafy'
    const fit = fits[cls]
    if (fit === 'great') great.push(plant)
    else if (fit === 'ok') ok.push(plant)
  }
  return { great, ok }
}

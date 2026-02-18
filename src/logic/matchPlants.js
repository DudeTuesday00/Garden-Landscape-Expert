/**
 * Plant matching logic for the Plant Selection Wizard.
 *
 * Scores each plant against the user's answers and returns a ranked list.
 * Plants that fail hard requirements (zone, sunlight, season) are excluded.
 * Remaining plants are ranked by how many preferences they match.
 */

import plants from '../data/plants.js'

/**
 * @param {Object} answers  - { type, zone, sunlight, soil, water, space, season, experience }
 * @returns {Array}         - Filtered and scored plant objects, sorted by score desc
 */
export function matchPlants(answers) {
  const scored = plants
    .map((plant) => {
      let score = 0
      let disqualified = false

      // ── HARD FILTER: Plant Type ──────────────────────────────────────────────
      // User selects one or more types; plant must match at least one.
      if (answers.type && answers.type.length > 0) {
        if (!answers.type.includes(plant.type)) {
          disqualified = true
        }
      }

      // ── HARD FILTER: USDA Zone ───────────────────────────────────────────────
      // answers.zone is an array like [5,6] representing a zone range.
      // Plant must be compatible with at least one zone in the selected range.
      if (answers.zone && answers.zone.length > 0) {
        const selectedZones = expandZoneRange(answers.zone)
        const hasOverlap = plant.zones.some((z) => selectedZones.includes(z))
        if (!hasOverlap) {
          disqualified = true
        } else {
          score += 2 // zone match is important
        }
      }

      // ── HARD FILTER: Sunlight ────────────────────────────────────────────────
      if (answers.sunlight) {
        if (!plant.sunlight.includes(answers.sunlight)) {
          disqualified = true
        } else {
          score += 2
        }
      }

      // ── HARD FILTER: Season ──────────────────────────────────────────────────
      if (answers.season) {
        if (!plant.seasons.includes(answers.season)) {
          disqualified = true
        } else {
          score += 2
        }
      }

      if (disqualified) return null

      // ── SOFT SCORE: Soil ─────────────────────────────────────────────────────
      if (answers.soil && plant.soil.includes(answers.soil)) {
        score += 2
      } else if (answers.soil) {
        // Clay/loam cross-tolerance — slight partial credit
        const tolerant = { clay: ['loam'], loam: ['clay', 'silty'], silty: ['loam'] }
        if (tolerant[answers.soil]?.some((t) => plant.soil.includes(t))) {
          score += 1
        }
      }

      // ── SOFT SCORE: Water ────────────────────────────────────────────────────
      if (answers.water) {
        if (plant.water === answers.water) {
          score += 2
        } else {
          // Adjacent water needs get partial credit
          const levels = ['low', 'moderate', 'high']
          const diff = Math.abs(levels.indexOf(plant.water) - levels.indexOf(answers.water))
          if (diff === 1) score += 1
        }
      }

      // ── SOFT SCORE: Space ────────────────────────────────────────────────────
      if (answers.space && plant.space.includes(answers.space)) {
        score += 2
      }

      // ── SOFT SCORE: Experience ───────────────────────────────────────────────
      if (answers.experience) {
        const levels = ['beginner', 'intermediate', 'advanced']
        const plantLevel = levels.indexOf(plant.experience)
        const userLevel = levels.indexOf(answers.experience)
        if (plantLevel <= userLevel) {
          // Plant is at or below user's skill level — full points
          score += 2
        } else if (plantLevel - userLevel === 1) {
          // Slight stretch — partial credit, may be a fun challenge
          score += 1
        }
        // Plants far above user skill don't get points (not excluded, just ranked lower)
      }

      return { ...plant, score }
    })
    .filter(Boolean)

  // Sort by score descending
  scored.sort((a, b) => b.score - a.score)

  return scored
}

/**
 * Expand a zone range pair [min, max] into an array of individual zone numbers.
 * e.g. [5, 6] → [5, 6]
 *      [3, 4] → [3, 4]
 */
function expandZoneRange(range) {
  const [min, max] = range
  const zones = []
  for (let z = min; z <= max; z++) zones.push(z)
  return zones
}

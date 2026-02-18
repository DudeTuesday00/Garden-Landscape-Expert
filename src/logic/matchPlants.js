/**
 * Plant matching logic for the Plant Selection Wizard.
 *
 * Scores each plant against the user's answers and returns a ranked list.
 *
 * HYDROPONIC PATH:
 *   - Hard-filters to plants where hydroponic === true
 *   - Skips zone, soil, and season checks (irrelevant for indoor hydro)
 *
 * SOIL PATH (in-ground, raised-bed, container):
 *   - Hard filters: type, zone, sunlight, season
 *   - Soft scoring: soil, water, space, experience
 */

import plants from '../data/plants.js'

/**
 * @param {Object} answers - wizard answers
 * @returns {Array} - filtered and scored plant objects, sorted by score desc
 */
export function matchPlants(answers) {
  const isHydro = answers.growingMethod === 'hydroponic'

  const scored = plants
    .map((plant) => {
      let score = 0
      let disqualified = false

      // ── HARD FILTER: Hydroponic compatibility ────────────────────────────────
      if (isHydro && !plant.hydroponic) {
        disqualified = true
      }

      // ── HARD FILTER: Plant Type ──────────────────────────────────────────────
      if (answers.type && answers.type.length > 0) {
        if (!answers.type.includes(plant.type)) {
          disqualified = true
        }
      }

      if (disqualified) return null

      // ── ZONE (skipped for hydroponic — growing is climate-controlled) ────────
      if (!isHydro && answers.zone && answers.zone.length > 0) {
        const selectedZones = expandZoneRange(answers.zone)
        const hasOverlap = plant.zones.some((z) => selectedZones.includes(z))
        if (!hasOverlap) {
          return null // zone mismatch = hard disqualify for soil growers
        }
        score += 2
      }

      // ── HARD FILTER: Sunlight ────────────────────────────────────────────────
      // For hydro, full-sun means a grow light setup — still a valid filter.
      if (answers.sunlight) {
        if (!plant.sunlight.includes(answers.sunlight)) {
          return null
        }
        score += 2
      }

      // ── SEASON (skipped for hydroponic — indoor growing is year-round) ───────
      if (!isHydro && answers.season) {
        if (!plant.seasons.includes(answers.season)) {
          return null
        }
        score += 2
      } else if (isHydro) {
        // Hydro plants get a bonus for being season-agnostic
        score += 2
      }

      // ── SOFT SCORE: Soil (skipped for hydroponic) ────────────────────────────
      if (!isHydro && answers.soil) {
        if (plant.soil.includes(answers.soil)) {
          score += 2
        } else {
          const tolerant = { clay: ['loam'], loam: ['clay', 'silty'], silty: ['loam'] }
          if (tolerant[answers.soil]?.some((t) => plant.soil.includes(t))) {
            score += 1
          }
        }
      }

      // ── SOFT SCORE: Hydroponic system type ───────────────────────────────────
      // Some plants suit certain systems better; apply bonus if description mentions it.
      if (isHydro && answers.hydroSystem && plant.hydroponicsNotes) {
        const notes = plant.hydroponicsNotes.toLowerCase()
        const systemKeywords = {
          kratky:   ['kratky', 'passive'],
          dwc:      ['dwc', 'deep water'],
          nft:      ['nft', 'nutrient film'],
          'ebb-flow': ['ebb', 'flood'],
        }
        const keywords = systemKeywords[answers.hydroSystem] || []
        if (keywords.some((kw) => notes.includes(kw))) {
          score += 2
        }
      }

      // ── SOFT SCORE: Water ────────────────────────────────────────────────────
      if (answers.water) {
        if (plant.water === answers.water) {
          score += 2
        } else {
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
          score += 2
        } else if (plantLevel - userLevel === 1) {
          score += 1
        }
      }

      return { ...plant, score }
    })
    .filter(Boolean)

  scored.sort((a, b) => b.score - a.score)

  return scored
}

/**
 * Expand a zone range pair [min, max] into individual zone numbers.
 */
function expandZoneRange(range) {
  const [min, max] = range
  const zones = []
  for (let z = min; z <= max; z++) zones.push(z)
  return zones
}

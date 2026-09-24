import { hydroponicSystems, plantSystemClass, systemPlantFit } from '../data/hydroponic-systems.js'
import { getHydroponicCrop } from '../data/hydroponic-targets.js'
import { plantTargetGroup, systemGuideHref, GENERAL_HYDRO_PH } from '../data/hydroponic-plant-targets.js'

function systemsWithFit(cls, wanted) {
  return hydroponicSystems
    .filter((s) => systemPlantFit[s.id]?.[cls] === wanted)
    .map((s) => ({ id: s.id, name: s.name, emoji: s.emoji, guideHref: systemGuideHref[s.id] || null }))
}

/**
 * Hydroponic growing profile for a plant, or null if the plant isn't
 * hydroponic-compatible. Targets are only present for plants covered by the
 * site's crop-target table (see hydroponic-plant-targets.js).
 */
export function getHydroponicProfile(plant) {
  if (!plant || !plant.hydroponic) return null

  const cls = plantSystemClass[plant.id] || 'leafy'
  const mapping = plantTargetGroup[plant.id]
  const crop = mapping ? getHydroponicCrop(mapping.group) : null

  return {
    bestSystems: systemsWithFit(cls, 'great'),
    workableSystems: systemsWithFit(cls, 'ok'),
    daysToHarvest: plant.daysToHarvest || null,
    notes: plant.hydroponicsNotes || null,
    generalPh: GENERAL_HYDRO_PH,
    target: crop
      ? {
          basis: mapping.basis,
          label: mapping.label,
          ph: crop.ph,
          ecEstablished: crop.ec.established,
          ecSeedling: crop.ec.seedling,
          dli: crop.dli,
          lightHours: crop.lightHours,
        }
      : null,
  }
}

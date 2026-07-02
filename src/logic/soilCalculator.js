import { soilMixes, BAG_SIZE_CU_FT } from '../data/soil-mixes.js'

const CU_FT_PER_CU_YD = 27
const CU_FT_PER_GALLON = 0.133681
const GALLON_CONTAINER_PRESETS = {
  '3gal': 3,
  '5gal': 5,
  '10gal': 10,
  '15gal': 15,
  '25gal': 25,
}

export function getContainerPresetVolumeCuFt(presetId) {
  const gallons = GALLON_CONTAINER_PRESETS[presetId]
  return gallons ? gallons * CU_FT_PER_GALLON : null
}

export const containerPresetOptions = [
  { id: '3gal', label: '3 Gallon Pot' },
  { id: '5gal', label: '5 Gallon Pot' },
  { id: '10gal', label: '10 Gallon Container' },
  { id: '15gal', label: '15 Gallon Container' },
  { id: '25gal', label: '25 Gallon Container' },
]

/**
 * Computes soil volume (cu ft) for a rectangular bed, given dimensions in feet.
 */
export function rectangularVolumeCuFt(lengthFt, widthFt, heightFt) {
  if (!(lengthFt > 0) || !(widthFt > 0) || !(heightFt > 0)) return 0
  return lengthFt * widthFt * heightFt
}

/**
 * Computes soil volume (cu ft) for a circular bed/pot, given diameter and height in feet.
 */
export function circularVolumeCuFt(diameterFt, heightFt) {
  if (!(diameterFt > 0) || !(heightFt > 0)) return 0
  const radius = diameterFt / 2
  return Math.PI * radius * radius * heightFt
}

/**
 * Given a total volume (cu ft), a soil mix id, and a quantity (number of
 * identical beds/containers), returns the breakdown: total cu ft/cu yd/
 * gallons, and per-component volume + estimated bag count.
 */
export function computeSoilBreakdown({ volumeCuFt, mixId, quantity = 1 }) {
  const mix = soilMixes[mixId]
  if (!mix || !(volumeCuFt > 0)) return null

  const totalCuFt = volumeCuFt * quantity

  const components = mix.components.map((c) => {
    const cuFt = totalCuFt * c.share
    const bagSize = c.name.toLowerCase().includes('perlite') || c.name.toLowerCase().includes('vermiculite')
      ? BAG_SIZE_CU_FT.perliteVermiculite
      : c.name.toLowerCase().includes('potting')
        ? BAG_SIZE_CU_FT.pottingMix
        : BAG_SIZE_CU_FT.topsoilCompost
    return {
      name: c.name,
      cuFt,
      bags: Math.ceil(cuFt / bagSize),
      bagSize,
    }
  })

  return {
    mix,
    quantity,
    totalCuFt,
    totalCuYd: totalCuFt / CU_FT_PER_CU_YD,
    totalGallons: totalCuFt / CU_FT_PER_GALLON,
    components,
  }
}

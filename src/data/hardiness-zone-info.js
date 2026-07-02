/**
 * USDA Plant Hardiness Zone reference table (2023 map).
 * Temperature ranges (°F, average annual extreme minimum) sourced from the
 * same PRISM/USDA-ARS dataset as public/data/hardiness-zones.json — see
 * that file's header comment for full data provenance and license terms.
 */
export const zoneInfo = {
  '1a': { trange: '-60 to -55', label: 'Zone 1a' },
  '1b': { trange: '-55 to -50', label: 'Zone 1b' },
  '2a': { trange: '-50 to -45', label: 'Zone 2a' },
  '2b': { trange: '-45 to -40', label: 'Zone 2b' },
  '3a': { trange: '-40 to -35', label: 'Zone 3a' },
  '3b': { trange: '-35 to -30', label: 'Zone 3b' },
  '4a': { trange: '-30 to -25', label: 'Zone 4a' },
  '4b': { trange: '-25 to -20', label: 'Zone 4b' },
  '5a': { trange: '-20 to -15', label: 'Zone 5a' },
  '5b': { trange: '-15 to -10', label: 'Zone 5b' },
  '6a': { trange: '-10 to -5', label: 'Zone 6a' },
  '6b': { trange: '-5 to 0', label: 'Zone 6b' },
  '7a': { trange: '0 to 5', label: 'Zone 7a' },
  '7b': { trange: '5 to 10', label: 'Zone 7b' },
  '8a': { trange: '10 to 15', label: 'Zone 8a' },
  '8b': { trange: '15 to 20', label: 'Zone 8b' },
  '9a': { trange: '20 to 25', label: 'Zone 9a' },
  '9b': { trange: '25 to 30', label: 'Zone 9b' },
  '10a': { trange: '30 to 35', label: 'Zone 10a' },
  '10b': { trange: '35 to 40', label: 'Zone 10b' },
  '11a': { trange: '40 to 45', label: 'Zone 11a' },
  '11b': { trange: '45 to 50', label: 'Zone 11b' },
  '12a': { trange: '50 to 55', label: 'Zone 12a' },
  '12b': { trange: '55 to 60', label: 'Zone 12b' },
  '13a': { trange: '60 to 65', label: 'Zone 13a' },
  '13b': { trange: '65 to 70', label: 'Zone 13b' },
}

// Plant database (src/data/plants.js) and the Garden Architect wizard only
// support whole zones 3–11 — flag zones outside that range as out-of-range
// for wizard prefill purposes (still shown accurately, just noted).
export function isWizardSupportedZone(zone) {
  const whole = parseInt(zone, 10)
  return whole >= 3 && whole <= 11
}

export function getZoneInfo(zone) {
  return zoneInfo[zone]
}

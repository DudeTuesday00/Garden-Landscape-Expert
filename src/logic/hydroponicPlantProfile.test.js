import { describe, it, expect } from 'vitest'
import plants from '../data/plants.js'
import { getHydroponicProfile } from './hydroponicPlantProfile.js'
import { plantTargetGroup } from '../data/hydroponic-plant-targets.js'

const byId = (id) => plants.find((p) => p.id === id)

describe('getHydroponicProfile', () => {
  it('returns null for plants that are not hydroponic-compatible', () => {
    const nonHydro = plants.find((p) => !p.hydroponic)
    expect(getHydroponicProfile(nonHydro)).toBeNull()
    expect(getHydroponicProfile(undefined)).toBeNull()
  })

  it('gives tomato exact targets from the crop table', () => {
    const p = getHydroponicProfile(byId('tomato'))
    expect(p.target.basis).toBe('exact')
    expect(p.target.ecEstablished).toEqual([1.8, 3.0])
    expect(p.target.ph).toEqual([5.8, 6.3])
    expect(p.bestSystems.map((s) => s.id)).toContain('dwc')
    expect(p.bestSystems.map((s) => s.id)).not.toContain('kratky')
  })

  it('labels close relatives as group ranges, not plant-specific figures', () => {
    const p = getHydroponicProfile(byId('spinach'))
    expect(p.target.basis).toBe('group')
    expect(p.target.label).toBe('leafy greens')
  })

  it('gives no EC or light target to plants the site has no sourced range for', () => {
    for (const id of ['rosemary', 'thyme', 'oregano', 'stevia', 'radish', 'broccoli', 'eggplant', 'strawberry']) {
      expect(getHydroponicProfile(byId(id)).target).toBeNull()
    }
  })

  it('links every recommended system to a guide', () => {
    const p = getHydroponicProfile(byId('lettuce'))
    expect(p.bestSystems.length).toBeGreaterThan(0)
    expect(p.bestSystems.every((s) => s.guideHref && s.guideHref.startsWith('/guides/'))).toBe(true)
  })

  it('every mapped plant is a real hydroponic plant', () => {
    for (const id of Object.keys(plantTargetGroup)) {
      expect(byId(id)?.hydroponic).toBe(true)
    }
  })

  it('every hydroponic plant yields a profile with at least one workable or best system', () => {
    for (const plant of plants.filter((p) => p.hydroponic)) {
      const p = getHydroponicProfile(plant)
      expect(p.bestSystems.length + p.workableSystems.length).toBeGreaterThan(0)
    }
  })
})

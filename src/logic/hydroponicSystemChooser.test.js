import { describe, it, expect } from 'vitest'
import { chooseHydroponicSystems, plantsForSystem } from './hydroponicSystemChooser.js'

const base = { goal: 'greens', power: 2, budget: 'high', space: 3, time: 2 }
const ids = (list) => list.map((r) => r.system.id)

describe('chooseHydroponicSystems', () => {
  it('rules out anything needing power when the user wants none', () => {
    const { ranked, ruledOut } = chooseHydroponicSystems({ ...base, power: 0 })
    expect(ids(ranked).sort()).toEqual(['kratky', 'wick'])
    expect(ranked[0].system.id).toBe('kratky')
    expect(ids(ruledOut)).toContain('dwc')
    expect(ruledOut.find((r) => r.system.id === 'dwc').reason).toMatch(/air pump/)
  })

  it('never recommends Kratky for fruiting crops', () => {
    const { ranked, ruledOut } = chooseHydroponicSystems({ ...base, goal: 'fruiting' })
    expect(ids(ranked)).not.toContain('kratky')
    expect(ids(ruledOut)).toContain('kratky')
  })

  it('ranks DWC or Dutch bucket first for fruiting crops with room', () => {
    const { ranked } = chooseHydroponicSystems({ ...base, goal: 'fruiting' })
    expect(['dwc', 'drip']).toContain(ranked[0].system.id)
  })

  it('respects the budget cap using the starter-cost floor', () => {
    const { ranked } = chooseHydroponicSystems({ ...base, budget: 'low' })
    expect(ranked.every((r) => r.system.costMin <= 50)).toBe(true)
  })

  it('rules out systems that need more room than available', () => {
    const { ranked } = chooseHydroponicSystems({ ...base, space: 0 })
    expect(ranked.every((r) => r.system.spaceMin === 0)).toBe(true)
  })

  it('returns scores sorted best first', () => {
    const { ranked } = chooseHydroponicSystems(base)
    const scores = ranked.map((r) => r.score)
    expect(scores).toEqual([...scores].sort((a, b) => b - a))
  })
})

describe('plantsForSystem', () => {
  const plants = [
    { id: 'lettuce', hydroponic: true },
    { id: 'basil', hydroponic: true },
    { id: 'tomato', hydroponic: true },
    { id: 'oak', hydroponic: false },
  ]

  it('puts greens and herbs in the great list for Kratky and excludes tomato', () => {
    const { great, ok } = plantsForSystem('kratky', plants)
    expect(great.map((p) => p.id)).toEqual(['lettuce', 'basil'])
    expect([...great, ...ok].map((p) => p.id)).not.toContain('tomato')
  })

  it('never includes non-hydroponic plants', () => {
    const { great, ok } = plantsForSystem('dwc', plants)
    expect([...great, ...ok].map((p) => p.id)).not.toContain('oak')
  })

  it('returns empty lists for an unknown system', () => {
    expect(plantsForSystem('nope', plants)).toEqual({ great: [], ok: [] })
  })
})

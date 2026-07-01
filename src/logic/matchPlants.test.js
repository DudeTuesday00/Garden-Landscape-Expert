import { describe, it, expect, vi } from 'vitest'
import { matchPlants } from './matchPlants.js'

vi.mock('../data/plants.js', () => ({
  default: [
    {
      id: 'sun-veg', name: 'Sun Veggie', type: 'vegetable', zones: [5, 6, 7],
      sunlight: ['full-sun'], soil: ['loam'], water: 'moderate', space: ['small'],
      seasons: ['spring', 'summer'], experience: 'beginner', hydroponic: false,
    },
    {
      id: 'shade-fern', name: 'Shade Fern', type: 'fern', zones: [4, 5, 6],
      sunlight: ['full-shade'], soil: ['peaty'], water: 'high', space: ['container'],
      seasons: ['spring', 'fall'], experience: 'intermediate', hydroponic: false,
    },
    {
      id: 'hydro-lettuce', name: 'Hydro Lettuce', type: 'vegetable', zones: [7, 8],
      sunlight: ['full-sun'], soil: ['loam'], water: 'moderate', space: ['container'],
      seasons: ['summer'], experience: 'beginner',
      hydroponic: true, hydroponicsNotes: 'Thrives in Kratky and DWC systems.',
    },
    {
      id: 'soil-only-herb', name: 'Soil Herb', type: 'herb', zones: [6, 7, 8],
      sunlight: ['full-sun'], soil: ['sandy'], water: 'low', space: ['small'],
      seasons: ['summer'], experience: 'advanced', hydroponic: false,
    },
  ],
}))

describe('matchPlants — traditional path', () => {
  it('returns every plant when no answers are given', () => {
    const results = matchPlants({})
    expect(results.map((p) => p.id).sort()).toEqual(
      ['hydro-lettuce', 'shade-fern', 'soil-only-herb', 'sun-veg'].sort()
    )
  })

  it('hard-filters by plant type', () => {
    const results = matchPlants({ type: ['fern'] })
    expect(results.map((p) => p.id)).toEqual(['shade-fern'])
  })

  it('hard-filters out plants whose zones do not overlap the selected range', () => {
    const results = matchPlants({ zone: [4, 4] })
    // only shade-fern (zones 4-6) overlaps zone 4; sun-veg starts at zone 5
    expect(results.map((p) => p.id)).toEqual(['shade-fern'])
  })

  it('hard-filters by sunlight requirement', () => {
    const results = matchPlants({ sunlight: 'full-shade' })
    expect(results.map((p) => p.id)).toEqual(['shade-fern'])
  })

  it('hard-filters by season', () => {
    const results = matchPlants({ season: 'fall' })
    expect(results.map((p) => p.id)).toEqual(['shade-fern'])
  })

  it('scores an exact soil match higher than a tolerant soil match', () => {
    // sun-veg soil=['loam'] is an exact match for 'loam'; soil-only-herb soil=['sandy']
    // is neither exact nor in the loam tolerance list, so it should score lower
    const results = matchPlants({ type: ['vegetable', 'herb'], soil: 'loam' })
    const sunVeg = results.find((p) => p.id === 'sun-veg')
    const herb = results.find((p) => p.id === 'soil-only-herb')
    expect(sunVeg.score).toBeGreaterThan(herb.score)
  })

  it('sorts results by descending score', () => {
    const results = matchPlants({ water: 'moderate', experience: 'beginner' })
    for (let i = 1; i < results.length; i++) {
      expect(results[i - 1].score).toBeGreaterThanOrEqual(results[i].score)
    }
  })
})

describe('matchPlants — hydroponic path', () => {
  it('hard-filters to hydroponic-compatible plants only', () => {
    const results = matchPlants({ growingMethod: 'hydroponic' })
    expect(results.map((p) => p.id)).toEqual(['hydro-lettuce'])
  })

  it('ignores zone even when the plant is out of the selected range', () => {
    // hydro-lettuce is zones [7,8]; a soil grower in zone 3-4 would be disqualified,
    // but the hydro path must skip the zone check entirely
    const results = matchPlants({ growingMethod: 'hydroponic', zone: [3, 4] })
    expect(results.map((p) => p.id)).toEqual(['hydro-lettuce'])
  })

  it('ignores season even when the plant lacks that season', () => {
    const results = matchPlants({ growingMethod: 'hydroponic', season: 'winter' })
    expect(results.map((p) => p.id)).toEqual(['hydro-lettuce'])
  })

  it('still applies the sunlight hard filter for hydro (grow lights count as full sun)', () => {
    const results = matchPlants({ growingMethod: 'hydroponic', sunlight: 'full-shade' })
    expect(results).toEqual([])
  })

  it('awards a bonus when hydroponicsNotes mentions the selected system', () => {
    const withMatch = matchPlants({ growingMethod: 'hydroponic', hydroSystem: 'kratky' })
    const withoutMatch = matchPlants({ growingMethod: 'hydroponic', hydroSystem: 'nft' })
    const scoreWithMatch = withMatch.find((p) => p.id === 'hydro-lettuce').score
    const scoreWithoutMatch = withoutMatch.find((p) => p.id === 'hydro-lettuce').score
    expect(scoreWithMatch).toBeGreaterThan(scoreWithoutMatch)
  })
})

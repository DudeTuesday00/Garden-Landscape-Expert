import { describe, it, expect } from 'vitest'
import { guideCategories } from './guides.js'
import { contentMap } from './guide-content/index.js'
import { getGuideDates } from './content-dates.js'
import { guideCount, guideCategoryCount } from './site-stats.js'

// If any of these fail, run `npm run dates` and commit src/data/content-dates.json
describe('generated site data is current', () => {
  const liveGuides = guideCategories.flatMap((c) => c.guides).filter((g) => !g.comingSoon)

  it('guide count matches the live guides', () => {
    expect(guideCount).toBe(liveGuides.length)
  })

  it('category count matches guides.js', () => {
    expect(guideCategoryCount).toBe(guideCategories.length)
  })

  it('every live guide has real dates', () => {
    const missing = liveGuides.filter((g) => !getGuideDates(g.id)?.published || !getGuideDates(g.id)?.modified)
    expect(missing.map((g) => g.id)).toEqual([])
  })

  it('every guide with content is a live guide', () => {
    const liveIds = new Set(liveGuides.map((g) => g.id))
    expect(Object.keys(contentMap).filter((id) => !liveIds.has(id))).toEqual([])
  })
})

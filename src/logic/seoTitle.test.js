import { describe, it, expect } from 'vitest'
import { fitTitle, MAX_TEMPLATED_TITLE, MAX_ABSOLUTE_TITLE } from './seoTitle.js'

describe('fitTitle', () => {
  it('returns short titles unchanged', () => {
    expect(fitTitle('Growing Figs', MAX_TEMPLATED_TITLE)).toBe('Growing Figs')
  })

  it('cuts at a colon instead of mid-phrase', () => {
    const t = 'Compost Tea: What It Is, How to Brew It, and How to Use It Safely'
    expect(fitTitle(t, MAX_TEMPLATED_TITLE)).toBe('Compost Tea')
  })

  it('cuts before a parenthetical scientific name', () => {
    const t = 'Shrub Rose (English/Landscape Rose) (Rosa spp. (shrub/landscape cultivars))'
    expect(fitTitle(t, MAX_TEMPLATED_TITLE)).toBe('Shrub Rose')
  })

  it('never exceeds the maximum length', () => {
    const t = 'Entryways: How to make your front door look like it belongs in a magazine without being one'
    expect(fitTitle(t, MAX_ABSOLUTE_TITLE, { ellipsis: true }).length).toBeLessThanOrEqual(MAX_ABSOLUTE_TITLE)
    const u = 'When a Tree Falls Saving Your Shade-Loving Garden After Unexpected Sunlight Arrives Suddenly'
    expect(fitTitle(u, MAX_ABSOLUTE_TITLE, { ellipsis: true }).length).toBeLessThanOrEqual(MAX_ABSOLUTE_TITLE)
  })

  it('does not end on a dangling connector word', () => {
    const t = 'The best garden spots are not about flowers but about where you and your family sit for'
    const out = fitTitle(t, 40)
    expect(out.split(' ').pop().toLowerCase()).not.toMatch(/^(a|an|the|of|for|to|and|or|in|on|with|that)$/)
  })

  it('marks a mid-phrase cut with an ellipsis when asked', () => {
    const t = 'Figuring out which hydrangeas need to be cut back hard and which ones can wait until spring'
    expect(fitTitle(t, MAX_ABSOLUTE_TITLE, { ellipsis: true }).endsWith('…')).toBe(true)
  })
})

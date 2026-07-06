import { describe, it, expect } from 'vitest'
import { getIsoWeekYear, getTopicOfWeek, resolveTopic } from './topicOfWeek.js'

const FIXTURE_LIST = [
  { type: 'video', title: 'Video A', teaser: 'Teaser A', href: '/videos/', emoji: '🎬' },
  { type: 'video', title: 'Video B', teaser: 'Teaser B', href: '/videos/', emoji: '🎬' },
  { type: 'video', title: 'Video C', teaser: 'Teaser C', href: '/videos/', emoji: '🎬' },
]

describe('getIsoWeekYear', () => {
  it('computes the correct ISO week for a known date', () => {
    // 2026-01-05 (Monday) is ISO week 2 of 2026 (Jan 1 2026 is a Thursday,
    // so week 1 runs Dec 29 2025 - Jan 4 2026).
    expect(getIsoWeekYear(new Date(2026, 0, 5))).toEqual({ isoYear: 2026, isoWeek: 2 })
  })

  it('assigns late-December dates to the following ISO year when appropriate', () => {
    // 2025-12-29 (Monday) belongs to ISO week 1 of 2026.
    expect(getIsoWeekYear(new Date(2025, 11, 29))).toEqual({ isoYear: 2026, isoWeek: 1 })
  })
})

describe('resolveTopic', () => {
  it('resolves a self-contained reference (video/podcast/infographic) directly', () => {
    const resolved = resolveTopic(FIXTURE_LIST[0])
    expect(resolved).toEqual({
      title: 'Video A',
      teaser: 'Teaser A',
      href: '/videos/',
      emoji: '🎬',
      kicker: 'Featured Video',
      ctaLabel: 'Watch the Video →',
    })
  })

  it('resolves a live guide reference by id', () => {
    const resolved = resolveTopic({ type: 'guide', id: 'xeriscape' })
    expect(resolved).not.toBeNull()
    expect(resolved.href).toBe('/guides/xeriscape/')
    expect(resolved.kicker).toBe('Featured Guide')
  })

  it('resolves a live tool reference by id', () => {
    const resolved = resolveTopic({ type: 'tool', id: 'fertilizer-calculator' })
    expect(resolved).not.toBeNull()
    expect(resolved.href).toBe('/tools/fertilizer-calculator/')
    expect(resolved.kicker).toBe('Featured Tool')
  })

  it('returns null for an unknown guide or tool id', () => {
    expect(resolveTopic({ type: 'guide', id: 'does-not-exist' })).toBeNull()
    expect(resolveTopic({ type: 'tool', id: 'does-not-exist' })).toBeNull()
  })
})

describe('getTopicOfWeek', () => {
  it('always returns an in-range item across a full year of weeks', () => {
    for (let day = 0; day < 365; day++) {
      const date = new Date(2026, 0, 1 + day)
      const topic = getTopicOfWeek(date, FIXTURE_LIST, null)
      expect(FIXTURE_LIST.map((t) => t.title)).toContain(topic.title)
    }
  })

  it('is stable for every day within the same ISO week', () => {
    // 2026-01-05 through 2026-01-11 are all within ISO week 2 of 2026.
    const results = new Set()
    for (let day = 5; day <= 11; day++) {
      results.add(getTopicOfWeek(new Date(2026, 0, day), FIXTURE_LIST, null).title)
    }
    expect(results.size).toBe(1)
  })

  it('changes between consecutive ISO weeks (for a list long enough to show it)', () => {
    const weekTwo = getTopicOfWeek(new Date(2026, 0, 5), FIXTURE_LIST, null)
    const weekThree = getTopicOfWeek(new Date(2026, 0, 12), FIXTURE_LIST, null)
    expect(weekTwo.title).not.toBe(weekThree.title)
  })

  it('prefers an active pinned topic over the rotation', () => {
    const pinned = { type: 'video', title: 'Pinned', teaser: 'Pinned teaser', href: '/videos/', emoji: '📌', until: '2099-01-01' }
    const topic = getTopicOfWeek(new Date(2026, 0, 5), FIXTURE_LIST, pinned)
    expect(topic.title).toBe('Pinned')
  })

  it('falls back to the rotation once a pinned topic has expired', () => {
    const pinned = { type: 'video', title: 'Pinned', teaser: 'Pinned teaser', href: '/videos/', emoji: '📌', until: '2020-01-01' }
    const topic = getTopicOfWeek(new Date(2026, 0, 5), FIXTURE_LIST, pinned)
    expect(topic.title).not.toBe('Pinned')
  })

  it('treats a pinned topic with no `until` as never expiring', () => {
    const pinned = { type: 'video', title: 'Pinned Forever', teaser: 'Pinned teaser', href: '/videos/', emoji: '📌' }
    const topic = getTopicOfWeek(new Date(2099, 0, 1), FIXTURE_LIST, pinned)
    expect(topic.title).toBe('Pinned Forever')
  })
})

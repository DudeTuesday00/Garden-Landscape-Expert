import { describe, it, expect } from 'vitest'
import {
  toEc, fromEc, toLiters, fromLiters, assessEc, assessPh,
  computeDosing, computeDli, hoursForDli, ppfdForDli, assessDli,
} from './hydroponicCalculators.js'

describe('EC / TDS conversion', () => {
  it('converts 500-scale ppm to EC and back', () => {
    expect(toEc(700, 'ppm500')).toBeCloseTo(1.4)
    expect(fromEc(1.4, 'ppm500')).toBeCloseTo(700)
  })
  it('uses a different factor for the 700 scale', () => {
    expect(toEc(700, 'ppm700')).toBeCloseTo(1.0)
  })
  it('leaves EC unchanged', () => {
    expect(toEc(1.2, 'ec')).toBe(1.2)
  })
})

describe('volume conversion', () => {
  it('round-trips gallons and liters', () => {
    expect(fromLiters(toLiters(5, 'gal'), 'gal')).toBeCloseTo(5)
    expect(toLiters(5, 'gal')).toBeCloseTo(18.927, 2)
    expect(toLiters(5, 'l')).toBe(5)
  })
})

describe('assessEc', () => {
  it('reports ok inside the range', () => {
    expect(assessEc({ ec: 1.0, range: [0.8, 1.4], volumeLiters: 10 }).status).toBe('ok')
  })
  it('reports low below the range', () => {
    expect(assessEc({ ec: 0.5, range: [0.8, 1.4], volumeLiters: 10 }).status).toBe('low')
  })
  it('computes the water to add to dilute a too-strong solution to mid-range', () => {
    // mid = 1.1; 10 L at 2.2 needs 10 * (2.2/1.1 - 1) = 10 L of water
    const r = assessEc({ ec: 2.2, range: [0.8, 1.4], volumeLiters: 10 })
    expect(r.status).toBe('high')
    expect(r.addWaterLiters).toBeCloseTo(10)
    expect(r.targetEc).toBeCloseTo(1.1)
  })
  it('returns null for a missing reading', () => {
    expect(assessEc({ ec: 0, range: [0.8, 1.4], volumeLiters: 10 })).toBeNull()
  })
})

describe('assessPh', () => {
  it('classifies high, low, and ok', () => {
    expect(assessPh(7.2, [5.5, 6.5]).status).toBe('high')
    expect(assessPh(5.0, [5.5, 6.5]).status).toBe('low')
    expect(assessPh(6.0, [5.5, 6.5]).status).toBe('ok')
  })
})

describe('computeDosing', () => {
  it('scales the label rate by volume and strength', () => {
    const out = computeDosing({
      volumeLiters: 10,
      parts: [{ name: 'Part A', mlPerLiter: 2 }, { name: 'Part B', mlPerLiter: 1 }],
      strengthPct: 50,
    })
    expect(out[0].ml).toBeCloseTo(10)
    expect(out[1].ml).toBeCloseTo(5)
    expect(out[0].tsp).toBeCloseTo(10 / 4.92892, 3)
  })
})

describe('DLI', () => {
  it('computes DLI from PPFD and hours', () => {
    // 200 umol/m2/s for 16 h = 200*16*3600/1e6 = 11.52
    expect(computeDli(200, 16)).toBeCloseTo(11.52)
  })
  it('inverts to hours and PPFD', () => {
    expect(hoursForDli(11.52, 200)).toBeCloseTo(16)
    expect(ppfdForDli(11.52, 16)).toBeCloseTo(200)
  })
  it('guards against divide-by-zero', () => {
    expect(hoursForDli(12, 0)).toBeNull()
    expect(ppfdForDli(12, 0)).toBeNull()
  })
  it('assesses against a target range', () => {
    expect(assessDli(10, [12, 17]).status).toBe('low')
    expect(assessDli(20, [12, 17]).status).toBe('high')
    expect(assessDli(14, [12, 17]).status).toBe('ok')
  })
})

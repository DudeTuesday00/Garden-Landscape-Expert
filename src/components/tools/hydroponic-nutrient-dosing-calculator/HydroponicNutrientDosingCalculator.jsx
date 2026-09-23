'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { toLiters, computeDosing, LITERS_PER_GALLON } from '../../../logic/hydroponicCalculators.js'
import { useToolUsageTracking } from '../../../logic/useToolUsageTracking.js'
import { Card, cardCls, ChoiceButtons, NumberField, TextField, Stat, ToolHeader, RelatedTools, fmt } from '../hydroponics/HydroShared.jsx'

const STRENGTHS = [
  { value: 25, label: '25%' },
  { value: 50, label: '50%' },
  { value: 75, label: '75%' },
  { value: 100, label: '100%' },
]

export default function HydroponicNutrientDosingCalculator() {
  const [volume, setVolume] = useState('5')
  const [volUnit, setVolUnit] = useState('gal')
  const [rateUnit, setRateUnit] = useState('gal')
  const [strength, setStrength] = useState(100)
  const [parts, setParts] = useState([
    { name: 'Part A', rate: '' },
    { name: 'Part B', rate: '' },
  ])

  const volNum = parseFloat(volume)
  const volumeLiters = volNum > 0 ? toLiters(volNum, volUnit) : 0

  const parsedParts = parts.map((p) => {
    const rate = parseFloat(p.rate)
    const mlPerLiter = rate > 0 ? (rateUnit === 'gal' ? rate / LITERS_PER_GALLON : rate) : 0
    return { name: p.name.trim() || 'Nutrient', mlPerLiter, valid: rate > 0 }
  })
  const validParts = parsedParts.filter((p) => p.valid)

  const results = useMemo(
    () => (volumeLiters > 0 && validParts.length > 0 ? computeDosing({ volumeLiters, parts: validParts, strengthPct: strength }) : null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [volumeLiters, strength, JSON.stringify(validParts)]
  )

  const usageTracking = useToolUsageTracking('hydroponic-nutrient-dosing-calculator', !!results, { requireInteraction: false })

  const update = (i, patch) => setParts((ps) => ps.map((p, idx) => (idx === i ? { ...p, ...patch } : p)))

  return (
    <div className="max-w-5xl mx-auto" {...usageTracking}>
      <ToolHeader
        title="Hydroponic Nutrient Dosing Calculator"
        blurb="Enter your reservoir size and the feeding rate from your nutrient's label, and get the exact amount of each part to add — in milliliters and teaspoons — at full or reduced strength."
      />

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <Card label="1. Reservoir size">
            <NumberField label="Volume of water" value={volume} onChange={setVolume} placeholder="e.g. 5" />
            <div className="mt-2">
              <ChoiceButtons value={volUnit} onChange={setVolUnit} options={[{ value: 'gal', label: 'Gallons' }, { value: 'l', label: 'Liters' }]} />
            </div>
          </Card>

          <Card label="2. Strength">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Seedlings and young plants usually start at a reduced strength. 100% is the full label rate.</p>
            <ChoiceButtons value={strength} onChange={setStrength} options={STRENGTHS} columns={2} />
          </Card>

          <Card label="3. Label feeding rate">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Copy the rate for your crop stage from your nutrient's feeding chart.</p>
            <ChoiceButtons value={rateUnit} onChange={setRateUnit} options={[{ value: 'gal', label: 'ml per gallon' }, { value: 'l', label: 'ml per liter' }]} />
            <div className="mt-4 space-y-3">
              {parts.map((p, i) => (
                <div key={i} className="grid grid-cols-5 gap-2 items-end">
                  <div className="col-span-2">
                    <TextField label={`Part ${i + 1} name`} value={p.name} onChange={(v) => update(i, { name: v })} />
                  </div>
                  <div className="col-span-2">
                    <NumberField label="Rate (ml)" value={p.rate} onChange={(v) => update(i, { rate: v })} placeholder="e.g. 2.5" />
                  </div>
                  <button
                    type="button"
                    onClick={() => setParts((ps) => ps.filter((_, idx) => idx !== i))}
                    disabled={parts.length === 1}
                    aria-label={`Remove ${p.name || 'part'}`}
                    className="pb-2 text-sm text-gray-400 hover:text-red-500 disabled:opacity-30"
                  >
                    ✕
                  </button>
                </div>
              ))}
              {parts.length < 4 && (
                <button
                  type="button"
                  onClick={() => setParts((ps) => [...ps, { name: `Part ${String.fromCharCode(65 + ps.length)}`, rate: '' }])}
                  className="text-sm text-garden-600 dark:text-garden-400 hover:underline"
                >
                  + Add another part
                </button>
              )}
            </div>
          </Card>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <div className={`${cardCls} lg:sticky lg:top-20`}>
            <h2 className="text-xl font-bold text-garden-800 dark:text-garden-300 mb-4">Your mix</h2>

            {!results && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Enter a reservoir size and at least one nutrient rate to see how much to add.
              </p>
            )}

            {results && (
              <>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  For <strong>{fmt(volNum, 2)} {volUnit === 'gal' ? 'gallons' : 'liters'}</strong> at <strong>{strength}%</strong> strength, add:
                </p>
                <div className="space-y-3 mb-5">
                  {results.map((r, i) => (
                    <div key={i} className="grid grid-cols-3 gap-3 items-center">
                      <p className="font-semibold text-gray-800 dark:text-gray-100">{r.name}</p>
                      <Stat label="milliliters" value={fmt(r.ml, 1)} />
                      <Stat label="teaspoons" value={fmt(r.tsp, 1)} sub={`${fmt(r.tbsp, 2)} tbsp`} />
                    </div>
                  ))}
                </div>

                <ol className="list-decimal pl-5 space-y-1.5 text-sm text-gray-700 dark:text-gray-300 mb-5">
                  <li>Fill the reservoir with the water first.</li>
                  <li>Add <strong>each part separately</strong>, stirring between them — never mix the concentrated bottles together, which can make nutrients precipitate out.</li>
                  <li>Measure strength and pH, and adjust pH into range.</li>
                </ol>
              </>
            )}

            <p className="text-xs text-gray-500 dark:text-gray-400">
              Amounts scale directly from the rate you enter, so they are only as accurate as that rate — always use your nutrient's own feeding chart, which varies by product and crop stage. Teaspoons are US measures (1 tsp ≈ 4.9 ml); use a syringe or graduated cylinder for small amounts.
            </p>
            <p className="mt-2 text-sm">
              <Link href="/tools/hydroponic-ec-ph-calculator/" className="text-garden-600 dark:text-garden-400 underline">Then check strength and pH with the EC & pH Assistant →</Link>
            </p>
          </div>
        </div>
      </div>

      <RelatedTools
        items={[
          { href: '/tools/hydroponic-ec-ph-calculator/', emoji: '🧪', title: 'EC & pH Assistant', body: 'Check strength and pH against targets.' },
          { href: '/tools/hydroponic-light-calculator/', emoji: '💡', title: 'Grow Light DLI Calculator', body: 'Is your light strong enough for your crop?' },
          { href: '/guides/hydroponic-nutrients-ph-ec/', emoji: '📖', title: 'Nutrients, pH & EC guide', body: 'How to manage the reservoir day to day.' },
        ]}
      />
    </div>
  )
}

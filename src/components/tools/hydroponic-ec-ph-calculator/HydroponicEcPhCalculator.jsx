'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { hydroponicCrops, getHydroponicCrop, tdsScales } from '../../../data/hydroponic-targets.js'
import { toEc, fromEc, toLiters, assessEc, assessPh, fromLiters } from '../../../logic/hydroponicCalculators.js'
import { useToolUsageTracking } from '../../../logic/useToolUsageTracking.js'
import { Card, cardCls, ChoiceButtons, NumberField, Stat, Verdict, ToolHeader, RelatedTools, fmt } from '../hydroponics/HydroShared.jsx'

export default function HydroponicEcPhCalculator() {
  const [cropId, setCropId] = useState('leafy')
  const [stage, setStage] = useState('established')
  const [scale, setScale] = useState('ec')
  const [reading, setReading] = useState('')
  const [ph, setPh] = useState('')
  const [volume, setVolume] = useState('')
  const [unit, setUnit] = useState('gal')

  const crop = getHydroponicCrop(cropId)
  const ecRange = crop.ec[stage]
  const scaleFactorLabel = tdsScales.find((s) => s.id === scale)
  const displayRange = ecRange.map((v) => fmt(fromEc(v, scale), scale === 'ec' ? 1 : 0))

  const readingNum = parseFloat(reading)
  const phNum = parseFloat(ph)
  const volNum = parseFloat(volume)

  const ecResult = useMemo(() => {
    if (!(readingNum > 0)) return null
    const ec = toEc(readingNum, scale)
    const volumeLiters = volNum > 0 ? toLiters(volNum, unit) : 0
    return { ec, assessment: assessEc({ ec, range: ecRange, volumeLiters }) }
  }, [readingNum, scale, volNum, unit, ecRange])

  const phResult = useMemo(() => assessPh(phNum, crop.ph), [phNum, crop])

  const usageTracking = useToolUsageTracking('hydroponic-ec-ph-calculator', !!(ecResult || phResult), { requireInteraction: false })

  const addWater = ecResult?.assessment?.addWaterLiters
  const ecOtherUnits = ecResult && [
    `${fmt(ecResult.ec, 2)} mS/cm`,
    `${fmt(fromEc(ecResult.ec, 'ppm500'), 0)} ppm (500 scale)`,
    `${fmt(fromEc(ecResult.ec, 'ppm700'), 0)} ppm (700 scale)`,
  ]

  return (
    <div className="max-w-5xl mx-auto" {...usageTracking}>
      <ToolHeader
        title="Hydroponic EC & pH Assistant"
        blurb="Check your nutrient strength and pH against typical targets for your crop, convert between EC and TDS ppm, and see exactly how much plain water to add if the solution is too strong."
      />

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <Card label="1. What are you growing?">
            <div className="grid gap-2">
              {hydroponicCrops.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCropId(c.id)}
                  aria-pressed={cropId === c.id}
                  className={`text-left px-3 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                    cropId === c.id
                      ? 'bg-earth-500 text-white border-earth-500'
                      : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-earth-400 text-gray-800 dark:text-gray-100'
                  }`}
                >
                  {c.emoji} {c.name}
                </button>
              ))}
            </div>
          </Card>

          <Card label="2. Growth stage">
            <ChoiceButtons
              value={stage}
              onChange={setStage}
              options={[
                { value: 'seedling', label: 'Seedling' },
                { value: 'established', label: 'Established' },
              ]}
            />
          </Card>

          <Card label="3. Your readings">
            <div className="space-y-4">
              <div>
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">Nutrient strength meter reads in</p>
                <ChoiceButtons
                  columns={1}
                  value={scale}
                  onChange={setScale}
                  options={tdsScales.map((s) => ({ value: s.id, label: s.label }))}
                />
              </div>
              <NumberField label="Current nutrient strength" value={reading} onChange={setReading} placeholder={scale === 'ec' ? 'e.g. 1.6' : 'e.g. 800'} suffix={scale === 'ec' ? 'mS/cm' : 'ppm'} />
              <NumberField label="Current pH (optional)" value={ph} onChange={setPh} step="0.1" placeholder="e.g. 6.2" />
              <div>
                <NumberField label="Reservoir volume (optional, for dilution math)" value={volume} onChange={setVolume} placeholder="e.g. 5" />
                <div className="mt-2">
                  <ChoiceButtons value={unit} onChange={setUnit} options={[{ value: 'gal', label: 'Gallons' }, { value: 'l', label: 'Liters' }]} />
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <div className={`${cardCls} lg:sticky lg:top-20`}>
            <h2 className="text-xl font-bold text-garden-800 dark:text-garden-300 mb-4">
              Targets for {crop.name.toLowerCase()} ({stage})
            </h2>
            <div className="grid grid-cols-2 gap-3 mb-5">
              <Stat label="Target pH" value={`${crop.ph[0]} – ${crop.ph[1]}`} />
              <Stat
                label={`Target strength (${scaleFactorLabel.label})`}
                value={`${displayRange[0]} – ${displayRange[1]}`}
              />
            </div>

            {!ecResult && !phResult && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Enter a nutrient-strength reading and/or a pH on the left to see how your reservoir compares.
              </p>
            )}

            {ecResult && (
              <div className="mb-5 space-y-3">
                <h3 className="text-sm font-bold text-garden-800 dark:text-garden-300">Nutrient strength</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Your reading is {ecOtherUnits.join(' · ')}.</p>
                {ecResult.assessment.status === 'ok' && (
                  <Verdict tone="ok" title="In the target range">Keep monitoring — strength drifts as plants feed and water evaporates.</Verdict>
                )}
                {ecResult.assessment.status === 'low' && (
                  <Verdict tone="warn" title="Below the target range">
                    Add nutrient in small steps, stir, wait a few minutes, and re-measure — it is easy to overshoot. A slightly weak solution just slows growth; a too-strong one burns leaves.
                  </Verdict>
                )}
                {ecResult.assessment.status === 'high' && (
                  <Verdict tone="warn" title="Above the target range">
                    {addWater ? (
                      <>
                        Add about <strong>{fmt(fromLiters(addWater, unit), 1)} {unit === 'gal' ? 'gallons' : 'liters'}</strong> of plain, pH-adjusted water to bring it to the middle of the range
                        (about {fmt(fromEc(ecResult.assessment.targetEc, scale), scale === 'ec' ? 2 : 0)} {scale === 'ec' ? 'mS/cm' : 'ppm'}). Re-measure afterward.
                      </>
                    ) : (
                      <>Dilute with plain, pH-adjusted water and re-measure. Enter your reservoir volume to see the exact amount to add.</>
                    )}
                  </Verdict>
                )}
              </div>
            )}

            {phResult && (
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-garden-800 dark:text-garden-300">pH</h3>
                {phResult.status === 'ok' && <Verdict tone="ok" title="In the target range" />}
                {phResult.status === 'high' && (
                  <Verdict tone="warn" title="pH is too high">
                    Lower it with a pH-down product. Add a small amount, stir, wait 15–30 minutes, and re-test — chasing the number back and forth is the classic mistake. How much you need depends on your water, so go slowly.
                  </Verdict>
                )}
                {phResult.status === 'low' && (
                  <Verdict tone="warn" title="pH is too low">
                    Raise it with a pH-up product. Add a small amount, stir, wait 15–30 minutes, and re-test. How much you need depends on your water, so go slowly.
                  </Verdict>
                )}
              </div>
            )}

            <p className="mt-5 text-xs text-gray-500 dark:text-gray-400">
              These are typical starting ranges. Your nutrient product's own feeding chart takes priority, since formulas differ. TDS meters use different ppm conversion factors (500 or 700 per 1.0 mS/cm) — check which your meter uses, or read EC directly. Dilution math assumes strength scales in proportion to concentration.
            </p>
            <p className="mt-2 text-sm">
              <Link href="/guides/hydroponic-nutrients-ph-ec/" className="text-garden-600 dark:text-garden-400 underline">Read the full Nutrients, pH & EC guide →</Link>
            </p>
          </div>
        </div>
      </div>

      <RelatedTools
        items={[
          { href: '/tools/hydroponic-nutrient-dosing-calculator/', emoji: '🧴', title: 'Nutrient Dosing Calculator', body: 'How much of each nutrient part to add.' },
          { href: '/tools/hydroponic-light-calculator/', emoji: '💡', title: 'Grow Light DLI Calculator', body: 'Is your light strong enough for your crop?' },
          { href: '/tools/hydroponic-system-chooser/', emoji: '🫙', title: 'Hydroponic System Chooser', body: 'Find the right system for your space.' },
        ]}
      />
    </div>
  )
}

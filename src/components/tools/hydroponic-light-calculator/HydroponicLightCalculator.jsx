'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { hydroponicCrops, getHydroponicCrop } from '../../../data/hydroponic-targets.js'
import { computeDli, hoursForDli, ppfdForDli, assessDli } from '../../../logic/hydroponicCalculators.js'
import { useToolUsageTracking } from '../../../logic/useToolUsageTracking.js'
import { Card, cardCls, NumberField, Stat, Verdict, ToolHeader, RelatedTools, fmt } from '../hydroponics/HydroShared.jsx'

export default function HydroponicLightCalculator() {
  const [cropId, setCropId] = useState('leafy')
  const [ppfd, setPpfd] = useState('')
  const [hours, setHours] = useState('16')

  const crop = getHydroponicCrop(cropId)
  const ppfdNum = parseFloat(ppfd)
  const hoursNum = parseFloat(hours)

  const dli = ppfdNum > 0 && hoursNum > 0 ? computeDli(ppfdNum, Math.min(hoursNum, 24)) : null
  const verdict = dli ? assessDli(dli, crop.dli) : null

  const plan = useMemo(() => {
    const [low, high] = crop.dli
    const mid = (low + high) / 2
    return {
      hoursAtPpfd: ppfdNum > 0 ? [hoursForDli(low, ppfdNum), hoursForDli(high, ppfdNum)] : null,
      ppfdAtHours:
        hoursNum > 0 ? [ppfdForDli(low, Math.min(hoursNum, 24)), ppfdForDli(high, Math.min(hoursNum, 24))] : null,
      mid,
    }
  }, [crop, ppfdNum, hoursNum])

  const usageTracking = useToolUsageTracking('hydroponic-light-calculator', !!dli, { requireInteraction: false })

  const hoursTooLong = plan.hoursAtPpfd && plan.hoursAtPpfd[0] > 24

  return (
    <div className="max-w-5xl mx-auto" {...usageTracking}>
      <ToolHeader
        title="Grow Light DLI Calculator"
        blurb="Turn your light's intensity and hours into a Daily Light Integral (DLI), see whether it matches what your crop needs, and find out how many hours — or how much intensity — would get you there."
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

          <Card label="2. Your light">
            <div className="space-y-4">
              <NumberField
                label="Light intensity at the plant canopy (PPFD)"
                value={ppfd}
                onChange={setPpfd}
                placeholder="e.g. 250"
                suffix="µmol/m²/s"
              />
              <NumberField label="Hours of light per day" value={hours} onChange={setHours} placeholder="e.g. 16" suffix="hours" />
              <p className="text-xs text-gray-500 dark:text-gray-400">
                PPFD is measured at the plants, not printed on the box — it drops as the light is raised. Many grow-light makers publish PPFD charts by hanging height; a PAR meter or phone-based PAR app gives a rough real reading.
              </p>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <div className={`${cardCls} lg:sticky lg:top-20`}>
            <h2 className="text-xl font-bold text-garden-800 dark:text-garden-300 mb-4">
              Light needs for {crop.name.toLowerCase()}
            </h2>
            <div className="grid grid-cols-2 gap-3 mb-5">
              <Stat label="Target DLI (mol/m²/day)" value={`${crop.dli[0]} – ${crop.dli[1]}`} />
              <Stat label="Typical photoperiod" value={`${crop.lightHours[0]} – ${crop.lightHours[1]} h`} />
            </div>

            {!dli && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Enter your light intensity (PPFD) and hours per day to see your DLI.
              </p>
            )}

            {dli && (
              <div className="space-y-4">
                <Stat label="Your DLI (mol/m²/day)" value={fmt(dli, 1)} />
                {verdict.status === 'ok' && <Verdict tone="ok" title="Your light is in the target range for this crop" />}
                {verdict.status === 'low' && (
                  <Verdict tone="warn" title="Your light is below the target range">
                    Expect slower growth, and leggy, pale plants — fruiting crops may not flower or set fruit well. See below for how to close the gap.
                  </Verdict>
                )}
                {verdict.status === 'high' && (
                  <Verdict tone="warn" title="Your light is above the typical range">
                    More light is not always better — very high intensity can scorch leaves and raise water and nutrient demand. Watch for tip burn and wilting, and consider raising the light or shortening the day.
                  </Verdict>
                )}

                {plan.hoursAtPpfd && (
                  <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-sm text-gray-700 dark:text-gray-300">
                    <p className="font-semibold mb-1">At {fmt(ppfdNum, 0)} µmol/m²/s, reach the target DLI with:</p>
                    {hoursTooLong ? (
                      <p>More than 24 hours of light — this light is too dim for this crop. You need a stronger light or to move it closer to the plants.</p>
                    ) : (
                      <p><strong>{fmt(plan.hoursAtPpfd[0], 1)} – {fmt(plan.hoursAtPpfd[1], 1)} hours</strong> per day.</p>
                    )}
                  </div>
                )}

                {plan.ppfdAtHours && (
                  <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-sm text-gray-700 dark:text-gray-300">
                    <p className="font-semibold mb-1">With {fmt(Math.min(hoursNum, 24), 1)} hours of light, you need:</p>
                    <p><strong>{fmt(plan.ppfdAtHours[0], 0)} – {fmt(plan.ppfdAtHours[1], 0)} µmol/m²/s</strong> at the canopy.</p>
                  </div>
                )}
              </div>
            )}

            <p className="mt-5 text-xs text-gray-500 dark:text-gray-400">
              DLI = PPFD × hours × 3600 ÷ 1,000,000. Target ranges are typical starting points from controlled-environment growing — references vary, and natural light from a window counts toward the total. Plants also need a dark period, so avoid 24-hour lighting.
            </p>
            <p className="mt-2 text-sm">
              <Link href="/guides/hydroponic-grow-lights/" className="text-garden-600 dark:text-garden-400 underline">Read the Grow Lights guide — types, height, and running cost →</Link>
            </p>
          </div>
        </div>
      </div>

      <RelatedTools
        items={[
          { href: '/tools/hydroponic-ec-ph-calculator/', emoji: '🧪', title: 'EC & pH Assistant', body: 'Check strength and pH against targets.' },
          { href: '/tools/hydroponic-nutrient-dosing-calculator/', emoji: '🧴', title: 'Nutrient Dosing Calculator', body: 'How much of each nutrient part to add.' },
          { href: '/tools/hydroponic-system-chooser/', emoji: '🫙', title: 'Hydroponic System Chooser', body: 'Find the right system for your space.' },
        ]}
      />
    </div>
  )
}

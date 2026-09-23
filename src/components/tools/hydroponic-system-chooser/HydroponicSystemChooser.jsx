'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import plants from '../../../data/plants.js'
import {
  GOAL_OPTIONS,
  POWER_OPTIONS,
  BUDGET_OPTIONS,
  SPACE_OPTIONS,
  TIME_OPTIONS,
  chooseHydroponicSystems,
  plantsForSystem,
} from '../../../logic/hydroponicSystemChooser.js'
import { useToolUsageTracking } from '../../../logic/useToolUsageTracking.js'

const cardCls = 'bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6'

function OptionGroup({ label, options, value, onChange }) {
  return (
    <div className={cardCls}>
      <p className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">{label}</p>
      <div className="grid gap-2">
        {options.map((o) => (
          <button
            key={String(o.value)}
            type="button"
            onClick={() => onChange(o.value)}
            aria-pressed={value === o.value}
            className={`text-left px-3 py-2.5 rounded-xl text-sm transition-all border ${
              value === o.value
                ? 'bg-earth-500 text-white border-earth-500'
                : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-earth-400 text-gray-800 dark:text-gray-100'
            }`}
          >
            <span className="font-medium">{o.label}</span>
            {o.hint && (
              <span className={`block text-xs ${value === o.value ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                {o.hint}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

function PlantChips({ list, tone }) {
  if (list.length === 0) return null
  const cls =
    tone === 'great'
      ? 'bg-garden-50 dark:bg-gray-900 border-garden-200 dark:border-garden-700 text-garden-800 dark:text-garden-300'
      : 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300'
  return (
    <div className="flex flex-wrap gap-2">
      {list.map((p) => (
        <Link
          key={p.id}
          href={`/plants/${p.id}/`}
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium hover:underline ${cls}`}
        >
          <span>{p.emoji}</span>
          {p.name}
        </Link>
      ))}
    </div>
  )
}

function guideFor(systemId) {
  if (systemId === 'kratky') return { href: '/guides/kratky-method/', label: 'The Kratky Method guide' }
  return null
}

export default function HydroponicSystemChooser() {
  const [goal, setGoal] = useState('greens')
  const [power, setPower] = useState(1)
  const [budget, setBudget] = useState('mid')
  const [space, setSpace] = useState(1)
  const [time, setTime] = useState(1)

  const { ranked, ruledOut } = useMemo(
    () => chooseHydroponicSystems({ goal, power, budget, space, time }),
    [goal, power, budget, space, time]
  )

  const top = ranked[0]
  const runnersUp = ranked.slice(1, 3)
  const topPlants = useMemo(() => (top ? plantsForSystem(top.system.id, plants) : null), [top])
  const topGuide = top ? guideFor(top.system.id) : null

  const usageTracking = useToolUsageTracking('hydroponic-system-chooser', !!top)

  return (
    <div className="max-w-5xl mx-auto" {...usageTracking}>
      <Link
        href="/tools/"
        className="inline-flex items-center gap-1 text-sm text-garden-600 dark:text-garden-400 hover:underline mb-4"
      >
        ← Back to Garden Tools
      </Link>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-garden-800 dark:text-garden-300">
          Hydroponic System Chooser
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Answer five quick questions and get the home hydroponic system that fits your space,
          budget, and time — plus exactly which plants it suits and why the others were ruled out.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* INPUTS */}
        <div className="lg:col-span-2 space-y-4">
          <OptionGroup label="1. What do you want to grow?" options={GOAL_OPTIONS} value={goal} onChange={setGoal} />
          <OptionGroup label="2. How do you feel about electricity?" options={POWER_OPTIONS} value={power} onChange={setPower} />
          <OptionGroup label="3. Starter budget" options={BUDGET_OPTIONS} value={budget} onChange={setBudget} />
          <OptionGroup label="4. Where will it live?" options={SPACE_OPTIONS} value={space} onChange={setSpace} />
          <OptionGroup label="5. Time you can give it" options={TIME_OPTIONS} value={time} onChange={setTime} />
        </div>

        {/* RESULTS */}
        <div className="lg:col-span-3 space-y-6">
          {!top && (
            <div className={cardCls}>
              <h2 className="text-xl font-bold text-garden-800 dark:text-garden-300 mb-2">
                No system fits every answer
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                That combination rules everything out. Loosen one answer — usually the budget,
                space, or electricity question — and a match will appear. Below is why each system
                was dropped.
              </p>
            </div>
          )}

          {top && (
            <div className={`${cardCls} lg:sticky lg:top-20`}>
              <p className="text-xs font-semibold uppercase tracking-wide text-earth-600 dark:text-earth-400 mb-1">
                Your best match
              </p>
              <h2 className="text-2xl font-bold text-garden-800 dark:text-garden-300">
                <span className="mr-2">{top.system.emoji}</span>
                {top.system.name}
              </h2>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{top.system.tagline}</p>

              <div className="grid grid-cols-3 gap-3 text-center my-5">
                <Stat label="Difficulty" value={top.system.difficulty} />
                <Stat label="Starter cost" value={`$${top.system.costMin}–${top.system.costMax}`} />
                <Stat label="Weekly care" value={`${top.system.weeklyMinutes} min`} />
              </div>

              {top.reasons.length > 0 && (
                <ul className="space-y-1.5 mb-5">
                  {top.reasons.map((r) => (
                    <li key={r} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-garden-600 flex-shrink-0">✓</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div>
                  <h3 className="text-sm font-bold text-garden-800 dark:text-garden-300 mb-1.5">Strengths</h3>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300 list-disc pl-4">
                    {top.system.pros.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-garden-800 dark:text-garden-300 mb-1.5">Watch out for</h3>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300 list-disc pl-4">
                    {top.system.cons.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-sm text-gray-700 dark:text-gray-300 mb-5">
                <strong>If the power goes out:</strong> {top.system.outageRisk}
              </div>

              {topPlants && (topPlants.great.length > 0 || topPlants.ok.length > 0) && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-garden-800 dark:text-garden-300">
                    Plants that suit this system
                  </h3>
                  {topPlants.great.length > 0 && (
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1.5">Best fits</p>
                      <PlantChips list={topPlants.great} tone="great" />
                    </div>
                  )}
                  {topPlants.ok.length > 0 && (
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1.5">Workable</p>
                      <PlantChips list={topPlants.ok} tone="ok" />
                    </div>
                  )}
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                {topGuide && (
                  <Link href={topGuide.href} className="text-garden-600 dark:text-garden-400 underline">
                    Read {topGuide.label} →
                  </Link>
                )}
                <Link href="/guides/hydroponics-for-beginners/" className="text-garden-600 dark:text-garden-400 underline">
                  Hydroponics for Beginners →
                </Link>
                <Link href="/guides/hydroponic-nutrients-ph-ec/" className="text-garden-600 dark:text-garden-400 underline">
                  Nutrients, pH & EC →
                </Link>
              </div>
            </div>
          )}

          {runnersUp.length > 0 && (
            <div className={cardCls}>
              <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-3">Also worth considering</h2>
              <div className="space-y-3">
                {runnersUp.map((r) => (
                  <div key={r.system.id} className="border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                    <p className="font-semibold text-gray-800 dark:text-gray-100">
                      {r.system.emoji} {r.system.name}
                      <span className="ml-2 text-xs font-normal text-gray-500 dark:text-gray-400">
                        ${r.system.costMin}–{r.system.costMax} · {r.system.difficulty}
                      </span>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{r.system.tagline}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {ruledOut.length > 0 && (
            <details className={cardCls}>
              <summary className="cursor-pointer text-sm font-semibold text-gray-700 dark:text-gray-300">
                Why the other {ruledOut.length} {ruledOut.length === 1 ? 'system was' : 'systems were'} ruled out
              </summary>
              <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                {ruledOut.map(({ system, reason }) => (
                  <li key={system.id}>
                    <strong>{system.emoji} {system.name}:</strong> {reason}
                  </li>
                ))}
              </ul>
            </details>
          )}

          <p className="text-xs text-gray-500 dark:text-gray-400">
            Costs are typical starter ranges for a small home setup (roughly 1–6 plants) and are
            approximate — DIY builds run lower and branded kits higher. Recommendations are general
            guidance, not a guarantee of results.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-4">
          More garden planning tools
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <RelatedLink href="/tools/fertilizer-calculator/" emoji="🧪" title="Fertilizer Calculator" body="Includes a hydroponic nutrient mode." />
          <RelatedLink href="/tools/watering-calculator/" emoji="💧" title="Watering Calculator" body="A plan for soil-grown plants." />
          <RelatedLink href="/wizard/" emoji="🌱" title="Garden Architect" body="Get plant picks for your hydroponic setup." />
        </div>
      </div>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="bg-garden-50 dark:bg-gray-900 rounded-xl p-3">
      <p className="text-sm font-bold text-garden-800 dark:text-garden-300 leading-tight">{value}</p>
      <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">{label}</p>
    </div>
  )
}

function RelatedLink({ href, emoji, title, body }) {
  return (
    <Link
      href={href}
      className="block bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 hover:border-garden-400 transition-colors"
    >
      <p className="font-semibold text-gray-800 dark:text-gray-100">{emoji} {title}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{body}</p>
    </Link>
  )
}

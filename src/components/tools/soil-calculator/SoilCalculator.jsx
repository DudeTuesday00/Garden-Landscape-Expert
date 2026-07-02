'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { soilMixes } from '../../../data/soil-mixes.js'
import {
  rectangularVolumeCuFt,
  circularVolumeCuFt,
  computeSoilBreakdown,
  containerPresetOptions,
  getContainerPresetVolumeCuFt,
} from '../../../logic/soilCalculator.js'

const RELATED_GUIDES = [
  { id: 'square-foot-gardening', title: 'Square Foot Gardening', emoji: '📐' },
  { id: 'no-dig-gardening', title: 'No-Dig Gardening', emoji: '🌱' },
  { id: 'childrens-garden', title: "Children's Vegetable Garden", emoji: '🧒' },
]

export default function SoilCalculator() {
  const [shape, setShape] = useState('rectangular') // rectangular | circular | preset
  const [length, setLength] = useState('4')
  const [width, setWidth] = useState('8')
  const [height, setHeight] = useState('1')
  const [diameter, setDiameter] = useState('2')
  const [circHeight, setCircHeight] = useState('1.5')
  const [preset, setPreset] = useState('10gal')
  const [quantity, setQuantity] = useState('1')
  const [mixId, setMixId] = useState('raised-bed')

  const volumeCuFt = useMemo(() => {
    if (shape === 'rectangular') {
      return rectangularVolumeCuFt(parseFloat(length), parseFloat(width), parseFloat(height))
    }
    if (shape === 'circular') {
      return circularVolumeCuFt(parseFloat(diameter), parseFloat(circHeight))
    }
    return getContainerPresetVolumeCuFt(preset) || 0
  }, [shape, length, width, height, diameter, circHeight, preset])

  const breakdown = useMemo(() => {
    const qty = Math.max(1, parseInt(quantity, 10) || 1)
    return computeSoilBreakdown({ volumeCuFt, mixId, quantity: qty })
  }, [volumeCuFt, mixId, quantity])

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        href="/tools/"
        className="inline-flex items-center gap-1 text-sm text-garden-600 dark:text-garden-400 hover:underline mb-4"
      >
        ← Back to Garden Tools
      </Link>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-garden-800 dark:text-garden-300">
          Soil &amp; Raised Bed Calculator
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Figure out exactly how much soil to buy for a raised bed, container, or Square Foot
          Garden — broken down into a real mix ratio and a bag-count shopping list.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* INPUTS */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              1. Bed or container shape
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'rectangular', label: 'Rectangular' },
                { id: 'circular', label: 'Circular' },
                { id: 'preset', label: 'Common Pot Size' },
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setShape(s.id)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all border text-center ${
                    shape === s.id
                      ? 'bg-garden-600 text-white border-garden-600'
                      : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-garden-400'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {shape === 'rectangular' && (
              <div className="mt-4 grid grid-cols-3 gap-3">
                <NumberField label="Length (ft)" value={length} onChange={setLength} />
                <NumberField label="Width (ft)" value={width} onChange={setWidth} />
                <NumberField label="Height (ft)" value={height} onChange={setHeight} />
              </div>
            )}

            {shape === 'circular' && (
              <div className="mt-4 grid grid-cols-2 gap-3">
                <NumberField label="Diameter (ft)" value={diameter} onChange={setDiameter} />
                <NumberField label="Height (ft)" value={circHeight} onChange={setCircHeight} />
              </div>
            )}

            {shape === 'preset' && (
              <div className="mt-4">
                <select
                  value={preset}
                  onChange={(e) => setPreset(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm"
                >
                  {containerPresetOptions.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="mt-4">
              <NumberField
                label="How many identical beds/containers?"
                value={quantity}
                onChange={setQuantity}
                min="1"
                step="1"
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              2. Soil mix
            </label>
            <div className="space-y-2">
              {Object.entries(soilMixes).map(([id, mix]) => (
                <button
                  key={id}
                  onClick={() => setMixId(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all border ${
                    mixId === id
                      ? 'bg-garden-600 text-white border-garden-600'
                      : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-garden-400'
                  }`}
                >
                  <div className="font-medium">{mix.label}</div>
                  <div className={`text-xs mt-0.5 ${mixId === id ? 'text-garden-100' : 'text-gray-500 dark:text-gray-400'}`}>
                    {mix.description}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RESULTS */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 lg:sticky lg:top-20">
            <h2 className="text-xl font-bold text-garden-800 dark:text-garden-300 mb-4">
              You&rsquo;ll need
            </h2>

            {breakdown ? (
              <>
                <div className="grid grid-cols-3 gap-3 text-center mb-5">
                  <Stat label="Cubic Feet" value={breakdown.totalCuFt.toFixed(1)} />
                  <Stat label="Cubic Yards" value={breakdown.totalCuYd.toFixed(2)} />
                  <Stat label="Gallons" value={Math.round(breakdown.totalGallons)} />
                </div>

                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  Shopping list ({breakdown.mix.label})
                </h3>
                <div className="space-y-2">
                  {breakdown.components.map((c) => (
                    <div key={c.name} className="flex items-center justify-between border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5">
                      <div>
                        <div className="text-sm font-medium text-gray-800 dark:text-gray-100">{c.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{c.cuFt.toFixed(1)} cu ft</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-garden-700 dark:text-garden-300">{c.bags}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">~{c.bagSize} cu ft bags</div>
                      </div>
                    </div>
                  ))}
                </div>

                {breakdown.mix.guideId && (
                  <Link
                    href={`/guides/${breakdown.mix.guideId}/`}
                    className="mt-4 inline-block text-sm text-garden-600 dark:text-garden-400 hover:underline"
                  >
                    📖 See this mix explained in the {breakdown.mix.guideTitle} guide →
                  </Link>
                )}

                <p className="mt-5 text-xs text-gray-500 dark:text-gray-400">
                  Bag counts assume common retail sizes — check your product's label, since bag
                  volume varies by brand.
                </p>
              </>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">Enter dimensions to see results.</p>
            )}
          </div>
        </div>
      </div>

      {/* Related guides */}
      <div className="mt-10">
        <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-4">
          Guides for building your bed
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {RELATED_GUIDES.map((g) => (
            <Link
              key={g.id}
              href={`/guides/${g.id}/`}
              className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-garden-400 dark:hover:border-garden-500 p-4 transition-colors flex items-center gap-2"
            >
              <span className="text-xl">{g.emoji}</span>
              <span className="text-sm font-medium text-garden-800 dark:text-garden-300 group-hover:underline">
                {g.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function NumberField({ label, value, onChange, min = '0', step = '0.5' }) {
  return (
    <div>
      <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">{label}</label>
      <input
        type="number"
        min={min}
        step={step}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-garden-600"
      />
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="bg-garden-50 dark:bg-gray-900 rounded-xl py-3 px-2 border border-garden-100 dark:border-gray-700">
      <p className="text-lg font-bold text-garden-800 dark:text-garden-300">{value}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{label}</p>
    </div>
  )
}

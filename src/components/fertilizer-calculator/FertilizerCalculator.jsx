'use client'

import { useState } from 'react'
import {
  plantTypeOptions,
  growthStageOptions,
  physicalSizeOptions,
  getFertilizerRecommendations,
  getFeedingProfile
} from '../../data/fertilizer-recommendations'
import { fertilizerTypes } from '../../data/fertilizer-types'

export default function FertilizerCalculator() {
  const [plantType, setPlantType] = useState('vegetable')
  const [growingMethod, setGrowingMethod] = useState('in-ground')
  const [growthStage, setGrowthStage] = useState('mature')
  const [physicalSize, setPhysicalSize] = useState('per-plant')

  const recommendations = getFertilizerRecommendations({
    plantType,
    growthStage,
    physicalSize,
    growingMethod,
  })

  const feedingProfile = getFeedingProfile(plantType, growingMethod)
  const selectedPlantLabel = plantTypeOptions.find(p => p.id === plantType)?.label || plantType

  // Separate essential/high priority from alternatives and notes
  const coreRecommendations = recommendations.filter(r =>
    !r.type && (r.priority === 'essential' || r.priority === 'high' || r.priority === 'medium')
  )
  const alternatives = recommendations.filter(r => r.priority === 'alternative')
  const notes = recommendations.filter(r => r.type === 'note' || r.type === 'important-note')

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-garden-800 dark:text-garden-300">
          Fertilizer Calculator
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Get personalized, practical fertilizer recommendations based on what you're growing,
          how big it is, and whether it's in the ground or a container.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* INPUTS */}
        <div className="lg:col-span-2 space-y-6">
          {/* Plant Type */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              1. What are you growing?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {plantTypeOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setPlantType(option.id)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm transition-all border ${
                    plantType === option.id
                      ? 'bg-garden-600 text-white border-garden-600'
                      : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-garden-400 dark:hover:border-garden-600'
                  }`}
                >
                  <span className="text-lg">{option.emoji}</span>
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
            <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 italic">
              {feedingProfile}
            </p>
          </div>

          {/* Growing Method */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              2. Growing method
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: 'in-ground', label: 'In-Ground' },
                { value: 'container', label: 'Container' },
                { value: 'hydroponic', label: 'Hydroponics' },
              ].map((method) => (
                <button
                  key={method.value}
                  onClick={() => {
                    setGrowingMethod(method.value)
                    // Reset size to a sensible hydro default when switching methods
                    if (method.value === 'hydroponic') {
                      setPhysicalSize('medium-hydro')
                    } else if (physicalSize.includes('hydro')) {
                      setPhysicalSize('per-plant')
                    }
                  }}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all border text-center ${
                    growingMethod === method.value
                      ? 'bg-earth-500 text-white border-earth-500'
                      : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-earth-400'
                  }`}
                >
                  {method.label}
                </button>
              ))}
            </div>
            {growingMethod === 'hydroponic' && (
              <p className="mt-2 text-xs text-earth-600 dark:text-earth-400">
                Hydroponic recommendations focus on liquid nutrients, EC/pH management, and reservoir schedules.
              </p>
            )}
          </div>

          {/* Size Inputs */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                3. Growth stage
              </label>
              <div className="space-y-2">
                {growthStageOptions.map((stage) => (
                  <button
                    key={stage.id}
                    onClick={() => setGrowthStage(stage.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all border ${
                      growthStage === stage.id
                        ? 'bg-garden-600 text-white border-garden-600'
                        : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-garden-400'
                    }`}
                  >
                    {stage.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                4. {growingMethod === 'hydroponic' ? 'System / Reservoir Size' : 'Physical size (more precise)'}
              </label>
              <select
                value={physicalSize}
                onChange={(e) => setPhysicalSize(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm"
              >
                {growingMethod === 'hydroponic' ? (
                  <>
                    <option value="small-hydro">Small System (DWC bucket, Kratky jar, 1–5 gal reservoir)</option>
                    <option value="medium-hydro">Medium System (NFT, Drip, 5–20 gal reservoir)</option>
                    <option value="large-hydro">Large System (20+ gal reservoir or commercial-style)</option>
                  </>
                ) : (
                  physicalSizeOptions.map((size) => (
                    <option key={size.id} value={size.id}>
                      {size.label}
                    </option>
                  ))
                )}
              </select>
              <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400">
                {growingMethod === 'hydroponic'
                  ? 'Select the scale of your hydroponic setup.'
                  : 'Choose the option that best matches your situation.'}
              </p>
            </div>
          </div>
        </div>

        {/* RESULTS */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 lg:sticky lg:top-20">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-garden-800 dark:text-garden-300">
                Recommendations for {selectedPlantLabel}
              </h2>
              <span className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                {growingMethod === 'hydroponic' ? 'Hydroponics' : growingMethod === 'container' ? 'Container' : 'In-Ground'}
              </span>
            </div>

            {/* Core Recommendations */}
            <div className="space-y-4">
              {coreRecommendations.length > 0 ? (
                coreRecommendations.map((rec, index) => {
                  const fert = fertilizerTypes.find(f => f.id === rec.fertilizerId)
                  return (
                    <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="font-semibold text-garden-700 dark:text-garden-300">
                            {fert?.name || rec.fertilizerId}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                            {rec.amount} {rec.unit}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`inline-block text-xs px-2.5 py-0.5 rounded-full font-medium ${
                            rec.priority === 'essential' ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400' :
                            rec.priority === 'high' ? 'bg-garden-100 text-garden-700 dark:bg-garden-900/40 dark:text-garden-400' :
                            'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                          }`}>
                            {rec.priority}
                          </span>
                        </div>
                      </div>

                      <div className="mt-2 text-sm">
                        <span className="font-medium text-gray-700 dark:text-gray-300">When:</span>{' '}
                        <span className="text-gray-600 dark:text-gray-400">{rec.timing}</span>
                      </div>

                      {rec.notes && (
                        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                          {rec.notes}
                        </div>
                      )}

                      {rec.why && (
                        <div className="mt-2 text-xs italic text-gray-500 dark:text-gray-500 border-l-2 border-gray-200 dark:border-gray-700 pl-2">
                          {rec.why}
                        </div>
                      )}
                    </div>
                  )
                })
              ) : (
                <p className="text-gray-500">Select options above to see recommendations.</p>
              )}
            </div>

            {/* Synthetic Alternatives */}
            {alternatives.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  Synthetic Alternatives (Secondary Options)
                </h3>
                <div className="space-y-3">
                  {alternatives.map((rec, index) => {
                    const fert = fertilizerTypes.find(f => f.id === rec.fertilizerId)
                    return (
                      <div key={index} className="text-sm border border-gray-200 dark:border-gray-700 rounded-lg p-3 bg-gray-50 dark:bg-gray-900/50">
                        <div className="font-medium">{fert?.name}</div>
                        <div className="text-gray-600 dark:text-gray-400 mt-0.5">
                          {rec.amount} — {rec.timing}
                        </div>
                        {rec.notes && <div className="text-xs mt-1 text-gray-500">{rec.notes}</div>}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Important Notes */}
            {notes.length > 0 && (
              <div className="mt-6 space-y-3">
                {notes.map((note, i) => (
                  <div
                    key={i}
                    className={`text-sm p-3 rounded-xl border ${
                      note.type === 'important-note'
                        ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-300'
                        : 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    {note.message}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
        These are general guidelines based on common horticultural practices.
        A soil test is the best way to know exactly what your soil needs.
      </div>
    </div>
  )
}

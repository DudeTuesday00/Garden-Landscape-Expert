'use client'

import { useState, useEffect } from 'react'
import questions from '../../data/questions.js'
import { matchPlants } from '../../logic/matchPlants.js'
import { trackEvent } from '../../logic/analytics.js'
import WelcomeScreen from './WelcomeScreen.jsx'
import QuestionStep from './QuestionStep.jsx'
import ProgressBar from './ProgressBar.jsx'
import Results from './Results.jsx'

const STAGES = {
  WELCOME: 'welcome',
  QUESTIONS: 'questions',
  RESULTS: 'results',
}

// Encodes/decodes the answers object into a shareable `?a=` URL param so
// wizard results survive a refresh and can be copied/shared as a link.
function encodeAnswers(answers) {
  try {
    return encodeURIComponent(JSON.stringify(answers))
  } catch {
    return ''
  }
}

function decodeAnswers(param) {
  try {
    const parsed = JSON.parse(decodeURIComponent(param))
    return parsed && typeof parsed === 'object' ? parsed : null
  } catch {
    return null
  }
}

function getActiveQuestions(answers) {
  const isHydro = answers.growingMethod === 'hydroponic'
  const methodChosen = answers.growingMethod !== undefined

  return questions.filter((q) => {
    if (q.skipIfHydro && methodChosen && isHydro) return false
    if (q.hydroOnly && (!methodChosen || !isHydro)) return false
    return true
  })
}

export default function Wizard() {
  const [stage, setStage] = useState(STAGES.WELCOME)
  const [stepIndex, setStepIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [results, setResults] = useState([])

  const activeQuestions = getActiveQuestions(answers)
  const currentQuestion = activeQuestions[stepIndex]

  // On load, restore a shared/bookmarked result set from the URL (?a=...)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const encoded = params.get('a')
    if (encoded) {
      const decoded = decodeAnswers(encoded)
      if (decoded) {
        setAnswers(decoded)
        setResults(matchPlants(decoded))
        setStage(STAGES.RESULTS)
      }
      return
    }

    // Prefill the zone question from a whole-number zone handed off by the
    // USDA Hardiness Zone Finder tool (?zone=7) — maps it to the matching
    // wizard option's own value reference so it shows pre-selected.
    const zoneParam = params.get('zone')
    if (!zoneParam) return
    const zoneNum = parseInt(zoneParam, 10)
    if (Number.isNaN(zoneNum)) return
    const zoneQuestion = questions.find((q) => q.id === 'zone')
    const matchedOption = zoneQuestion?.options.find(
      (opt) => zoneNum >= opt.value[0] && zoneNum <= opt.value[1]
    )
    if (matchedOption) {
      setAnswers((prev) => ({ ...prev, zone: matchedOption.value }))
    }
  }, [])

  function handleStart() {
    setStage(STAGES.QUESTIONS)
    setStepIndex(0)
    setAnswers((prev) => (prev.zone ? { zone: prev.zone } : {}))
  }

  function handleAnswer(id, value) {
    setAnswers((prev) => {
      const next = { ...prev, [id]: value }
      if (id === 'growingMethod') {
        const wasHydro = prev.growingMethod === 'hydroponic'
        const nowHydro = value === 'hydroponic'
        if (wasHydro !== nowHydro) {
          delete next.zone
          delete next.soil
          delete next.season
          delete next.hydroSystem
        }
      }
      return next
    })
  }

  function handleNext() {
    const active = getActiveQuestions(answers)
    if (stepIndex < active.length - 1) {
      setStepIndex((i) => i + 1)
    } else {
      const matched = matchPlants(answers)
      setResults(matched)
      setStage(STAGES.RESULTS)
      const encoded = encodeAnswers(answers)
      window.history.replaceState(null, '', encoded ? `?a=${encoded}` : window.location.pathname)
      trackEvent('wizard_complete', {
        growing_method: answers.growingMethod || 'unspecified',
        plant_type: Array.isArray(answers.type) ? answers.type.join(',') : answers.type || 'unspecified',
        result_count: matched.length,
      })
    }
  }

  function handleBack() {
    if (stepIndex === 0) {
      setStage(STAGES.WELCOME)
    } else {
      setStepIndex((i) => i - 1)
    }
  }

  function handleRestart() {
    setStage(STAGES.WELCOME)
    setStepIndex(0)
    setAnswers({})
    setResults([])
    window.history.replaceState(null, '', window.location.pathname)
  }

  function handleGoToStep(index) {
    setStepIndex(index)
    setStage(STAGES.QUESTIONS)
  }

  return (
    <div className="min-h-screen flex items-start justify-center px-4 py-10 print:py-0 print:px-0">
      <div className="w-full max-w-2xl">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 sm:p-8 print:shadow-none print:border-0 print:rounded-none">
          {stage === STAGES.WELCOME && (
            <WelcomeScreen onStart={handleStart} />
          )}

          {stage === STAGES.QUESTIONS && currentQuestion && (
            <div className="flex flex-col gap-6">
              <ProgressBar current={stepIndex + 1} total={activeQuestions.length} />
              <QuestionStep
                question={currentQuestion}
                answer={answers[currentQuestion.id]}
                onAnswer={handleAnswer}
                onBack={handleBack}
                onNext={handleNext}
                isFirst={stepIndex === 0}
              />
            </div>
          )}

          {stage === STAGES.RESULTS && (
            <Results
              plants={results}
              answers={answers}
              activeQuestions={activeQuestions}
              onRestart={handleRestart}
              onGoToStep={handleGoToStep}
            />
          )}
        </div>

        <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-4 print:hidden">
          Planting Atlas · Plant Selection Wizard v1.0
        </p>
      </div>
    </div>
  )
}

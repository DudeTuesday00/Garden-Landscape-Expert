import { useState } from 'react'
import questions from '../../data/questions.js'
import { matchPlants } from '../../logic/matchPlants.js'
import WelcomeScreen from './WelcomeScreen.jsx'
import QuestionStep from './QuestionStep.jsx'
import ProgressBar from './ProgressBar.jsx'
import Results from './Results.jsx'

const STAGES = {
  WELCOME: 'welcome',
  QUESTIONS: 'questions',
  RESULTS: 'results',
}

/**
 * Compute which questions are active based on current answers.
 * - skipIfHydro questions are removed when growingMethod === 'hydroponic'
 * - hydroOnly questions are removed when growingMethod !== 'hydroponic'
 * - Before growingMethod is answered, hydro-conditional questions stay hidden
 */
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

  function handleStart() {
    setStage(STAGES.QUESTIONS)
    setStepIndex(0)
    setAnswers({})
  }

  function handleAnswer(id, value) {
    setAnswers((prev) => {
      const next = { ...prev, [id]: value }

      // When growing method changes, clear answers that may no longer be relevant
      if (id === 'growingMethod') {
        const wasHydro = prev.growingMethod === 'hydroponic'
        const nowHydro = value === 'hydroponic'
        if (wasHydro !== nowHydro) {
          // Clear skipped/swapped question answers to avoid stale data
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
    // Recompute active questions with the latest answers to get correct length
    const active = getActiveQuestions(answers)
    if (stepIndex < active.length - 1) {
      setStepIndex((i) => i + 1)
    } else {
      const matched = matchPlants(answers)
      setResults(matched)
      setStage(STAGES.RESULTS)
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
  }

  return (
    <div className="min-h-screen flex items-start justify-center px-4 py-10">
      <div className="w-full max-w-2xl">
        {/* Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
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
              onRestart={handleRestart}
            />
          )}
        </div>

        <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-4">
          Garden Landscape Expert · Plant Selection Wizard v1.0
        </p>
      </div>
    </div>
  )
}

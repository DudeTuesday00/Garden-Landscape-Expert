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

export default function Wizard() {
  const [stage, setStage] = useState(STAGES.WELCOME)
  const [stepIndex, setStepIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [results, setResults] = useState([])

  function handleStart() {
    setStage(STAGES.QUESTIONS)
    setStepIndex(0)
    setAnswers({})
  }

  function handleAnswer(id, value) {
    setAnswers((prev) => ({ ...prev, [id]: value }))
  }

  function handleNext() {
    if (stepIndex < questions.length - 1) {
      setStepIndex((i) => i + 1)
    } else {
      // Final step — run matching
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
        {/* Brand strip */}
        <div className="flex items-center gap-2 mb-6 text-garden-700">
          <span className="text-2xl">🌿</span>
          <span className="font-bold text-sm tracking-wide uppercase">Garden Landscape Expert</span>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8">
          {stage === STAGES.WELCOME && (
            <WelcomeScreen onStart={handleStart} />
          )}

          {stage === STAGES.QUESTIONS && (
            <div className="flex flex-col gap-6">
              <ProgressBar current={stepIndex + 1} total={questions.length} />
              <QuestionStep
                question={questions[stepIndex]}
                answer={answers[questions[stepIndex].id]}
                onAnswer={handleAnswer}
                onBack={handleBack}
                onNext={handleNext}
                isFirst={stepIndex === 0}
              />
            </div>
          )}

          {stage === STAGES.RESULTS && (
            <Results plants={results} answers={answers} onRestart={handleRestart} />
          )}
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          Garden Landscape Expert · Plant Selection Wizard v1.0
        </p>
      </div>
    </div>
  )
}

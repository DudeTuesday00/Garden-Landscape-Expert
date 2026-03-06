export default function QuestionStep({ question, answer, onAnswer, onBack, onNext, isFirst }) {
  const { id, title, subtitle, options, multi } = question

  function toggle(value) {
    if (!multi) {
      onAnswer(id, value)
      return
    }
    const current = answer || []
    if (current.includes(value)) {
      onAnswer(id, current.filter((v) => v !== value))
    } else {
      onAnswer(id, [...current, value])
    }
  }

  function isSelected(value) {
    if (!multi) return answer === value
    return (answer || []).includes(value)
  }

  const canProceed = multi ? (answer && answer.length > 0) : answer !== undefined

  return (
    <div className="flex flex-col gap-6">
      {/* Question header */}
      <div>
        <h2 className="text-2xl font-bold text-garden-800 dark:text-garden-300 leading-snug">{title}</h2>
        {subtitle && (
          <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{subtitle}</p>
        )}
      </div>

      {/* Option grid */}
      <div className={`grid gap-3 ${options.length <= 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'}`}>
        {options.map((opt) => {
          const selected = isSelected(opt.value)
          return (
            <button
              key={JSON.stringify(opt.value)}
              onClick={() => toggle(opt.value)}
              className={`
                flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all duration-150
                ${selected
                  ? 'border-garden-500 bg-garden-50 dark:bg-gray-600 shadow-sm'
                  : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-garden-300 dark:hover:border-garden-500 hover:bg-garden-50/50 dark:hover:bg-gray-600'}
              `}
            >
              <span className="text-2xl leading-none mt-0.5 shrink-0">{opt.emoji}</span>
              <div>
                <p className={`font-semibold text-sm ${selected ? 'text-garden-800 dark:text-garden-300' : 'text-gray-800 dark:text-gray-100'}`}>
                  {opt.label}
                </p>
                {opt.description && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{opt.description}</p>
                )}
              </div>
              {multi && (
                <span className={`ml-auto shrink-0 mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center
                  ${selected ? 'border-garden-500 bg-garden-500' : 'border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-600'}`}>
                  {selected && <span className="text-white text-xs font-bold">✓</span>}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-2">
        <button
          onClick={onBack}
          disabled={isFirst}
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-garden-700 dark:hover:text-garden-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          disabled={!canProceed}
          className="bg-garden-600 hover:bg-garden-700 active:bg-garden-800 disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold px-6 py-2.5 rounded-xl transition-colors duration-150"
        >
          {canProceed ? 'Next →' : 'Select an option'}
        </button>
      </div>
    </div>
  )
}

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="flex flex-col items-center text-center gap-6 py-8">
      <div className="text-7xl select-none">🌱</div>

      <div>
        <h1 className="text-4xl font-bold text-garden-800 dark:text-garden-300 leading-tight">
          Planting Atlas
        </h1>
        <p className="mt-2 text-lg text-garden-600 dark:text-garden-400">Research it. Plant it. Grow it.</p>
      </div>

      <p className="max-w-md text-gray-600 dark:text-gray-300 text-base leading-relaxed">
        Answer a few simple questions about your garden conditions and goals —
        we'll recommend the perfect plants for you to grow and thrive.
      </p>

      <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500 dark:text-gray-400">
        {[
          { emoji: '🌸', text: 'Flowers' },
          { emoji: '🥦', text: 'Vegetables' },
          { emoji: '🍓', text: 'Fruits' },
          { emoji: '🌿', text: 'Herbs' },
          { emoji: '🌳', text: 'Trees & Shrubs' },
        ].map(({ emoji, text }) => (
          <span key={text} className="flex items-center gap-1 bg-white dark:bg-gray-700 border border-garden-200 dark:border-garden-700 rounded-full px-3 py-1">
            {emoji} {text}
          </span>
        ))}
      </div>

      <button
        onClick={onStart}
        className="mt-2 bg-garden-600 hover:bg-garden-700 active:bg-garden-800 text-white font-semibold text-lg px-10 py-3 rounded-2xl shadow-md transition-colors duration-200"
      >
        Get Started →
      </button>

      <p className="text-xs text-gray-400 dark:text-gray-500">8 quick questions · no account required</p>
    </div>
  )
}

export default function HomePage({ onNavigate }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl flex flex-col items-center gap-10">

        {/* Hero */}
        <div className="text-center">
          <div className="text-6xl mb-4 select-none">🌿</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-garden-800 dark:text-garden-300 leading-tight">
            Planting Atlas
          </h1>
          <p className="mt-3 text-lg text-garden-600 dark:text-garden-400 font-medium">
            Research it. Plant it. Grow it.
          </p>
        </div>

        {/* Two path cards */}
        <div className="w-full grid sm:grid-cols-2 gap-6">

          {/* Garden Architect */}
          <button
            onClick={() => onNavigate('wizard')}
            className="group bg-white dark:bg-gray-800 border-2 border-garden-200 dark:border-garden-700 hover:border-garden-500 dark:hover:border-garden-400 rounded-3xl shadow-md hover:shadow-xl transition-all duration-200 p-8 flex flex-col items-center text-center gap-4"
          >
            <span className="text-6xl group-hover:scale-110 transition-transform duration-200 select-none">🌱</span>
            <div>
              <h2 className="text-2xl font-bold text-garden-800 dark:text-garden-300">
                Garden Architect
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                The Smartest Way to Plan Your Garden
              </p>
            </div>
            <span className="mt-2 inline-block bg-garden-600 group-hover:bg-garden-700 text-white text-sm font-semibold px-6 py-2 rounded-xl transition-colors duration-200">
              Start Planning →
            </span>
          </button>

          {/* Plantopedia */}
          <button
            onClick={() => onNavigate('guides')}
            className="group bg-white dark:bg-gray-800 border-2 border-earth-400 dark:border-earth-600 hover:border-earth-500 dark:hover:border-earth-400 rounded-3xl shadow-md hover:shadow-xl transition-all duration-200 p-8 flex flex-col items-center text-center gap-4"
          >
            <span className="text-6xl group-hover:scale-110 transition-transform duration-200 select-none">📖</span>
            <div>
              <h2 className="text-2xl font-bold text-garden-800 dark:text-garden-300">
                Plantopedia
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Your Green Thumb Repository
              </p>
            </div>
            <span className="mt-2 inline-block bg-earth-500 hover:bg-earth-600 text-white text-sm font-semibold px-6 py-2 rounded-xl transition-colors duration-200">
              Explore Guides →
            </span>
          </button>

        </div>

        <p className="text-xs text-gray-400 dark:text-gray-500">
          148 plants · 26 live guides · no account required
        </p>
      </div>
    </div>
  )
}

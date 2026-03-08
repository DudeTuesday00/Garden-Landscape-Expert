import gardenArchitectImg from './wizard/Garden Architect.png'
import plantopediaImg from './guides/Plantopedia.png'
import SEO from './SEO.jsx'

export default function HomePage({ onNavigate }) {
  return (
    <>
    <SEO
      description="Your complete planting atlas for gardens and landscapes. Get personalized plant recommendations from 148 plants across 12 types, or browse 75+ expert growing guides by USDA zone."
      keywords="planting guide, landscape design, garden planning, USDA zones, plant database, gardening expert, hydroponic gardening, Plantopedia, Garden Architect"
      path="/"
    />
    <div className="px-4 py-8">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-6">

        {/* Hero */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-garden-800 dark:text-garden-300 leading-tight">
            Planting Atlas
          </h1>
          <p className="mt-2 text-lg text-garden-600 dark:text-garden-400 font-medium">
            Plan it. Plant it. Grow it.
          </p>
        </div>

        {/* Two path cards */}
        <div className="w-full grid sm:grid-cols-2 gap-6">

          {/* Garden Architect */}
          <button
            onClick={() => onNavigate('wizard')}
            className="group bg-white dark:bg-gray-800 border-2 border-garden-200 dark:border-garden-700 hover:border-garden-500 dark:hover:border-garden-400 rounded-3xl shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden flex flex-col text-left"
          >
            <img
              src={gardenArchitectImg}
              alt="Garden Architect"
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6 flex flex-col gap-3">
              <div>
                <h2 className="text-xl font-bold text-garden-800 dark:text-garden-300">
                  Garden Architect
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  The Smartest Way to Plan Your Garden
                </p>
              </div>
              <span className="self-start bg-garden-600 group-hover:bg-garden-700 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-colors duration-200">
                Start Planning →
              </span>
            </div>
          </button>

          {/* Plantopedia */}
          <button
            onClick={() => onNavigate('guides')}
            className="group bg-white dark:bg-gray-800 border-2 border-earth-400 dark:border-earth-600 hover:border-earth-500 dark:hover:border-earth-400 rounded-3xl shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden flex flex-col text-left"
          >
            <img
              src={plantopediaImg}
              alt="Plantopedia"
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6 flex flex-col gap-3">
              <div>
                <h2 className="text-xl font-bold text-garden-800 dark:text-garden-300">
                  Plantopedia
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Your Green Thumb Repository
                </p>
              </div>
              <span className="self-start bg-earth-500 group-hover:bg-earth-600 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-colors duration-200">
                Explore Guides →
              </span>
            </div>
          </button>

        </div>

        <p className="text-xs text-gray-400 dark:text-gray-500">
          148 plants · 26 live guides · no account required
        </p>
      </div>
    </div>
    </>
  )
}

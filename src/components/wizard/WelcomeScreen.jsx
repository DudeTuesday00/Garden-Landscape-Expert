import gardenArchitectImg from './garden-architect-2.png'
import TrustBadges from '../TrustBadges.jsx'

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="flex flex-col items-center text-center gap-6 py-8">
      <img
        src={gardenArchitectImg.src}
        alt="Garden Architect"
        className="w-full max-w-2xl rounded-2xl shadow-md"
      />

      <div>
        <h1 className="text-4xl font-bold text-garden-800 dark:text-garden-300 leading-tight">
          Garden Architect
        </h1>
        <p className="mt-2 text-lg text-garden-600 dark:text-garden-400">The Smartest Way to Plan Your Garden</p>
      </div>

      <p className="max-w-md text-gray-600 dark:text-gray-300 text-base leading-relaxed">
        Answer a few simple questions about your garden conditions and goals —
        we'll recommend the perfect plants for you to grow and thrive.
      </p>

      <TrustBadges />

      <button
        onClick={onStart}
        className="bg-garden-600 hover:bg-garden-700 active:bg-garden-800 text-white font-semibold text-lg px-10 py-3 rounded-2xl shadow-md transition-colors duration-200"
      >
        Get Started →
      </button>

      <p className="text-xs text-gray-400 dark:text-gray-500">8 quick questions · no account required</p>
    </div>
  )
}

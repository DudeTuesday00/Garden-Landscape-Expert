import gardenArchitectImg from './Garden Architect 2.png'

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="flex flex-col items-center gap-6 py-8">
      <div className="flex flex-row items-center gap-6 w-full max-w-2xl">
        <img
          src={gardenArchitectImg.src}
          alt="Garden Architect"
          className="w-40 sm:w-48 flex-shrink-0 rounded-2xl shadow-md object-cover"
        />

        <div className="flex flex-col gap-3 text-left">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-garden-800 dark:text-garden-300 leading-tight">
              Garden Architect
            </h1>
            <p className="mt-1 text-base text-garden-600 dark:text-garden-400">The Smartest Way to Plan Your Garden</p>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Answer a few simple questions about your garden conditions and goals —
            we'll recommend the perfect plants for you to grow and thrive.
          </p>

          <div>
            <button
              onClick={onStart}
              className="bg-garden-600 hover:bg-garden-700 active:bg-garden-800 text-white font-semibold text-base px-8 py-2.5 rounded-2xl shadow-md transition-colors duration-200"
            >
              Get Started →
            </button>
            <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">8 quick questions · no account required</p>
          </div>
        </div>
      </div>
    </div>
  )
}

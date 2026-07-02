import Link from 'next/link'
import { tools } from '../../data/tools.js'

function ToolCard({ tool }) {
  const isLive = tool.status === 'live'

  const cardClasses =
    'group bg-white dark:bg-gray-800 rounded-2xl border shadow-sm p-6 flex flex-col gap-3 transition-all duration-200 ' +
    (isLive
      ? 'border-gray-200 dark:border-gray-700 hover:border-garden-400 dark:hover:border-garden-500 hover:shadow-md'
      : 'border-gray-200 dark:border-gray-700 opacity-80')

  const content = (
    <>
      <div className="flex items-start justify-between gap-2">
        <span className="text-4xl">{tool.emoji}</span>
        {!isLive && (
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-earth-100 dark:bg-earth-900/30 text-earth-700 dark:text-earth-300 border border-earth-300 dark:border-earth-700 whitespace-nowrap">
            Coming Soon
          </span>
        )}
      </div>
      <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 group-hover:text-garden-600 dark:group-hover:text-garden-400 transition-colors">
        {tool.name}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
        {tool.tagline}
      </p>
      {isLive && (
        <span className="text-sm text-garden-600 dark:text-garden-400 font-medium group-hover:underline">
          Open Tool →
        </span>
      )}
    </>
  )

  if (isLive) {
    return (
      <Link href={tool.href} className={cardClasses}>
        {content}
      </Link>
    )
  }

  return <div className={cardClasses}>{content}</div>
}

export default function ToolsHome() {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-garden-800 dark:text-garden-300">
          Garden Tools
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Free, practical tools for planning and maintaining your garden — no account needed.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  )
}

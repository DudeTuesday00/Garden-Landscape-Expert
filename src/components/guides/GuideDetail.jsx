import { shadeTreeContent } from '../../data/guide-content/shade-trees.js'
import { fruitTreeContent } from '../../data/guide-content/fruit-trees.js'
import { ornamentalTreeContent } from '../../data/guide-content/ornamental-trees.js'

const contentMap = {
  'shade-trees': shadeTreeContent,
  'fruit-trees': fruitTreeContent,
  'ornamental-trees': ornamentalTreeContent,
}

function Block({ block }) {
  switch (block.type) {
    case 'p':
      return <p className="text-sm text-gray-700 leading-relaxed">{block.text}</p>

    case 'h3':
      return <h3 className="text-base font-bold text-garden-800 mt-2">{block.text}</h3>

    case 'tip':
      return (
        <div className="flex gap-3 bg-garden-50 border border-garden-200 rounded-xl p-3">
          <span className="text-lg flex-shrink-0 leading-snug">{block.emoji}</span>
          <p className="text-sm text-garden-900 leading-relaxed">{block.text}</p>
        </div>
      )

    case 'warning':
      return (
        <div className="flex gap-3 bg-red-50 border border-red-200 rounded-xl p-3">
          <span className="text-lg flex-shrink-0 leading-snug">{block.emoji}</span>
          <p className="text-sm text-red-900 leading-relaxed">{block.text}</p>
        </div>
      )

    case 'list':
      return (
        <ul className="space-y-1.5 pl-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
              <span className="text-garden-500 flex-shrink-0 mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )

    case 'table':
      return (
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-xs border-collapse min-w-full">
            <thead>
              <tr className="bg-garden-100">
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    className="text-left px-3 py-2 font-semibold text-garden-800 border-b border-garden-200 whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="px-3 py-2 text-gray-700 border-b border-gray-100 align-top"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    default:
      return null
  }
}

function Section({ section }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8 flex flex-col gap-4">
      <h2 className="text-lg font-bold text-garden-800 pb-2 border-b border-garden-100">
        {section.title}
      </h2>
      {section.blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  )
}

export default function GuideDetail({ guideId, onBack }) {
  const content = contentMap[guideId]

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Guide content not found.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">

        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm text-garden-600 font-medium hover:text-garden-800 transition-colors self-start"
        >
          <span>←</span>
          <span>Back to Planting Guides</span>
        </button>

        {/* Hero */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8 text-center">
          <div className="text-5xl mb-3">{content.hero.emoji}</div>
          <h1 className="text-2xl font-bold text-garden-800">{content.hero.title}</h1>
          <p className="mt-2 text-sm text-gray-500 max-w-lg mx-auto">{content.hero.subtitle}</p>
        </div>

        {/* Intro */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8">
          <p className="text-sm text-gray-700 leading-relaxed">{content.intro}</p>
        </div>

        {/* Sections */}
        {content.sections.map((section) => (
          <Section key={section.id} section={section} />
        ))}

        {/* Footer nav */}
        <div className="text-center pb-4">
          <button
            onClick={onBack}
            className="text-sm text-garden-600 font-medium hover:text-garden-800 transition-colors"
          >
            ← Back to All Planting Guides
          </button>
        </div>

      </div>
    </div>
  )
}

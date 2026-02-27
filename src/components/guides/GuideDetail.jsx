import { shadeTreeContent } from '../../data/guide-content/shade-trees.js'
import { fruitTreeContent } from '../../data/guide-content/fruit-trees.js'
import { ornamentalTreeContent } from '../../data/guide-content/ornamental-trees.js'
import { dwarfTreeContent } from '../../data/guide-content/dwarf-trees.js'
import { evergreenTreeContent } from '../../data/guide-content/evergreen-trees.js'
import { privacyTreeContent } from '../../data/guide-content/privacy-trees.js'
import { streetTreeContent } from '../../data/guide-content/street-trees.js'
import { fallColorTreeContent } from '../../data/guide-content/fall-color-trees.js'
import { plantsForColorContent } from '../../data/guide-content/plants-for-color.js'
import { moonGardenContent } from '../../data/guide-content/moon-garden.js'
import { cottageGardenContent } from '../../data/guide-content/cottage-garden.js'
import { pollinatorGardenContent } from '../../data/guide-content/pollinator-garden.js'
import { cutFlowerGardenContent } from '../../data/guide-content/cut-flower-garden.js'
import { wildflowerMeadowContent } from '../../data/guide-content/wildflower-meadow.js'
import { springBulbGardenContent } from '../../data/guide-content/spring-bulb-garden.js'
import { longBloomingPerennialsContent } from '../../data/guide-content/long-blooming-perennials.js'

const contentMap = {
  'shade-trees': shadeTreeContent,
  'fruit-trees': fruitTreeContent,
  'ornamental-trees': ornamentalTreeContent,
  'dwarf-trees': dwarfTreeContent,
  'evergreen-trees': evergreenTreeContent,
  'privacy-trees': privacyTreeContent,
  'street-trees': streetTreeContent,
  'fall-color-trees': fallColorTreeContent,
  'plants-for-color': plantsForColorContent,
  'moon-garden': moonGardenContent,
  'cottage-garden': cottageGardenContent,
  'pollinator-garden': pollinatorGardenContent,
  'cut-flower-garden': cutFlowerGardenContent,
  'wildflower-meadow': wildflowerMeadowContent,
  'spring-bulb-garden': springBulbGardenContent,
  'long-blooming-perennials': longBloomingPerennialsContent,
}

// Per-guide color themes using standard Tailwind palettes.
// All class name strings must be complete so Tailwind JIT can detect them.
const themes = {
  'shade-trees': {
    heroBg: 'bg-gradient-to-br from-emerald-50 to-green-100',
    heroBorder: 'border-emerald-200',
    heroTitle: 'text-emerald-800',
    backBtn: 'text-emerald-700 hover:text-emerald-900',
    sectionTitle: 'text-emerald-800',
    sectionBorder: 'border-emerald-100',
    h3: 'text-emerald-800',
    tipBg: 'bg-emerald-50',
    tipBorder: 'border-emerald-200',
    tipText: 'text-emerald-900',
    tableHead: 'bg-emerald-100',
    tableHeadText: 'text-emerald-800',
    tableHeadBorder: 'border-emerald-200',
    bullet: 'text-emerald-500',
  },
  'fruit-trees': {
    heroBg: 'bg-gradient-to-br from-orange-50 to-amber-100',
    heroBorder: 'border-orange-200',
    heroTitle: 'text-orange-800',
    backBtn: 'text-orange-700 hover:text-orange-900',
    sectionTitle: 'text-orange-800',
    sectionBorder: 'border-orange-100',
    h3: 'text-orange-800',
    tipBg: 'bg-orange-50',
    tipBorder: 'border-orange-200',
    tipText: 'text-orange-900',
    tableHead: 'bg-orange-100',
    tableHeadText: 'text-orange-800',
    tableHeadBorder: 'border-orange-200',
    bullet: 'text-orange-500',
  },
  'ornamental-trees': {
    heroBg: 'bg-gradient-to-br from-pink-50 to-rose-100',
    heroBorder: 'border-pink-200',
    heroTitle: 'text-pink-800',
    backBtn: 'text-pink-700 hover:text-pink-900',
    sectionTitle: 'text-pink-800',
    sectionBorder: 'border-pink-100',
    h3: 'text-pink-800',
    tipBg: 'bg-pink-50',
    tipBorder: 'border-pink-200',
    tipText: 'text-pink-900',
    tableHead: 'bg-pink-100',
    tableHeadText: 'text-pink-800',
    tableHeadBorder: 'border-pink-200',
    bullet: 'text-pink-500',
  },
  'dwarf-trees': {
    heroBg: 'bg-gradient-to-br from-teal-50 to-cyan-100',
    heroBorder: 'border-teal-200',
    heroTitle: 'text-teal-800',
    backBtn: 'text-teal-700 hover:text-teal-900',
    sectionTitle: 'text-teal-800',
    sectionBorder: 'border-teal-100',
    h3: 'text-teal-800',
    tipBg: 'bg-teal-50',
    tipBorder: 'border-teal-200',
    tipText: 'text-teal-900',
    tableHead: 'bg-teal-100',
    tableHeadText: 'text-teal-800',
    tableHeadBorder: 'border-teal-200',
    bullet: 'text-teal-500',
  },
  'evergreen-trees': {
    heroBg: 'bg-gradient-to-br from-green-50 to-emerald-100',
    heroBorder: 'border-green-200',
    heroTitle: 'text-green-800',
    backBtn: 'text-green-700 hover:text-green-900',
    sectionTitle: 'text-green-800',
    sectionBorder: 'border-green-100',
    h3: 'text-green-800',
    tipBg: 'bg-green-50',
    tipBorder: 'border-green-200',
    tipText: 'text-green-900',
    tableHead: 'bg-green-100',
    tableHeadText: 'text-green-800',
    tableHeadBorder: 'border-green-200',
    bullet: 'text-green-500',
  },
  'privacy-trees': {
    heroBg: 'bg-gradient-to-br from-cyan-50 to-teal-100',
    heroBorder: 'border-cyan-200',
    heroTitle: 'text-cyan-800',
    backBtn: 'text-cyan-700 hover:text-cyan-900',
    sectionTitle: 'text-cyan-800',
    sectionBorder: 'border-cyan-100',
    h3: 'text-cyan-800',
    tipBg: 'bg-cyan-50',
    tipBorder: 'border-cyan-200',
    tipText: 'text-cyan-900',
    tableHead: 'bg-cyan-100',
    tableHeadText: 'text-cyan-800',
    tableHeadBorder: 'border-cyan-200',
    bullet: 'text-cyan-500',
  },
  'street-trees': {
    heroBg: 'bg-gradient-to-br from-slate-50 to-zinc-100',
    heroBorder: 'border-slate-200',
    heroTitle: 'text-slate-800',
    backBtn: 'text-slate-600 hover:text-slate-900',
    sectionTitle: 'text-slate-800',
    sectionBorder: 'border-slate-200',
    h3: 'text-slate-700',
    tipBg: 'bg-slate-50',
    tipBorder: 'border-slate-200',
    tipText: 'text-slate-900',
    tableHead: 'bg-slate-100',
    tableHeadText: 'text-slate-800',
    tableHeadBorder: 'border-slate-200',
    bullet: 'text-slate-500',
  },
  'fall-color-trees': {
    heroBg: 'bg-gradient-to-br from-amber-50 to-orange-100',
    heroBorder: 'border-amber-200',
    heroTitle: 'text-amber-800',
    backBtn: 'text-amber-700 hover:text-amber-900',
    sectionTitle: 'text-amber-800',
    sectionBorder: 'border-amber-100',
    h3: 'text-amber-800',
    tipBg: 'bg-amber-50',
    tipBorder: 'border-amber-200',
    tipText: 'text-amber-900',
    tableHead: 'bg-amber-100',
    tableHeadText: 'text-amber-800',
    tableHeadBorder: 'border-amber-200',
    bullet: 'text-amber-500',
  },
  'plants-for-color': {
    heroBg: 'bg-gradient-to-br from-violet-50 to-purple-100',
    heroBorder: 'border-violet-200',
    heroTitle: 'text-violet-800',
    backBtn: 'text-violet-700 hover:text-violet-900',
    sectionTitle: 'text-violet-800',
    sectionBorder: 'border-violet-100',
    h3: 'text-violet-800',
    tipBg: 'bg-violet-50',
    tipBorder: 'border-violet-200',
    tipText: 'text-violet-900',
    tableHead: 'bg-violet-100',
    tableHeadText: 'text-violet-800',
    tableHeadBorder: 'border-violet-200',
    bullet: 'text-violet-500',
  },
  'moon-garden': {
    heroBg: 'bg-gradient-to-br from-indigo-50 to-slate-100',
    heroBorder: 'border-indigo-200',
    heroTitle: 'text-indigo-800',
    backBtn: 'text-indigo-700 hover:text-indigo-900',
    sectionTitle: 'text-indigo-800',
    sectionBorder: 'border-indigo-100',
    h3: 'text-indigo-800',
    tipBg: 'bg-indigo-50',
    tipBorder: 'border-indigo-200',
    tipText: 'text-indigo-900',
    tableHead: 'bg-indigo-100',
    tableHeadText: 'text-indigo-800',
    tableHeadBorder: 'border-indigo-200',
    bullet: 'text-indigo-500',
  },
  'cottage-garden': {
    heroBg: 'bg-gradient-to-br from-rose-50 to-pink-100',
    heroBorder: 'border-rose-200',
    heroTitle: 'text-rose-800',
    backBtn: 'text-rose-700 hover:text-rose-900',
    sectionTitle: 'text-rose-800',
    sectionBorder: 'border-rose-100',
    h3: 'text-rose-800',
    tipBg: 'bg-rose-50',
    tipBorder: 'border-rose-200',
    tipText: 'text-rose-900',
    tableHead: 'bg-rose-100',
    tableHeadText: 'text-rose-800',
    tableHeadBorder: 'border-rose-200',
    bullet: 'text-rose-500',
  },
  'pollinator-garden': {
    heroBg: 'bg-gradient-to-br from-yellow-50 to-amber-100',
    heroBorder: 'border-yellow-300',
    heroTitle: 'text-yellow-800',
    backBtn: 'text-yellow-700 hover:text-yellow-900',
    sectionTitle: 'text-yellow-800',
    sectionBorder: 'border-yellow-200',
    h3: 'text-yellow-800',
    tipBg: 'bg-yellow-50',
    tipBorder: 'border-yellow-300',
    tipText: 'text-yellow-900',
    tableHead: 'bg-yellow-100',
    tableHeadText: 'text-yellow-800',
    tableHeadBorder: 'border-yellow-300',
    bullet: 'text-yellow-600',
  },
  'cut-flower-garden': {
    heroBg: 'bg-gradient-to-br from-fuchsia-50 to-pink-100',
    heroBorder: 'border-fuchsia-200',
    heroTitle: 'text-fuchsia-800',
    backBtn: 'text-fuchsia-700 hover:text-fuchsia-900',
    sectionTitle: 'text-fuchsia-800',
    sectionBorder: 'border-fuchsia-100',
    h3: 'text-fuchsia-800',
    tipBg: 'bg-fuchsia-50',
    tipBorder: 'border-fuchsia-200',
    tipText: 'text-fuchsia-900',
    tableHead: 'bg-fuchsia-100',
    tableHeadText: 'text-fuchsia-800',
    tableHeadBorder: 'border-fuchsia-200',
    bullet: 'text-fuchsia-500',
  },
  'wildflower-meadow': {
    heroBg: 'bg-gradient-to-br from-lime-50 to-green-100',
    heroBorder: 'border-lime-300',
    heroTitle: 'text-lime-800',
    backBtn: 'text-lime-700 hover:text-lime-900',
    sectionTitle: 'text-lime-800',
    sectionBorder: 'border-lime-200',
    h3: 'text-lime-800',
    tipBg: 'bg-lime-50',
    tipBorder: 'border-lime-300',
    tipText: 'text-lime-900',
    tableHead: 'bg-lime-100',
    tableHeadText: 'text-lime-800',
    tableHeadBorder: 'border-lime-300',
    bullet: 'text-lime-600',
  },
  'spring-bulb-garden': {
    heroBg: 'bg-gradient-to-br from-purple-50 to-violet-100',
    heroBorder: 'border-purple-200',
    heroTitle: 'text-purple-800',
    backBtn: 'text-purple-700 hover:text-purple-900',
    sectionTitle: 'text-purple-800',
    sectionBorder: 'border-purple-100',
    h3: 'text-purple-800',
    tipBg: 'bg-purple-50',
    tipBorder: 'border-purple-200',
    tipText: 'text-purple-900',
    tableHead: 'bg-purple-100',
    tableHeadText: 'text-purple-800',
    tableHeadBorder: 'border-purple-200',
    bullet: 'text-purple-500',
  },
  'long-blooming-perennials': {
    heroBg: 'bg-gradient-to-br from-sky-50 to-blue-100',
    heroBorder: 'border-sky-200',
    heroTitle: 'text-sky-800',
    backBtn: 'text-sky-700 hover:text-sky-900',
    sectionTitle: 'text-sky-800',
    sectionBorder: 'border-sky-100',
    h3: 'text-sky-800',
    tipBg: 'bg-sky-50',
    tipBorder: 'border-sky-200',
    tipText: 'text-sky-900',
    tableHead: 'bg-sky-100',
    tableHeadText: 'text-sky-800',
    tableHeadBorder: 'border-sky-200',
    bullet: 'text-sky-500',
  },
}

function Block({ block, theme }) {
  switch (block.type) {
    case 'p':
      return <p className="text-sm text-gray-700 leading-relaxed">{block.text}</p>

    case 'h3':
      return <h3 className={`text-base font-bold ${theme.h3} mt-2`}>{block.text}</h3>

    case 'tip':
      return (
        <div className={`flex gap-3 ${theme.tipBg} border ${theme.tipBorder} rounded-xl p-3`}>
          <span className="text-lg flex-shrink-0 leading-snug">{block.emoji}</span>
          <p className={`text-sm ${theme.tipText} leading-relaxed`}>{block.text}</p>
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
              <span className={`${theme.bullet} flex-shrink-0 mt-0.5`}>•</span>
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
              <tr className={theme.tableHead}>
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    className={`text-left px-3 py-2 font-semibold ${theme.tableHeadText} border-b ${theme.tableHeadBorder} whitespace-nowrap`}
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

function Section({ section, theme }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8 flex flex-col gap-4">
      <h2 className={`text-lg font-bold ${theme.sectionTitle} pb-2 border-b ${theme.sectionBorder}`}>
        {section.title}
      </h2>
      {section.blocks.map((block, i) => (
        <Block key={i} block={block} theme={theme} />
      ))}
    </div>
  )
}

export default function GuideDetail({ guideId, onBack }) {
  const content = contentMap[guideId]
  const theme = themes[guideId] || themes['shade-trees']

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
          className={`flex items-center gap-1.5 text-sm ${theme.backBtn} font-medium transition-colors self-start`}
        >
          <span>←</span>
          <span>Back to Planting Guides</span>
        </button>

        {/* Hero */}
        <div className={`${theme.heroBg} rounded-3xl shadow-lg border ${theme.heroBorder} p-6 sm:p-8 text-center`}>
          <div className="text-5xl mb-3">{content.hero.emoji}</div>
          <h1 className={`text-2xl font-bold ${theme.heroTitle}`}>{content.hero.title}</h1>
          <p className="mt-2 text-sm text-gray-500 max-w-lg mx-auto">{content.hero.subtitle}</p>
        </div>

        {/* Intro */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8">
          <p className="text-sm text-gray-700 leading-relaxed">{content.intro}</p>
        </div>

        {/* Sections */}
        {content.sections.map((section) => (
          <Section key={section.id} section={section} theme={theme} />
        ))}

        {/* Footer nav */}
        <div className="text-center pb-4">
          <button
            onClick={onBack}
            className={`text-sm ${theme.backBtn} font-medium transition-colors`}
          >
            ← Back to All Planting Guides
          </button>
        </div>

      </div>
    </div>
  )
}

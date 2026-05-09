import { Fragment } from 'react'
import Link from 'next/link'
import { contentMap } from '../../data/guide-content/index.js'
import { guideCategories } from '../../data/guides.js'
import { heroImages } from '../../data/hero-images.js'
import AuthorBox from './AuthorBox.jsx'
import NewsletterSignup from '../NewsletterSignup.jsx'

export { heroImages }

const SITE_URL = 'https://plantingatlas.com'

function getRelatedGuides(guideId, count = 3) {
  const category = guideCategories.find((cat) =>
    cat.guides.some((g) => g.id === guideId)
  )
  if (!category) return []
  return category.guides
    .filter((g) => !g.comingSoon && g.id !== guideId)
    .slice(0, count)
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
  'annual-flowers': {
    heroBg: 'bg-gradient-to-br from-red-50 to-orange-100',
    heroBorder: 'border-red-200',
    heroTitle: 'text-red-800',
    backBtn: 'text-red-700 hover:text-red-900',
    sectionTitle: 'text-red-800',
    sectionBorder: 'border-red-100',
    h3: 'text-red-800',
    tipBg: 'bg-red-50',
    tipBorder: 'border-red-200',
    tipText: 'text-red-900',
    tableHead: 'bg-red-100',
    tableHeadText: 'text-red-800',
    tableHeadBorder: 'border-red-200',
    bullet: 'text-red-500',
  },
  'pizza-garden': {
    heroBg: 'bg-gradient-to-br from-orange-50 to-red-100',
    heroBorder: 'border-orange-200',
    heroTitle: 'text-orange-900',
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
  'salad-garden': {
    heroBg: 'bg-gradient-to-br from-green-50 to-lime-100',
    heroBorder: 'border-green-200',
    heroTitle: 'text-green-900',
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
  'herb-garden-design': {
    heroBg: 'bg-gradient-to-br from-stone-50 to-green-100',
    heroBorder: 'border-stone-200',
    heroTitle: 'text-stone-800',
    backBtn: 'text-stone-600 hover:text-stone-900',
    sectionTitle: 'text-stone-700',
    sectionBorder: 'border-stone-100',
    h3: 'text-stone-700',
    tipBg: 'bg-stone-50',
    tipBorder: 'border-stone-200',
    tipText: 'text-stone-900',
    tableHead: 'bg-stone-100',
    tableHeadText: 'text-stone-700',
    tableHeadBorder: 'border-stone-200',
    bullet: 'text-stone-400',
  },
  'tea-garden': {
    heroBg: 'bg-gradient-to-br from-teal-50 to-green-100',
    heroBorder: 'border-teal-200',
    heroTitle: 'text-teal-900',
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
  'childrens-garden': {
    heroBg: 'bg-gradient-to-br from-yellow-50 to-lime-100',
    heroBorder: 'border-yellow-300',
    heroTitle: 'text-yellow-900',
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
  'square-foot-gardening': {
    heroBg: 'bg-gradient-to-br from-blue-50 to-indigo-100',
    heroBorder: 'border-blue-200',
    heroTitle: 'text-blue-900',
    backBtn: 'text-blue-700 hover:text-blue-900',
    sectionTitle: 'text-blue-800',
    sectionBorder: 'border-blue-100',
    h3: 'text-blue-800',
    tipBg: 'bg-blue-50',
    tipBorder: 'border-blue-200',
    tipText: 'text-blue-900',
    tableHead: 'bg-blue-100',
    tableHeadText: 'text-blue-800',
    tableHeadBorder: 'border-blue-200',
    bullet: 'text-blue-500',
  },
  'three-sisters': {
    heroBg: 'bg-gradient-to-br from-amber-50 to-yellow-100',
    heroBorder: 'border-amber-300',
    heroTitle: 'text-amber-900',
    backBtn: 'text-amber-700 hover:text-amber-900',
    sectionTitle: 'text-amber-800',
    sectionBorder: 'border-amber-200',
    h3: 'text-amber-800',
    tipBg: 'bg-amber-50',
    tipBorder: 'border-amber-300',
    tipText: 'text-amber-900',
    tableHead: 'bg-amber-100',
    tableHeadText: 'text-amber-800',
    tableHeadBorder: 'border-amber-300',
    bullet: 'text-amber-600',
  },
  'edible-flowers': {
    heroBg: 'bg-gradient-to-br from-pink-50 to-fuchsia-100',
    heroBorder: 'border-pink-300',
    heroTitle: 'text-pink-900',
    backBtn: 'text-pink-700 hover:text-pink-900',
    sectionTitle: 'text-pink-800',
    sectionBorder: 'border-pink-200',
    h3: 'text-pink-800',
    tipBg: 'bg-pink-50',
    tipBorder: 'border-pink-300',
    tipText: 'text-pink-900',
    tableHead: 'bg-pink-100',
    tableHeadText: 'text-pink-800',
    tableHeadBorder: 'border-pink-300',
    bullet: 'text-pink-500',
  },
  'medicinal-garden': {
    heroBg: 'bg-gradient-to-br from-emerald-50 to-purple-100',
    heroBorder: 'border-emerald-300',
    heroTitle: 'text-emerald-900',
    backBtn: 'text-emerald-700 hover:text-emerald-900',
    sectionTitle: 'text-emerald-800',
    sectionBorder: 'border-emerald-200',
    h3: 'text-emerald-700',
    tipBg: 'bg-emerald-50',
    tipBorder: 'border-emerald-300',
    tipText: 'text-emerald-900',
    tableHead: 'bg-emerald-100',
    tableHeadText: 'text-emerald-800',
    tableHeadBorder: 'border-emerald-300',
    bullet: 'text-emerald-600',
  },
  'plants-for-smell': {
    heroBg: 'bg-gradient-to-br from-purple-50 to-pink-100',
    heroBorder: 'border-purple-200',
    heroTitle: 'text-purple-900',
    backBtn: 'text-purple-700 hover:text-purple-900',
    sectionTitle: 'text-purple-800',
    sectionBorder: 'border-purple-100',
    h3: 'text-purple-700',
    tipBg: 'bg-purple-50',
    tipBorder: 'border-purple-200',
    tipText: 'text-purple-900',
    tableHead: 'bg-purple-100',
    tableHeadText: 'text-purple-800',
    tableHeadBorder: 'border-purple-200',
    bullet: 'text-purple-500',
  },
  'curb-appeal': {
    heroBg: 'bg-gradient-to-br from-sky-50 to-blue-100',
    heroBorder: 'border-sky-200',
    heroTitle: 'text-sky-900',
    backBtn: 'text-sky-700 hover:text-sky-900',
    sectionTitle: 'text-sky-800',
    sectionBorder: 'border-sky-100',
    h3: 'text-sky-700',
    tipBg: 'bg-sky-50',
    tipBorder: 'border-sky-200',
    tipText: 'text-sky-900',
    tableHead: 'bg-sky-100',
    tableHeadText: 'text-sky-800',
    tableHeadBorder: 'border-sky-200',
    bullet: 'text-sky-500',
  },
  'porch-plants': {
    heroBg: 'bg-gradient-to-br from-amber-50 to-yellow-100',
    heroBorder: 'border-amber-200',
    heroTitle: 'text-amber-900',
    backBtn: 'text-amber-700 hover:text-amber-900',
    sectionTitle: 'text-amber-800',
    sectionBorder: 'border-amber-100',
    h3: 'text-amber-700',
    tipBg: 'bg-amber-50',
    tipBorder: 'border-amber-200',
    tipText: 'text-amber-900',
    tableHead: 'bg-amber-100',
    tableHeadText: 'text-amber-800',
    tableHeadBorder: 'border-amber-200',
    bullet: 'text-amber-500',
  },
  'culinary-herb-garden': {
    heroBg: 'bg-gradient-to-br from-lime-50 to-green-100',
    heroBorder: 'border-lime-200',
    heroTitle: 'text-lime-900',
    backBtn: 'text-lime-700 hover:text-lime-900',
    sectionTitle: 'text-lime-800',
    sectionBorder: 'border-lime-100',
    h3: 'text-lime-800',
    tipBg: 'bg-lime-50',
    tipBorder: 'border-lime-200',
    tipText: 'text-lime-900',
    tableHead: 'bg-lime-100',
    tableHeadText: 'text-lime-800',
    tableHeadBorder: 'border-lime-200',
    bullet: 'text-lime-500',
  },
  'japanese-garden': {
    heroBg: 'bg-gradient-to-br from-stone-50 to-slate-100',
    heroBorder: 'border-stone-300',
    heroTitle: 'text-stone-900',
    backBtn: 'text-stone-700 hover:text-stone-900',
    sectionTitle: 'text-stone-800',
    sectionBorder: 'border-stone-200',
    h3: 'text-stone-800',
    tipBg: 'bg-stone-50',
    tipBorder: 'border-stone-300',
    tipText: 'text-stone-900',
    tableHead: 'bg-stone-100',
    tableHeadText: 'text-stone-800',
    tableHeadBorder: 'border-stone-300',
    bullet: 'text-stone-500',
  },
  'winter-garden-prep': {
    heroBg: 'bg-gradient-to-br from-blue-50 to-indigo-100',
    heroBorder: 'border-blue-200',
    heroTitle: 'text-blue-900',
    backBtn: 'text-blue-700 hover:text-blue-900',
    sectionTitle: 'text-blue-900',
    sectionBorder: 'border-blue-100',
    h3: 'text-blue-800',
    tipBg: 'bg-blue-50',
    tipBorder: 'border-blue-200',
    tipText: 'text-blue-900',
    tableHead: 'bg-blue-100',
    tableHeadText: 'text-blue-800',
    tableHeadBorder: 'border-blue-200',
    bullet: 'text-blue-500',
  },
  'xeriscape': {
    heroBg: 'bg-gradient-to-br from-stone-50 to-amber-100',
    heroBorder: 'border-stone-300',
    heroTitle: 'text-stone-900',
    backBtn: 'text-stone-700 hover:text-stone-900',
    sectionTitle: 'text-stone-900',
    sectionBorder: 'border-stone-200',
    h3: 'text-stone-800',
    tipBg: 'bg-stone-50',
    tipBorder: 'border-stone-300',
    tipText: 'text-stone-900',
    tableHead: 'bg-stone-100',
    tableHeadText: 'text-stone-800',
    tableHeadBorder: 'border-stone-200',
    bullet: 'text-amber-600',
  },
  'salsa-garden': {
    heroBg: 'bg-gradient-to-br from-red-50 to-orange-100',
    heroBorder: 'border-red-300',
    heroTitle: 'text-red-900',
    backBtn: 'text-red-700 hover:text-red-900',
    sectionTitle: 'text-red-800',
    sectionBorder: 'border-red-200',
    h3: 'text-red-800',
    tipBg: 'bg-red-50',
    tipBorder: 'border-red-300',
    tipText: 'text-red-900',
    tableHead: 'bg-red-100',
    tableHeadText: 'text-red-800',
    tableHeadBorder: 'border-red-300',
    bullet: 'text-red-500',
  },
  'common-diseases': {
    heroBg: 'bg-gradient-to-br from-slate-50 to-indigo-100',
    heroBorder: 'border-slate-300',
    heroTitle: 'text-slate-900',
    backBtn: 'text-slate-700 hover:text-slate-900',
    sectionTitle: 'text-slate-800',
    sectionBorder: 'border-slate-200',
    h3: 'text-indigo-800',
    tipBg: 'bg-indigo-50',
    tipBorder: 'border-indigo-200',
    tipText: 'text-indigo-900',
    tableHead: 'bg-slate-100',
    tableHeadText: 'text-slate-800',
    tableHeadBorder: 'border-slate-200',
    bullet: 'text-indigo-500',
  },
  'rain-barrel': {
    heroBg: 'bg-gradient-to-br from-sky-50 to-cyan-100',
    heroBorder: 'border-sky-300',
    heroTitle: 'text-sky-900',
    backBtn: 'text-sky-700 hover:text-sky-900',
    sectionTitle: 'text-sky-900',
    sectionBorder: 'border-sky-200',
    h3: 'text-sky-800',
    tipBg: 'bg-sky-50',
    tipBorder: 'border-sky-300',
    tipText: 'text-sky-900',
    tableHead: 'bg-sky-100',
    tableHeadText: 'text-sky-800',
    tableHeadBorder: 'border-sky-200',
    bullet: 'text-cyan-600',
  },
  'zen-garden': {
    heroBg: 'bg-gradient-to-br from-stone-50 to-zinc-100',
    heroBorder: 'border-stone-300',
    heroTitle: 'text-stone-900',
    backBtn: 'text-stone-700 hover:text-stone-900',
    sectionTitle: 'text-stone-900',
    sectionBorder: 'border-stone-200',
    h3: 'text-stone-800',
    tipBg: 'bg-zinc-50',
    tipBorder: 'border-stone-300',
    tipText: 'text-stone-900',
    tableHead: 'bg-stone-100',
    tableHeadText: 'text-stone-800',
    tableHeadBorder: 'border-stone-200',
    bullet: 'text-stone-500',
  },
  'modern-minimalist-garden': {
    heroBg: 'bg-gradient-to-br from-slate-50 to-zinc-100',
    heroBorder: 'border-slate-200',
    heroTitle: 'text-slate-800',
    backBtn: 'text-slate-700 hover:text-slate-900',
    sectionTitle: 'text-slate-800',
    sectionBorder: 'border-slate-100',
    h3: 'text-slate-700',
    tipBg: 'bg-slate-50',
    tipBorder: 'border-slate-300',
    tipText: 'text-slate-900',
    tableHead: 'bg-slate-100',
    tableHeadText: 'text-slate-800',
    tableHeadBorder: 'border-slate-200',
    bullet: 'text-slate-400',
  },
  'weed-management': {
    heroBg: 'bg-gradient-to-br from-amber-50 to-green-100',
    heroBorder: 'border-amber-200',
    heroTitle: 'text-green-900',
    backBtn: 'text-green-700 hover:text-green-900',
    sectionTitle: 'text-green-900',
    sectionBorder: 'border-amber-100',
    h3: 'text-green-800',
    tipBg: 'bg-amber-50',
    tipBorder: 'border-amber-300',
    tipText: 'text-green-900',
    tableHead: 'bg-amber-100',
    tableHeadText: 'text-green-800',
    tableHeadBorder: 'border-amber-200',
    bullet: 'text-amber-500',
  },
  'indoor-houseplants': {
    heroBg: 'bg-gradient-to-br from-lime-50 to-green-100',
    heroBorder: 'border-lime-200',
    heroTitle: 'text-green-800',
    backBtn: 'text-green-700 hover:text-green-900',
    sectionTitle: 'text-green-800',
    sectionBorder: 'border-lime-100',
    h3: 'text-green-700',
    tipBg: 'bg-lime-50',
    tipBorder: 'border-lime-300',
    tipText: 'text-green-900',
    tableHead: 'bg-lime-100',
    tableHeadText: 'text-green-800',
    tableHeadBorder: 'border-lime-200',
    bullet: 'text-lime-500',
  },
  'garden-pests': {
    heroBg: 'bg-gradient-to-br from-orange-50 to-amber-100',
    heroBorder: 'border-orange-200',
    heroTitle: 'text-orange-900',
    backBtn: 'text-orange-700 hover:text-orange-900',
    sectionTitle: 'text-orange-900',
    sectionBorder: 'border-orange-100',
    h3: 'text-orange-800',
    tipBg: 'bg-orange-50',
    tipBorder: 'border-orange-300',
    tipText: 'text-orange-900',
    tableHead: 'bg-orange-100',
    tableHeadText: 'text-orange-800',
    tableHeadBorder: 'border-orange-200',
    bullet: 'text-orange-400',
  },
  'beneficial-insects': {
    heroBg: 'bg-gradient-to-br from-green-50 to-lime-100',
    heroBorder: 'border-green-200',
    heroTitle: 'text-green-900',
    backBtn: 'text-green-700 hover:text-green-900',
    sectionTitle: 'text-green-900',
    sectionBorder: 'border-green-100',
    h3: 'text-green-800',
    tipBg: 'bg-green-50',
    tipBorder: 'border-green-300',
    tipText: 'text-green-900',
    tableHead: 'bg-green-100',
    tableHeadText: 'text-green-800',
    tableHeadBorder: 'border-green-200',
    bullet: 'text-green-500',
  },
  'butterfly-garden': {
    heroBg: 'bg-gradient-to-br from-orange-50 to-amber-100',
    heroBorder: 'border-orange-200',
    heroTitle: 'text-orange-900',
    backBtn: 'text-orange-700 hover:text-orange-900',
    sectionTitle: 'text-orange-900',
    sectionBorder: 'border-orange-100',
    h3: 'text-orange-800',
    tipBg: 'bg-orange-50',
    tipBorder: 'border-orange-300',
    tipText: 'text-orange-900',
    tableHead: 'bg-orange-100',
    tableHeadText: 'text-orange-800',
    tableHeadBorder: 'border-orange-200',
    bullet: 'text-orange-500',
  },
  'rabbit-proof': {
    heroBg: 'bg-gradient-to-br from-stone-50 to-amber-50',
    heroBorder: 'border-stone-300',
    heroTitle: 'text-stone-900',
    backBtn: 'text-stone-700 hover:text-stone-900',
    sectionTitle: 'text-stone-800',
    sectionBorder: 'border-stone-200',
    h3: 'text-stone-800',
    tipBg: 'bg-stone-50',
    tipBorder: 'border-stone-300',
    tipText: 'text-stone-900',
    tableHead: 'bg-stone-100',
    tableHeadText: 'text-stone-800',
    tableHeadBorder: 'border-stone-200',
    bullet: 'text-amber-600',
  },
  'four-season-garden': {
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
    bullet: 'text-orange-500',
  },
  'organic-fertilizing': {
    heroBg: 'bg-gradient-to-br from-lime-50 to-green-100',
    heroBorder: 'border-lime-200',
    heroTitle: 'text-green-800',
    backBtn: 'text-green-700 hover:text-green-900',
    sectionTitle: 'text-green-800',
    sectionBorder: 'border-lime-100',
    h3: 'text-green-800',
    tipBg: 'bg-lime-50',
    tipBorder: 'border-lime-200',
    tipText: 'text-green-900',
    tableHead: 'bg-lime-100',
    tableHeadText: 'text-green-800',
    tableHeadBorder: 'border-lime-200',
    bullet: 'text-lime-600',
  },
  'sunroom-plants': {
    heroBg: 'bg-gradient-to-br from-yellow-50 to-amber-100',
    heroBorder: 'border-yellow-200',
    heroTitle: 'text-amber-800',
    backBtn: 'text-amber-700 hover:text-amber-900',
    sectionTitle: 'text-amber-800',
    sectionBorder: 'border-yellow-100',
    h3: 'text-amber-800',
    tipBg: 'bg-yellow-50',
    tipBorder: 'border-yellow-200',
    tipText: 'text-amber-900',
    tableHead: 'bg-yellow-100',
    tableHeadText: 'text-amber-800',
    tableHeadBorder: 'border-yellow-200',
    bullet: 'text-amber-500',
  },
  'rain-garden': {
    heroBg: 'bg-gradient-to-br from-sky-50 to-teal-100',
    heroBorder: 'border-sky-200',
    heroTitle: 'text-sky-900',
    backBtn: 'text-sky-700 hover:text-sky-900',
    sectionTitle: 'text-sky-900',
    sectionBorder: 'border-sky-100',
    h3: 'text-sky-800',
    tipBg: 'bg-sky-50',
    tipBorder: 'border-sky-200',
    tipText: 'text-sky-900',
    tableHead: 'bg-sky-100',
    tableHeadText: 'text-sky-800',
    tableHeadBorder: 'border-sky-200',
    bullet: 'text-teal-500',
  },
  'mulching-guide': {
    heroBg: 'bg-gradient-to-br from-amber-50 to-yellow-100',
    heroBorder: 'border-amber-200',
    heroTitle: 'text-amber-900',
    backBtn: 'text-amber-700 hover:text-amber-900',
    sectionTitle: 'text-amber-900',
    sectionBorder: 'border-amber-100',
    h3: 'text-amber-800',
    tipBg: 'bg-amber-50',
    tipBorder: 'border-amber-200',
    tipText: 'text-amber-900',
    tableHead: 'bg-amber-100',
    tableHeadText: 'text-amber-800',
    tableHeadBorder: 'border-amber-200',
    bullet: 'text-yellow-600',
  },
  'hummingbird-garden': {
    heroBg: 'bg-gradient-to-br from-red-50 to-rose-100',
    heroBorder: 'border-red-200',
    heroTitle: 'text-red-800',
    backBtn: 'text-red-700 hover:text-red-900',
    sectionTitle: 'text-red-800',
    sectionBorder: 'border-red-100',
    h3: 'text-red-800',
    tipBg: 'bg-red-50',
    tipBorder: 'border-red-200',
    tipText: 'text-red-900',
    tableHead: 'bg-red-100',
    tableHeadText: 'text-red-800',
    tableHeadBorder: 'border-red-200',
    bullet: 'text-red-500',
  },
  'indoor-herb-garden': {
    heroBg: 'bg-gradient-to-br from-teal-50 to-green-100',
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
  'privacy-screening': {
    heroBg: 'bg-gradient-to-br from-slate-50 to-green-100',
    heroBorder: 'border-slate-200',
    heroTitle: 'text-slate-900',
    backBtn: 'text-slate-700 hover:text-slate-900',
    sectionTitle: 'text-slate-900',
    sectionBorder: 'border-slate-100',
    h3: 'text-slate-800',
    tipBg: 'bg-slate-50',
    tipBorder: 'border-slate-200',
    tipText: 'text-slate-900',
    tableHead: 'bg-slate-100',
    tableHeadText: 'text-slate-800',
    tableHeadBorder: 'border-slate-200',
    bullet: 'text-green-600',
  },
  'medicinal-herb-garden': {
    heroBg: 'bg-gradient-to-br from-green-50 to-emerald-100',
    heroBorder: 'border-green-200',
    heroTitle: 'text-green-900',
    backBtn: 'text-green-700 hover:text-green-900',
    sectionTitle: 'text-green-900',
    sectionBorder: 'border-green-100',
    h3: 'text-green-800',
    tipBg: 'bg-green-50',
    tipBorder: 'border-green-200',
    tipText: 'text-green-900',
    tableHead: 'bg-green-100',
    tableHeadText: 'text-green-800',
    tableHeadBorder: 'border-green-200',
    bullet: 'text-emerald-600',
  },
}

function Block({ block, theme }) {
  switch (block.type) {
    case 'p':
      return <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{block.text}</p>

    case 'h3':
      return <h3 className={`text-base font-bold ${theme.h3} dark:text-gray-200 mt-2`}>{block.text}</h3>

    case 'tip':
      return (
        <div className={`flex gap-3 ${theme.tipBg} dark:bg-gray-700 border ${theme.tipBorder} dark:border-gray-600 rounded-xl p-3`}>
          <span className="text-lg flex-shrink-0 leading-snug">{block.emoji}</span>
          <p className={`text-sm ${theme.tipText} dark:text-gray-200 leading-relaxed`}>{block.text}</p>
        </div>
      )

    case 'warning':
      return (
        <div className="flex gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-3">
          <span className="text-lg flex-shrink-0 leading-snug">{block.emoji}</span>
          <p className="text-sm text-red-900 dark:text-red-300 leading-relaxed">{block.text}</p>
        </div>
      )

    case 'affiliate':
      return (
        <div className="rounded-2xl border-2 border-earth-500 bg-amber-50 dark:bg-gray-700 dark:border-yellow-600 overflow-hidden shadow-sm">
          {block.image && (
            <div className="flex justify-center bg-white dark:bg-gray-800 px-6 pt-5 pb-3">
              <img src={block.image} alt={block.title} className="h-52 w-auto object-contain" />
            </div>
          )}
          <div className="p-5 flex flex-col gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-earth-500 dark:text-yellow-400 mb-1">Recommended Product</p>
              <h3 className="text-base font-bold text-garden-800 dark:text-white leading-snug">{block.title}</h3>
            </div>
            {block.description && (
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{block.description}</p>
            )}
            {block.benefits && (
              <ul className="space-y-1.5">
                {block.benefits.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-earth-500 dark:text-yellow-400 flex-shrink-0">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            <a
              href={block.link}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block text-center bg-garden-600 hover:bg-garden-700 text-white font-semibold text-sm rounded-xl px-5 py-2.5 transition-colors self-start mt-1"
            >
              {block.linkText || 'View on Amazon'} →
            </a>
            <p className="text-xs text-gray-400 dark:text-gray-500 italic">
              Affiliate link — we may earn a small commission at no extra cost to you.
            </p>
          </div>
        </div>
      )

    case 'list':
      return (
        <ul className="space-y-1.5 pl-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className={`${theme.bullet} dark:text-gray-400 flex-shrink-0 mt-0.5`}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )

    case 'table':
      return (
        <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
          <table className="w-full text-xs border-collapse min-w-full">
            <thead>
              <tr className={`${theme.tableHead} dark:bg-gray-700`}>
                {block.headers.map((h, i) => (
                  <th key={i} className={`text-left px-3 py-2 font-semibold ${theme.tableHeadText} dark:text-gray-200 border-b ${theme.tableHeadBorder} dark:border-gray-600 whitespace-nowrap`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-2 text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-gray-600 align-top">
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
    <div id={section.id} className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 sm:p-8 flex flex-col gap-4">
      <h2 className={`text-lg font-bold ${theme.sectionTitle} dark:text-gray-100 pb-2 border-b ${theme.sectionBorder} dark:border-gray-600`}>
        {section.title}
      </h2>
      {section.blocks.map((block, i) => (
        <Block key={i} block={block} theme={theme} />
      ))}
    </div>
  )
}

export default function GuideDetail({ guideId }) {
  const content = contentMap[guideId]
  const theme = themes[guideId] || themes['shade-trees']

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">Guide content not found.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">

        {/* Back button */}
        <Link
          href="/guides"
          className={`flex items-center gap-1.5 text-sm ${theme.backBtn} dark:text-gray-300 dark:hover:text-white font-medium transition-colors self-start`}
        >
          <span>←</span>
          <span>Back to Planting Guides</span>
        </Link>

        {/* Hero */}
        <div className={`${theme.heroBg} dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-lg border ${theme.heroBorder} dark:border-gray-600 overflow-hidden text-center`}>
          {heroImages[guideId] && (
            <img
              src={heroImages[guideId]}
              alt={content.hero.title}
              className="w-full h-auto"
            />
          )}
          <div className="p-6 sm:p-8">
            {!heroImages[guideId] && <div className="text-5xl mb-3">{content.hero.emoji}</div>}
            <h1 className={`text-2xl font-bold ${theme.heroTitle} dark:text-white`}>{content.hero.title}</h1>
            <p className="mt-1.5 text-xs text-gray-400 dark:text-gray-500">
              Written by <span className="font-medium">David Rodgers</span> — Updated March 2026
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-lg mx-auto">{content.hero.subtitle}</p>
          </div>
        </div>

        {/* Intro */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{content.intro}</p>
        </div>

        {/* Table of Contents — shown for guides with 4+ sections */}
        {content.sections.length >= 4 && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
            <details open>
              <summary className="flex items-center gap-2 cursor-pointer list-none select-none">
                <span className="text-base font-bold text-garden-800 dark:text-garden-300">📋 In This Guide</span>
                <span className="ml-auto text-gray-400 dark:text-gray-500 text-xs">▼</span>
              </summary>
              <ol className="mt-4 space-y-2">
                {content.sections.map((s, i) => (
                  <li key={s.id} className="flex items-baseline gap-2">
                    <span className="text-xs font-bold text-gray-400 dark:text-gray-500 w-5 flex-shrink-0 text-right">{i + 1}.</span>
                    <a
                      href={`#${s.id}`}
                      className="text-sm text-garden-700 dark:text-garden-400 hover:text-garden-900 dark:hover:text-garden-200 hover:underline transition-colors"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </details>
          </div>
        )}

        {/* Share buttons */}
        {(() => {
          const url = `${SITE_URL}/guides/${guideId}/`
          const title = content.hero.title
          const heroImg = heroImages[guideId]
          const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}${heroImg ? `&media=${encodeURIComponent(SITE_URL + heroImg)}` : ''}`
          const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title + ' — via @PlantingAtlas')}`
          const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
          const btnCls = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors hover:opacity-80'
          return (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide">Share:</span>
              <a href={pinterestUrl} target="_blank" rel="noopener noreferrer"
                className={`${btnCls} bg-[#E60023] border-[#E60023] text-white`}>
                📌 Pinterest
              </a>
              <a href={twitterUrl} target="_blank" rel="noopener noreferrer"
                className={`${btnCls} bg-black border-black text-white dark:bg-gray-700 dark:border-gray-600`}>
                𝕏 Twitter
              </a>
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer"
                className={`${btnCls} bg-[#1877F2] border-[#1877F2] text-white`}>
                f Facebook
              </a>
            </div>
          )
        })()}

        {/* Sections — ad placeholders injected after the 2nd, 4th, and 6th sections */}
        {content.sections.map((section, i) => (
          <Fragment key={section.id}>
            <Section section={section} theme={theme} />
            {(i === 1 || i === 3 || i === 5) && (
              <div
                id={`adsense-placeholder-${i === 1 ? 1 : i === 3 ? 2 : 3}`}
                style={{ minHeight: '280px', margin: '0' }}
              >
                {/* AdSense will automatically fill this when approved */}
              </div>
            )}
          </Fragment>
        ))}

        {/* Newsletter signup */}
        <NewsletterSignup />

        {/* Author box */}
        <AuthorBox />

        {/* Related guides */}
        {(() => {
          const related = getRelatedGuides(guideId)
          if (related.length === 0) return null
          return (
            <div className="mt-2">
              <h2 className={`text-lg font-bold mb-3 ${theme.sectionTitle} dark:text-garden-300`}>
                You might also like
              </h2>
              <div className="grid gap-3 sm:grid-cols-3">
                {related.map((g) => (
                  <Link
                    key={g.id}
                    href={`/guides/${g.id}`}
                    className="bg-white dark:bg-gray-800 rounded-2xl border border-garden-200 dark:border-garden-700 shadow-sm p-4 flex gap-3 items-start hover:shadow-md hover:border-garden-400 dark:hover:border-garden-500 transition-shadow"
                  >
                    <span className="text-2xl flex-shrink-0">{g.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-garden-900 dark:text-garden-300 leading-tight">{g.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed line-clamp-2">{g.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )
        })()}

        {/* Footer nav */}
        <div className="text-center pb-4">
          <Link
            href="/guides"
            className={`text-sm ${theme.backBtn} dark:text-gray-300 dark:hover:text-white font-medium transition-colors`}
          >
            ← Back to All Planting Guides
          </Link>
        </div>

      </div>
    </div>
  )
}

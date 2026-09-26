// Generates src/data/content-dates.json from git history so that structured data
// (Article dates), the visible byline, and the sitemap use real dates instead of
// hand-typed constants. Run before committing content changes:
//   npm run dates
// The output is committed because Cloudflare Pages builds may use a shallow clone.
import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'

const git = (args) => execFileSync('git', args, { encoding: 'utf8' }).trim()
const day = (iso) => (iso ? iso.slice(0, 10) : null)

// Latest commit date touching any of the given paths that exist
function lastModified(paths) {
  const existing = paths.filter((p) => existsSync(p))
  if (!existing.length) return null
  return day(git(['log', '-1', '--format=%aI', '--', ...existing]))
}

// Date the first of the given paths was added to the repo
function firstAdded(path) {
  if (!existsSync(path)) return null
  const out = git(['log', '--diff-filter=A', '--format=%aI', '--', path])
  const lines = out.split('\n').filter(Boolean)
  return day(lines[lines.length - 1] || null)
}

// ── Guides: parse the contentMap in guide-content/index.js ────────────────────
const indexSrc = readFileSync('src/data/guide-content/index.js', 'utf8')
const fileByVar = {}
for (const m of indexSrc.matchAll(/import \{ (\w+) \} from '\.\/([\w-]+)\.js'/g)) fileByVar[m[1]] = m[2]
const guides = {}
for (const m of indexSrc.matchAll(/^\s*'([\w-]+)':\s*(\w+),/gm)) {
  const file = fileByVar[m[2]]
  if (!file) continue
  const path = `src/data/guide-content/${file}.js`
  guides[m[1]] = { published: firstAdded(path), modified: lastModified([path]) }
}

// ── Tools: component folder ──────────────────────────────────────
const toolsSrc = readFileSync('src/data/tools.js', 'utf8')
const tools = {}
for (const m of toolsSrc.matchAll(/id:\s*'([\w-]+)'/g)) {
  const id = m[1]
  // Component folder only: route files (page.jsx) also change for metadata-only edits
  const d = lastModified([`src/components/tools/${id}`])
  if (d) tools[id] = d
}

// ── Static pages and the plant database ───────────────────────────────────────
const pages = {
  '/': ['src/components/HomePage.jsx'],
  '/wizard/': ['src/components/wizard'],
  '/tools/': ['src/components/tools/ToolsHome.jsx', 'src/data/tools.js'],
  '/guides/': ['src/components/guides/GuidesHome.jsx', 'src/data/guides.js'],
  '/infographics/': ['src/components/Infographics.jsx'],
  '/podcasts/': ['src/components/Podcasts.jsx'],
  '/videos/': ['src/components/Videos.jsx'],
  '/about/': ['src/components/AboutUs.jsx'],
  '/contact/': ['src/components/ContactUs.jsx'],
  '/privacy/': ['src/components/PrivacyPolicy.jsx'],
  '/affiliate-disclosure/': ['src/components/AffiliateDisclosure.jsx'],
  '/advertising-disclosure/': ['src/components/AdvertisingDisclosure.jsx'],
}
const staticPages = {}
for (const [route, paths] of Object.entries(pages)) staticPages[route] = lastModified(paths)

const plantDatabase = {
  published: firstAdded('src/data/plant-profiles.js'),
  modified: lastModified([
    'src/data/plants.js',
    'src/data/plant-profiles.js',
    'src/data/plant-care-details.js',
    'src/components/plants/PlantDetail.jsx',
  ]),
}

// Counts used in copy ("120 guides"); a vitest guard fails if these go stale
const guidesSrc = readFileSync('src/data/guides.js', 'utf8')
const siteStats = {
  guideCount: Object.keys(guides).length,
  guideCategoryCount: (guidesSrc.match(/^    id: '/gm) || []).length,
}

const out = { generatedFrom: 'git history — run npm run dates', siteStats, guides, tools, staticPages, plantDatabase }
writeFileSync('src/data/content-dates.json', JSON.stringify(out, null, 1) + '\n')
console.log(`guides ${Object.keys(guides).length}, tools ${Object.keys(tools).length}, pages ${Object.keys(staticPages).length}`)

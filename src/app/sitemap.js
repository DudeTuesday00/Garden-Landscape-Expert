export const dynamic = 'force-static'

import { guideCategories } from '../data/guides.js'
import { products } from '../data/products.js'
import { heroImages } from '../data/hero-images.js'

const SITE_URL = 'https://plantingatlas.com'

// Fixed publish/update dates — avoid using new Date() for stable content so
// Googlebot doesn't treat every build as a full-site update.
const DATE_SITE_LAUNCH    = new Date('2026-03-01') // initial launch / first batch of guides
const DATE_RECENT_GUIDES  = new Date('2026-04-15') // second wave of full guides
const DATE_STUBS_LAUNCHED = new Date('2026-05-01') // all stubs activated
const DATE_PAGES_UPDATED  = new Date('2026-04-05') // last known static-page update

// Full guides published in the second wave (after the initial March launch)
const RECENT_FULL_GUIDE_IDS = new Set([
  'four-season-garden', 'organic-fertilizing', 'hummingbird-garden',
  'sunroom-plants', 'indoor-herb-garden', 'rain-garden', 'mulching-guide',
  'privacy-screening', 'medicinal-herb-garden',
])

export default function sitemap() {
  const staticPages = [
    { url: `${SITE_URL}/`,                        lastModified: DATE_PAGES_UPDATED,  changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE_URL}/wizard/`,                 lastModified: DATE_SITE_LAUNCH,    changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/tools/`,                  lastModified: DATE_RECENT_GUIDES,  changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/tools/fertilizer-calculator/`, lastModified: DATE_RECENT_GUIDES, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/guides/`,                 lastModified: DATE_STUBS_LAUNCHED, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${SITE_URL}/infographics/`,           lastModified: DATE_PAGES_UPDATED,  changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/podcasts/`,               lastModified: DATE_PAGES_UPDATED,  changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/videos/`,                 lastModified: DATE_PAGES_UPDATED,  changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/about/`,                  lastModified: DATE_PAGES_UPDATED,  changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${SITE_URL}/contact/`,                lastModified: DATE_SITE_LAUNCH,    changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${SITE_URL}/privacy/`,                lastModified: DATE_PAGES_UPDATED,  changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${SITE_URL}/affiliate-disclosure/`,   lastModified: DATE_PAGES_UPDATED,  changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${SITE_URL}/advertising-disclosure/`, lastModified: DATE_PAGES_UPDATED,  changeFrequency: 'yearly',  priority: 0.3 },
  ]

  const guidePages = guideCategories
    .flatMap((cat) => cat.guides.filter((g) => !g.comingSoon))
    .map((g) => {
      const isFull    = heroImages[g.id] !== undefined
      const isRecent  = RECENT_FULL_GUIDE_IDS.has(g.id)
      const heroPath  = heroImages[g.id]

      return {
        url: `${SITE_URL}/guides/${g.id}/`,
        lastModified: isFull
          ? (isRecent ? DATE_RECENT_GUIDES : DATE_SITE_LAUNCH)
          : DATE_STUBS_LAUNCHED,
        changeFrequency: isFull ? 'monthly' : 'yearly',
        priority: isFull ? 0.8 : 0.5,
        ...(heroPath && {
          images: [`${SITE_URL}${heroPath}`],
        }),
      }
    })

  const productPages = products.map((p) => ({
    url: `${SITE_URL}/shop/${p.id}/`,
    lastModified: DATE_SITE_LAUNCH,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...guidePages, ...productPages]
}

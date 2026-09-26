export const dynamic = 'force-static'

import { guideCategories } from '../data/guides.js'
import { products } from '../data/products.js'
import { heroImages } from '../data/hero-images.js'
import { tools } from '../data/tools.js'
import plants from '../data/plants.js'
import { newsletters } from '../data/newsletters.js'
import {
  getGuideDates,
  getToolModified,
  getStaticPageModified,
  plantDatabaseDates,
} from '../data/content-dates.js'

const SITE_URL = 'https://plantingatlas.com'

// lastModified values come from real git history (src/data/content-dates.json,
// regenerated with `npm run dates`) so Googlebot sees an honest update signal.
// This fallback only applies to a page missing from that file.
const FALLBACK_DATE = new Date('2026-03-01')

const asDate = (iso) => (iso ? new Date(iso) : FALLBACK_DATE)
const pageDate = (route) => asDate(getStaticPageModified(route))

export default function sitemap() {
  const staticPages = [
    { url: `${SITE_URL}/`,                        lastModified: pageDate('/'),                changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE_URL}/wizard/`,                 lastModified: pageDate('/wizard/'),          changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/plants/`,                 lastModified: asDate(plantDatabaseDates.modified), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/tools/`,                  lastModified: pageDate('/tools/'),           changeFrequency: 'monthly', priority: 0.8 },
    ...tools
      .filter((t) => t.status === 'live')
      .map((t) => ({
        url: `${SITE_URL}${t.href}`,
        lastModified: asDate(getToolModified(t.id)),
        changeFrequency: 'monthly',
        priority: 0.8,
      })),
    { url: `${SITE_URL}/guides/`,                 lastModified: pageDate('/guides/'),          changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${SITE_URL}/newsletters/`,            lastModified: newsletters.length ? asDate(newsletters.map((n) => n.date).sort().pop()) : FALLBACK_DATE, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${SITE_URL}/infographics/`,           lastModified: pageDate('/infographics/'),    changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/podcasts/`,               lastModified: pageDate('/podcasts/'),        changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/videos/`,                 lastModified: pageDate('/videos/'),          changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/about/`,                  lastModified: pageDate('/about/'),           changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${SITE_URL}/contact/`,                lastModified: pageDate('/contact/'),         changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${SITE_URL}/privacy/`,                lastModified: pageDate('/privacy/'),         changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${SITE_URL}/affiliate-disclosure/`,   lastModified: pageDate('/affiliate-disclosure/'),   changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${SITE_URL}/advertising-disclosure/`, lastModified: pageDate('/advertising-disclosure/'), changeFrequency: 'yearly',  priority: 0.3 },
  ]

  const guidePages = guideCategories
    .flatMap((cat) => cat.guides.filter((g) => !g.comingSoon))
    .map((g) => {
      const isFull    = heroImages[g.id] !== undefined
      const heroPath  = heroImages[g.id]

      return {
        url: `${SITE_URL}/guides/${g.id}/`,
        lastModified: asDate(getGuideDates(g.id)?.modified),
        changeFrequency: isFull ? 'monthly' : 'yearly',
        priority: isFull ? 0.8 : 0.5,
        ...(heroPath && {
          images: [`${SITE_URL}${heroPath}`],
        }),
      }
    })

  const productPages = products.map((p) => ({
    url: `${SITE_URL}/shop/${p.id}/`,
    lastModified: FALLBACK_DATE,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const plantPages = plants.map((p) => ({
    url: `${SITE_URL}/plants/${p.id}/`,
    lastModified: asDate(plantDatabaseDates.modified),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  const newsletterPages = newsletters.map((n) => ({
    url: `${SITE_URL}/newsletters/${n.slug}/`,
    lastModified: n.date ? new Date(n.date) : FALLBACK_DATE,
    changeFrequency: 'yearly',
    priority: 0.6,
    ...(n.heroImage && { images: [`${SITE_URL}${n.heroImage}`] }),
  }))

  return [...staticPages, ...guidePages, ...productPages, ...plantPages, ...newsletterPages]
}

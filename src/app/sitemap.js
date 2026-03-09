export const dynamic = 'force-static'

import { guideCategories } from '../data/guides.js'

const SITE_URL = 'https://plantingatlas.com'

/**
 * Auto-generated sitemap — Next.js builds this into sitemap.xml at build time.
 * Adding a new live guide to guides.js automatically adds it here.
 */
export default function sitemap() {
  const now = new Date()

  const staticPages = [
    { url: `${SITE_URL}/`,         lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE_URL}/wizard/`,  lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/guides/`,  lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${SITE_URL}/contact/`, lastModified: now, changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${SITE_URL}/privacy/`, lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ]

  const guidePages = guideCategories
    .flatMap((cat) => cat.guides.filter((g) => !g.comingSoon))
    .map((g) => ({
      url: `${SITE_URL}/guides/${g.id}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    }))

  return [...staticPages, ...guidePages]
}

export const dynamic = 'force-static'

import { guideCategories } from '../../data/guides.js'
import { contentMap } from '../../data/guide-content/index.js'
import { heroImages } from '../../data/hero-images.js'

const SITE_URL = 'https://plantingatlas.com'

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

// Feeds the site's own 87 Plantopedia guides back out as RSS — consumed by the
// Planting Atlas Newsletter Discovery Worker (D:\Planting Atlas Newsletter) as
// a source alongside external gardening feeds, so the newsletter can draw on
// and cross-reference already-vetted site content, not just outside news.
export async function GET() {
  const liveGuides = guideCategories.flatMap((cat) => cat.guides.filter((g) => !g.comingSoon))

  const items = liveGuides
    .map((g) => {
      const content = contentMap[g.id]
      const title = content?.hero?.title || g.title
      const description = content?.intro || g.description
      const link = `${SITE_URL}/guides/${g.id}/`
      const heroImage = heroImages[g.id]
      return `    <item>
      <title>${escapeXml(title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${escapeXml(description)}</description>${heroImage ? `\n      <enclosure url="${SITE_URL}${heroImage}" type="image/png"/>` : ''}
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Planting Atlas — Plantopedia Guides</title>
    <link>${SITE_URL}/guides/</link>
    <description>Gardening and landscape guides from Planting Atlas — planning, planting, and care for every climate.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  })
}

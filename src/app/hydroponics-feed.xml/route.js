export const dynamic = 'force-static'

import { guideCategories } from '../../data/guides.js'
import { contentMap } from '../../data/guide-content/index.js'
import { heroImages } from '../../data/hero-images.js'
import { tools } from '../../data/tools.js'
import { newsletters } from '../../data/newsletters.js'
import {
  hydroponicGuides,
  hydroponicTools,
  isHydroponicsNewsletter,
} from '../../data/hydroponics-hub.js'

const SITE_URL = 'https://plantingatlas.com'

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function rfc822(isoDate) {
  return new Date(`${isoDate}T12:00:00Z`).toUTCString()
}

function item({ title, link, description, date, image }) {
  return `    <item>
      <title>${escapeXml(title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${rfc822(date)}</pubDate>
      <description>${escapeXml(description)}</description>${image ? `\n      <enclosure url="${image}" type="image/jpeg" length="0"/>` : ''}
    </item>`
}

// A topic feed of everything Planting Atlas publishes about hydroponics:
// the guides, the tools, and any newsletter issue in the hydroponics series or
// clearly about soilless growing. Newest first.
export async function GET() {
  const guideTitles = new Map(
    guideCategories.flatMap((c) => c.guides).map((g) => [g.id, g])
  )

  const entries = []

  for (const g of hydroponicGuides) {
    const meta = guideTitles.get(g.id)
    if (!meta || meta.comingSoon) continue
    const content = contentMap[g.id]
    const hero = heroImages[g.id]
    entries.push({
      title: content?.hero?.title || meta.title,
      link: `${SITE_URL}/guides/${g.id}/`,
      description: content?.intro || meta.description,
      date: g.date,
      image: hero ? `${SITE_URL}${hero}` : null,
    })
  }

  for (const t of hydroponicTools) {
    const meta = tools.find((x) => x.id === t.id)
    if (!meta || meta.status !== 'live') continue
    entries.push({
      title: meta.name,
      link: `${SITE_URL}${meta.href}`,
      description: meta.tagline,
      date: t.date,
      image: null,
    })
  }

  for (const n of newsletters.filter(isHydroponicsNewsletter)) {
    entries.push({
      title: n.title,
      link: `${SITE_URL}/newsletters/${n.slug}/`,
      description: n.excerpt || n.subtitle || n.title,
      date: n.date,
      image: n.heroImage ? `${SITE_URL}${n.heroImage}` : null,
    })
  }

  entries.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Planting Atlas — Hydroponics</title>
    <link>${SITE_URL}/guides/hydroponics-for-beginners/</link>
    <atom:link href="${SITE_URL}/hydroponics-feed.xml" rel="self" type="application/rss+xml"/>
    <description>Home hydroponics guides, calculators, and newsletter issues from Planting Atlas — systems, nutrients, pH, light, and troubleshooting.</description>
    <language>en-us</language>
    <lastBuildDate>${rfc822(entries[0]?.date || '2026-09-24')}</lastBuildDate>
${entries.map(item).join('\n')}
  </channel>
</rss>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  })
}

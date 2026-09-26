import { guideCategories } from '../../../data/guides.js'
import { contentMap } from '../../../data/guide-content/index.js'
import GuideDetail, { heroImages } from '../../../components/guides/GuideDetail.jsx'
import { hydroponicGuideIds } from '../../../data/hydroponics-hub.js'
import { getGuideDates } from '../../../data/content-dates.js'
import { fitTitle, MAX_TEMPLATED_TITLE } from '../../../logic/seoTitle.js'

const SITE_URL = 'https://plantingatlas.com'

// Pre-render a static HTML page for every live guide at build time
export function generateStaticParams() {
  return guideCategories
    .flatMap((cat) => cat.guides.filter((g) => !g.comingSoon))
    .map((g) => ({ guideId: g.id }))
}

function truncateDescription(text) {
  if (text.length <= 160) return text
  const cut = text.slice(0, 157)
  const lastSpace = cut.lastIndexOf(' ')
  return (lastSpace > 100 ? cut.slice(0, lastSpace) : cut) + '...'
}

// Search results show about 60 characters, and the site template adds
// ' | Planting Atlas', so the page part must fit in MAX_TEMPLATED_TITLE (43).
// Use "title — subtitle" only when it fits whole; otherwise the title alone,
// cut at a natural break (see logic/seoTitle.js) — never mid-phrase.
function buildSeoTitle(title, subtitle) {
  if (subtitle) {
    const combined = `${title} — ${subtitle}`
    if (combined.length <= MAX_TEMPLATED_TITLE) return combined
  }
  return fitTitle(title, MAX_TEMPLATED_TITLE)
}

// Per-guide <head> metadata (title, description, OG, canonical)
export async function generateMetadata({ params }) {
  const { guideId } = await params
  const content = contentMap[guideId]
  if (!content) return { title: 'Guide Not Found' }

  const seoTitle = buildSeoTitle(content.hero.title, content.hero.subtitle)
  const description = truncateDescription(content.intro)
  const heroImage = heroImages[guideId]

  return {
    title: seoTitle,
    description,
    alternates: {
      canonical: `${SITE_URL}/guides/${guideId}/`,
      ...(hydroponicGuideIds.has(guideId) && {
        types: { 'application/rss+xml': `${SITE_URL}/hydroponics-feed.xml` },
      }),
    },
    openGraph: {
      title: `${seoTitle} | Planting Atlas`,
      description,
      url: `${SITE_URL}/guides/${guideId}/`,
      ...(heroImage && { images: [{ url: `${SITE_URL}${heroImage}`, width: 1200, height: 630, alt: seoTitle }] }),
    },
    twitter: {
      title: `${seoTitle} | Planting Atlas`,
      description,
      ...(heroImage && { images: [`${SITE_URL}${heroImage}`] }),
    },
  }
}

export default async function GuidePage({ params }) {
  const { guideId } = await params
  const content = contentMap[guideId]
  const heroImage = heroImages[guideId]
  const seoTitle = content ? buildSeoTitle(content.hero.title, content.hero.subtitle) : ''
  const dates = getGuideDates(guideId)

  const breadcrumbSchema = content ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',        item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Plantopedia', item: `${SITE_URL}/guides/` },
      { '@type': 'ListItem', position: 3, name: content.hero.title, item: `${SITE_URL}/guides/${guideId}/` },
    ],
  } : null

  const articleSchema = content ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: seoTitle,
    description: truncateDescription(content.intro),
    author: {
      '@type': 'Person',
      name: 'David Rodgers',
      url: `${SITE_URL}/about/`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Planting Atlas',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.png`,
      },
    },
    ...(dates?.published && { datePublished: dates.published }),
    ...(dates?.modified && { dateModified: dates.modified }),
    url: `${SITE_URL}/guides/${guideId}/`,
    ...(heroImage && { image: `${SITE_URL}${heroImage}` }),
  } : null

  return (
    <>
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <GuideDetail guideId={guideId} />
    </>
  )
}

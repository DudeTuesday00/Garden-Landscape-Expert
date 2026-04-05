import { guideCategories } from '../../../data/guides.js'
import { contentMap } from '../../../data/guide-content/index.js'
import GuideDetail, { heroImages } from '../../../components/guides/GuideDetail.jsx'

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

// Per-guide <head> metadata (title, description, OG, canonical)
export async function generateMetadata({ params }) {
  const { guideId } = await params
  const content = contentMap[guideId]
  if (!content) return { title: 'Guide Not Found' }

  const description = truncateDescription(content.intro)
  const heroImage = heroImages[guideId]

  return {
    title: content.hero.title,
    description,
    alternates: {
      canonical: `${SITE_URL}/guides/${guideId}/`,
    },
    openGraph: {
      title: `${content.hero.title} | Planting Atlas`,
      description,
      url: `${SITE_URL}/guides/${guideId}/`,
      ...(heroImage && { images: [{ url: `${SITE_URL}${heroImage}`, width: 1200, height: 630, alt: content.hero.title }] }),
    },
    twitter: {
      title: `${content.hero.title} | Planting Atlas`,
      description,
      ...(heroImage && { images: [`${SITE_URL}${heroImage}`] }),
    },
  }
}

export default async function GuidePage({ params }) {
  const { guideId } = await params
  const content = contentMap[guideId]
  const heroImage = heroImages[guideId]

  const articleSchema = content ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.hero.title,
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
    datePublished: '2026-03-01',
    dateModified: '2026-04-05',
    url: `${SITE_URL}/guides/${guideId}/`,
    ...(heroImage && { image: `${SITE_URL}${heroImage}` }),
  } : null

  return (
    <>
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

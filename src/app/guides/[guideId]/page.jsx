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

// Per-guide <head> metadata (title, description, OG, canonical)
export async function generateMetadata({ params }) {
  const { guideId } = await params
  const content = contentMap[guideId]
  if (!content) return { title: 'Guide Not Found' }

  const description =
    content.intro.length > 160 ? content.intro.slice(0, 157) + '...' : content.intro
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
  return <GuideDetail guideId={guideId} />
}

import fs from 'fs'
import path from 'path'
import { newsletters } from '../../../data/newsletters.js'
import NewsletterDetail from '../../../components/newsletters/NewsletterDetail.jsx'

const SITE_URL = 'https://plantingatlas.com'
const CONTENT_DIR = path.join(process.cwd(), 'src', 'data', 'newsletter-content')

// Pre-render a static HTML page for every published newsletter issue at build time.
// Next.js's `output: 'export'` mode throws a misleading "missing
// generateStaticParams()" build error when this returns a genuinely empty array
// (as it will until the first issue is approved and exported) — a single inert
// placeholder param keeps the build passing; the page component below already
// renders a graceful "not found" state for any slug with no matching content.
export function generateStaticParams() {
  if (newsletters.length === 0) return [{ slug: '_placeholder' }]
  return newsletters.map((n) => ({ slug: n.slug }))
}

function loadContent(slug) {
  const filePath = path.join(CONTENT_DIR, `${slug}.json`)
  if (!fs.existsSync(filePath)) return null
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'))
  } catch {
    return null
  }
}

function truncateDescription(text) {
  if (!text) return ''
  if (text.length <= 160) return text
  const cut = text.slice(0, 157)
  const lastSpace = cut.lastIndexOf(' ')
  return (lastSpace > 100 ? cut.slice(0, lastSpace) : cut) + '...'
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const meta = newsletters.find((n) => n.slug === slug)
  if (!meta) return { title: 'Newsletter Issue Not Found' }

  const description = truncateDescription(meta.excerpt || meta.subtitle)
  const seoTitle = meta.title

  return {
    title: seoTitle,
    description,
    alternates: {
      canonical: `${SITE_URL}/newsletters/${slug}/`,
    },
    openGraph: {
      title: `${seoTitle} | Planting Atlas`,
      description,
      url: `${SITE_URL}/newsletters/${slug}/`,
      ...(meta.heroImage && { images: [{ url: `${SITE_URL}${meta.heroImage}`, width: 1600, height: 896, alt: seoTitle }] }),
    },
    twitter: {
      title: `${seoTitle} | Planting Atlas`,
      description,
      ...(meta.heroImage && { images: [`${SITE_URL}${meta.heroImage}`] }),
    },
  }
}

export default async function NewsletterIssuePage({ params }) {
  const { slug } = await params
  const meta = newsletters.find((n) => n.slug === slug)
  const content = meta ? loadContent(slug) : null

  const breadcrumbSchema = meta ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Newsletter', item: `${SITE_URL}/newsletters/` },
      { '@type': 'ListItem', position: 3, name: meta.title, item: `${SITE_URL}/newsletters/${slug}/` },
    ],
  } : null

  const articleSchema = meta ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: truncateDescription(meta.excerpt || meta.subtitle),
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
    datePublished: meta.date,
    dateModified: meta.date,
    url: `${SITE_URL}/newsletters/${slug}/`,
    ...(meta.heroImage && { image: `${SITE_URL}${meta.heroImage}` }),
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
      <NewsletterDetail meta={meta || {}} content={content} />
    </>
  )
}

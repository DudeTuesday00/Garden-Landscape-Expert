import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://plantingatlas.com'
const DEFAULT_IMAGE = '/og-image.png'

export default function SEO({ title, description, keywords, image = DEFAULT_IMAGE, path = '/' }) {
  const fullTitle = title
    ? `${title} | Planting Atlas`
    : 'Garden Landscape Expert | Planting Atlas'
  const ogImage = image.startsWith('http') ? image : `${SITE_URL}${image}`
  const canonical = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}

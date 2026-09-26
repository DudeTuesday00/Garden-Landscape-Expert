import plants from '../../../data/plants.js'
import { plantProfiles } from '../../../data/plant-profiles.js'
import PlantDetail from '../../../components/plants/PlantDetail.jsx'
import { fitTitle, MAX_TEMPLATED_TITLE } from '../../../logic/seoTitle.js'
import { plantDatabaseDates } from '../../../data/content-dates.js'

const SITE_URL = 'https://plantingatlas.com'

// Pre-render a static HTML page for every plant at build time
export function generateStaticParams() {
  return plants.map((p) => ({ plantId: p.id }))
}

// Per-plant <head> metadata
export async function generateMetadata({ params }) {
  const { plantId } = await params
  const plant = plants.find((p) => p.id === plantId)
  if (!plant) return { title: 'Plant Not Found' }

  const profile = plantProfiles[plantId]
  // Add the scientific name only when the whole title still fits in search results
  const withScientific = profile?.scientificName ? `${plant.name} (${profile.scientificName})` : plant.name
  const pageTitle =
    withScientific.length <= MAX_TEMPLATED_TITLE ? withScientific : fitTitle(plant.name, MAX_TEMPLATED_TITLE)

  return {
    title: pageTitle,
    description: `${plant.description} Sun: ${plant.sunlight.join(', ')}. Water: ${plant.water}. USDA Zones ${Math.min(...plant.zones)}–${Math.max(...plant.zones)}.${plant.hydroponic ? ' Also suited to hydroponic growing.' : ''}`,
    keywords: `${plant.name}, ${profile?.scientificName || ''}, ${plant.type}, growing guide, plant care, Planting Atlas`,
    alternates: {
      canonical: `${SITE_URL}/plants/${plantId}/`,
    },
    openGraph: {
      title: `${plant.name} | Planting Atlas Plant Database`,
      description: plant.description,
      url: `${SITE_URL}/plants/${plantId}/`,
      images: [{ url: `${SITE_URL}/plants/${plantId}/primary.jpg`, alt: plant.name }],
    },
    twitter: {
      title: `${plant.name} | Planting Atlas Plant Database`,
      description: plant.description,
      images: [`${SITE_URL}/plants/${plantId}/primary.jpg`],
    },
  }
}

export default async function PlantPage({ params }) {
  const { plantId } = await params
  const plant = plants.find((p) => p.id === plantId)
  const profile = plantProfiles[plantId]

  const pageSchema = plant && {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${plant.name} — growing guide`,
    url: `${SITE_URL}/plants/${plantId}/`,
    description: plant.description,
    image: `${SITE_URL}/plants/${plantId}/primary.jpg`,
    ...(plantDatabaseDates.modified && { dateModified: plantDatabaseDates.modified }),
    isPartOf: { '@type': 'WebSite', name: 'Planting Atlas', url: SITE_URL },
    about: {
      '@type': 'Thing',
      name: plant.name,
      ...(profile?.scientificName && { alternateName: profile.scientificName }),
      description: plant.description,
    },
  }

  const breadcrumbSchema = plant && {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Plant Database', item: `${SITE_URL}/plants/` },
      { '@type': 'ListItem', position: 3, name: plant.name, item: `${SITE_URL}/plants/${plantId}/` },
    ],
  }

  return (
    <>
      {pageSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      )}
      <PlantDetail plantId={plantId} />
    </>
  )
}

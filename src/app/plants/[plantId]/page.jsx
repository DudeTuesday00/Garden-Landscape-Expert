import plants from '../../../data/plants.js'
import { plantProfiles } from '../../../data/plant-profiles.js'
import PlantDetail from '../../../components/plants/PlantDetail.jsx'

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
  const titleSuffix = profile?.scientificName ? ` (${profile.scientificName})` : ''

  return {
    title: `${plant.name}${titleSuffix}`,
    description: `${plant.description} Sun: ${plant.sunlight.join(', ')}. Water: ${plant.water}. USDA Zones ${Math.min(...plant.zones)}–${Math.max(...plant.zones)}.`,
    keywords: `${plant.name}, ${profile?.scientificName || ''}, ${plant.type}, growing guide, plant care, Planting Atlas`,
    alternates: {
      canonical: `${SITE_URL}/plants/${plantId}/`,
    },
    openGraph: {
      title: `${plant.name} | Planting Atlas Plant Database`,
      description: plant.description,
      url: `${SITE_URL}/plants/${plantId}/`,
    },
    twitter: {
      title: `${plant.name} | Planting Atlas Plant Database`,
      description: plant.description,
    },
  }
}

export default async function PlantPage({ params }) {
  const { plantId } = await params
  return <PlantDetail plantId={plantId} />
}

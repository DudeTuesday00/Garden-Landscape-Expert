import PlantDatabase from '../../components/plants/PlantDatabase.jsx'

export const metadata = {
  title: 'Plant Database',
  description: 'Search and filter all 185 plants in our database by common or scientific name, plant type, sun and water needs, lifecycle, native range, pet safety, and more.',
  alternates: {
    canonical: 'https://plantingatlas.com/plants/',
  },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Planting Atlas' }],
    url: 'https://plantingatlas.com/plants/',
    title: 'Plant Database | Planting Atlas',
    description: 'Search and filter all 185 plants by common or scientific name, type, sun, water, lifecycle, and more.',
  },
  twitter: {
    images: ['/og-image.jpg'],
    title: 'Plant Database | Planting Atlas',
    description: 'Search and filter all 185 plants by common or scientific name, type, sun, water, lifecycle, and more.',
  },
}

export default function PlantsPage() {
  return (
    <div className="px-4 py-8">
      <PlantDatabase />
    </div>
  )
}

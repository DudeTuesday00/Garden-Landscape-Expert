import UsdaZoneFinder from '../../../components/tools/usda-zone-finder/UsdaZoneFinder.jsx'

export const metadata = {
  title: 'Find Your USDA Hardiness Zone',
  description: 'Look up your exact USDA Plant Hardiness Zone by ZIP code — instant results based on the 2023 USDA Plant Hardiness Zone Map data.',
  alternates: {
    canonical: 'https://plantingatlas.com/tools/usda-zone-finder/',
  },
  openGraph: {
    url: 'https://plantingatlas.com/tools/usda-zone-finder/',
    title: 'Find Your USDA Hardiness Zone | Planting Atlas',
    description: 'Look up your exact USDA Plant Hardiness Zone by ZIP code.',
  },
  twitter: {
    title: 'Find Your USDA Hardiness Zone | Planting Atlas',
    description: 'Look up your exact USDA Plant Hardiness Zone by ZIP code.',
  },
}

export default function UsdaZoneFinderPage() {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <UsdaZoneFinder />
    </div>
  )
}

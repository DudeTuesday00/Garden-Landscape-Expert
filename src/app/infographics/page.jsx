import Infographics from '../../components/Infographics.jsx'

export const metadata = {
  title: 'Garden Infographics — Visual Planting & Growing Guides',
  description:
    'Free gardening infographics: companion planting charts, USDA zone frost dates, vegetable spacing guides, soil pH reference, and watering schedules. Print-ready visual quick references for every gardener.',
  keywords:
    'gardening infographics, companion planting chart, vegetable spacing guide, USDA zone map, soil pH chart, planting calendar, garden quick reference',
  alternates: {
    canonical: 'https://plantingatlas.com/infographics/',
  },
  openGraph: {
    url: 'https://plantingatlas.com/infographics/',
    title: 'Garden Infographics — Visual Planting & Growing Guides | Planting Atlas',
    description:
      'Free gardening infographics: companion planting charts, USDA zone frost dates, vegetable spacing guides, soil pH reference, and watering schedules.',
  },
  twitter: {
    title: 'Garden Infographics — Visual Planting & Growing Guides | Planting Atlas',
    description:
      'Free print-ready gardening infographics: companion planting, spacing guides, USDA zones, soil pH, and watering schedules.',
  },
}

export default function InfographicsPage() {
  return <Infographics />
}

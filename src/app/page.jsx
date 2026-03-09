import HomePage from '../components/HomePage.jsx'

export const metadata = {
  title: 'Planting Atlas — Plan it. Plant it. Grow it.',
  description:
    'Your complete planting atlas for gardens and landscapes. Get personalized plant recommendations from 148 plants across 12 types, or browse 75+ expert growing guides by USDA zone.',
  alternates: {
    canonical: 'https://plantingatlas.com/',
  },
  openGraph: {
    url: 'https://plantingatlas.com/',
    title: 'Planting Atlas — Plan it. Plant it. Grow it.',
    description:
      'Your complete planting atlas for gardens and landscapes. Get personalized plant recommendations from 148 plants across 12 types, or browse 75+ expert growing guides by USDA zone.',
  },
  twitter: {
    title: 'Planting Atlas — Plan it. Plant it. Grow it.',
    description:
      'Your complete planting atlas for gardens and landscapes. Zone-specific plant recommendations, garden design tools, and expert guides for every climate.',
  },
}

export default function Home() {
  return <HomePage />
}

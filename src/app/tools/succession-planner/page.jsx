import SuccessionPlanner from '../../../components/tools/succession-planner/SuccessionPlanner.jsx'

export const metadata = {
  title: 'Succession Planting Planner',
  description: 'See how many rounds of a fast crop like radishes or lettuce fit in your growing season, with suggested sowing dates for each round based on your ZIP code.',
  alternates: {
    canonical: 'https://plantingatlas.com/tools/succession-planner/',
  },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Planting Atlas' }],
    url: 'https://plantingatlas.com/tools/succession-planner/',
    title: 'Succession Planting Planner | Planting Atlas',
    description: 'See how many rounds of a fast crop fit in your growing season.',
  },
  twitter: {
    images: ['/og-image.jpg'],
    title: 'Succession Planting Planner | Planting Atlas',
    description: 'See how many rounds of a fast crop fit in your growing season.',
  },
}

export default function SuccessionPlannerPage() {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <SuccessionPlanner />
    </div>
  )
}

import YieldEstimator from '../../../components/tools/yield-estimator/YieldEstimator.jsx'

export const metadata = {
  title: 'Garden Yield Estimator',
  description: 'Estimate how much harvest to expect from your vegetable garden — plan a garden sized to your household with per-plant yield ranges for 30+ vegetables and herbs.',
  alternates: {
    canonical: 'https://plantingatlas.com/tools/yield-estimator/',
  },
  openGraph: {
    url: 'https://plantingatlas.com/tools/yield-estimator/',
    title: 'Garden Yield Estimator | Planting Atlas',
    description: 'Estimate how much harvest to expect from your vegetable garden.',
  },
  twitter: {
    title: 'Garden Yield Estimator | Planting Atlas',
    description: 'Estimate how much harvest to expect from your vegetable garden.',
  },
}

export default function YieldEstimatorPage() {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <YieldEstimator />
    </div>
  )
}

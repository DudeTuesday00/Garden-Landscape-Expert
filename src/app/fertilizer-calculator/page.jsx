import FertilizerCalculator from '../../components/fertilizer-calculator/FertilizerCalculator.jsx'

export const metadata = {
  title: 'Fertilizer Calculator',
  description: 'Interactive fertilizer calculator for home gardeners. Get personalized recommendations for what and how much to feed your plants based on type, size, and growing method.',
  alternates: {
    canonical: 'https://plantingatlas.com/fertilizer-calculator/',
  },
  openGraph: {
    url: 'https://plantingatlas.com/fertilizer-calculator/',
    title: 'Fertilizer Calculator | Planting Atlas',
    description: 'Find out exactly what and how much fertilizer to use for your specific plants.',
  },
  twitter: {
    title: 'Fertilizer Calculator | Planting Atlas',
    description: 'Find out exactly what and how much fertilizer to use for your specific plants.',
  },
}

export default function FertilizerCalculatorPage() {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <FertilizerCalculator />
    </div>
  )
}

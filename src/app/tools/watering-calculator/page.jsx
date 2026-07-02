import WateringCalculator from '../../../components/tools/watering-calculator/WateringCalculator.jsx'

export const metadata = {
  title: 'Watering Schedule Calculator',
  description: 'A concrete watering plan for any of our 150 plants — frequency and amount tailored to your growing method (in-ground, container, or hydroponic) and climate.',
  alternates: {
    canonical: 'https://plantingatlas.com/tools/watering-calculator/',
  },
  openGraph: {
    url: 'https://plantingatlas.com/tools/watering-calculator/',
    title: 'Watering Schedule Calculator | Planting Atlas',
    description: 'A concrete watering plan tailored to your plant, growing method, and climate.',
  },
  twitter: {
    title: 'Watering Schedule Calculator | Planting Atlas',
    description: 'A concrete watering plan tailored to your plant, growing method, and climate.',
  },
}

export default function WateringCalculatorPage() {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <WateringCalculator />
    </div>
  )
}

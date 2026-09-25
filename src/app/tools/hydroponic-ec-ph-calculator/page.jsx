import HydroponicEcPhCalculator from '../../../components/tools/hydroponic-ec-ph-calculator/HydroponicEcPhCalculator.jsx'

export const metadata = {
  title: 'Hydroponic EC & pH Assistant',
  description: 'Check your hydroponic nutrient strength and pH against typical targets for your crop, convert between EC and TDS ppm (500 and 700 scales), and see how much plain water to add to fix an over-strong solution.',
  alternates: {
    canonical: 'https://plantingatlas.com/tools/hydroponic-ec-ph-calculator/',
  },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Planting Atlas' }],
    url: 'https://plantingatlas.com/tools/hydroponic-ec-ph-calculator/',
    title: 'Hydroponic EC & pH Assistant | Planting Atlas',
    description: 'Check hydroponic nutrient strength and pH against crop targets, convert EC and TDS ppm, and get the dilution amount.',
  },
  twitter: {
    images: ['/og-image.jpg'],
    title: 'Hydroponic EC & pH Assistant | Planting Atlas',
    description: 'Check hydroponic nutrient strength and pH against crop targets, convert EC and TDS ppm, and get the dilution amount.',
  },
}

export default function HydroponicEcPhCalculatorPage() {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <HydroponicEcPhCalculator />
    </div>
  )
}

import HydroponicNutrientDosingCalculator from '../../../components/tools/hydroponic-nutrient-dosing-calculator/HydroponicNutrientDosingCalculator.jsx'

export const metadata = {
  title: 'Hydroponic Nutrient Dosing Calculator',
  description: "Enter your reservoir size and your nutrient's label feeding rate and get the exact milliliters and teaspoons of each part to add, at full or reduced strength.",
  alternates: {
    canonical: 'https://plantingatlas.com/tools/hydroponic-nutrient-dosing-calculator/',
  },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Planting Atlas' }],
    url: 'https://plantingatlas.com/tools/hydroponic-nutrient-dosing-calculator/',
    title: 'Hydroponic Nutrient Dosing Calculator | Planting Atlas',
    description: 'Exact milliliters and teaspoons of each nutrient part for your reservoir size and strength.',
  },
  twitter: {
    images: ['/og-image.jpg'],
    title: 'Hydroponic Nutrient Dosing Calculator | Planting Atlas',
    description: 'Exact milliliters and teaspoons of each nutrient part for your reservoir size and strength.',
  },
}

export default function HydroponicNutrientDosingCalculatorPage() {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <HydroponicNutrientDosingCalculator />
    </div>
  )
}

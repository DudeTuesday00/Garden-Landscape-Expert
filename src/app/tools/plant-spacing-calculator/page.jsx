import PlantSpacingCalculator from '../../../components/tools/plant-spacing-calculator/PlantSpacingCalculator.jsx'

export const metadata = {
  title: 'Plant Spacing & Square Foot Garden Planner',
  description: 'See exactly how many plants fit in your raised bed with a visual grid, using the plants-per-square-foot spacing reference from our Square Foot Gardening guide.',
  alternates: {
    canonical: 'https://plantingatlas.com/tools/plant-spacing-calculator/',
  },
  openGraph: {
    url: 'https://plantingatlas.com/tools/plant-spacing-calculator/',
    title: 'Plant Spacing & Square Foot Garden Planner | Planting Atlas',
    description: 'See exactly how many plants fit in your raised bed with a visual grid.',
  },
  twitter: {
    title: 'Plant Spacing & Square Foot Garden Planner | Planting Atlas',
    description: 'See exactly how many plants fit in your raised bed with a visual grid.',
  },
}

export default function PlantSpacingCalculatorPage() {
  return (
    <div className="px-4 py-8 max-w-6xl mx-auto">
      <PlantSpacingCalculator />
    </div>
  )
}

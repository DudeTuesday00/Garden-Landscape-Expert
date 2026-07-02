import CompostCalculator from '../../../components/tools/compost-calculator/CompostCalculator.jsx'

export const metadata = {
  title: 'Compost Calculator',
  description: 'Get the right browns-to-greens ratio for a hot compost pile of any size, using the carbon-to-nitrogen data and pile-building method from our Organic Fertilizing guide.',
  alternates: {
    canonical: 'https://plantingatlas.com/tools/compost-calculator/',
  },
  openGraph: {
    url: 'https://plantingatlas.com/tools/compost-calculator/',
    title: 'Compost Calculator | Planting Atlas',
    description: 'Get the right browns-to-greens ratio for a hot compost pile of any size.',
  },
  twitter: {
    title: 'Compost Calculator | Planting Atlas',
    description: 'Get the right browns-to-greens ratio for a hot compost pile of any size.',
  },
}

export default function CompostCalculatorPage() {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <CompostCalculator />
    </div>
  )
}

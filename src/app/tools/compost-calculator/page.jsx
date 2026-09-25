import CompostCalculator from '../../../components/tools/compost-calculator/CompostCalculator.jsx'

export const metadata = {
  title: 'Compost Calculator',
  description: 'Get the right browns-to-greens ratio for a hot compost pile of any size, using the carbon-to-nitrogen data and pile-building method from our Organic Fertilizing guide.',
  alternates: {
    canonical: 'https://plantingatlas.com/tools/compost-calculator/',
  },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Planting Atlas' }],
    url: 'https://plantingatlas.com/tools/compost-calculator/',
    title: 'Compost Calculator | Planting Atlas',
    description: 'Get the right browns-to-greens ratio for a hot compost pile of any size.',
  },
  twitter: {
    images: ['/og-image.jpg'],
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

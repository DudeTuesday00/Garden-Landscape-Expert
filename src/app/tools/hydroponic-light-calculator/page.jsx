import HydroponicLightCalculator from '../../../components/tools/hydroponic-light-calculator/HydroponicLightCalculator.jsx'

export const metadata = {
  title: 'Grow Light DLI Calculator',
  description: "Convert your grow light's PPFD and hours into a Daily Light Integral (DLI), compare it to what lettuce, herbs, tomatoes, and peppers need, and find the hours or intensity to reach the target.",
  alternates: {
    canonical: 'https://plantingatlas.com/tools/hydroponic-light-calculator/',
  },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Planting Atlas' }],
    url: 'https://plantingatlas.com/tools/hydroponic-light-calculator/',
    title: 'Grow Light DLI Calculator | Planting Atlas',
    description: 'Turn grow-light PPFD and hours into DLI and see if it suits your crop.',
  },
  twitter: {
    images: ['/og-image.jpg'],
    title: 'Grow Light DLI Calculator | Planting Atlas',
    description: 'Turn grow-light PPFD and hours into DLI and see if it suits your crop.',
  },
}

export default function HydroponicLightCalculatorPage() {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <HydroponicLightCalculator />
    </div>
  )
}

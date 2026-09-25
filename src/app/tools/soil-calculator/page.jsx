import SoilCalculator from '../../../components/tools/soil-calculator/SoilCalculator.jsx'

export const metadata = {
  title: 'Soil & Raised Bed Calculator',
  description: 'Calculate exactly how much soil you need for a raised bed, container, or Square Foot Garden — with a real mix ratio and bag-count shopping list.',
  alternates: {
    canonical: 'https://plantingatlas.com/tools/soil-calculator/',
  },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Planting Atlas' }],
    url: 'https://plantingatlas.com/tools/soil-calculator/',
    title: 'Soil & Raised Bed Calculator | Planting Atlas',
    description: 'Calculate exactly how much soil you need for a raised bed, container, or Square Foot Garden.',
  },
  twitter: {
    images: ['/og-image.jpg'],
    title: 'Soil & Raised Bed Calculator | Planting Atlas',
    description: 'Calculate exactly how much soil you need for a raised bed, container, or Square Foot Garden.',
  },
}

export default function SoilCalculatorPage() {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <SoilCalculator />
    </div>
  )
}

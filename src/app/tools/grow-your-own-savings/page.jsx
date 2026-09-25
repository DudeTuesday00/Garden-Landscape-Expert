import GrowYourOwnSavings from '../../../components/tools/grow-your-own-savings/GrowYourOwnSavings.jsx'

export const metadata = {
  title: 'Value of Growing Your Own',
  description: 'See how much money a home-grown vegetable garden saves compared to grocery store prices, with a real cost-to-grow estimate for 30 vegetables and fruits.',
  alternates: {
    canonical: 'https://plantingatlas.com/tools/grow-your-own-savings/',
  },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Planting Atlas' }],
    url: 'https://plantingatlas.com/tools/grow-your-own-savings/',
    title: 'Value of Growing Your Own | Planting Atlas',
    description: 'See how much money a home-grown vegetable garden saves compared to grocery store prices.',
  },
  twitter: {
    images: ['/og-image.jpg'],
    title: 'Value of Growing Your Own | Planting Atlas',
    description: 'See how much money a home-grown vegetable garden saves compared to grocery store prices.',
  },
}

export default function GrowYourOwnSavingsPage() {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <GrowYourOwnSavings />
    </div>
  )
}

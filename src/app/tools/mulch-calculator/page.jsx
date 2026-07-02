import MulchCalculator from '../../../components/tools/mulch-calculator/MulchCalculator.jsx'

export const metadata = {
  title: 'Mulch Calculator',
  description: 'Calculate exactly how much mulch you need by area and depth, with recommendations tailored to what you\'re mulching and a bagged-vs-bulk cost comparison.',
  alternates: {
    canonical: 'https://plantingatlas.com/tools/mulch-calculator/',
  },
  openGraph: {
    url: 'https://plantingatlas.com/tools/mulch-calculator/',
    title: 'Mulch Calculator | Planting Atlas',
    description: 'Calculate exactly how much mulch you need by area and depth.',
  },
  twitter: {
    title: 'Mulch Calculator | Planting Atlas',
    description: 'Calculate exactly how much mulch you need by area and depth.',
  },
}

export default function MulchCalculatorPage() {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <MulchCalculator />
    </div>
  )
}

import CompanionPlantingChecker from '../../../components/tools/companion-planting-checker/CompanionPlantingChecker.jsx'

export const metadata = {
  title: 'Companion Planting Checker',
  description: 'Check whether two plants make good neighbors or should be kept apart, with the reasoning behind each pairing — from proven mechanisms like allium scent confusion to allelopathic plants to avoid.',
  alternates: {
    canonical: 'https://plantingatlas.com/tools/companion-planting-checker/',
  },
  openGraph: {
    url: 'https://plantingatlas.com/tools/companion-planting-checker/',
    title: 'Companion Planting Checker | Planting Atlas',
    description: 'Check whether two plants make good neighbors or should be kept apart.',
  },
  twitter: {
    title: 'Companion Planting Checker | Planting Atlas',
    description: 'Check whether two plants make good neighbors or should be kept apart.',
  },
}

export default function CompanionPlantingCheckerPage() {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <CompanionPlantingChecker />
    </div>
  )
}

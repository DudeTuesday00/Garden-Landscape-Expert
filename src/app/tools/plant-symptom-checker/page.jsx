import PlantSymptomChecker from '../../../components/tools/plant-symptom-checker/PlantSymptomChecker.jsx'

export const metadata = {
  title: 'Garden Symptom Diagnostic',
  description: 'Answer a couple of questions about what\'s wrong with a plant to narrow down the likely pest or disease, with a direct link to the full profile in our Garden Pests and Common Garden Diseases guides.',
  alternates: {
    canonical: 'https://plantingatlas.com/tools/plant-symptom-checker/',
  },
  openGraph: {
    url: 'https://plantingatlas.com/tools/plant-symptom-checker/',
    title: 'Garden Symptom Diagnostic | Planting Atlas',
    description: 'Answer a couple of questions to narrow down the likely pest or disease affecting your plant.',
  },
  twitter: {
    title: 'Garden Symptom Diagnostic | Planting Atlas',
    description: 'Answer a couple of questions to narrow down the likely pest or disease affecting your plant.',
  },
}

export default function PlantSymptomCheckerPage() {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <PlantSymptomChecker />
    </div>
  )
}

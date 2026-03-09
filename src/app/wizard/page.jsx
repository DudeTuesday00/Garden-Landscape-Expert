import Wizard from '../../components/wizard/Wizard.jsx'

export const metadata = {
  title: 'Garden Architect — Personalized Plant Recommendations',
  description:
    'Answer a few questions about your garden conditions and get personalized plant recommendations from 148 plants. Supports traditional and hydroponic growing across all USDA zones.',
  keywords:
    'plant recommendations, garden planner, USDA zones, hydroponic plants, garden wizard, personalized gardening',
  alternates: {
    canonical: 'https://plantingatlas.com/wizard/',
  },
  openGraph: {
    url: 'https://plantingatlas.com/wizard/',
    title: 'Garden Architect — Personalized Plant Recommendations | Planting Atlas',
    description:
      'Answer a few questions about your garden conditions and get personalized plant recommendations from 148 plants. Supports traditional and hydroponic growing across all USDA zones.',
  },
  twitter: {
    title: 'Garden Architect — Personalized Plant Recommendations | Planting Atlas',
    description:
      'Answer a few questions about your garden conditions and get personalized plant recommendations from 148 plants. Traditional or hydroponic, all USDA zones.',
  },
}

export default function WizardPage() {
  return <Wizard />
}

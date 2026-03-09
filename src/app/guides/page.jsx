import GuidesHome from '../../components/guides/GuidesHome.jsx'

export const metadata = {
  title: 'Plantopedia — Gardening Guides & Growing Tutorials',
  description:
    'Browse 75+ expert gardening guides covering trees, flowers, vegetables, herbs, specialty gardens, and more. In-depth growing tutorials for every climate and experience level.',
  keywords:
    'gardening guides, planting tutorials, tree guide, flower garden, vegetable garden, herb garden, landscape design, growing tips',
  alternates: {
    canonical: 'https://plantingatlas.com/guides/',
  },
  openGraph: {
    url: 'https://plantingatlas.com/guides/',
    title: 'Plantopedia — Gardening Guides & Growing Tutorials | Planting Atlas',
    description:
      'Browse 75+ expert gardening guides covering trees, flowers, vegetables, herbs, specialty gardens, and more. In-depth growing tutorials for every climate and experience level.',
  },
  twitter: {
    title: 'Plantopedia — Gardening Guides & Growing Tutorials | Planting Atlas',
    description:
      'Browse 75+ expert gardening guides covering trees, flowers, vegetables, herbs, specialty gardens, and more.',
  },
}

export default function GuidesPage() {
  return <GuidesHome />
}

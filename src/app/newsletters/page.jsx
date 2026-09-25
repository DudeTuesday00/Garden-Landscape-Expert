import NewslettersHome from '../../components/newsletters/NewslettersHome.jsx'

export const metadata = {
  title: 'Newsletter — Zone-Specific Gardening Advice',
  description:
    'Planting Atlas newsletter: zone-specific, no-fluff gardening advice from 40 years of backyard trial and error. New issues covering seasonal tasks, plant care, and hard-won lessons.',
  alternates: {
    canonical: 'https://plantingatlas.com/newsletters/',
  },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Planting Atlas' }],
    url: 'https://plantingatlas.com/newsletters/',
    title: 'Newsletter — Zone-Specific Gardening Advice | Planting Atlas',
    description:
      'Zone-specific, no-fluff gardening advice from 40 years of backyard trial and error.',
  },
  twitter: {
    images: ['/og-image.jpg'],
    title: 'Newsletter — Zone-Specific Gardening Advice | Planting Atlas',
    description:
      'Zone-specific, no-fluff gardening advice from 40 years of backyard trial and error.',
  },
}

export default function NewslettersPage() {
  return <NewslettersHome />
}

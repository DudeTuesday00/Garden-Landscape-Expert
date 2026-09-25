import AdvertisingDisclosure from '../../components/AdvertisingDisclosure.jsx'

export const metadata = {
  title: 'Advertising Disclosure',
  description:
    'Planting Atlas may display advertising to support free gardening content. Learn how advertising appears on this site and how editorial content remains independent.',
  alternates: {
    canonical: 'https://plantingatlas.com/advertising-disclosure/',
  },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Planting Atlas' }],
    url: 'https://plantingatlas.com/advertising-disclosure/',
    title: 'Advertising Disclosure | Planting Atlas',
    description:
      'Planting Atlas may display advertising to support free gardening content. Learn how advertising appears on this site and how editorial content remains independent.',
  },
  twitter: {
    images: ['/og-image.jpg'],
    title: 'Advertising Disclosure | Planting Atlas',
    description:
      'Planting Atlas may display advertising to support free gardening content. Learn how advertising appears on this site and how editorial content remains independent.',
  },
}

export default function AdvertisingDisclosurePage() {
  return <AdvertisingDisclosure />
}

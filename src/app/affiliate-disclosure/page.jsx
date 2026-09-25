import AffiliateDisclosure from '../../components/AffiliateDisclosure.jsx'

export const metadata = {
  title: 'Affiliate Disclosure',
  description:
    'Planting Atlas is built to educate first. Learn how affiliate links may be used on this site and how editorial independence is maintained.',
  alternates: {
    canonical: 'https://plantingatlas.com/affiliate-disclosure/',
  },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Planting Atlas' }],
    url: 'https://plantingatlas.com/affiliate-disclosure/',
    title: 'Affiliate Disclosure | Planting Atlas',
    description:
      'Planting Atlas is built to educate first. Learn how affiliate links may be used on this site and how editorial independence is maintained.',
  },
  twitter: {
    images: ['/og-image.jpg'],
    title: 'Affiliate Disclosure | Planting Atlas',
    description:
      'Planting Atlas is built to educate first. Learn how affiliate links may be used on this site and how editorial independence is maintained.',
  },
}

export default function AffiliateDisclosurePage() {
  return <AffiliateDisclosure />
}

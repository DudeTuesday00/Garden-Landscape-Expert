import PrivacyPolicy from '../../components/PrivacyPolicy.jsx'

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Planting Atlas privacy policy. Learn how we use cookies, analytics, and advertising on our garden planning site.',
  alternates: {
    canonical: 'https://plantingatlas.com/privacy/',
  },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Planting Atlas' }],
    url: 'https://plantingatlas.com/privacy/',
    title: 'Privacy Policy | Planting Atlas',
    description: 'Planting Atlas privacy policy. Learn how we use cookies, analytics, and advertising on our garden planning site.',
  },
  twitter: {
    images: ['/og-image.jpg'],
    title: 'Privacy Policy | Planting Atlas',
    description: 'Planting Atlas privacy policy. Learn how we use cookies, analytics, and advertising.',
  },
}

export default function PrivacyPage() {
  return <PrivacyPolicy />
}

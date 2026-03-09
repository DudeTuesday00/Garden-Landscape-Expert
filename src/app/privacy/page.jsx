import PrivacyPolicy from '../../components/PrivacyPolicy.jsx'

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Planting Atlas privacy policy. Learn how we use cookies, analytics, and advertising on our garden planning site.',
  alternates: {
    canonical: 'https://plantingatlas.com/privacy/',
  },
  openGraph: {
    url: 'https://plantingatlas.com/privacy/',
    title: 'Privacy Policy | Planting Atlas',
    description: 'Planting Atlas privacy policy. Learn how we use cookies, analytics, and advertising on our garden planning site.',
  },
  twitter: {
    title: 'Privacy Policy | Planting Atlas',
    description: 'Planting Atlas privacy policy. Learn how we use cookies, analytics, and advertising.',
  },
}

export default function PrivacyPage() {
  return <PrivacyPolicy />
}

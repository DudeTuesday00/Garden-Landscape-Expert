import AboutUs from '../../components/AboutUs.jsx'

export const metadata = {
  title: 'About Us',
  description:
    'Meet David Rodgers, founder of Planting Atlas — 40 years of hands-on gardening experience turned into free, zone-specific plant recommendations and guides for every U.S. climate.',
  keywords: 'about Planting Atlas, David Rodgers, gardening expert, Zone 7, Oklahoma gardener, plant recommendations, garden guides',
  alternates: {
    canonical: 'https://plantingatlas.com/about/',
  },
  openGraph: {
    url: 'https://plantingatlas.com/about/',
    title: 'About Us | Planting Atlas',
    description:
      'Meet David Rodgers, founder of Planting Atlas — 40 years of hands-on gardening experience turned into free, zone-specific plant recommendations and guides for every U.S. climate.',
  },
  twitter: {
    title: 'About Us | Planting Atlas',
    description:
      'Meet David Rodgers, founder of Planting Atlas — 40 years of hands-on gardening experience turned into free, zone-specific plant recommendations and guides for every U.S. climate.',
  },
}

export default function AboutPage() {
  return <AboutUs />
}

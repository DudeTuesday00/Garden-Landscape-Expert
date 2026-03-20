import Podcasts from '../../components/Podcasts.jsx'

export const metadata = {
  title: 'Gardening Podcasts — Best Shows for Every Gardener',
  description:
    'Discover the best gardening podcasts: curated shows covering organic growing, permaculture, vegetable gardening, native plants, and more. Learn while you garden with expert audio resources.',
  keywords:
    'gardening podcasts, organic gardening podcast, vegetable garden podcast, permaculture podcast, Joe Gardener show, gardening audio, learn gardening',
  alternates: {
    canonical: 'https://plantingatlas.com/podcasts/',
  },
  openGraph: {
    url: 'https://plantingatlas.com/podcasts/',
    title: 'Gardening Podcasts — Best Shows for Every Gardener | Planting Atlas',
    description:
      'Discover the best gardening podcasts: curated shows covering organic growing, permaculture, vegetable gardening, native plants, and more.',
  },
  twitter: {
    title: 'Gardening Podcasts — Best Shows for Every Gardener | Planting Atlas',
    description:
      'Curated gardening podcasts for every type of grower — from organic vegetable growing to permaculture design.',
  },
}

export default function PodcastsPage() {
  return <Podcasts />
}

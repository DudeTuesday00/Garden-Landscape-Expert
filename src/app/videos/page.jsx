import Videos from '../../components/Videos.jsx'

export const metadata = {
  title: 'Gardening Videos — Best YouTube Channels & Tutorial Guides',
  description:
    'The best gardening YouTube channels and video tutorials: Epic Gardening, MIgardener, Charles Dowding, Garden Answer, and more. Curated by category — pruning, seed starting, soil building, pest control, and garden design.',
  keywords:
    'gardening videos, gardening YouTube channels, Epic Gardening, MIgardener, Charles Dowding, garden tutorials, how to garden, vegetable garden video',
  alternates: {
    canonical: 'https://plantingatlas.com/videos/',
  },
  openGraph: {
    url: 'https://plantingatlas.com/videos/',
    title: 'Gardening Videos — Best YouTube Channels & Tutorial Guides | Planting Atlas',
    description:
      'The best gardening YouTube channels: Epic Gardening, Charles Dowding, MIgardener, and more — curated by topic and skill level.',
  },
  twitter: {
    title: 'Gardening Videos — Best YouTube Channels & Tutorial Guides | Planting Atlas',
    description:
      'Curated gardening YouTube channels and video tutorials by topic: pruning, seed starting, soil building, pest control, and design.',
  },
}

export default function VideosPage() {
  return <Videos />
}

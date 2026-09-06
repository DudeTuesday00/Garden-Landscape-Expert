import MyGarden from '../../components/MyGarden.jsx'

export const metadata = {
  title: 'My Garden',
  description: 'Your saved plants and guides, stored locally in your browser — no account needed.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://plantingatlas.com/my-garden/',
  },
  openGraph: {
    url: 'https://plantingatlas.com/my-garden/',
    title: 'My Garden | Planting Atlas',
    description: 'Your saved plants and guides, stored locally in your browser.',
  },
  twitter: {
    title: 'My Garden | Planting Atlas',
    description: 'Your saved plants and guides, stored locally in your browser.',
  },
}

export default function MyGardenPage() {
  return <MyGarden />
}

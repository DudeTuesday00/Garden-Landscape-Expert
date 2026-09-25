import ToolsHome from '../../components/tools/ToolsHome.jsx'

export const metadata = {
  title: 'Garden Tools',
  description: 'Free interactive garden tools — a fertilizer calculator, gardening calendar, USDA hardiness zone finder, and more.',
  alternates: {
    canonical: 'https://plantingatlas.com/tools/',
  },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Planting Atlas' }],
    url: 'https://plantingatlas.com/tools/',
    title: 'Garden Tools | Planting Atlas',
    description: 'Free interactive garden tools for planning and maintaining your garden.',
  },
  twitter: {
    images: ['/og-image.jpg'],
    title: 'Garden Tools | Planting Atlas',
    description: 'Free interactive garden tools for planning and maintaining your garden.',
  },
}

export default function ToolsPage() {
  return <ToolsHome />
}

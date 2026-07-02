import ToolsHome from '../../components/tools/ToolsHome.jsx'

export const metadata = {
  title: 'Garden Tools',
  description: 'Free interactive garden tools — a fertilizer calculator, gardening calendar, USDA hardiness zone finder, and more.',
  alternates: {
    canonical: 'https://plantingatlas.com/tools/',
  },
  openGraph: {
    url: 'https://plantingatlas.com/tools/',
    title: 'Garden Tools | Planting Atlas',
    description: 'Free interactive garden tools for planning and maintaining your garden.',
  },
  twitter: {
    title: 'Garden Tools | Planting Atlas',
    description: 'Free interactive garden tools for planning and maintaining your garden.',
  },
}

export default function ToolsPage() {
  return <ToolsHome />
}

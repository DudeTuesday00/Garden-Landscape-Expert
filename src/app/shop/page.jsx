import ShopHome from '../../components/shop/ShopHome.jsx'

export const metadata = {
  title: '3D Printed Garden Shop',
  description:
    'Shop precision-printed 3D gardening accessories — modular planters, plant markers, trellis clips, tool organizers, and more. Made to order, food-safe, UV-resistant.',
  keywords:
    '3D printed garden accessories, custom planters, plant markers, trellis clips, garden tools, 3D printed pots',
  alternates: {
    canonical: 'https://plantingatlas.com/shop/',
  },
  openGraph: {
    url: 'https://plantingatlas.com/shop/',
    title: '3D Printed Garden Shop | Planting Atlas',
    description:
      'Shop precision-printed 3D gardening accessories — modular planters, plant markers, trellis clips, and more. Made to order.',
  },
  twitter: {
    title: '3D Printed Garden Shop | Planting Atlas',
    description:
      'Shop precision-printed 3D gardening accessories — modular planters, plant markers, trellis clips, and more.',
  },
}

export default function ShopPage() {
  return <ShopHome />
}

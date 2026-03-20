import { products, getProduct } from '../../../data/products.js'
import ProductDetail from '../../../components/shop/ProductDetail.jsx'

const SITE_URL = 'https://plantingatlas.com'

// Pre-render a static HTML page for every product at build time
export function generateStaticParams() {
  return products.map((p) => ({ productId: p.id }))
}

// Per-product <head> metadata
export async function generateMetadata({ params }) {
  const { productId } = await params
  const product = getProduct(productId)
  if (!product) return { title: 'Product Not Found' }

  return {
    title: product.name,
    description: `${product.tagline} — ${product.description.slice(0, 140)}...`,
    alternates: {
      canonical: `${SITE_URL}/shop/${productId}/`,
    },
    openGraph: {
      title: `${product.name} | Planting Atlas Shop`,
      description: product.tagline,
      url: `${SITE_URL}/shop/${productId}/`,
    },
    twitter: {
      title: `${product.name} | Planting Atlas Shop`,
      description: product.tagline,
    },
  }
}

export default async function ProductPage({ params }) {
  const { productId } = await params
  return <ProductDetail productId={productId} />
}

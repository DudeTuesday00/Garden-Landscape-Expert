import Link from 'next/link'
import { getProduct } from '../../data/products.js'
import ImageGallery from './ImageGallery.jsx'

const badgeColors = {
  'Best Seller': 'bg-earth-100 dark:bg-earth-900/30 text-earth-700 dark:text-earth-300 border-earth-300 dark:border-earth-700',
  'New':  'bg-garden-100 dark:bg-garden-900/30 text-garden-700 dark:text-garden-300 border-garden-200 dark:border-garden-700',
  'Sale': 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700',
}

export default function ProductDetail({ productId }) {
  const product = getProduct(productId)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-5xl mb-4">🪴</p>
          <h1 className="text-2xl font-bold text-garden-800 dark:text-garden-300 mb-2">Product not found</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-6">This product may have been removed or renamed.</p>
          <Link href="/shop" className="px-5 py-2.5 bg-garden-600 hover:bg-garden-700 text-white rounded-xl text-sm font-medium transition-colors">
            ← Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="w-full max-w-5xl mx-auto">

        {/* Breadcrumb */}
        <nav className="text-xs text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-garden-600 dark:hover:text-garden-400">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-garden-600 dark:hover:text-garden-400">Shop</Link>
          <span>/</span>
          <span className="text-gray-700 dark:text-gray-300">{product.name}</span>
        </nav>

        {/* Main product layout */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Left: image gallery */}
          <div>
            <ImageGallery
              images={product.images}
              productName={product.name}
              emoji={product.emoji}
            />
          </div>

          {/* Right: product info */}
          <div className="flex flex-col gap-5">

            {/* Category + badge */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-medium text-garden-600 dark:text-garden-400 bg-garden-50 dark:bg-garden-900/20 px-2.5 py-1 rounded-full border border-garden-200 dark:border-garden-700">
                {product.categoryLabel}
              </span>
              {product.badge && (
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeColors[product.badge] ?? 'bg-gray-100 text-gray-700 border-gray-300'}`}>
                  {product.badge}
                </span>
              )}
              {!product.inStock && (
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full border bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 border-gray-300 dark:border-gray-600">
                  Out of Stock
                </span>
              )}
            </div>

            {/* Name + price */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                {product.name}
              </h1>
              <p className="mt-1 text-gray-500 dark:text-gray-400 text-sm">{product.tagline}</p>
              <p className="mt-3 text-3xl font-bold text-gray-900 dark:text-gray-100">
                ${product.price.toFixed(2)}
              </p>
            </div>

            {/* Add to cart area */}
            <div className="bg-garden-50 dark:bg-gray-800/60 rounded-2xl border border-garden-200 dark:border-gray-700 p-5 flex flex-col gap-3">
              {product.inStock ? (
                <>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Made to order · Ships in 3–5 business days
                  </p>
                  <button
                    disabled
                    className="w-full bg-garden-600 hover:bg-garden-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-colors text-sm"
                    title="Ordering coming soon"
                  >
                    🛒 Add to Cart — Coming Soon
                  </button>
                  <p className="text-center text-xs text-gray-400 dark:text-gray-500">
                    Online ordering is coming soon.{' '}
                    <Link href="/contact" className="underline hover:text-garden-600">
                      Contact us
                    </Link>{' '}
                    to place a custom order today.
                  </p>
                </>
              ) : (
                <>
                  <button
                    disabled
                    className="w-full bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 font-semibold py-3 px-6 rounded-xl cursor-not-allowed text-sm"
                  >
                    Out of Stock
                  </button>
                  <p className="text-center text-xs text-gray-400 dark:text-gray-500">
                    <Link href="/contact" className="underline hover:text-garden-600">
                      Contact us
                    </Link>{' '}
                    to be notified when this item is back.
                  </p>
                </>
              )}
            </div>

            {/* Features */}
            <div>
              <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2 uppercase tracking-wide">
                Features
              </h2>
              <ul className="space-y-1.5">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-garden-600 mt-0.5 flex-shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Full description */}
        <div className="mt-10 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 sm:p-8">
          <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-3">
            About This Product
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
            {product.description}
          </p>
        </div>

        {/* Specifications */}
        <div className="mt-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 sm:p-8">
          <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-4">
            Specifications
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Material', product.details.material],
                  ['Dimensions', product.details.dimensions],
                  ['Weight', product.details.weight],
                  ['Available Colors', product.details.colors?.join(', ')],
                  ['Print Layer Height', product.details.printLayer],
                  ['Infill', product.details.infill],
                ].filter(([, val]) => val).map(([label, value]) => (
                  <tr key={label} className="border-b border-gray-100 dark:border-gray-700 last:border-0">
                    <td className="py-2.5 pr-4 font-medium text-gray-600 dark:text-gray-400 w-40 align-top">
                      {label}
                    </td>
                    <td className="py-2.5 text-gray-800 dark:text-gray-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Custom order callout */}
        <div className="mt-5 bg-earth-50 dark:bg-gray-800 rounded-2xl border border-earth-200 dark:border-earth-700 p-6 flex items-start gap-4">
          <span className="text-3xl flex-shrink-0">🎨</span>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">
              Custom Colors &amp; Quantities
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Need a specific color, a larger batch, or a custom size? We print to order and are happy
              to accommodate custom requests.{' '}
              <Link href="/contact" className="text-garden-700 dark:text-garden-400 underline hover:text-garden-600">
                Send us a message
              </Link>{' '}
              and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium hover:border-garden-400 dark:hover:border-garden-500 transition-colors shadow-sm"
          >
            ← Back to Shop
          </Link>
        </div>

      </div>
    </div>
  )
}

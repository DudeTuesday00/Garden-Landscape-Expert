import { products } from '../../data/products.js'
import ShopGrid from './ShopGrid.jsx'
import shopHeaderImg from './3d-printed-garden-shop-header.png'

export default function ShopHome() {
  return (
    <div className="min-h-screen px-4 py-10">
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-8">

        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden text-center">
          <img
            src={shopHeaderImg.src}
            alt="3D Printed Garden Shop"
            className="w-full h-auto"
          />
          <div className="p-8">
            <h1 className="text-3xl font-bold text-garden-800 dark:text-garden-300">
              3D Printed Garden Shop
            </h1>
            <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
              Thoughtfully designed, precision-printed gardening accessories — planters, markers, trellises,
              and organizers made to order in your choice of color.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="text-garden-600">✓</span> Made to order
              </span>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <span className="flex items-center gap-1.5">
                <span className="text-garden-600">✓</span> Ships in 3–5 business days
              </span>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <span className="flex items-center gap-1.5">
                <span className="text-garden-600">✓</span> Food-safe &amp; UV-resistant materials
              </span>
            </div>
          </div>
        </div>

        {/* Client island — category filtering + grid */}
        <ShopGrid products={products} />

        <p className="text-center text-xs text-gray-400 dark:text-gray-500 pb-4">
          Planting Atlas Shop · All items made to order ·{' '}
          <a href="/contact" className="underline hover:text-garden-600">
            Contact us
          </a>{' '}
          with any questions
        </p>
      </div>
    </div>
  )
}

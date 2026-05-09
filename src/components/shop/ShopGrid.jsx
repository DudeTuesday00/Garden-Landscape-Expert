'use client'

import { useState } from 'react'
import Link from 'next/link'
import { productCategories } from '../../data/products.js'

const badgeColors = {
  'Best Seller': 'bg-earth-100 dark:bg-earth-900/30 text-earth-700 dark:text-earth-300 border-earth-300 dark:border-earth-700',
  'New':  'bg-garden-100 dark:bg-garden-900/30 text-garden-700 dark:text-garden-300 border-garden-200 dark:border-garden-700',
  'Sale': 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700',
}

function ProductCard({ product }) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <Link
      href={`/shop/${product.id}/`}
      className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md hover:border-garden-400 dark:hover:border-garden-500 transition-all duration-200 flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-square bg-garden-50 dark:bg-gray-700 overflow-hidden">
        {imgFailed ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl">{product.emoji}</span>
          </div>
        ) : (
          <img
            src={product.thumbnail}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImgFailed(true)}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-2 left-2 text-xs font-semibold px-2 py-0.5 rounded-full border ${badgeColors[product.badge] ?? 'bg-gray-100 text-gray-700 border-gray-300'}`}>
            {product.badge}
          </span>
        )}

        {/* Out of stock overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="text-white text-sm font-semibold bg-black/60 px-3 py-1 rounded-full">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-garden-600 dark:text-garden-400 font-medium mb-1">
          {product.categoryLabel}
        </p>
        <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100 leading-snug mb-1 group-hover:text-garden-700 dark:group-hover:text-garden-300 transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
          {product.tagline}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-xs text-garden-600 dark:text-garden-400 font-medium group-hover:underline">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  )
}

function CategoryFilter({ active, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <button
        onClick={() => onSelect(null)}
        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
          active === null
            ? 'bg-garden-600 text-white border-garden-600'
            : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-garden-400 dark:hover:border-garden-500'
        }`}
      >
        All Products
      </button>
      {productCategories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
            active === cat.id
              ? 'bg-garden-600 text-white border-garden-600'
              : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-garden-400 dark:hover:border-garden-500'
          }`}
        >
          {cat.emoji} {cat.label}
        </button>
      ))}
    </div>
  )
}

export default function ShopGrid({ products }) {
  const [activeCategory, setActiveCategory] = useState(null)

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products

  const activeCatLabel = productCategories.find((c) => c.id === activeCategory)?.label

  return (
    <div className="flex flex-col gap-6">
      {/* Category filter bar */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-4">
        <CategoryFilter active={activeCategory} onSelect={setActiveCategory} />
      </div>

      {/* Count line */}
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}
        {activeCatLabel ? ` in ${activeCatLabel}` : ''}
      </p>

      {/* Product grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

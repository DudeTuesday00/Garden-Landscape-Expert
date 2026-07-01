import type { HTMLAttributes, ReactNode } from 'react'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Which brand color treatment to use. `bestSeller` (gold), `new` (green), `sale` (red), `neutral` (gray). */
  tone?: 'bestSeller' | 'new' | 'sale' | 'neutral'
  children: ReactNode
}

const TONE_STYLES: Record<NonNullable<BadgeProps['tone']>, string> = {
  bestSeller: 'bg-earth-100 dark:bg-earth-900/30 text-earth-700 dark:text-earth-300 border-earth-300 dark:border-earth-700',
  new: 'bg-garden-100 dark:bg-garden-900/30 text-garden-700 dark:text-garden-300 border-garden-200 dark:border-garden-700',
  sale: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700',
  neutral: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400 border-gray-300 dark:border-gray-600',
}

/**
 * Small rounded-full label used for product badges ("Best Seller", "New",
 * "Sale") and status/priority tags (e.g. fertilizer recommendation priority).
 */
export function Badge({ tone = 'neutral', className = '', children, ...rest }: BadgeProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border ${TONE_STYLES[tone]} ${className}`.trim()}
      {...rest}
    >
      {children}
    </span>
  )
}

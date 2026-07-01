import type { HTMLAttributes, ReactNode } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * `default` — the standard white/gray-800 bordered surface used for stat
   * cards, product cards, and form panels.
   * `hero` — a larger, more prominent card with a thicker brand-colored
   * border and stronger hover shadow, used for the two homepage path cards.
   * `callout` — a soft garden-tinted background box used for signup panels
   * and highlighted content (e.g. the newsletter box).
   */
  variant?: 'default' | 'hero' | 'callout'
  children: ReactNode
}

/**
 * Planting Atlas surface container. Wraps content in the site's standard
 * card treatment — pick `variant` to match the context (a plain content
 * panel, a prominent hero card, or a soft highlighted callout).
 */
export function Card({ variant = 'default', className = '', children, ...rest }: CardProps) {
  const styles =
    variant === 'hero'
      ? 'bg-white dark:bg-gray-800 border-2 border-garden-200 dark:border-garden-700 hover:border-garden-500 dark:hover:border-garden-400 rounded-3xl shadow-md hover:shadow-xl transition-all duration-200'
      : variant === 'callout'
        ? 'bg-garden-50 dark:bg-gray-800 rounded-2xl border border-garden-200 dark:border-garden-700 p-6'
        : 'bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all p-6'

  return (
    <div className={`${styles} ${className}`.trim()} {...rest}>
      {children}
    </div>
  )
}

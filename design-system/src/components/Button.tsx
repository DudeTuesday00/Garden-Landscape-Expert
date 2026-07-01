import type { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `primary` is the solid brand-green CTA; `pill` is the small rounded filter/tab button used for category and option selectors. */
  variant?: 'primary' | 'pill'
  /** Marks a `pill` button as the currently active/selected choice in a group. Ignored by `primary`. */
  active?: boolean
  children: ReactNode
}

/**
 * Planting Atlas primary action button.
 *
 * `primary` is the solid Garden Green call-to-action used for form submits and
 * hero CTAs (e.g. "Send Message", "Subscribe", "Start Planning →").
 *
 * `pill` is the small rounded, bordered button used for filter tabs and
 * option selectors (category filters, plant-type pickers) — pass `active` to
 * show the selected state.
 */
export function Button({ variant = 'primary', active = false, className = '', children, ...rest }: ButtonProps) {
  const base = 'font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-garden-400 disabled:opacity-50 disabled:cursor-not-allowed'

  const styles =
    variant === 'pill'
      ? `px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
          active
            ? 'bg-garden-600 text-white border-garden-600'
            : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-garden-400'
        }`
      : 'bg-garden-600 hover:bg-garden-700 text-white px-5 py-2.5 rounded-xl'

  return (
    <button className={`${base} ${styles} ${className}`.trim()} {...rest}>
      {children}
    </button>
  )
}

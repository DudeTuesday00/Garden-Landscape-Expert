const badges = [
  { emoji: '🌿', label: '150 Plants', sub: 'verified database' },
  { emoji: '🗺️', label: 'USDA Zones 3–11', sub: 'all US climates' },
  { emoji: '👨‍🌾', label: '40+ Years', sub: 'hands-on experience' },
  { emoji: '📖', label: '88 Guides', sub: 'expert-reviewed' },
  { emoji: '✅', label: '100% Free', sub: 'no account needed' },
]

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {badges.map(({ emoji, label, sub }) => (
        <div
          key={label}
          className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-garden-100 dark:border-gray-700 rounded-full px-3 py-1.5 shadow-sm"
        >
          <span className="text-base leading-none">{emoji}</span>
          <span className="text-xs font-semibold text-garden-800 dark:text-garden-300 whitespace-nowrap">
            {label}
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap hidden sm:inline">
            · {sub}
          </span>
        </div>
      ))}
    </div>
  )
}

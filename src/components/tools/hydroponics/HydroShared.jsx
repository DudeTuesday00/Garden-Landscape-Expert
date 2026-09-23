import Link from 'next/link'

export const cardCls =
  'bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6'

const inputCls =
  'w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-garden-600'

export function ToolHeader({ title, blurb }) {
  return (
    <>
      <Link
        href="/tools/"
        className="inline-flex items-center gap-1 text-sm text-garden-600 dark:text-garden-400 hover:underline mb-4"
      >
        ← Back to Garden Tools
      </Link>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-garden-800 dark:text-garden-300">{title}</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{blurb}</p>
      </div>
    </>
  )
}

export function Card({ label, children }) {
  return (
    <div className={cardCls}>
      {label && <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">{label}</p>}
      {children}
    </div>
  )
}

export function ChoiceButtons({ options, value, onChange, columns = 2 }) {
  const cols = columns === 3 ? 'grid-cols-3' : columns === 1 ? 'grid-cols-1' : 'grid-cols-2'
  return (
    <div className={`grid ${cols} gap-2`}>
      {options.map((o) => (
        <button
          key={String(o.value)}
          type="button"
          onClick={() => onChange(o.value)}
          aria-pressed={value === o.value}
          className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all border text-center ${
            value === o.value
              ? 'bg-earth-500 text-white border-earth-500'
              : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-earth-400 text-gray-800 dark:text-gray-100'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

export function NumberField({ label, value, onChange, step = 'any', placeholder, suffix }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">{label}</span>
      <span className="flex items-center gap-2">
        <input
          type="number"
          inputMode="decimal"
          min="0"
          step={step}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={inputCls}
        />
        {suffix && <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">{suffix}</span>}
      </span>
    </label>
  )
}

export function TextField({ label, value, onChange, placeholder }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">{label}</span>
      <input type="text" value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} className={inputCls} />
    </label>
  )
}

export function Stat({ label, value, sub }) {
  return (
    <div className="bg-garden-50 dark:bg-gray-900 rounded-xl p-3 text-center">
      <p className="text-lg font-bold text-garden-800 dark:text-garden-300 leading-tight">{value}</p>
      <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">{label}</p>
      {sub && <p className="text-[11px] text-gray-400 dark:text-gray-500">{sub}</p>}
    </div>
  )
}

const statusStyles = {
  ok: 'bg-garden-50 dark:bg-gray-900 border-garden-200 dark:border-garden-700 text-garden-800 dark:text-garden-300',
  warn: 'bg-earth-50 dark:bg-gray-900 border-earth-300 dark:border-earth-700 text-gray-800 dark:text-gray-100',
}

export function Verdict({ tone = 'ok', title, children }) {
  return (
    <div className={`rounded-xl border p-4 text-sm ${statusStyles[tone]}`}>
      <p className="font-semibold">{tone === 'ok' ? '✓ ' : '⚠ '}{title}</p>
      {children && <div className="mt-1 text-gray-700 dark:text-gray-300">{children}</div>}
    </div>
  )
}

export function RelatedTools({ items }) {
  return (
    <div className="mt-10">
      <h2 className="text-lg font-bold text-garden-800 dark:text-garden-300 mb-4">More hydroponics help</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((i) => (
          <Link
            key={i.href}
            href={i.href}
            className="block bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 hover:border-garden-400 transition-colors"
          >
            <p className="font-semibold text-gray-800 dark:text-gray-100">{i.emoji} {i.title}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{i.body}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export function fmt(n, digits = 1) {
  if (!Number.isFinite(n)) return '—'
  return n.toFixed(digits).replace(/\.0+$/, '').replace(/(\.\d*[1-9])0+$/, '$1')
}

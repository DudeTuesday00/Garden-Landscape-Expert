export default function ProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100)

  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-garden-700 font-medium mb-1">
        <span>Question {current} of {total}</span>
        <span>{pct}% complete</span>
      </div>
      <div className="w-full bg-garden-100 rounded-full h-2.5">
        <div
          className="bg-garden-500 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

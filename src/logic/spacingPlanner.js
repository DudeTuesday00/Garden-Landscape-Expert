/**
 * How many individual plants a given number of assigned squares yields.
 * perSqFt >= 1 means multiple plants share one square (e.g. 9 radishes/sq ft).
 * perSqFt < 1 means one plant needs multiple squares (e.g. 0.25 = 4 squares/plant).
 */
export function plantCountForSquares(perSqFt, squares) {
  if (!(squares > 0) || !(perSqFt > 0)) return 0
  // A tiny epsilon guards against floating-point boundary cases — e.g.
  // (1/12) * 12 can land a hair under 1 depending on JS's rounding, which
  // would otherwise floor a plant that should count down to 0.
  return Math.floor(squares * perSqFt + 1e-9)
}

/**
 * Fills a bedLengthFt x bedWidthFt grid (one cell per square foot) with
 * the assigned plants, in the order given, sequentially — a suggested
 * reference layout, not a shape-aware or companion-planting-aware packer.
 * Returns a 2D array of { plantId, emoji } | null, row-major.
 */
export function buildSpacingGrid(bedLengthFt, bedWidthFt, assignments) {
  const rows = Math.max(0, Math.round(bedWidthFt))
  const cols = Math.max(0, Math.round(bedLengthFt))
  const totalSquares = rows * cols

  const cellQueue = []
  for (const a of assignments) {
    for (let i = 0; i < a.squares; i++) {
      if (cellQueue.length >= totalSquares) break
      cellQueue.push({ plantId: a.plantId, emoji: a.emoji })
    }
  }

  const grid = []
  let cursor = 0
  for (let r = 0; r < rows; r++) {
    const row = []
    for (let c = 0; c < cols; c++) {
      row.push(cellQueue[cursor] || null)
      cursor++
    }
    grid.push(row)
  }

  return { grid, totalSquares, usedSquares: Math.min(cellQueue.length, totalSquares) }
}

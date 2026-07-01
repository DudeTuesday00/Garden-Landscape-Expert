import { Badge } from 'planting-atlas-ds'

export function AllTones() {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Badge tone="bestSeller">Best Seller</Badge>
      <Badge tone="new">New</Badge>
      <Badge tone="sale">Sale</Badge>
      <Badge tone="neutral">Essential</Badge>
    </div>
  )
}

export function PriorityTag() {
  return <Badge tone="new">high priority</Badge>
}

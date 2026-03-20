/**
 * 3D Printed Gardening Products data.
 *
 * Product shape:
 *  - id:          string   — unique slug
 *  - name:        string   — display name
 *  - tagline:     string   — short one-line descriptor
 *  - price:       number   — USD price
 *  - category:    string   — product category slug
 *  - categoryLabel: string — human-readable category
 *  - emoji:       string   — icon
 *  - badge:       string|null — e.g. 'New', 'Best Seller', 'Sale' (null for none)
 *  - thumbnail:   string   — path to thumbnail image (relative to /public)
 *  - images:      string[] — paths to gallery images (relative to /public)
 *  - description: string   — full product description
 *  - features:    string[] — key feature bullet points
 *  - details:     object   — technical specifications
 *  - inStock:     boolean
 */

export const productCategories = [
  { id: 'planters',      label: 'Planters & Pots',     emoji: '🪴' },
  { id: 'markers',       label: 'Plant Markers',        emoji: '🏷️' },
  { id: 'tools',         label: 'Garden Tools & Aids',  emoji: '🛠️' },
  { id: 'trellises',     label: 'Trellises & Supports', emoji: '🌿' },
  { id: 'organization',  label: 'Organization',         emoji: '📦' },
]

export const products = [
  {
    id: 'modular-hexagon-planter',
    name: 'Modular Hexagon Planter',
    tagline: 'Snap-together hex pots that grow with your garden',
    price: 18.99,
    category: 'planters',
    categoryLabel: 'Planters & Pots',
    emoji: '🪴',
    badge: 'Best Seller',
    thumbnail: '/shop/placeholder-product.png',
    images: [
      '/shop/placeholder-product.png',
      '/shop/placeholder-product.png',
      '/shop/placeholder-product.png',
    ],
    description:
      'Our Modular Hexagon Planter is designed to interlock seamlessly with other units, letting you build custom arrangements on any flat surface — windowsill, patio table, or balcony rail. Each pot has a built-in drainage hole and a removable catch tray. Printed in food-safe, UV-stabilized PLA so colors stay vibrant season after season.',
    features: [
      'Interlocking hex design — connect as many as you like',
      'Built-in drainage hole with removable catch tray',
      'UV-stabilized PLA — won\'t fade or crack in sunlight',
      'Food-safe material — safe for herbs and edibles',
      'Dishwasher-safe catch tray',
      'Available in 6 colors',
    ],
    details: {
      material: 'UV-Stabilized PLA',
      dimensions: '4.5″ diameter × 3.8″ tall',
      weight: '3.2 oz per unit',
      colors: ['Forest Green', 'Terracotta', 'Slate Gray', 'Cream White', 'Midnight Black', 'Sky Blue'],
      printLayer: '0.2 mm layer height',
      infill: '25% gyroid infill',
    },
    inStock: true,
  },
  {
    id: 'plant-stake-label-set',
    name: 'Plant Stake Label Set (12-pack)',
    tagline: 'Elegant, reusable plant markers for every bed',
    price: 9.99,
    category: 'markers',
    categoryLabel: 'Plant Markers',
    emoji: '🏷️',
    badge: 'New',
    thumbnail: '/shop/placeholder-product.png',
    images: [
      '/shop/placeholder-product.png',
      '/shop/placeholder-product.png',
    ],
    description:
      'Tired of losing track of what you planted where? These slim, stake-style plant labels press easily into soil and hold a standard chalk marker or permanent marker label. The flat writing surface is angled for easy reading and each stake has a pointed tip that won\'t compact root zones. Comes as a set of 12 in your choice of color.',
    features: [
      'Set of 12 matching labels',
      'Angled writing surface — easy to read at a glance',
      'Works with chalk markers, permanent markers, or pencil',
      'Sharp-tip stake — press into soil without a hole',
      'Wipe-clean surface for reuse season after season',
      'Compact enough for seed trays and outdoor beds',
    ],
    details: {
      material: 'PETG (weather-resistant)',
      dimensions: '1.2″ wide × 5″ tall (2.5″ stake)',
      weight: '0.4 oz per label',
      colors: ['White', 'Forest Green', 'Terracotta', 'Natural Beige'],
      printLayer: '0.15 mm layer height',
      infill: '30% infill',
    },
    inStock: true,
  },
  {
    id: 'trellis-clip-set',
    name: 'Trellis & Stem Clip Set (20-pack)',
    tagline: 'Gentle adjustable clips for vines, tomatoes, and climbers',
    price: 7.49,
    category: 'trellises',
    categoryLabel: 'Trellises & Supports',
    emoji: '🌿',
    badge: null,
    thumbnail: '/shop/placeholder-product.png',
    images: [
      '/shop/placeholder-product.png',
      '/shop/placeholder-product.png',
    ],
    description:
      'A set of 20 flexible trellis clips designed to hold plant stems to wire, bamboo canes, or mesh trellises without bruising. The hinged design snaps open and closed with one hand, and the rounded interior ring cradles stems rather than pinching them. Perfect for tomatoes, cucumbers, beans, and climbing roses.',
    features: [
      'Set of 20 clips',
      'One-hand snap-open hinge',
      'Rounded interior — won\'t bruise tender stems',
      'Fits canes up to 0.4″ and stems up to 0.6″ diameter',
      'Flexible TPU material — won\'t crack in cold weather',
      'Reusable for multiple seasons',
    ],
    details: {
      material: 'TPU (flexible, UV-resistant)',
      dimensions: '1.1″ × 0.8″ per clip',
      weight: '0.1 oz per clip',
      colors: ['Green', 'Black'],
      printLayer: '0.2 mm layer height',
      infill: '20% infill',
    },
    inStock: true,
  },
  {
    id: 'seedling-tray-insert',
    name: 'Seedling Tray Cell Insert',
    tagline: 'Custom-fit inserts that make transplanting a snap',
    price: 14.99,
    category: 'planters',
    categoryLabel: 'Planters & Pots',
    emoji: '🌱',
    badge: null,
    thumbnail: '/shop/placeholder-product.png',
    images: [
      '/shop/placeholder-product.png',
      '/shop/placeholder-product.png',
    ],
    description:
      'These precision-fit cell inserts drop into standard 1020 seedling trays and create individual root compartments that air-prune as seedlings grow. When it\'s time to transplant, the flexible walls flex to release the root ball cleanly — no tearing, no root disturbance. Available in 6-cell and 12-cell configurations.',
    features: [
      'Fits standard 10″ × 20″ seedling trays',
      'Air-pruning side slots prevent root circling',
      'Flexible walls — root ball pops out without damage',
      'Available in 6-cell or 12-cell layout',
      'Drain holes in each cell base',
      'Stackable for compact storage',
    ],
    details: {
      material: 'Flexible PLA',
      dimensions: '9.8″ × 19.6″ outer (fits standard 1020 trays)',
      weight: '5.1 oz (12-cell) / 3.4 oz (6-cell)',
      colors: ['Black', 'Forest Green'],
      printLayer: '0.2 mm layer height',
      infill: '15% infill',
    },
    inStock: true,
  },
  {
    id: 'garden-tool-caddy',
    name: 'Garden Tool Caddy',
    tagline: 'Countertop organizer for small garden hand tools',
    price: 22.99,
    category: 'organization',
    categoryLabel: 'Organization',
    emoji: '📦',
    badge: 'New',
    thumbnail: '/shop/placeholder-product.png',
    images: [
      '/shop/placeholder-product.png',
      '/shop/placeholder-product.png',
      '/shop/placeholder-product.png',
    ],
    description:
      'Keep your potting bench or shed shelf tidy with this purpose-built hand tool caddy. Six cylindrical slots hold trowels, dibbers, pruning snips, and markers upright and within easy reach. A lower tray catches soil debris. The open-slatted base means any trapped moisture drains away quickly. Designed to pair with our Plant Stake Label Set.',
    features: [
      '6 upright slots for hand tools and markers',
      'Lower catch tray for soil debris',
      'Open-slat base — drains and dries quickly',
      'Weighted base — won\'t tip when fully loaded',
      'Slots sized for standard trowel handles (up to 1.2″ diameter)',
      'Wipe-clean surface',
    ],
    details: {
      material: 'UV-Stabilized PLA',
      dimensions: '7″ × 4.5″ × 5.5″ tall',
      weight: '8.4 oz',
      colors: ['Terracotta', 'Slate Gray', 'Forest Green', 'Midnight Black'],
      printLayer: '0.2 mm layer height',
      infill: '25% gyroid infill',
    },
    inStock: true,
  },
  {
    id: 'self-watering-reservoir-insert',
    name: 'Self-Watering Reservoir Insert',
    tagline: 'Sub-irrigation insert for pots up to 8″ diameter',
    price: 12.49,
    category: 'planters',
    categoryLabel: 'Planters & Pots',
    emoji: '💧',
    badge: null,
    thumbnail: '/shop/placeholder-product.png',
    images: [
      '/shop/placeholder-product.png',
      '/shop/placeholder-product.png',
    ],
    description:
      'Drop this sub-irrigation insert into any round pot up to 8″ in diameter and convert it into a self-watering planter. A central wick column draws water upward from the reservoir below; a fill tube lets you top up without disturbing the soil surface. An overflow hole prevents waterlogging. Ideal for herbs, lettuce, and other moisture-loving plants.',
    features: [
      'Fits any round pot 6″–8″ inner diameter',
      'Central wick column for passive sub-irrigation',
      'Side-fill tube — water without disturbing soil',
      'Overflow hole prevents waterlogging',
      'Reservoir holds approx. 10 fl oz of water',
      'Food-safe material — safe for edible herbs',
    ],
    details: {
      material: 'Food-Safe PLA',
      dimensions: 'Adjustable: fits 6″–8″ round pots; reservoir depth 1.8″',
      weight: '2.6 oz',
      colors: ['White', 'Black', 'Forest Green'],
      printLayer: '0.2 mm layer height',
      infill: '35% infill (watertight walls)',
    },
    inStock: false,
  },
]

/** Return a single product by id, or undefined if not found */
export function getProduct(id) {
  return products.find((p) => p.id === id)
}

/** Return all products in a given category */
export function getProductsByCategory(categoryId) {
  return products.filter((p) => p.category === categoryId)
}

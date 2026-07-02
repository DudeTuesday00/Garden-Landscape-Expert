// Maps plant type → up to 2 relevant guide IDs (live guides only).
// Shared between the wizard results (Results.jsx) and the Garden Planting
// Calendar tool — extend here once and both pick it up.
export const typeGuides = {
  flower:      [{ id: 'plants-for-color',          title: 'Plants for Color' },          { id: 'pollinator-garden',      title: 'Pollinator Garden' }],
  vegetable:   [{ id: 'salad-garden',               title: 'Salad Garden' },               { id: 'square-foot-gardening',  title: 'Square Foot Gardening' }],
  fruit:       [{ id: 'fruit-trees',                title: 'Fruit Trees' },                { id: 'salsa-garden',           title: 'Salsa Garden' }],
  herb:        [{ id: 'culinary-herb-garden',        title: 'Culinary Herb Garden' },       { id: 'medicinal-garden',       title: 'Medicinal Garden' }],
  tree:        [{ id: 'shade-trees',                 title: 'Shade Trees' },                { id: 'ornamental-trees',       title: 'Ornamental Trees' }],
  shrub:       [{ id: 'cottage-garden',              title: 'Cottage Garden' },             { id: 'curb-appeal',            title: 'Curb Appeal' }],
  vine:        [{ id: 'plants-for-smell',            title: 'Plants for Fragrance' },       { id: 'cottage-garden',         title: 'Cottage Garden' }],
  bulb:        [{ id: 'spring-bulb-garden',          title: 'Spring Bulb Garden' },         { id: 'plants-for-color',       title: 'Plants for Color' }],
  grass:       [{ id: 'xeriscape',                   title: 'Xeriscape Design' },           { id: 'four-season-garden',     title: 'Four-Season Garden' }],
  succulent:   [{ id: 'xeriscape',                   title: 'Xeriscape Design' },           { id: 'porch-plants',           title: 'Porch Plants' }],
  fern:        [{ id: 'shade-trees',                 title: 'Shade Garden Guide' },         { id: 'japanese-garden',        title: 'Japanese Garden' }],
  groundcover: [{ id: 'xeriscape',                   title: 'Xeriscape Design' },           { id: 'curb-appeal',            title: 'Curb Appeal' }],
}

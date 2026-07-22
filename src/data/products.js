// Storefront data. Swap the `image` URLs for real product photography before launch.
// Placeholder images use picsum (deterministic per seed) so the layout always renders.
const img = (seed) => `https://picsum.photos/seed/${seed}/900/1100`

export const categories = ['All', 'Aquariums', 'Live Coral', 'Rare Species', 'Custom Tanks']

export const products = [
  {
    id: 'nano-reef-30',
    name: 'Nano Reef 30',
    category: 'Aquariums',
    price: 480,
    unit: '30 gal',
    tag: 'Best seller',
    blurb: 'Rimless low-iron cube with a matched sump and return pump. Reef-ready out of the box.',
    image: img('cfa-nano-reef'),
  },
  {
    id: 'peninsula-90',
    name: 'Peninsula 90',
    category: 'Aquariums',
    price: 1650,
    unit: '90 gal',
    tag: null,
    blurb: 'Three-sided viewing display for open rooms. Braceless, ultra-clear, silicone-perfect.',
    image: img('cfa-peninsula'),
  },
  {
    id: 'torch-coral',
    name: 'Aussie Gold Torch',
    category: 'Live Coral',
    price: 220,
    unit: 'per head',
    tag: 'Fresh cut',
    blurb: 'Aquacultured gold-tip torch. Sweeping flow, glowing tips, fully polyp-extended on arrival.',
    image: img('cfa-torch'),
  },
  {
    id: 'zoa-garden',
    name: 'Rainbow Zoa Garden',
    category: 'Live Coral',
    price: 95,
    unit: 'per frag',
    tag: null,
    blurb: 'Encrusting zoanthid colony, 20+ polyps. Bulletproof color for the beginner reef.',
    image: img('cfa-zoa'),
  },
  {
    id: 'mandarin-dragonet',
    name: 'Green Mandarin Dragonet',
    category: 'Rare Species',
    price: 68,
    unit: 'each',
    tag: 'Tank-bred',
    blurb: 'Captive-bred and pod-trained — eating frozen and pellet before it ever reaches you.',
    image: img('cfa-mandarin'),
  },
  {
    id: 'gem-tang',
    name: 'Gem Tang',
    category: 'Rare Species',
    price: 1400,
    unit: 'each',
    tag: 'Limited',
    blurb: 'Deepwater collected showpiece. Dense white speckling, quarantined 30 days, eating heavily.',
    image: img('cfa-gemtang'),
  },
  {
    id: 'atelier-build',
    name: 'Atelier Peninsula Build',
    category: 'Custom Tanks',
    price: 9800,
    unit: 'from',
    tag: 'Bespoke',
    blurb: 'Full-room installations, cabinetry, plumbing, and automation — designed and installed by us.',
    image: img('cfa-atelier'),
  },
  {
    id: 'frag-system',
    name: 'Grow-Out Frag System',
    category: 'Custom Tanks',
    price: 3200,
    unit: 'from',
    tag: null,
    blurb: 'Modular propagation rack with dedicated lighting and flow — for the reefer going pro.',
    image: img('cfa-frag'),
  },
]

export const galleryImages = [
  { src: 'https://picsum.photos/seed/cfa-g1/1200/1500', span: 'row-span-2', alt: 'A full reef display under blue light' },
  { src: 'https://picsum.photos/seed/cfa-g2/1200/800', span: '', alt: 'Coral frags on a propagation rack' },
  { src: 'https://picsum.photos/seed/cfa-g3/1200/800', span: '', alt: 'A clownfish hosting an anemone' },
  { src: 'https://picsum.photos/seed/cfa-g4/1200/1500', span: 'row-span-2', alt: 'A peninsula tank in a living room' },
  { src: 'https://picsum.photos/seed/cfa-g5/1200/800', span: '', alt: 'Macro shot of torch coral tips' },
  { src: 'https://picsum.photos/seed/cfa-g6/1200/800', span: '', alt: 'A school of fish over live rock' },
]

export const stats = [
  { value: '240+', label: 'Species in store' },
  { value: '1,800+', label: 'Tanks installed' },
  { value: '4.9', label: 'Customer rating' },
  { value: '12', label: 'Years on the coast' },
]

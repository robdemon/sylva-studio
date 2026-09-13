// ---------------------------------------------------------------------------
// PROJECTS DATA
//
// Images were extracted from Documents/Portfolio.pdf and grouped by the
// section each one appears in. `pdfPage` on every image records where it came
// from, so the mapping can be re-checked against the source document.
//
// TO ADD A PROJECT: drop images in src/images/projects/, import them below,
// and append an entry to `projects`. Every field marked PLACEHOLDER is copy
// written to fill the layout — replace it with the real project details.
// ---------------------------------------------------------------------------

import eight1 from '../images/projects/eight-feet-terrarium-1.jpg'
import eight2 from '../images/projects/eight-feet-terrarium-2.jpg'
import grow1 from '../images/projects/grow-box-1.jpg'
import grow2 from '../images/projects/grow-box-2.jpg'
import dooa1 from '../images/projects/dooa-terrarium-1.jpg'
import dooa2 from '../images/projects/dooa-terrarium-2.jpg'
import dooa3 from '../images/projects/dooa-terrarium-3.jpg'
import dooa4 from '../images/projects/dooa-terrarium-4.jpg'
import shizuku1 from '../images/projects/shizuku-pot-1.jpg'
import shizuku2 from '../images/projects/shizuku-pot-2.jpg'
import pond1 from '../images/projects/indoor-pond-1.jpg'
import sculpt1 from '../images/projects/living-sculptures-1.jpg'
import sculpt2 from '../images/projects/living-sculptures-2.jpg'
import sculpt3 from '../images/projects/living-sculptures-3.jpg'
import sculpt4 from '../images/projects/living-sculptures-4.jpg'
import sculpt5 from '../images/projects/living-sculptures-5.jpg'
import nano1 from '../images/projects/nano-tanks-1.jpg'
import nano2 from '../images/projects/nano-tanks-2.jpg'
import nano3 from '../images/projects/nano-tanks-3.jpg'
import nano4 from '../images/projects/nano-tanks-4.jpg'
import nano5 from '../images/projects/nano-tanks-5.jpg'
import nature1 from '../images/projects/nature-aquarium-1.jpg'
import nature2 from '../images/projects/nature-aquarium-2.jpg'
import nature3 from '../images/projects/nature-aquarium-3.jpg'
import nature4 from '../images/projects/nature-aquarium-4.jpg'
import nature5 from '../images/projects/nature-aquarium-5.jpg'
import nature6 from '../images/projects/nature-aquarium-6.jpg'
import nature7 from '../images/projects/nature-aquarium-7.jpg'

export const projects = [
  {
    slug: 'nature-aquarium',
    name: 'Nature Aquarium',
    kicker: 'Aquascape',
    // PLACEHOLDER copy — replace with the real project write-up.
    summary:
      'Full-length planted aquascapes built on the Nature Aquarium method — hardscape first, then a planting plan that fills in over months rather than days.',
    meta: { scale: 'Full length', discipline: 'Aquascaping', status: 'Portfolio' },
    images: [
      { src: nature1, caption: 'Driftwood-and-moss aquascape, full length', pdfPage: 1 },
      { src: nature2, caption: 'Alternate view of the cover aquascape', pdfPage: 1 },
      { src: nature3, caption: 'ADA display tank with driftwood spine', pdfPage: 3 },
      { src: nature4, caption: 'Rock-and-stem layout with red mid-ground', pdfPage: 6 },
      { src: nature5, caption: 'Stem garden under a flat LED panel', pdfPage: 6 },
      { src: nature6, caption: 'Wide planted display with open water column', pdfPage: 7 },
      { src: nature7, caption: 'Carpeted foreground with fish stocked', pdfPage: 7 },
    ],
  },
  {
    slug: 'eight-feet-terrarium',
    name: '8-Feet Terrarium',
    kicker: 'Large format',
    summary:
      'A room-scale glass terrarium on a built plinth — the largest format in the portfolio, planted as a single continuous landscape.',
    meta: { scale: '8 feet', discipline: 'Terrarium', status: 'Installed' },
    images: [
      { src: eight1, caption: 'Eight-foot glass terrarium on its plinth', pdfPage: 5 },
      { src: eight2, caption: 'Tall companion enclosure, lit from above', pdfPage: 5 },
    ],
  },
  {
    slug: 'grow-box',
    name: 'Grow Box',
    kicker: 'Enclosed system',
    summary:
      'Sealed grow boxes with integrated top lighting — a controlled column for humidity-loving planting that stays stable indoors.',
    meta: { scale: 'Tabletop', discipline: 'Enclosed grow', status: 'Portfolio' },
    images: [
      { src: grow1, caption: 'Tall grow box with mounded hardscape', pdfPage: 2 },
      { src: grow2, caption: 'Fern and driftwood build under LED', pdfPage: 4 },
    ],
  },
  {
    slug: 'dooa-terrarium',
    name: 'Dooa Terrarium',
    kicker: 'DOOA system',
    summary:
      'Cylindrical DOOA-system terrariums — compact glassware planted as miniature slopes, each built around one piece of driftwood.',
    meta: { scale: 'Desktop', discipline: 'Terrarium', status: 'Portfolio' },
    images: [
      { src: dooa1, caption: 'Cylinder terrarium with driftwood peak', pdfPage: 8 },
      { src: dooa2, caption: 'Mossed slope with red accent planting', pdfPage: 8 },
      { src: dooa3, caption: 'Side elevation under the wall-mounted light', pdfPage: 8 },
      { src: dooa4, caption: 'Detail of the planted foreground', pdfPage: 8 },
    ],
  },
  {
    slug: 'shizuku-pot',
    name: 'Shizuku Pot',
    kicker: 'Droplet glass',
    summary:
      'The teardrop Shizuku vessel — a closed, self-contained landscape read from every angle, planted in moss and fine-leaf species.',
    meta: { scale: 'Desktop', discipline: 'Closed vessel', status: 'Portfolio' },
    images: [
      { src: shizuku1, caption: 'Shizuku pot with stone-and-moss landscape', pdfPage: 9 },
      { src: shizuku2, caption: 'Driftwood arch planted in moss', pdfPage: 9 },
    ],
  },
  {
    slug: 'living-sculptures',
    name: 'Living Sculptures',
    kicker: 'Mounted planting',
    summary:
      'Salvaged driftwood and stumps planted directly as free-standing sculpture — succulents, ferns, and trailing species mounted into the grain.',
    meta: { scale: 'Varies', discipline: 'Mounted planting', status: 'Installed' },
    images: [
      { src: sculpt1, caption: 'Driftwood slab planted with succulents and fern', pdfPage: 10 },
      { src: sculpt2, caption: 'Standing stump planted top to base', pdfPage: 10 },
      { src: sculpt3, caption: 'Mounted planting detail', pdfPage: 10 },
      { src: sculpt4, caption: 'Sculpture sited in the garden', pdfPage: 10 },
      { src: sculpt5, caption: 'Trailing species established into the wood', pdfPage: 10 },
    ],
  },
  {
    slug: 'nano-tanks',
    name: 'Nano Tanks',
    kicker: 'Small format',
    summary:
      'Cube and small-format tanks where every centimetre is composed — bonsai-style hardscape, tight planting, and scaled-down equipment.',
    meta: { scale: 'Nano', discipline: 'Aquascaping', status: 'Portfolio' },
    images: [
      { src: nano1, caption: 'Wide nano tank with moss tree', pdfPage: 9 },
      { src: nano2, caption: 'Tall nano with dense stem planting', pdfPage: 6 },
      { src: nano3, caption: 'Nano layout under a single spotlight', pdfPage: 6 },
      { src: nano4, caption: 'Compact planted cube', pdfPage: 6 },
      { src: nano5, caption: 'Cube tank with cobble foreground', pdfPage: 7 },
    ],
  },
  {
    slug: 'indoor-pond',
    name: 'Indoor Pond',
    kicker: 'Interior install',
    summary:
      'Interior water and planting features built into finished rooms — greenery carried across the wall and into the fit-out.',
    // NOTE: the portfolio has one interior installation shot (page 11). Confirm
    // it belongs to this project and add the rest of the pond photography here.
    meta: { scale: 'Architectural', discipline: 'Interior install', status: 'Needs photos' },
    images: [
      { src: pond1, caption: 'Interior installation with planted wall', pdfPage: 11 },
    ],
  },
]

// Sections of the portfolio that are not project work.
export const portfolioExtras = {
  studio: 'VEIN — Nature Design Studio',
  pressPages: [12],
  credentialPages: [13, 14],
}

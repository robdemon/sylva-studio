# Sylva Studio 🐠

> Where the reef comes home.

A bold, editorial storefront for a coastal aquarium studio — aquariums, live coral, rare species, and bespoke custom-tank builds. Dark, high-contrast, type-driven design built with React, Vite, and Tailwind CSS.

## Stack

- **React 18** + **Vite 6** — fast dev server and build
- **Tailwind CSS 3** — utility-first styling with a custom reef palette
- **Fonts** — Anton (display), Inter (body), JetBrains Mono (accents)

## Getting started

```bash
npm install        # install dependencies
npm run dev        # start the dev server at http://localhost:5173
npm run build      # production build to dist/
npm run preview    # preview the production build locally
```

## Project structure

```
.
├── index.html                # HTML shell + font links
├── vite.config.js            # Vite + React config
├── tailwind.config.js        # theme: reef palette, fonts, animations
├── postcss.config.js
├── public/                   # static assets (add favicons, og images here)
└── src/
    ├── main.jsx              # React entry
    ├── App.jsx               # page composition
    ├── index.css             # Tailwind layers + global styles (grain, marquee)
    ├── data/
    │   └── products.js       # products, gallery images, stats — edit content here
    └── components/
        ├── Nav.jsx           # sticky blurred nav
        ├── Hero.jsx          # full-bleed hero
        ├── Marquee.jsx       # scrolling keyword band
        ├── Gallery.jsx       # reef photo grid
        ├── Store.jsx         # #store — filterable product grid
        ├── Stats.jsx         # stat band
        ├── CustomTanks.jsx   # bespoke build process
        ├── Contact.jsx       # visit info + contact form
        └── Footer.jsx
```

## Editing content

All storefront copy lives in **`src/data/products.js`** — product listings, gallery images, and the stat band. Placeholder imagery uses [picsum.photos](https://picsum.photos) seeds so the layout always renders; **swap the `image` URLs for real product photography before launch.**

## Deploy

The output in `dist/` is fully static and can be hosted anywhere (Netlify, Vercel, GitHub Pages, Cloudflare Pages). For GitHub Pages, set `base` in `vite.config.js` to your repo name.

---

Design and build by Sylva Studio.

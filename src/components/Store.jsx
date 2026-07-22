import { useMemo, useState } from 'react'
import { categories, products } from '../data/products.js'

function ProductCard({ p }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition hover:border-white/30">
      <div className="relative aspect-[4/5] overflow-hidden bg-reef-deep">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover brightness-[1.05] saturate-[1.15] transition duration-700 group-hover:scale-105"
        />
        {p.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-reef-coral px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-black">
            {p.tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-reef-glow">{p.category}</p>
        <h3 className="mt-2 font-display text-2xl uppercase tracking-wide">{p.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">{p.blurb}</p>

        <div className="mt-5 flex items-center justify-between">
          <div className="font-mono text-sm">
            <span className="text-white">${p.price.toLocaleString()}</span>
            <span className="ml-2 text-white/40">/ {p.unit}</span>
          </div>
          <button className="rounded-full border border-white/20 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition group-hover:border-reef-glow group-hover:text-reef-glow">
            Add to tank
          </button>
        </div>
      </div>
    </article>
  )
}

export default function Store() {
  const [active, setActive] = useState('All')

  const shown = useMemo(
    () => (active === 'All' ? products : products.filter((p) => p.category === active)),
    [active],
  )

  return (
    <section id="store" className="border-t border-white/10 bg-gradient-to-b from-black to-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">The store</p>
            <h2 className="headline text-5xl md:text-7xl">Take home the ocean</h2>
          </div>
          <p className="max-w-sm text-white/60">
            Livestock is quarantined and eating before it lists. Dry goods ship next-day. Local
            delivery and install across the coast.
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] transition ${
                active === c
                  ? 'bg-white text-black'
                  : 'border border-white/15 text-white/60 hover:border-white/40 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shown.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

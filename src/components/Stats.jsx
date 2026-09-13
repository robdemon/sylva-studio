import { stats } from '../data/products.js'

export default function Stats() {
  return (
    <section className="border-y border-bone/10 bg-night">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-6 py-12 text-center md:py-16">
            <div className="font-display text-5xl md:text-6xl">{s.value}</div>
            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-bone/50">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const items = [
  'Live Coral',
  'Rare Species',
  'Custom Tanks',
  'Quarantined & Guaranteed',
  'Aquacultured',
  'Reef Ready',
]

export default function Marquee() {
  const row = [...items, ...items]
  return (
    <div className="border-y border-bone/10 bg-night py-4">
      <div className="flex overflow-hidden">
        <div className="marquee-track flex shrink-0 items-center gap-8 whitespace-nowrap pr-8">
          {row.map((t, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="font-display text-2xl uppercase tracking-wide text-bone/80 md:text-3xl">
                {t}
              </span>
              <span className="text-reef-coral" aria-hidden>
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

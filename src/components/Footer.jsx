const cols = [
  { title: 'Shop', links: ['Aquariums', 'Live Coral', 'Rare Species', 'Custom Tanks'] },
  { title: 'Learn', links: ['Care Guides', 'Quarantine Process', 'Water Testing', 'Blog'] },
  { title: 'Studio', links: ['About', 'Install Gallery', 'Careers', 'Contact'] },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 font-display text-xl">
              <span aria-hidden>🐠</span> CLEVER FISH
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/50">
              Where the reef comes home. A coastal aquarium studio for livestock, coral, and bespoke
              builds.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                {c.title}
              </div>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="link-underline text-sm text-white/70 hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Clever Fish Aquarium</span>
          <span>Built on the coast · Reef ready</span>
        </div>
      </div>
    </footer>
  )
}

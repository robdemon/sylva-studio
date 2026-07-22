export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background: layered reef gradient + moving glow */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 90% at 70% 20%, #0a3a52 0%, #041d2e 45%, #050506 100%)',
          }}
        />
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-reef-teal/20 blur-3xl animate-drift" />
        <div className="absolute right-0 top-10 h-[28rem] w-[28rem] rounded-full bg-reef-coral/10 blur-3xl animate-drift [animation-delay:2s]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pt-28 md:px-10">
        <p className="eyebrow mb-6">Coastal District · Open Daily</p>

        <h1 className="headline text-white">
          <span className="block text-[13vw] leading-[0.82] md:text-[9vw]">Come see the</span>
          <span className="block text-[13vw] leading-[0.82] md:text-[9vw] text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.85)]">
            reef alive
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-lg leading-relaxed text-white/70">
            Aquariums, aquacultured coral, and quarantined rare species — hand-picked for reefkeepers
            who want the ocean to come home.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#store"
              className="rounded-full bg-reef-glow px-7 py-3 font-mono text-xs uppercase tracking-[0.2em] text-black transition hover:bg-white"
            >
              Shop the store
            </a>
            <a
              href="#gallery"
              className="rounded-full border border-white/20 px-7 py-3 font-mono text-xs uppercase tracking-[0.2em] text-white transition hover:border-white"
            >
              See the gallery
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
        <span className="h-8 w-px animate-bob bg-white/40" />
      </div>
    </section>
  )
}

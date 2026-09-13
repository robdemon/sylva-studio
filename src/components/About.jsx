import aboutImage from '../images/IMG_0047.JPG'

const pillars = [
  {
    n: '01',
    title: 'Sourced right',
    body: 'Aquacultured wherever it exists, responsibly collected where it does not. Every animal is logged, quarantined, and eating before it earns a place on the floor.',
  },
  {
    n: '02',
    title: 'Built to last',
    body: 'Glass, cabinetry, plumbing, and automation specified as one system — so the hardware disappears and the habitat is all you see.',
  },
  {
    n: '03',
    title: 'Kept alive',
    body: 'Install is the beginning, not the handoff. Service plans hold parameters steady long after the first drop of water goes in.',
  },
]

export default function About() {
  return (
    <section id="about" className="border-t border-bone/10 bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:items-center">
          {/* Left: story */}
          <div>
            <p className="eyebrow mb-4">About us</p>
            <h2 className="headline text-5xl md:text-7xl">
              A studio for
              <br />
              living things
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-bone/70">
              Sylva Studio began as a single grow-out rack on the coast and grew into a design house
              for living habitats. We build aquariums the way an architect builds a room — for light,
              for flow, and for the decades it has to survive.
            </p>
            <p className="mt-5 leading-relaxed text-bone/55">
              Twelve years on, that means a storefront you can walk, a workshop that fabricates every
              bespoke system we sell, and a team that would rather turn away a species than ship one
              that is not ready.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-reef-glow px-7 py-3 font-mono text-xs uppercase tracking-[0.2em] text-forest transition hover:bg-bone"
              >
                See our projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-bone/20 px-7 py-3 font-mono text-xs uppercase tracking-[0.2em] text-bone transition hover:border-bone"
              >
                Talk to the studio
              </a>
            </div>
          </div>

          {/* Right: portrait */}
          <figure className="relative overflow-hidden rounded-2xl bg-reef-deep">
            <img
              src={aboutImage}
              alt="Inside the Sylva Studio workshop"
              loading="lazy"
              className="h-full max-h-[34rem] w-full object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/85 to-transparent p-6 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/80">
              The workshop · Coastal District
            </figcaption>
          </figure>
        </div>

        {/* Pillars */}
        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-bone/10 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.n} className="bg-bone/[0.02] p-8 transition hover:bg-bone/[0.05]">
              <div className="font-mono text-xs text-reef-glow">{p.n}</div>
              <h3 className="mt-4 font-display text-2xl uppercase tracking-wide">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-bone/55">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

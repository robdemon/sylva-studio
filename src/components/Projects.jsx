import { useState } from 'react'
import { projects } from '../data/projects.js'

// Portfolio.pdf lives in /public so Vite serves it as-is and copies it on build.
const portfolioUrl = `${import.meta.env.BASE_URL}Portfolio.pdf`

export default function Projects() {
  const [activeSlug, setActiveSlug] = useState(projects[0].slug)
  const [shot, setShot] = useState(0)

  const active = projects.find((p) => p.slug === activeSlug) ?? projects[0]
  const hero = active.images[Math.min(shot, active.images.length - 1)]

  const select = (slug) => {
    setActiveSlug(slug)
    setShot(0)
  }

  return (
    <section id="projects" className="border-t border-bone/10 bg-night">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">Projects</p>
            <h2 className="headline text-5xl md:text-7xl">Selected work</h2>
          </div>
          <div className="flex max-w-sm flex-col items-start gap-5">
            <p className="text-bone/60">
              Terrariums, aquascapes, and living installations. Pick a project to open it — the full
              portfolio is available as a PDF.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-bone/20 px-5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-bone transition hover:border-bone"
              >
                View PDF
              </a>
              <a
                href={portfolioUrl}
                download="Sylva-Studio-Portfolio.pdf"
                className="rounded-full bg-reef-glow px-5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-forest transition hover:bg-bone"
              >
                Download
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* ---------- Project panel ---------- */}
          <aside className="lg:col-span-4">
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-bone/40">
              {projects.length} projects
            </div>

            <ul className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {projects.map((p, i) => {
                const on = p.slug === active.slug
                return (
                  <li key={p.slug} className="shrink-0 lg:shrink">
                    <button
                      onClick={() => select(p.slug)}
                      aria-current={on ? 'true' : undefined}
                      className={`group flex w-full items-center gap-4 rounded-xl border px-4 py-4 text-left transition ${
                        on
                          ? 'border-sage/60 bg-sage/15'
                          : 'border-bone/10 bg-bone/[0.02] hover:border-bone/30 hover:bg-bone/[0.05]'
                      }`}
                    >
                      <span
                        className={`font-mono text-[10px] tabular-nums ${
                          on ? 'text-sand' : 'text-bone/35'
                        }`}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block whitespace-nowrap font-display text-lg uppercase tracking-wide lg:whitespace-normal">
                          {p.name}
                        </span>
                        <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-bone/40">
                          {p.kicker} · {p.images.length}{' '}
                          {p.images.length === 1 ? 'image' : 'images'}
                        </span>
                      </span>
                    </button>
                  </li>
                )
              })}

              {/* Placeholder slot — see src/data/projects.js to add a project */}
              <li className="shrink-0 lg:shrink">
                <div className="flex w-full items-center gap-4 rounded-xl border border-dashed border-bone/15 px-4 py-4 text-left">
                  <span className="font-mono text-[10px] text-bone/25">+</span>
                  <span className="min-w-0 flex-1">
                    <span className="block whitespace-nowrap font-display text-lg uppercase tracking-wide text-bone/30 lg:whitespace-normal">
                      More work
                    </span>
                    <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-bone/25">
                      Coming soon
                    </span>
                  </span>
                </div>
              </li>
            </ul>
          </aside>

          {/* ---------- Detail panel ---------- */}
          <div className="lg:col-span-8">
            <article className="overflow-hidden rounded-2xl border border-bone/10 bg-bone/[0.02]">
              {/* Hero shot */}
              <figure className="relative aspect-[16/10] w-full overflow-hidden bg-olive">
                <img
                  key={hero.src}
                  src={hero.src}
                  alt={hero.caption}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-forest/90 to-transparent p-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/80">
                    {hero.caption}
                  </span>
                  <span className="shrink-0 rounded-full bg-forest/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-bone/60">
                    PDF p.{hero.pdfPage}
                  </span>
                </figcaption>
              </figure>

              {/* Thumbnails */}
              {active.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto border-b border-bone/10 p-4">
                  {active.images.map((img, i) => (
                    <button
                      key={img.src}
                      onClick={() => setShot(i)}
                      aria-label={img.caption}
                      className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg border transition ${
                        i === shot
                          ? 'border-sand'
                          : 'border-bone/10 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img.src}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Copy + meta */}
              <div className="p-6 md:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-sand">
                  {active.kicker}
                </p>
                <h3 className="mt-3 font-display text-3xl uppercase tracking-wide md:text-4xl">
                  {active.name}
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-bone/60">{active.summary}</p>

                <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-bone/10 sm:grid-cols-3">
                  {Object.entries(active.meta).map(([k, v]) => (
                    <div key={k} className="bg-bone/[0.03] px-5 py-4">
                      <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone/40">
                        {k}
                      </dt>
                      <dd className="mt-2 text-sm text-bone/80">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

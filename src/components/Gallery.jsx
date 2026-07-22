import { galleryImages } from '../data/products.js'

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="eyebrow mb-4">The gallery</p>
          <h2 className="headline text-5xl md:text-7xl">
            A living reef
            <br />
            experience
          </h2>
        </div>
        <p className="max-w-sm text-white/60">
          Every tank on the floor is running, stable, and photographed the day it lands. What you see
          is what swims home.
        </p>
      </div>

      <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
        {galleryImages.map((g, i) => (
          <figure
            key={i}
            className={`group relative overflow-hidden rounded-2xl bg-reef-deep ${g.span}`}
          >
            <img
              src={g.src}
              alt={g.alt}
              loading="lazy"
              className="h-full w-full object-cover brightness-[1.05] saturate-[1.15] transition duration-700 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-4 bg-gradient-to-t from-black/80 to-transparent p-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/80 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {g.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

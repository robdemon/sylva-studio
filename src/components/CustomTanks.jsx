const steps = [
  { n: '01', title: 'Consult', body: 'We walk your space, talk livestock goals, and sketch a build that fits the room and the reef.' },
  { n: '02', title: 'Design', body: 'Glass, cabinetry, plumbing, lighting, and automation — spec’d and rendered before a drop of water.' },
  { n: '03', title: 'Install', body: 'We build on-site, cycle the system, and stock it in stages so nothing gets rushed.' },
  { n: '04', title: 'Maintain', body: 'Optional service plans keep parameters tight and glass clear, so you just enjoy the view.' },
]

export default function CustomTanks() {
  return (
    <section id="custom" className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(100% 80% at 20% 0%, #06283a 0%, #050506 60%)' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-14 max-w-2xl">
          <p className="eyebrow mb-4">Custom tanks</p>
          <h2 className="headline text-5xl md:text-7xl">Built for your room</h2>
          <p className="mt-6 text-lg text-white/60">
            From a rimless nano on the desk to a room-dividing peninsula, our team designs and installs
            bespoke systems end to end — engineered to disappear into your space and show off the reef.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="bg-white/[0.02] p-8 transition hover:bg-white/[0.05]">
              <div className="font-mono text-xs text-reef-glow">{s.n}</div>
              <h3 className="mt-4 font-display text-2xl uppercase tracking-wide">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex rounded-full bg-white px-7 py-3 font-mono text-xs uppercase tracking-[0.2em] text-black transition hover:bg-reef-glow"
          >
            Start a build
          </a>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
        {/* Left: info */}
        <div>
          <p className="eyebrow mb-4">Visit / Contact</p>
          <h2 className="headline text-5xl md:text-7xl">Come see the reef</h2>

          <div className="mt-10 space-y-8 font-mono text-sm text-white/70">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/40">Storefront</div>
              <p className="mt-2">18 Tidewater Row, Coastal District</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/40">Open daily</div>
              <p className="mt-2">Mon–Sat 10–7 · Sun 11–5</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/40">Reach us</div>
              <p className="mt-2">
                <a href="mailto:hello@sylvastudio.example" className="link-underline">hello@sylvastudio.example</a>
                <br />
                (555) 018-2240
              </p>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
          {sent ? (
            <div className="flex h-full min-h-[280px] flex-col items-center justify-center text-center">
              <div className="text-4xl">🐠</div>
              <h3 className="mt-4 font-display text-3xl uppercase">Message swimming your way</h3>
              <p className="mt-3 text-white/60">We’ll be in touch within one tide cycle (usually a day).</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <h3 className="font-display text-2xl uppercase tracking-wide">Ask about stock or a build</h3>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <input required placeholder="Name" className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-reef-glow" />
                <input required type="email" placeholder="Email" className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-reef-glow" />
              </div>
              <select className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/70 outline-none focus:border-reef-glow">
                <option>I’m interested in… livestock</option>
                <option>I’m interested in… a custom tank</option>
                <option>I’m interested in… maintenance service</option>
                <option>I’m interested in… something else</option>
              </select>
              <textarea rows={4} placeholder="Tell us about your tank" className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-reef-glow" />
              <button type="submit" className="w-full rounded-full bg-reef-glow py-3 font-mono text-xs uppercase tracking-[0.2em] text-black transition hover:bg-white">
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

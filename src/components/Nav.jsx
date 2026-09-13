import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About Us' },
  { href: '#projects', label: 'Projects' },
  { href: '#gallery', label: 'Gallery' },
  // Points at the "Custom Tanks" section (<section id="custom">) in CustomTanks.jsx.
  { href: '#custom', label: 'Custom Tanks' },
  { href: '#contact', label: 'Contact Us' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-forest/70 backdrop-blur-md border-b border-bone/5' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-2 font-display text-lg tracking-wide">
          <span aria-hidden>🐠</span>
          <span>SYLVA&nbsp;STUDIO</span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-underline font-mono text-xs uppercase tracking-[0.2em] text-bone/70 hover:text-bone">
              {l.label}
            </a>
          ))}
          {/* [HIDDEN-SECTION: STORE] The "Shop" pill pointed at #store. Restore it
              together with <Store /> in App.jsx. */}
          {/* <a
            href="#store"
            className="rounded-full bg-bone px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] text-forest transition hover:bg-reef-glow"
          >
            Shop
          </a> */}
          <a
            href="#contact"
            className="rounded-full bg-bone px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] text-forest transition hover:bg-reef-glow"
          >
            Enquire
          </a>
        </div>

        <button
          className="md:hidden font-mono text-xs uppercase tracking-[0.2em] text-bone"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {open && (
        <div className="border-t border-bone/10 bg-forest/90 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl uppercase tracking-wide text-bone/80"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

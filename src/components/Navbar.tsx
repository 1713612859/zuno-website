import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Button from './Button';

const navLinks = [
  { href: '#products', label: 'Products' },
  { href: '#software', label: 'Software & Payment' },
  { href: '#contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="container-shell flex min-h-16 items-center justify-between gap-4">
        <a className="focus-ring flex items-center gap-3 rounded-md" href="#top" aria-label="ZUNO home">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white">
            Z
          </span>
          <span className="font-display text-xl font-bold tracking-[-0.02em] text-ink">ZUNO</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-ink"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a href="#contact">
            <Button variant="outline">Get a Quote</Button>
          </a>
        </div>

        <button
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-700 lg:hidden"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-shell grid gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="focus-ring rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

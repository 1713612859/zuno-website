import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Button from './Button';
import zunoLogo from '../assets/zuno-logo.jpg';

type NavChild = { href: string; label: string; description?: string };
type NavEntry = { label: string; href?: string; children?: NavChild[] };

const navItems: NavEntry[] = [
  {
    label: 'Products',
    children: [
      { href: '#products', label: 'All Products', description: 'Browse the full catalog' },
      { href: '#pos', label: 'POS Series', description: 'iMin · Nebullar smart POS' },
      { href: '#fintech', label: 'Fintech Series', description: 'Payment terminals' },
      { href: '#warehouse', label: 'Warehouse Series', description: 'PDA · scanners' },
      { href: '#desktop', label: 'Desktop & Computers', description: 'PCs and laptops' }
    ]
  },
  {
    label: 'Solutions',
    children: [
      { href: '#industries', label: 'Industries', description: 'Retail, F&B, logistics…' },
      { href: '#software', label: 'Software & Payment', description: 'Software & payments' }
    ]
  },
  { label: 'Support', href: '#contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const closeMobile = () => {
    setOpen(false);
    setExpanded(null);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="container-shell flex min-h-16 items-center justify-between gap-4">
        <a className="focus-ring flex items-center rounded-md" href="#top" aria-label="Zuno Group home">
          <span className="block h-12 w-40 overflow-hidden">
            <img src={zunoLogo} alt="Zuno Group Inc." className="h-full w-full object-cover" />
          </span>
        </a>

        {/* desktop nav with dropdowns */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className="focus-ring inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-ink group-hover:text-ink"
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform group-hover:rotate-180"
                  />
                </button>
                {/* dropdown panel */}
                <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-soft">
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="focus-ring block rounded-xl px-3 py-2.5 transition hover:bg-brand-50"
                      >
                        <span className="block text-sm font-semibold text-ink">{child.label}</span>
                        {child.description ? (
                          <span className="mt-0.5 block text-xs text-slate-500">
                            {child.description}
                          </span>
                        ) : null}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-ink"
              >
                {item.label}
              </a>
            )
          )}
        </div>

        <div className="hidden lg:block">
          <a href="#contact">
            <Button variant="purple">Contact us</Button>
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

      {/* mobile menu with accordion */}
      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-shell grid gap-1 py-4">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    type="button"
                    className="focus-ring flex w-full items-center justify-between rounded-md px-3 py-3 text-sm font-semibold text-ink hover:bg-slate-100"
                    onClick={() =>
                      setExpanded((current) => (current === item.label ? null : item.label))
                    }
                  >
                    {item.label}
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-4 w-4 transition-transform ${
                        expanded === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expanded === item.label ? (
                    <div className="ml-3 grid gap-1 border-l border-slate-200 pl-3">
                      {item.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className="focus-ring rounded-md px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100"
                          onClick={closeMobile}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="focus-ring rounded-md px-3 py-3 text-sm font-semibold text-ink hover:bg-slate-100"
                  onClick={closeMobile}
                >
                  {item.label}
                </a>
              )
            )}
            <a href="#contact" onClick={closeMobile} className="mt-2">
              <Button variant="purple" className="w-full">
                Contact us
              </Button>
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

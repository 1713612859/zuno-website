const productLinks = [
  { href: '#pos', label: 'POS Terminals' },
  { href: '#surveillance', label: 'Security & Surveillance' },
  { href: '#displays', label: 'Monitors & Computers' },
  { href: '#software', label: 'Software & Payment' }
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-3">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-sm font-bold text-navy-900">
              Z
            </span>
            <span className="text-xl font-bold">ZUNO</span>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-300">
            Business hardware supplier — POS terminals, surveillance, and computers for
            retail stores, restaurants, and growing businesses in the Philippines.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-300">
            Products
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {productLinks.map((link) => (
              <li key={link.href}>
                <a className="hover:text-white" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-300">
            Contact
          </h2>
          <address className="mt-4 space-y-3 text-sm not-italic text-slate-300">
            <p>Email: contact@zuno.example</p>
            <p>Phone: +63 XXX XXX XXXX</p>
            <p>Location: Philippines</p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell py-5 text-sm text-slate-400">
          <p>Copyright 2026 ZUNO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import zunoLogo from '../assets/zuno-logo.jpg';

const productLinks = [
  { href: '#pos', label: 'POS Series' },
  { href: '#fintech', label: 'Fintech Series' },
  { href: '#warehouse', label: 'Warehouse Series' },
  { href: '#desktop', label: 'Desktop & Computers' },
  { href: '#software', label: 'Software & Payment' }
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-3">
        <div>
          <div className="mb-4">
            <span className="inline-block h-12 w-44 overflow-hidden rounded-lg bg-white">
              <img src={zunoLogo} alt="Zuno Group Inc." className="h-full w-full object-cover" />
            </span>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-300">
            Business hardware supplier — POS, fintech, warehouse, computers, and
            consumables for retail, dining, and service businesses in the Philippines.
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
          <address className="mt-4 space-y-3 text-sm not-italic leading-6 text-slate-300">
            <p>Website: zuno.ph</p>
            <p>Email: info@zuno.ph</p>
            <p>Phone: 0917 446 9999</p>
            <p>
              Eastfield Center, Mall of Asia Complex, Diosdado Macapagal Blvd, Pasay City,
              1300 Metro Manila
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell py-5 text-sm text-slate-400">
          <p>Copyright 2025 Zuno Group Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

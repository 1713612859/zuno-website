import {
  BadgeCheck,
  CreditCard,
  Headphones,
  MapPin,
  Package,
  QrCode,
  Truck,
  Wallet
} from 'lucide-react';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import ProductCard from '../components/ProductCard';
import SectionHeader from '../components/SectionHeader';
import { heroImage, productCategories } from '../data/products';

const trustPoints = [
  {
    title: 'Trusted brands',
    description: 'Genuine hardware from iMin, Dahua, Hikvision, and AOC.',
    icon: BadgeCheck
  },
  {
    title: 'Local supply & delivery',
    description: 'Stock, delivery, and setup support for businesses in the Philippines.',
    icon: Truck
  },
  {
    title: 'After-sales support',
    description: 'Direct help with installation, replacement, and technical questions.',
    icon: Headphones
  }
];

const softwareFeatures = [
  'POS System',
  'Inventory',
  'Member Management',
  'Reports & Analytics',
  'Multi-store',
  'Promotions'
];

const paymentFeatures = [
  { label: 'Card Payment', icon: CreditCard },
  { label: 'QR Payment', icon: QrCode },
  { label: 'E-wallet', icon: Wallet }
];

export default function Landing() {
  return (
    <>
      {/* Hero — Clover-style split layout */}
      <section className="hero-clover overflow-hidden">
        <div className="container-shell grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          {/* Left: copy + CTAs */}
          <div className="max-w-xl">
            <p className="animate-rise mb-5 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-700 ring-1 ring-inset ring-brand-100">
              Business Hardware Supplier
            </p>
            <h1
              className="animate-rise font-display text-[2.75rem] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink sm:text-6xl"
              style={{ animationDelay: '0.06s' }}
            >
              Run your business on hardware that just works.
            </h1>
            <p
              className="animate-rise mt-6 text-lg leading-8 text-slate-600"
              style={{ animationDelay: '0.12s' }}
            >
              ZUNO supplies iMin smart POS terminals, Dahua &amp; Hikvision surveillance,
              and AOC monitors — set up with optional software and payments, ready for day one.
            </p>
            <div
              className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: '0.18s' }}
            >
              <a href="#products">
                <Button showIcon>Shop Products</Button>
              </a>
              <a href="#contact">
                <Button variant="outline">Get a Quote</Button>
              </a>
            </div>
            <div
              className="animate-rise mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-slate-600"
              style={{ animationDelay: '0.24s' }}
            >
              <span className="text-slate-500">Trusted brands:</span>
              {['iMin', 'Dahua', 'Hikvision', 'AOC'].map((b) => (
                <span key={b} className="font-semibold text-ink">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right: product showcase panel */}
          <div className="animate-rise relative" style={{ animationDelay: '0.12s' }}>
            <div className="showcase-panel relative aspect-[4/3] overflow-hidden rounded-[2rem] p-3 shadow-soft">
              {/* stock photo — replace with a real iMin POS photo */}
              <img
                src={heroImage}
                alt="iMin smart POS terminal"
                className="h-full w-full rounded-[1.5rem] object-cover"
              />

              {/* floating accent chips */}
              <div className="animate-float absolute -left-3 top-8 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-lift">
                <CreditCard aria-hidden="true" className="h-4 w-4 text-brand-600" />
                <span className="text-xs font-semibold text-ink">Card · QR · E-wallet</span>
              </div>
              <div
                className="animate-float absolute -right-3 bottom-8 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-lift"
                style={{ animationDelay: '1.2s' }}
              >
                <BadgeCheck aria-hidden="true" className="h-4 w-4 text-brand-600" />
                <span className="text-xs font-semibold text-ink">Genuine &amp; warrantied</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products — main section */}
      <section id="products" className="scroll-mt-20 border-t border-slate-200 bg-white py-16 lg:py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Products"
            title="Hardware we supply"
            description="Genuine devices for checkout, security, and store operations. Product images are samples — contact us for current models, specs, and pricing."
            align="center"
          />

          <div className="mt-14 space-y-16">
            {productCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.id} className="scroll-mt-24" id={category.id}>
                  <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                        <Icon aria-hidden="true" className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">
                            {category.title}
                          </h3>
                          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
                            {category.tagline}
                          </span>
                        </div>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {category.products.map((product) => (
                      <ProductCard key={product.name} {...product} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Software & Payment — secondary */}
      <section id="software" className="scroll-mt-20 bg-slate-50 py-16">
        <div className="container-shell">
          <div className="grid gap-10 rounded-2xl border border-slate-200 bg-white p-8 lg:grid-cols-2 lg:p-10">
            <div>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                <Package aria-hidden="true" className="h-5 w-5" />
              </div>
              <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">POS Software</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Optional business software to run on your hardware — sales, inventory,
                members, and reports, ready to use out of the box.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {softwareFeatures.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:border-l lg:border-slate-200 lg:pl-10">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-leaf-50 text-leaf-600">
                <CreditCard aria-hidden="true" className="h-5 w-5" />
              </div>
              <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">Payment Setup</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We help connect card, QR, and e-wallet payments to your POS so checkout
                and settlement stay in one place.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {paymentFeatures.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5"
                  >
                    <Icon aria-hidden="true" className="h-4 w-4 text-navy-700" />
                    <span className="text-sm font-medium text-slate-700">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-y border-slate-200 bg-white py-14">
        <div className="container-shell grid gap-6 md:grid-cols-3">
          {trustPoints.map(({ title, description, icon: Icon }) => (
            <div key={title} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-ink">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 bg-slate-50 py-16 lg:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Request a quote"
              description="Tell us what hardware you need and your business type. We'll reply with models, specs, and pricing."
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-ink">Get in touch</h2>
            <address className="mt-5 space-y-4 text-sm not-italic leading-6 text-slate-700">
              <p>
                <span className="font-semibold text-ink">Email:</span> contact@zuno.example
              </p>
              <p>
                <span className="font-semibold text-ink">Phone:</span> +63 XXX XXX XXXX
              </p>
              <p className="flex items-center gap-2">
                <MapPin aria-hidden="true" className="h-4 w-4 text-leaf-600" />
                <span>Philippines</span>
              </p>
            </address>
            <div className="mt-6 rounded-md border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-ink">Helpful details to include</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                <li>Business type (retail, restaurant, etc.)</li>
                <li>Which hardware you're interested in</li>
                <li>Quantity and target setup date</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

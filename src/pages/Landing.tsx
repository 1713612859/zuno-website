import type { CSSProperties } from 'react';
import { ArrowRight, CreditCard, MapPin, Package } from 'lucide-react';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import HeroCarousel from '../components/HeroCarousel';
import IndustryCarousel from '../components/IndustryCarousel';
import ProductCard from '../components/ProductCard';
import SectionHeader from '../components/SectionHeader';
import StatsBand from '../components/StatsBand';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { heroSlides, industries, productCategories } from '../data/products';
import iminLogo from '../assets/brands/imin.jpg';
import nebullarLogo from '../assets/brands/nebullar.png';
import kozenLogo from '../assets/brands/kozen.jpg';
import telpoLogo from '../assets/brands/telpo.png';
import larkLogo from '../assets/brands/lark.jpg';
import nexgoLogo from '../assets/brands/nexgo.svg';
import aubLogo from '../assets/brands/aub.webp';
import paycoolLogo from '../assets/brands/paycool.svg';
import lark2Logo from '../assets/brands/lark2.png';
import storehubLogo from '../assets/customers/storehub.jpg';
import kulayLogo from '../assets/customers/kulay.png';
import zeoniqLogo from '../assets/customers/zeoniq.jpg';
import dizlogLogo from '../assets/customers/dizlog.jpg';
import kkvLogo from '../assets/customers/kkv.jpg';
import bingchunLogo from '../assets/customers/bingchun.jpg';
import kulebingchengLogo from '../assets/customers/kulebingcheng.jpg';
import shaxianLogo from '../assets/customers/shaxian.jpg';
import visaLogo from '../assets/payments/visa.svg';
import mastercardLogo from '../assets/payments/mastercard.svg';
import qrphLogo from '../assets/payments/qrph.png';
import wechatLogo from '../assets/payments/wechat.svg';
import alipayLogo from '../assets/payments/alipay.svg';
import posMachineLogo from '../assets/payments/posmachine.webp';

const highlights = productCategories[0].products.slice(0, 4);

const softwareFeatures = ['Lark', 'Payroll System'];

const paymentMethods = [
  { label: 'VISA', logo: visaLogo },
  { label: 'Mastercard', logo: mastercardLogo },
  { label: 'QRPH', logo: qrphLogo },
  { label: 'WeChat Pay', logo: wechatLogo },
  { label: 'Alipay', logo: alipayLogo },
  { label: 'POS Machine', logo: posMachineLogo }
];

// Placeholder wordmark logos — replace each .svg in src/assets/brands/ with the
// official brand logo file (SVG or PNG) when available.
const brands = [
  { name: 'iMin', logo: iminLogo },
  { name: 'Nebullar', logo: nebullarLogo },
  { name: 'Kozen', logo: kozenLogo },
  { name: 'Telpo', logo: telpoLogo },
  { name: 'Lark', logo: larkLogo },
  { name: 'Nexgo', logo: nexgoLogo }
];

const partners = [
  { name: 'AUB', logo: aubLogo },
  { name: 'PayCool', logo: paycoolLogo },
  { name: 'Lark', logo: lark2Logo }
];

const customers = [
  { name: 'StoreHub', logo: storehubLogo },
  { name: 'Kulay', logo: kulayLogo },
  { name: 'Zeoniq', logo: zeoniqLogo },
  { name: 'DizLog', logo: dizlogLogo },
  { name: 'KKV', logo: kkvLogo },
  { name: '冰醇', logo: bingchunLogo },
  { name: '酷乐冰城', logo: kulebingchengLogo },
  { name: '沙县', logo: shaxianLogo }
];

export default function Landing() {
  useScrollReveal();

  return (
    <>
      {/* Hero — iMin-style violet carousel */}
      <section className="bg-white pb-4">
        <div className="container-shell">
          <HeroCarousel slides={heroSlides} />
        </div>
      </section>

      {/* Product highlights — 2x2 like iMin */}
      <section className="relative overflow-hidden bg-slate-50 py-16">
        <div className="glow-blob -left-24 top-10 h-72 w-72 bg-brand-200/40" />
        <div className="container-shell relative">
          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((product, i) => (
              <article
                key={product.name}
                style={{ '--reveal-delay': `${i * 0.08}s` } as CSSProperties}
                className="reveal group grid grid-cols-[1fr_auto] items-center gap-4 overflow-hidden rounded-3xl bg-white p-6 shadow-card transition hover:shadow-lift sm:p-8"
              >
                <div>
                  <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{product.blurb}</p>
                  <a
                    href="#products"
                    className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#2e2b3c]"
                  >
                    Learn more
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                </div>
                <div className="h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-100 sm:h-36 sm:w-36">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <StatsBand />

      {/* Solutions statement */}
      <section className="bg-white py-16">
        <div className="container-shell grid gap-8 lg:grid-cols-2 lg:items-center">
          <h2 className="reveal font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
            We supply complete hardware solutions to businesses across the Philippines.
          </h2>
          <div>
            <p className="text-base leading-7 text-slate-600">
              From POS terminals and payment devices to warehouse PDAs, computers, and
              consumables, Zuno Group helps stores, restaurants, and service businesses
              choose, deploy, and support the technology they run on every day.
            </p>
            <a href="#products" className="mt-6 inline-block">
              <Button variant="outline" showIcon>
                Explore products
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="scroll-mt-24 bg-slate-50 py-16">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Industries"
            title="Built for the way you do business"
            description="Practical hardware setups for the places it's used most."
            align="center"
          />
          <div className="mt-10">
            <IndustryCarousel industries={industries} />
          </div>
        </div>
      </section>

      {/* Full product catalog */}
      <section id="products" className="scroll-mt-24 bg-white py-16 lg:py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Products"
            title="Hardware we supply"
            description="POS, payments, warehouse, computers, and consumables. Product images are samples — contact us for current models, specs, and pricing."
            align="center"
          />

          <div className="mt-14 space-y-16">
            {productCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.id} className="scroll-mt-24" id={category.id}>
                  <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
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
      <section id="software" className="scroll-mt-24 bg-slate-50 py-16">
        <div className="container-shell">
          <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-8 lg:grid-cols-2 lg:p-10">
            <div>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <Package aria-hidden="true" className="h-5 w-5" />
              </div>
              <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">Software</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Business software to run on your hardware — Lark for operations and a
                Payroll System for staff management.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {softwareFeatures.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:border-l lg:border-slate-200 lg:pl-10">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <CreditCard aria-hidden="true" className="h-5 w-5" />
              </div>
              <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">Payments we support</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We help connect card, QR, and e-wallet payments to your POS so checkout
                and settlement stay in one place.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {paymentMethods.map(({ label, logo }) => (
                  <div
                    key={label}
                    className="flex h-16 items-center justify-center rounded-xl border border-slate-200 bg-white px-3"
                  >
                    <img
                      src={logo}
                      alt={`${label} logo`}
                      className="max-h-7 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands we distribute */}
      <section className="bg-white py-14">
        <div className="container-shell text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Brands we distribute
          </p>
          <div className="marquee mt-10">
            <div className="marquee-track gap-4">
              {[...brands, ...brands].map((brand, i) => (
                <div
                  key={`${brand.name}-${i}`}
                  aria-hidden={i >= brands.length}
                  className="flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-h-12 max-w-[80%] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl border-t border-slate-200 pt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Partners
            </p>
            <div className="mx-auto mt-7 grid max-w-xl grid-cols-3 gap-4">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 transition hover:shadow-card"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-12 max-w-[85%] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by — customers */}
      <section className="bg-slate-50 py-16">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Trusted by"
            title="Businesses that run on Zuno"
            description="Brands and operators across retail, dining, and services rely on our hardware."
            align="center"
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {customers.map((customer) => (
              <div
                key={customer.name}
                className="flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 transition hover:shadow-card"
              >
                <img
                  src={customer.logo}
                  alt={`${customer.name} logo`}
                  className="max-h-16 max-w-[85%] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-white py-12">
        <div className="container-shell">
          <div className="hero-imin flex flex-col items-center gap-6 overflow-hidden rounded-3xl px-8 py-12 text-center text-white lg:flex-row lg:justify-between lg:text-left">
            <div>
              <h2 className="font-display text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl">
                Connect with our team today
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/85">
                Tell us your business type and what hardware you need — we'll reply with
                models, specs, and pricing.
              </p>
            </div>
            <a href="#contact" className="shrink-0">
              <Button variant="outline" showIcon>
                Contact us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 bg-white py-16 lg:py-20">
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

          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="font-display text-xl font-bold text-ink">Get in touch</h2>
            <address className="mt-5 space-y-4 text-sm not-italic leading-6 text-slate-700">
              <p>
                <span className="font-semibold text-ink">Website:</span>{' '}
                <a className="text-brand-600 hover:underline" href="https://zuno.ph">
                  zuno.ph
                </a>
              </p>
              <p>
                <span className="font-semibold text-ink">Email:</span> info@zuno.ph
              </p>
              <p>
                <span className="font-semibold text-ink">Phone:</span> 0917 446 9999
              </p>
              <p className="flex items-start gap-2">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                <span>
                  Eastfield Center, Mall of Asia Complex, Diosdado Macapagal Blvd, Pasay
                  City, 1300 Metro Manila
                </span>
              </p>
            </address>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
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

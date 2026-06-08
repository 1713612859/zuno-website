import { ImageIcon } from 'lucide-react';
import type { Product } from '../data/products';

export default function ProductCard({ name, brand, blurb, specs, featured, image }: Product) {
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${
        featured ? 'border-brand-500/40 ring-1 ring-brand-500/20' : 'border-slate-200'
      }`}
    >
      {/* Stock photo preview — replace with a real product photo later */}
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-brand-50">
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-slate-400">
            <ImageIcon aria-hidden="true" className="h-8 w-8" />
            <span className="text-xs font-medium">Product image</span>
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-brand-600 shadow-sm ring-1 ring-inset ring-slate-200/60">
          {brand}
        </span>
        {featured ? (
          <span className="absolute right-3 top-3 rounded-full bg-brand-500 px-2.5 py-1 text-xs font-semibold text-white">
            Popular
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-ink">{name}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{blurb}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {specs.map((spec) => (
            <span
              key={spec}
              className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import type { Industry } from '../data/products';

type IndustryCarouselProps = {
  industries: Industry[];
};

export default function IndustryCarousel({ industries }: IndustryCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = Math.min(track.clientWidth * 0.8, 360);
    track.scrollBy({ left: direction * amount, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Scroll left"
        onClick={() => scrollBy(-1)}
        className="focus-ring absolute -left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-lift ring-1 ring-slate-200 transition hover:bg-slate-50 md:flex"
      >
        <ChevronLeft aria-hidden="true" className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Scroll right"
        onClick={() => scrollBy(1)}
        className="focus-ring absolute -right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-lift ring-1 ring-slate-200 transition hover:bg-slate-50 md:flex"
      >
        <ChevronRight aria-hidden="true" className="h-5 w-5" />
      </button>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {industries.map((industry) => (
          <article
            key={industry.title}
            className="group relative w-[280px] shrink-0 snap-start overflow-hidden rounded-3xl shadow-card sm:w-[320px]"
          >
            <img
              src={industry.image}
              alt={industry.title}
              loading="lazy"
              className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <h3 className="font-display text-xl font-bold">{industry.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-white/85">{industry.blurb}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

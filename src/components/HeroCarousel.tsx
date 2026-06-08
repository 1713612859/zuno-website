import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { HeroSlide } from '../data/products';
import Button from './Button';

type HeroCarouselProps = {
  slides: HeroSlide[];
};

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const touchStartX = useRef<number | null>(null);

  const onPointerMove = (e: React.PointerEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTilt({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5
    });
  };

  const go = (next: number) => setIndex((next + count) % count);

  useEffect(() => {
    if (paused || count <= 1) return;
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % count), 6000);
    return () => clearInterval(timer);
  }, [paused, count]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 45) go(index + (delta < 0 ? 1 : -1));
    touchStartX.current = null;
  };

  const slide = slides[index];

  return (
    <div
      className="hero-imin hero-arch relative overflow-hidden rounded-b-[2.5rem] px-6 pb-12 pt-24 text-center sm:rounded-[2.5rem] sm:px-14 lg:pt-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        setTilt({ x: 0, y: 0 });
      }}
      onPointerMove={onPointerMove}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* prev / next arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
        className="focus-ring absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-inset ring-white/30 backdrop-blur transition hover:bg-white/25 sm:left-5"
      >
        <ChevronLeft aria-hidden="true" className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(index + 1)}
        className="focus-ring absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-inset ring-white/30 backdrop-blur transition hover:bg-white/25 sm:right-5"
      >
        <ChevronRight aria-hidden="true" className="h-5 w-5" />
      </button>

      {/* slide content — keyed so it re-animates on change */}
      <div key={index}>
        <p className="animate-rise mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white ring-1 ring-inset ring-white/30">
          {slide.eyebrow}
        </p>
        <h1
          className="animate-rise mx-auto max-w-4xl font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.02em] text-white sm:text-6xl"
          style={{ animationDelay: '0.05s' }}
        >
          {slide.title}
        </h1>
        <p
          className="animate-rise mx-auto mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg"
          style={{ animationDelay: '0.1s' }}
        >
          {slide.subtitle}
        </p>
        <div
          className="animate-rise mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: '0.15s' }}
        >
          <a href="#products">
            <Button showIcon>Learn more</Button>
          </a>
          <a href="#contact">
            <Button variant="onDark">Contact us</Button>
          </a>
        </div>

        <div
          className="animate-rise mt-12 flex items-end justify-center gap-5 sm:gap-10"
          style={{ animationDelay: '0.2s', perspective: '900px' }}
        >
          {slide.images.map((src, i) => {
            const depth = i === 1 ? 30 : 16;
            return (
              <div
                key={src}
                className={i === 1 ? 'w-36 sm:w-52' : 'w-24 sm:w-36'}
                style={{
                  transform: `translate3d(${tilt.x * depth}px, ${tilt.y * depth}px, 0) rotateX(${
                    tilt.y * -7
                  }deg) rotateY(${tilt.x * 9}deg)`,
                  transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <div className="animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                  <img
                    src={src}
                    alt={slide.eyebrow}
                    className="aspect-square w-full rounded-2xl bg-white object-contain p-3 shadow-[0_34px_55px_-14px_rgba(0,0,0,0.5)] ring-1 ring-white/30"
                  />
                  <div className="mx-auto mt-3 h-3 w-3/4 rounded-[50%] bg-black/25 blur-md" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* dots */}
      <div className="mt-7 flex items-center justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.eyebrow}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
            className={`focus-ring h-2 rounded-full transition-all ${
              i === index ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

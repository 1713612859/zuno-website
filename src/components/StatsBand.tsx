import CountUp from './CountUp';

type Stat = { value?: number; suffix?: string; display?: string; label: string };

const stats: Stat[] = [
  { value: 10, suffix: '+', label: 'Brands distributed' },
  { value: 1000, suffix: '+', label: 'Trusted clients' },
  { value: 200, suffix: '+', label: 'Product lines' }
];

export default function StatsBand() {
  return (
    <section className="hero-imin relative overflow-hidden py-16">
      <div className="glow-blob -left-16 top-0 h-64 w-64 bg-white/20" />
      <div className="glow-blob -right-10 bottom-0 h-64 w-64 bg-[#ff7b7b]/40" />
      <div className="container-shell relative">
        <div className="grid grid-cols-3 gap-8 text-center text-white">
          {stats.map((stat) => (
            <div key={stat.label} className="reveal">
              <div className="font-display text-4xl font-extrabold tracking-[-0.02em] sm:text-5xl">
                {stat.display ? (
                  stat.display
                ) : (
                  <CountUp end={stat.value ?? 0} suffix={stat.suffix} />
                )}
              </div>
              <p className="mt-2 text-sm font-medium text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'primary' | 'purple' | 'outline' | 'onDark';
  showIcon?: boolean;
};

const variants = {
  // black pill — iMin's default "Learn more" CTA
  primary: 'bg-ink text-white hover:bg-[#2e2b3c] hover:-translate-y-0.5',
  purple:
    'bg-brand-500 text-white shadow-[0_8px_20px_-6px_rgba(108,59,245,0.6)] hover:bg-brand-600 hover:-translate-y-0.5',
  outline:
    'bg-white text-ink ring-1 ring-inset ring-slate-300 hover:ring-ink hover:-translate-y-0.5',
  // for use on the violet hero
  onDark: 'bg-white/10 text-white ring-1 ring-inset ring-white/60 backdrop-blur hover:bg-white/20'
};

export default function Button({
  children,
  className = '',
  variant = 'primary',
  showIcon = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`group focus-ring inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {showIcon ? (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      ) : null}
    </button>
  );
}

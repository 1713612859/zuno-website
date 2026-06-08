import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  showIcon?: boolean;
};

const variants = {
  primary:
    'bg-brand-500 text-white shadow-[0_6px_16px_-4px_rgba(21,160,90,0.55)] hover:bg-brand-600 hover:-translate-y-0.5',
  secondary: 'bg-ink text-white hover:bg-[#1b3a2c] hover:-translate-y-0.5',
  outline:
    'bg-white text-brand-700 ring-1 ring-inset ring-brand-200 hover:bg-brand-50 hover:ring-brand-500 hover:-translate-y-0.5'
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

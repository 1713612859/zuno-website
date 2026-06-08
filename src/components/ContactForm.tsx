import { useState } from 'react';
import Button from './Button';

const serviceOptions = [
  'POS Terminals (iMin)',
  'Security & Surveillance (Dahua / Hikvision)',
  'Monitors & Computers (AOC)',
  'Software & Payment',
  'After-sales Support',
  'Other'
];

// Get a free access key at https://web3forms.com (enter your inbox email).
// Set it in a .env file as VITE_WEB3FORMS_ACCESS_KEY=xxxxxxxx
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? '';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!ACCESS_KEY) {
      setStatus('error');
      setErrorMessage(
        'Form is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file.'
      );
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(form);
    formData.append('access_key', ACCESS_KEY);
    formData.append('subject', 'New inquiry from ZUNO website');
    formData.append('from_name', 'ZUNO Website');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMessage(data.message ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <form
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
      onSubmit={handleSubmit}
    >
      {/* Honeypot spam filter (hidden from users) */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Name</span>
          <input
            className="focus-ring mt-2 w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm"
            name="name"
            required
            type="text"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Company Name</span>
          <input
            className="focus-ring mt-2 w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm"
            name="company"
            type="text"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Email</span>
          <input
            className="focus-ring mt-2 w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm"
            name="email"
            required
            type="email"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Phone</span>
          <input
            className="focus-ring mt-2 w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm"
            name="phone"
            type="tel"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-slate-700">Service Interest</span>
          <select
            className="focus-ring mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm"
            name="service"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select an inquiry type
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-slate-700">Message</span>
          <textarea
            className="focus-ring mt-2 min-h-36 w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm"
            name="message"
            required
          />
        </label>
      </div>

      <div className="mt-6">
        <Button type="submit" showIcon disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Submit Inquiry'}
        </Button>
      </div>

      {status === 'success' ? (
        <p className="mt-4 rounded-md border border-brand-100 bg-brand-50 px-4 py-3 text-sm leading-6 text-brand-700">
          Thank you. Your inquiry has been sent — we'll get back to you soon.
        </p>
      ) : null}

      {status === 'error' ? (
        <p className="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}

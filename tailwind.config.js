/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif']
      },
      colors: {
        // Clover green (brand)
        brand: {
          50: '#e9f8ef',
          100: '#c8edd6',
          200: '#9fdcb6',
          500: '#15a05a',
          600: '#0f8a4d',
          700: '#0b6f3e'
        },
        // Remap legacy "navy"/"leaf" to the Clover palette so existing
        // classes restyle automatically.
        navy: {
          50: '#e9f8ef',
          100: '#c8edd6',
          500: '#15a05a',
          700: '#0f8a4d',
          900: '#10231a'
        },
        leaf: {
          50: '#e9f8ef',
          100: '#c8edd6',
          600: '#15a05a'
        },
        ink: '#10231a',
        slate: {
          600: '#41524a'
        }
      },
      boxShadow: {
        soft: '0 18px 40px -12px rgba(16, 35, 26, 0.16)',
        card: '0 2px 5px -1px rgba(16, 35, 26, 0.08), 0 1px 3px -1px rgba(0, 0, 0, 0.06)',
        lift: '0 16px 30px -8px rgba(21, 160, 90, 0.22), 0 8px 16px -8px rgba(16, 35, 26, 0.18)'
      }
    }
  },
  plugins: []
};

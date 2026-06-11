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
        // Zuno red (brand)
        brand: {
          50: '#fff0f0',
          100: '#ffd6d6',
          200: '#ffadad',
          300: '#ff7b7b',
          500: '#E2231A',
          600: '#c41e16',
          700: '#a01910'
        },
        // Remap legacy "navy"/"leaf" to the red palette so existing
        // classes restyle automatically.
        navy: {
          50: '#fff0f0',
          100: '#ffd6d6',
          500: '#E2231A',
          700: '#c41e16',
          900: '#1c1a26'
        },
        leaf: {
          50: '#fff0f0',
          100: '#ffd6d6',
          600: '#E2231A'
        },
        ink: '#1c1a26',
        slate: {
          600: '#4a4a55'
        }
      },
      boxShadow: {
        soft: '0 22px 48px -16px rgba(28, 26, 38, 0.22)',
        card: '0 1px 2px rgba(28, 26, 38, 0.06), 0 8px 24px -12px rgba(28, 26, 38, 0.12)',
        lift: '0 20px 40px -12px rgba(226, 35, 26, 0.28), 0 8px 18px -10px rgba(28, 26, 38, 0.2)'
      }
    }
  },
  plugins: []
};

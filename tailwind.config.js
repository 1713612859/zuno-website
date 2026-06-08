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
        // iMin violet (brand)
        brand: {
          50: '#f2eefe',
          100: '#e4dafd',
          200: '#c8b6fb',
          300: '#a98ef6',
          500: '#6c3bf5',
          600: '#5a2fd6',
          700: '#4a26b0'
        },
        // Remap legacy "navy"/"leaf" to the violet palette so existing
        // classes restyle automatically.
        navy: {
          50: '#f2eefe',
          100: '#e4dafd',
          500: '#6c3bf5',
          700: '#5a2fd6',
          900: '#1c1a26'
        },
        leaf: {
          50: '#f2eefe',
          100: '#e4dafd',
          600: '#6c3bf5'
        },
        ink: '#1c1a26',
        slate: {
          600: '#4a4a55'
        }
      },
      boxShadow: {
        soft: '0 22px 48px -16px rgba(28, 26, 38, 0.22)',
        card: '0 1px 2px rgba(28, 26, 38, 0.06), 0 8px 24px -12px rgba(28, 26, 38, 0.12)',
        lift: '0 20px 40px -12px rgba(108, 59, 245, 0.28), 0 8px 18px -10px rgba(28, 26, 38, 0.2)'
      }
    }
  },
  plugins: []
};

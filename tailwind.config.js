/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/**/src/**/*.{html,ts}',
    './libs/**/src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      // Keep in sync with CSS custom properties in apps/portfolio/src/styles.scss :root
      colors: {
        bg: '#0a0a0f',
        surface: '#12121a',
        'surface-2': '#1a1a2e',
        border: '#2a2a3e',
        muted: '#64748b',
        fg: '#e2e8f0',
        white: '#f8fafc',
        accent: {
          green: '#22c55e',
          blue: '#38bdf8',
          violet: '#a78bfa',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
};

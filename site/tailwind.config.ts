import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lab: {
          black: '#0a0a0a',
          dark: '#111111',
          mid: '#1a1a1a',
          border: '#2a2a2a',
          gray: '#a0a0a0',
          muted: '#666666',
          red: '#ff4444',
          'red-dim': '#cc3333',
          green: '#44ff44',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config

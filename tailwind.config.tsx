import type { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}', './src/**/*.css'],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config

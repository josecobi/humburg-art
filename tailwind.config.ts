import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F5F1E8',
          100: '#EDE7DA',
          200: '#DDD4C2',
          300: '#CCC0AA',
          400: '#B5A68D',
          500: '#9D8C70',
          600: '#7D6F59',
          700: '#5D5342',
          800: '#3D372C',
          900: '#2D2820',
        },
        accent: {
          50: '#FAF8F5',
          100: '#F0EBE3',
          200: '#E3D9CC',
          300: '#D1C3B0',
          400: '#BCA890',
          500: '#A08D70',
          600: '#83715A',
          700: '#665644',
          800: '#4A3D2E',
          900: '#332A1F',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
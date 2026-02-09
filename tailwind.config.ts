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
        blue: {
          50: '#EFF8F8',
          100: '#D9EEEE',
          200: '#B3DEDD',
          300: '#7BC5C4',
          400: '#4AA9A8',
          500: '#2A8B8A',
          600: '#1F6F6E',
          700: '#175554',
          800: '#0F3B3A',
          900: '#0A2827',
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
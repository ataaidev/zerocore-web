/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // Blue color
        secondary: "#111827", // Dark gray/almost black
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'Roboto', 'system-ui', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
  // Production optimizasyonları
  corePlugins: {
    preflight: true,
  },
} 
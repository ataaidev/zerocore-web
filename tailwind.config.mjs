/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // More robust paths for Cloudflare build environment
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
    
    // Add specific files that use Tailwind classes
    "./src/app/layout.tsx",
    "./src/app/page.tsx",
    "./src/app/globals.css",
    "./src/components/*.{js,ts,jsx,tsx}",
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
  
  // Cloudflare compatibility
  corePlugins: {
    preflight: true,
  },
  
  // Ensure all common utilities are included
  safelist: [
    // Typography
    'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl', 'text-7xl',
    'font-bold', 'font-semibold', 'font-medium', 'font-sans', 'font-mono',
    
    // Layout & Spacing  
    'flex', 'flex-col', 'flex-grow', 'min-h-screen', 'max-w-6xl', 'mx-auto',
    'px-4', 'px-6', 'px-8', 'py-4', 'py-8', 'py-12', 'py-16', 'py-20',
    'mb-4', 'mb-8', 'mb-12', 'mb-16', 'mt-12', 'mt-16',
    
    // Grid
    'grid', 'grid-cols-1', 'grid-cols-3', 'gap-8',
    
    // Colors & Backgrounds
    'text-white', 'text-gray-300', 'text-blue-400', 'text-purple-500',
    'bg-gradient-to-br', 'bg-gradient-to-r', 'bg-gradient-to-t',
    'from-gray-900', 'via-gray-800', 'to-black', 'to-gray-900',
    'from-blue-500', 'to-purple-500', 'from-blue-400', 'to-purple-500',
    'bg-gray-800', 'bg-blue-500', 'bg-purple-500',
    
    // Effects
    'rounded-full', 'rounded-2xl', 'blur-3xl', 'blur-2xl',
    'backdrop-blur-sm', 'border', 'border-gray-700',
    'hover:scale-105', 'hover:scale-110', 'transition-all', 'transition-transform',
    'duration-300', 'duration-500', 'duration-1000',
    
    // Positioning
    'relative', 'absolute', 'inset-0', 'z-10',
    'top-1/4', 'left-1/4', 'right-1/4', 'bottom-1/4', 'bottom-1/2', 'bottom-1/3',
    
    // Sizing
    'w-16', 'w-24', 'w-32', 'w-96', 'h-1', 'h-16', 'h-32', 'h-96',
    
    // Text utilities
    'text-center', 'leading-tight', 'leading-relaxed',
    'text-transparent', 'bg-clip-text',
  ],
} 
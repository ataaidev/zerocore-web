/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Simple relative paths that work in all environments
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    
    // Build environment variations
    "src/**/*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{js,ts,jsx,tsx,mdx}",
    "components/**/*.{js,ts,jsx,tsx,mdx}",
    
    // Explicit files
    "./src/app/layout.tsx",
    "./src/app/page.tsx",
    "./src/app/globals.css",
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
  
  // v3 safelist - force include all essential classes
  safelist: [
    // Essential layout and flexbox
    'flex', 'flex-col', 'flex-grow', 'grid', 'grid-cols-1', 'grid-cols-3',
    'min-h-screen', 'max-w-6xl', 'max-w-4xl', 'max-w-3xl', 'max-w-2xl',
    'mx-auto', 'w-full', 'h-full', 'items-center', 'justify-center',
    
    // Typography used in components
    'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl', 'text-7xl',
    'font-bold', 'font-semibold', 'font-medium', 'font-sans', 'font-mono',
    'text-center', 'leading-tight', 'leading-relaxed',
    
    // Spacing from components
    'px-4', 'px-6', 'px-8', 'py-4', 'py-8', 'py-12', 'py-16', 'py-20',
    'mb-3', 'mb-4', 'mb-6', 'mb-8', 'mb-12', 'mb-16', 'mt-12', 'mt-16',
    'gap-8', 'p-8',
    
    // Colors and backgrounds
    'text-white', 'text-gray-300', 'text-blue-400', 'text-purple-500',
    'text-transparent', 'bg-clip-text',
    'bg-gray-800', 'bg-gray-900', 'bg-blue-500', 'bg-purple-500',
    
    // Gradients
    'bg-gradient-to-br', 'bg-gradient-to-r', 'bg-gradient-to-t',
    'from-gray-900', 'via-gray-800', 'to-black', 'to-gray-900',
    'from-blue-500', 'to-purple-500', 'from-blue-400', 'to-purple-500',
    'from-white', 'via-blue-100', 'to-white',
    'from-black/20', 'to-transparent', 'from-blue-500/10', 'to-purple-500/10',
    
    // Effects and borders
    'rounded-full', 'rounded-2xl', 'border', 'border-gray-700', 'border-gray-700/50',
    'backdrop-blur-sm', 'blur', 'blur-2xl', 'blur-3xl',
    
    // Positioning
    'relative', 'absolute', 'inset-0', 'z-10',
    'top-1/4', 'left-1/4', 'right-1/4', 'bottom-1/4', 'bottom-1/2', 'bottom-1/3',
    
    // Interactive states
    'hover:scale-105', 'hover:scale-110', 'group-hover:scale-110', 'group-hover:opacity-40',
    'hover:bg-gray-800/70', 'hover:border-blue-500/50', 'hover:text-blue-400',
    'transition-all', 'transition-transform', 'transition-colors',
    'duration-300', 'duration-500', 'duration-1000',
    
    // Sizing
    'w-8', 'w-16', 'w-24', 'w-32', 'w-96', 'h-1', 'h-8', 'h-16', 'h-32', 'h-96',
    
    // Display and utility
    'opacity-20', 'antialiased', 'overflow-hidden', 'scroll-smooth',
    
    // Responsive variants
    'sm:px-6', 'sm:text-2xl', 'sm:text-5xl', 'sm:text-6xl',
    'md:grid-cols-3', 'md:text-3xl', 'md:text-7xl',
    'lg:px-8',
    
    // Animation and transform
    'animate-pulse', 'transform', 'group',
    
    // Background color variations
    'bg-gray-800/30', 'bg-gray-800/50', 'bg-blue-500/5', 'bg-purple-500/5',
  ],
} 
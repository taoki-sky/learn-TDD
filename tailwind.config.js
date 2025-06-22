/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Appleライクなカラーパレット
        'apple-blue': '#007AFF',
        'apple-green': '#34C759',
        'apple-orange': '#FF9500',
        'apple-red': '#FF3B30',
        'apple-purple': '#AF52DE',
        'apple-gray': '#8E8E93',
        'apple-gray-2': '#AEAEB2',
        'apple-gray-3': '#C7C7CC',
        'apple-gray-4': '#D1D1D6',
        'apple-gray-5': '#E5E5EA',
        'apple-gray-6': '#F2F2F7',
      },
      fontFamily: {
        'apple': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'sans-serif'],
      },
      borderRadius: {
        'apple': '8px',
        'apple-lg': '12px',
      },
      boxShadow: {
        'apple': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'apple-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
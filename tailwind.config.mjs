/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#2E7D32', // natural green
        'secondary': '#1976D2', // water blue
        'tertiary': '#8D6E63', // earth
        'primary-light': '#4CAF50',
        'secondary-light': '#42A5F5',
        'tertiary-light': '#A1887F',
        'primary-dark': '#1B5E20',
        'secondary-dark': '#0D47A1',
        'tertiary-dark': '#5D4037',
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
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
        gold: {
          50: '#fdfbf7',
          100: '#f9f5eb',
          200: '#f3ebd6',
          300: '#e8d9b8',
          400: '#d4b884',
          500: '#c9a868',
          600: '#b8935a',
          700: '#987a4c',
          800: '#7d6443',
          900: '#685338',
        },
        navy: {
          50: '#f0f3f7',
          100: '#dde4eb',
          200: '#b8c9d9',
          300: '#8ca7bf',
          400: '#5d82a0',
          500: '#3f6787',
          600: '#2f4d67',
          700: '#1f3347',
          800: '#151f2c',
          900: '#0a0f14',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

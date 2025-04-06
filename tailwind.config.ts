
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          500: '#696EDD',
          600: '#5D60C9',
          700: '#4A4D9E',
        }
      },
    }
  },
  plugins: [],
} satisfies Config;


/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        fantasy: {
          midnight: "#08091f",
          purple: "#8b35ff",
          gold: "#f8c56a",
          dark: "#170d28",
        },
      },
    },
  },

  plugins: [],
};

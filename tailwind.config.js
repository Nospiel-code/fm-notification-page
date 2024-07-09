/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryRed: "hsl(1, 90%, 64%)",
        primaryBlue: "hsl(219, 85%, 26%)",
        secondary100: "hsl(0, 0%, 100%)",
        secondary200: "hsl(210, 60%, 98%)",
        secondary300: "hsl(211, 68%, 94%)",
        secondary400: "hsl(205, 33%, 90%)",
        secondary500: "hsl(219, 14%, 63%)",
        secondary600: "hsl(219, 12%, 42%)",
        secondary700: "hsl(224, 21%, 14%)",
      },
    },
  },
  plugins: [],
};

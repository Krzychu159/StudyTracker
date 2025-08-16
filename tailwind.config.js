/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // niebieski
        secondary: "#F97316", // pomarańczowy
        accent: "#10B981", // zielony
        neutral: "#6B7280", // szary
        background: "#F3F4F6", // jasne tło
      },
    },
  },
  plugins: [],
};

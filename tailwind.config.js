/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // niebieski
        secondary: "#EAB308", // złoty
        accent: "#14B8A6", // turkus
        neutral: "#475569", // szaro-niebieski
        background: "#FFFFFF", // białe tło
      },
    },
  },
  plugins: [],
};

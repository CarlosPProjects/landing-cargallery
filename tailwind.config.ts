import {fontFamily} from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:  {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      }
    },
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        secondary: "(var(--secondary))",
        body: "(var(--body))",
        accent: "(var(--accent))", 
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};

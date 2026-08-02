/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-container": "#000000",
        "on-surface": "#1a1b1f",
        "accent-blue": "#a1613d",
        "secondary": "#a1613d",
        "surface": "#faf9fd",
        "on-surface-variant": "#44474f",
        "surface-container": "#efedf1",
        "outline-variant": "rgba(196, 198, 208, 0.3)",
        "primary": "#000000",
        "on-primary": "#ffffff"
      },
      borderRadius: {
        "DEFAULT": "8px",
        "lg": "12px",
        "xl": "16px",
        "full": "9999px"
      },
      spacing: {
        "section-gap": "var(--section-gap)",
        "stack-md": "16px",
        "stack-lg": "32px",
        "gutter": "24px",
        "container-padding": "var(--container-padding)",
        "stack-sm": "8px"
      },
      fontFamily: {
        "sans": ["Outfit", "sans-serif"],
        "display": ["Barlow", "sans-serif"],
        "headline": ["Barlow", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"]
      }
    }
  },
  plugins: [],
}

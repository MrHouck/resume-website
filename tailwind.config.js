/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          bg: "var(--bg)",
          border: "var(--border)",
          nb: "var(--nav-button)",
          pt: "var(--primary-text)",
          st: "var(--secondary-text)",
          tt: "var(--tertiary-text)",
          social: "var(--logo)",
          active: "var(--pg)",
          bt: "var(--background-text)",
          blue: "#3b82f6",
          yellow: "#fbbf24",
        },
      },
      fontSize: {
        xxs: "10px",
        xs: "12px",
        sm: "13px",
        base: ["15px", "22.5px"],
        md: "18px",
        lg: "20px",
        xl: "24px",
        "2xl": "48px",
        "3xl": "96px",
      },
    },
    plugins: [],
  };
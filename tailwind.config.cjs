/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        darkPink: "#fd267a",
        coralRed: "#ff6036",
        darkRed: "#d6002f",
      },
      keyframes: {
        opacity: {
          "0%": { opacity: "100" },
          "90%": { opacity: "0" },
          "100%": { opacity: "0", display: "none" },
        },
      },
      backgroundImage: {
        site: "linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0.2)), url('./src/assets/background.webp')",
      },
    },
  },
  plugins: [],
};

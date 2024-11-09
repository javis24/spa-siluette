// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}", // Si usas App Router, incluye esta ruta
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

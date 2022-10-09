/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'mobile': '320px',
      'desktop': '768px',
    },
    extend: {},
  },
  plugins: [],
}

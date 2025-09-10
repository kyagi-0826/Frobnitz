/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./apps/**/*.{js,ts,jsx,tsx,vue}",
    "./packages/dashboard/**/*.{js,ts,jsx,tsx,vue}",
    "./packages/login/**/*.{js,ts,jsx,tsx,vue}",
    "./packages/pages/**/*.{js,ts,jsx,tsx,vue}",
    "./packages/controls/**/*.{js,ts,jsx,tsx,vue}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
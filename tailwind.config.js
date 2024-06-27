/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/frontend/**/*.{html,js,vue}"], // Paths to all of the files in your project that contain classes
  // darkMode: false, // Toggle dark mode variants
  theme: {
    extend: {}, // Extend or override Tailwind's default theme
  },
  variants: {
    extend: {}, // Extend or override Tailwind's default variants
  },
  plugins: [], // Additional Tailwind plugins
};

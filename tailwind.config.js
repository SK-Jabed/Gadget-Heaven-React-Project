/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerImage: "url('./assets/banner.jpg')",
        favIcon: "url('./assets/favicon-16x16.png')"
      },
    },
  },
  plugins: [
    daisyui,
  ],
};

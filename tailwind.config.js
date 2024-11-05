/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerImage: "url('./assets/banner.jpg')",
        favIcon: "url('./assets/favicon-16x16.png')",
      },
      colors: {
        homeNavbarBackground: "#123456", // Replace with the color code from Figma
        otherNavbarBackground: "#abcdef", // Replace with the color code from Figma
        primaryTextColor: "#333333", // Replace with the color from Figma
      },
    },
  },
  plugins: [daisyui],
};

/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#3A4256",
        bg: "#00ADB5",
        h: "#393E46",
        he: "#19D3AE",
      },
      backgroundImage: {
        "bg-footer": "url('./src/assets/footer/footer-bg 1 1.png')",
        "bg-box": "linear-gradient(135deg, #e5fff0 0%, #a9e0fe 100%);",
        "gradient-primary":
          "linear-gradient(90deg, rgba(0,173,181,1) 5%, rgba(1,124,184,1) 91%);",
        g: "linear-gradient(90deg, rgba(1,124,184,1) 20%, rgba(0,173,181,1) 67%);",
      },
      fontFamily: {
        a: ["Catamaran", "sans-serif"],
        b: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  
};


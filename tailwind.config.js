/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#001628",
        "light-gray": "#F9F9F9",
        "normal-gray": "#d9d9d9",
        "light-blue": "#e6f7ff",
        // "dark-blue": "#23395d"
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "webkit-transform": "translateX(-300px)",
            transform: "translateX(-300px)",
          },
          "100%": {
            "webkit-transform": "translateX(0px)",
            transform: "translateX(0px)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out"
      }
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light", "dark"
    ],
  },
}
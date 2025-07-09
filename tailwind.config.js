const { transform } = require("next/dist/build/swc");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 0 0 250px #161616",
      },
      fontFamily: {
        "helvetica-neue-medium": "var(--font-hv-medium)",
        "helvetica-neue-regular": "var(--font-hv-regular)",
        "helvetica-neue-bold": "var(--font-hv-bold)",
        "helvetica-neue-extra-bold": "var(--font-hv-x-bold)",
      },
      backgroundImage: {
        "curve-top-banana":
          "radial-gradient(30px at 0 0, transparent 99%, #dbf900 99%)",
        "curve-top-banana-xs":
          "radial-gradient(20px at 0 0, transparent 99%, #dbf900 99%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "tcs-pure-black": "#000000",
        "tcs-black": "#161616",
        "tcs-banana": "#DBF900",
        "tcs-white": "#F4F4F4",
        "tcs-pure-white": "#FFFFFF",
        "tcs-dark-gray": "#2A2A2A",
        "tcs-light-gray": "#DBDBDB",
      },
      textStrokeWidth: {
        1: "1px",
        2: "2px",
      },
      textStrokeColor: {
        black: "#000000",
        white: "#ffffff",
        "tcs-banana": "#DBF900",
      },
      screens: {
        "3xl": "1700px",
      },
      corePlugins: {
        // Disable the native line-clamp if you want custom control.
        lineClamp: false,
      },
      animation: {
        plateUp: "plateUp 1s ease-in-out",
        plateLeft: "plateLeft 0.5s ease-in-out",
        plateRight: "plateRight 0.5s ease-in-out",
        plateDown: "plateDown 1s ease-in-out",
        plateDown2: "plateDown2 1.25s ease-in-out",
        rotateInfinite: "rotate 1s linear infinite",
      },
      keyframes: {
        plateUp: {
          "0%": { top: "300px" },
          "100%": { top: "0" },
        },
        plateLeft: {
          "0%": { right: "96px" },
          "100%": { right: "0" },
        },
        plateRight: {
          "0%": { left: "96px" },
          "100%": { left: "0" },
        },
        plateDown: {
          "0%": { top: "-300px" },
          "100%": { top: "0" },
        },
        plateDown2: {
          "0%": { top: "-100px", opacity: "0%" },
          "100%": { top: "0", opacity: "100%" },
        },
        rotateInfinite: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-transparent": {
          color: "transparent",
        },
        ".text-stroke": {
          "-webkit-text-stroke": "2px #DBF900", // Default stroke width and color
        },
        ".text-stroke-2-black": {
          "-webkit-text-stroke-width": "2px",
          "-webkit-text-stroke-color": "#000",
        },
        // Add more utilities as needed
      });
    },
  ],
};

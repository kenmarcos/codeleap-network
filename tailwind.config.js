/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7695EC",
        "custom-gray": {
          400: "#DDDDDD",
          500: "#999999",
          600: "#777777",
        },
        success: "#47B960",
        danger: "#FF5151",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        bannermove: "bannermove 5s linear infinite",
      },
      keyframes: {
        bannermove: {
          "0%": {
            transform: "translate3d(0%, 0, 0);",
          },
          "100%": {
            transform: "translate3d(-50%, 0, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    fontFamily: {
      Mikhak: "Mikhak",
      "Mikhak-Bold": "Mikhak Bold",
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: "#000",
          100: "#80e5f3",
          200: "#43e2f7",
          300: "#438eff",
        },
        danger: "#b54c4c",
      },
      spacing: {
        22: "5.5rem",
      },
    },
  },

  plugins: [],
};

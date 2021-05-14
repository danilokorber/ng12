const colors = require("tailwindcss/colors");

module.exports = {
  important: true,
  mode: "jit",
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "media", // false or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        "top-xs": "0 0 0 1px rgba(0, 0, 0, 0.05)",
        "top-sm": "0 1px -2px 0 rgba(0, 0, 0, 0.05)",
        "top-default":
          "0 1px -3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "top-md":
          "0 4px -6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "top-lg":
          "0 10px -15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "top-xl":
          "0 20px -25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "top-2xl": "0 25px -50px -12px rgba(0, 0, 0, 0.25)",
        "bottom-xs": "0 0 0 1px rgba(0, 0, 0, 0.05)",
        "bottom-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "bottom-default":
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "bottom-md":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "bottom-lg":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "bottom-xl":
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "bottom-2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        gray: colors.gray,
        trueGray: colors.trueGray,
        warmGray: colors.warmGray,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        lightBlue: colors.lightBlue,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
      },
    },
    fontFamily: {
      sans: ["Titillium Web"],
    },
    fontWeight: {
      "extra-light": 200,
      light: 300,
      normal: 400,
      semibold: 600,
      bold: 700,
      black: 900,
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },

  variants: {},
  plugins: [],
};

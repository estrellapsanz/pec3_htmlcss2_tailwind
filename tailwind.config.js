module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      electric_blue: "#0ff",
      blue: "#1fb6ff",
      black: "#000000",
      white: "#f8f8ff",
      purple: "#7e5bef",
      pink: "#ff00ff",
      soft_pink: "#e39aec",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    maxWidth: {
      "1/2": "50%",
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      borderColor: {
        soft_pink: "#e39aec",
      },
    },
  },
  plugins: [],
};

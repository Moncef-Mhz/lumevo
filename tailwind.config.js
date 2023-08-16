/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["lato"],
      serif: "Frank Ruhl Libre",
    },

    extend: {
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
      },
      colors: {
        "dark-brown": "#34251f",
        "light-brown": "#eeddcc",
        brown: "#413531",
        orange: "#ffb168",
        "wood-brown": "#d3a17e",
      },
    },
  },
  plugins: [],
};

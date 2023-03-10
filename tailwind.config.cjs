/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        linearFrom: "hsl(236, 72%, 79%)",
        linearTo: "hsl(237, 63%, 64%)",
        veryLightGrayishBlue: "hsl(240, 78%, 98%)",
        lightGrayishBlue: "hsl(234, 14%, 74%)",
        grayishBlue: "hsl(233, 13%, 49%)",
        darkGrayishBlue: "hsl(232, 13%, 33%)",
      },
    },
  },
  plugins: [],
};

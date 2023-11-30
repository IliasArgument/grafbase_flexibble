/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nav-border": "#EBEAEA",
        "light-white": "#FAFAFB",
        "light-white-100": "#F1F4F5",
        "light-white-200": "#d7d7d7",
        "light-white-300": "#F3F3F4",
        "light-white-400": "#E2E5F1",
        "light-white-500": "#E4E4E4",
        "light-white-600": "#FFFFFFA1",
        "light-pearl": "#EFEFEF",
        "orange-rustic": "#DD783F",
        gray: "#4D4A4A",
        "gray-100": "#3d3d4e",
        "gray-300": "#768088",
        "gray-50": "#D9D9D9",
        "gray-steel": "#7A7A7A",
        "gray-dove": "#999",
        "silver-mist": "#F7F7F7",
        "black-100": "#252525",
        "black-50": "#2E2E2E",
        "dark-abyss": "#101315",
        "primary-purple": "#9747FF",
        "white-haze": "#FFFFFF47",
        "dark-navy": "rgba(0, 0, 0, .3)"
      },
      boxShadow: {
        menu: "0px 159px 95px rgba(13,12,34,0.01), 0px 71px 71px rgba(13,12,34,0.02), 0px 18px 39px rgba(13,12,34,0.02), 0px 0px 0px rgba(13,12,34,0.02)",
      },
      screens: {
        xs: "400px",
        tablet: { max: "640px" },
        laptop: { min: "1024px" },
        desktop: { min: "1400px" },
      },
      maxWidth: {
        "10xl": "1680px",
      },
      backgroundImage: {
        'footer-texture': "url('/escape/footer.png')",
      }
    },
  },
  plugins: [],
};

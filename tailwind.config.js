/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8FC74A",
        "green-500": "#C2FF78",
        "green-700": "#527A21",
        "main-orange": "#F26B35",
        "orange-500": "#FF8352",
        "orange-700": "#A63D14",
        "main-red": "#B13D37",
        "red-500": "#FC6F68",
        "red-700": "#631915",
        "secondary-1": "#03A68B",
        "secondary-2": "#35F2D3",
        "secondary-3": "#6A157A",
        "secondary-4": "#B34AC7",
        "custom-gray-700": "#0D0D0D",
        "custom-gray-600": "#1A1A1A",
        "custom-gray-500": "#262626",
        "custom-gray-400": "#333333",
        "custom-gray-300": "#808080",
        "custom-gray-200": "#D9D9D9",
        "custom-gray-100": "#F2F2F2",
      },
      spacing: {
        256: "64rem",
        110.5: "27.625rem",
        47.75: "11.9375rem",
        141.75: "35.4375rem",
        106.67975: "26.6699375rem",
        "1px": "1px",
        "nav-screen": "100vh",
        "628px": "628px",
      },
      borderRadius: {
        "box-radius": "64px",
      },
      zIndex: {
        100: "100",
      },
      fontFamily: {
        default: "ITC Avant Garde Gothic Std",
        roboto: "Roboto",
      },
      borderWidth: {
        1: "1px",
      },
      backgroundImage: {
        "hero-pattern": "url('../assets/background.png')",
      },
    },
  },
  plugins: [],
};
// background-image: url("../assets/background.png");

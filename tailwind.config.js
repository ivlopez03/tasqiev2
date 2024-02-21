/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mainBackgroundColor": '#3DAF7F',
        "hoverBackgroundColor": '#3daf7f0e',
        "selectedBackgroundColor":'#3daf7f2d',
        "secondaryBackgroundColor": '#34659E'
      }
    },
  },
  plugins: [],
}


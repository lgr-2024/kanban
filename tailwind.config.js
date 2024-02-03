/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "canvas-background": "#cd5a92", // rgba(205, 90, 146, 1)
        "canvas-list": "#f1f2f4" // rgba(241, 242, 244, 1)
      },
      fontFamily: {
        NotoSans: ["noto-sans, sans-serif"]
      },
      container: {
        padding: "0 6px",
        center: true
      },
      screens: {
        sm: "350px",
        md: "750px"
      }
    }
  },
  plugins: []
};

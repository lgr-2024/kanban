/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#cd5a92",
        "tw-background-overlay": "#000000a3",
        "tw-background-list": "#f1f2f4",
        "tw-background-card": "#FFFFFF",

        // input
        "tw-background-input": "#FFFFFF",
        "tw-background-input-hovered": "#F7F8F9",
        "tw-background-input-pressed": "#FFFFFF",
        // neutral
        "tw-background-neutral": "#091E420F",
        "tw-background-neutral-hovered": "#091E4224",
        "tw-background-neutral-pressed": "#091E424F",
        // danger
        "tw-background-danger": "#C9372C",
        "tw-background-danger-hovered": "#AE2E24",
        "tw-background-danger-pressed": "#5D1F1A",

        // color
        "tw-hovered": "#388BFF",
        "tw-font-neutral": "#172B4D",
        "tw-add-button-neutral": "#ffffff3d",
        "tw-add-button-hovered": "#A6C5E229",
        "tw-add-button-pressed": "#BFDBF847",
      },
      fontFamily: {
        NotoSans: ["noto-sans, sans-serif"],
      },
      container: {
        padding: "0 6px",
        center: true,
      },
      screens: {
        sm: "350px",
        md: "750px",
      },
    },
  },
  plugins: [],
};

import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { tmcolor: '#d0efe1'},
    
  },
  plugins: [daisyui],
  daisyui: {
    themes: [],
  },
};

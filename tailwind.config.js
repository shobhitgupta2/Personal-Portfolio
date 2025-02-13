/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,svg}"],
  theme: {
    extend: {
      animation: {
        typewriter: "typewriter 2s steps(11) forwards",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
      },
    },
  },
  plugins: [],
};

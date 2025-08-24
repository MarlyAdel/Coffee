/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container:{
            center: true,
            padding:{
              DEFAULT:'1rem',
              sm:'2rem',
              md:'3rem',
              lg:'4rem'
            }
        },
        fontFamily: {
        pacifico: ["var(--font-pacifico)", "cursive"],
        sriracha: ["var(--font-sriracha)", "cursive"],
      },
    },
  },
  plugins: [],
}
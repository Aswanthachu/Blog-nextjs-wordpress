/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'darkBlue':'#0055A4',
        'bgMain':'#F8F8F8'
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        main: ["Poppins", "sans-serif"],
        DM: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}

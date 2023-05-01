/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'darkBlue':'#0055A4'
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

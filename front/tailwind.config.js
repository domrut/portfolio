/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "container": "97rem"
      },
      flex: {
        '1': '1 1 0%',
        '2': '2 1 0%',
        '3': '3 1 0%',
        '4': '4 1 0%',
        '5': '5 1 0%'
      },
      boxShadow: {
        'button': '0 0 20px rgba(45,212,191,1)',
        'card': '0 0 20px rgba(0,0,0,0.35)'
      },
      backgroundColor: {
        'cardHover': "rgba(30, 41, 59, 0.35)",
      },
      screens: {
        "card": "1510px"
      }
    },
  },
  plugins: [],
}


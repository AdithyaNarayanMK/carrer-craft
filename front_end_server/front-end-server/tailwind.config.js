/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'gettingButtom':'#C2F6F3',
      'landingGreen':'#207884',
      'bodyWhite':'#FFFFFF',
      'black':'#000000',
      'formBody':'#DCE6E6',
      'borderColor':'#1A000080'
    },
    fontFamily: {
      'HeadlandOne':['HeadlandOne'],
      'Heebo':['Heebo'],
      'Montserrat':['Montserrat'],
    },
    extend: {
      spacing: {
        '100':'510px',
        '110':'1440px',
        '120':'746px',
        '99':'475px',
        '105':'580px'
      }
    },
  },
  plugins: [],
}


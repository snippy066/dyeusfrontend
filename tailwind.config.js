module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         'back_blue':'#08090c',
         'cust_text':'#424548',
         'cart_col':'#13324a'
      },
      height: {
        '.25': '0.0225rem',
      },
      fontFamily: {
        'custfont': ['Rubik', 'sans-serif'],
        'custfont2': ['Source Serif Pro', 'serif'],
        'custfont3': ['Titillium Web', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
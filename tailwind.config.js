module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: ['6px', '8px'],
      },
      colors: {
         'back_blue':'#08090c',
         'cust_text':'#424548',
         'cart_col':'#13324a',
         'black_sh':'#21272c',
         'black_sh1':'#374b5b',
         'yellow_sh':'#b68625',
         'green_sh':'#22814c'
      },
      height: {
        '.25': '0.0225rem',
      },
      fontFamily: {
        'custfont': ['Raleway', 'sans-serif'],
        'custfont2': ['Lato', 'sans-serif'],
        'custfont3': ['Titillium Web', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
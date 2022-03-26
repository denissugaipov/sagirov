module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '1330px',
      'mobile': '940px'
    },
    extend: {
      backgroundImage: {
        'mars': 'url(https://ucarecdn.com/06b65266-4991-43b2-b78a-e2382a03f859/mars.png)',
        'space': 'url(https://ucarecdn.com/8f110cb9-6616-46df-b1b3-d7da08c600ab/bgnew.png)',
        'btn': 'url(https://ucarecdn.com/e647b6bc-273e-4f4f-ac5a-bed110877cef/buttn.png)'
      },
      backgroundSize: {
        '50%': '40%'
      }
    },
  },
  plugins: [],
}
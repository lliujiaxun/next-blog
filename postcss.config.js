module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16,
      unitPrecision: 5,
      mediaQuery: false,
      minPixelValue: 0,
      propList: ['*background*', '*padding*', '*margin*', 'letter-spacing', '*width', 'left', 'font*', 'right', 'top', 'bottom']
    }
  }
}

// const pxtorem = require('postcss-pxtorem')
// const tailwindcss = require('tailwindcss')
// const autoprefixer = require('autoprefixer')

// module.exports = {
//   plugins: [
//     tailwindcss({}),
//     autoprefixer({}),
//     pxtorem({
//       rootValue: 16,
//       unitPrecision: 5,
//       mediaQuery: false,
//       minPixelValue: 0,
//       propList: ['*background*', '*padding*', '*margin*', 'letter-spacing', '*width', 'left', 'font*', 'right', 'top', 'bottom']
//     })
//   ]
// }

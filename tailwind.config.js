const plugin = require( 'tailwindcss/plugin' )
const colors = require( 'tailwindcss/colors' )

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      'sans': [ '"Josefin Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif' ]
    },
    extend: {
      colors: {
        bluegray: colors.blueGray
      },
      scale: {
        '102': '1.02'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: [ 'selection' ],
      margin: [ 'last' ],
      transform: [ 'hover' ]
    }
  },
  plugins: [
    plugin( function({ addVariant, e }) {
      addVariant( 'selection', ({ modifySelectors, separator }) => {
        modifySelectors( ({ className }) => {
          return `.${e(`selection${ separator }${ className }`)}::selection`
        })
      })
    })
  ]
}


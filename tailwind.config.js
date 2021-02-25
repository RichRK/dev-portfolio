const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': [ '"Josefin Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif' ]
    }
  },
  variants: {
    extend: {
      backgroundColor: [ 'selection' ],
      margin: [ 'last' ]
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


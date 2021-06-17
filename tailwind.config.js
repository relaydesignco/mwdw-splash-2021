/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Hind Siliguri', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        darkgray: '#212120',
        lightgray: '#A6A6A6',
      },
      letterSpacing: {
        wide: '0.1em',
        wider: '0.2em',
        widest: '0.5em',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js',
  ],
};

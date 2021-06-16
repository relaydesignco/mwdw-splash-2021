export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Midwest Design Week',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Virtual Design Week featuring Louisville, Cincinnati, Indiananpolis, and Toledo AIGA Chapters.',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://midwestdesignweek.com/og-image.jpg',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Midwest Design Week',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'article',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://midwestdesignweek.com',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://midwestdesignweek.com/og-image.jpg',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Virtual Design Week featuring Louisville, Cincinnati, Indiananpolis, and Toledo AIGA Chapters.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Customize the progress-bar color
  loading: { color: '#fff' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  webfontloader: {
    google: {
      families: ['Source Sans Pro:400,700', 'Lekton:400,700'], // Google Font with weights 400 and 700
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/dateformat.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', 'nuxt-webfontloader'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    extend(config, ctx) {},
  },
};

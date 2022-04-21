export default {
  ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Voiz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/element', ssr: false},
    { src: '~/plugins/audioplayer', ssr: false},

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-vuex-localstorage',
    ['@nuxtjs/moment', { locale: 'vi' }],
    ['@nuxtjs/dotenv', { systemvars: true }], //, filename: '.env'
  ],

  recaptcha: {
    /* reCAPTCHA options */
    hideBadge: Boolean, // Hide badge element (v3 & v2 via size=invisible)
    language: String,   // Recaptcha language (v2)
    siteKey: String,    // Site key for requests
    version: Number,     // Version
    size: String        // Size: 'compact', 'normal', 'invisible' (v2)
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'v-shared-element/nuxt'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:4000',
  },
  auth: {
    // Options
    strategies: {
      local: {
        token: {
          property: 'access_token',
          global: true,
          required: true,
          type: 'Bearer'
        },
        redirect: {
          login: '/dang-nhap',
          logout: '/',
          callback: '/dang-nhap',
          home: '/'
        },
        user: {
          property: 'username',
          autoFetch: true
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          //logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/profile', method: 'get' }
        }
      }
    }
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

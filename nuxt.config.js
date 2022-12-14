export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test-ida',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css", integrity:"sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==",crossorigin:"anonymous",referrerpolicy:"no-referrer"}
    ]
  },

  loading: {color:'#101c2a'},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    '@/assets/css/index.css',
    // SCSS file in the project
    '@/assets/sass/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://api.terraitech.uz',
  },
  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}

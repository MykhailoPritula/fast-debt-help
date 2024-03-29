export default {
  ssr: false,
  head: {
    title: 'Fast Debt Help',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
    ],
    script: [
      {
        ssr: false, async: true, src: '/js/fb.js'
      },
      {
        ssr: false, async: true, src: '/js/everflow.js'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  css: [
    '@/assets/scss/style.scss'
  ],
  components: true,
  modules: [
    '@nuxtjs/axios',
  ],
  router: {
    // base: '/',
    base: '/fast-debt-help/',
    mode: 'history',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'error',
        path: '*',
        component: resolve(__dirname, 'pages/index.vue'),
      })
    },
  },
  generate: {
    // dir: './dist_server'
    dir: './dist'
  },
  build: {
    // target: 'server'
    target: 'static'
  },
  server: {
    port: 8007,
    host: 'localhost'
  }
}

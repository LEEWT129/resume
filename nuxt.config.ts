export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    baseURL: '/resume/',
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' }
      ]
    }
  },
  vite: {
    build: {
      base: '/resume/'
    }
  },
  css: [
    '~/assets/styles/variables.css',
    '@fortawesome/fontawesome-free/css/all.css'
  ]
})
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
  ],

  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' },
    '~/plugins/fontawesome.js'
  ],
})
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules:[
    '@primevue/nuxt-module',
    'nuxt-auth-sanctum', 
  ],
  // @ts-ignore
  axios: {
    baseURL: 'http://localhost:8001/api',
  },
   // @ts-ignore
   authSanctum: {
    apiUrl: 'http://localhost:8001/api',  
    loginUrl: '/login',             
    logoutUrl: '/logout',          
    registerUrl: '/register',      
    redirectTo: '/',                
  },
  primevue: {
    options: {
        theme: {
            preset: Aura
        }
    }
},
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@/assets/css/main.css',
  ],

  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' },
    '~/plugins/fontawesome.js'
  ],
})

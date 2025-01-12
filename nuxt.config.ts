import { postcss } from "tailwindcss";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  //https://supabase.nuxtjs.org/get-started
  //redirect = false dev ต้อง handle เอง
  modules: ['@nuxtjs/supabase'],
  supabase: {
    redirect: false,
    cookieOptions: {
      secure: false,
    },
  },

  /*
    IN ENV File 
    ======================================
    NUXT_EXAMPLE_TOKEN="pk_test_51J"
    NUXT_EXAMPLE_USER="user_1"
    NUXT_EXAMPLE_REPO="repo_1"
    ======================================
  */

  runtimeConfig: {
    exampleToken: 'no_token',
    exampleUser: 'no_user',
    exampleRepo: 'no_repo'
  },


  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }

 
  

})

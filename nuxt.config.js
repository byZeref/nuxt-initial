// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    '@pinia/nuxt',
    // "@nuxtjs/eslint-module",
  ],
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
  devtools: { enabled: true },
})

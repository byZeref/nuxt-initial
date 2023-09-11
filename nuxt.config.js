// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    '@pinia/nuxt',
    // "@nuxtjs/eslint-module",
  ],
  css: ["@/assets/main.scss"],
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
  app: {
    // global SEO
    head: {
      title: 'Learning Nuxt 3!',
      meta: [
        {
          name: 'description',
          content: 'Simple project for learning nuxt 3'
        }
      ],
    },
  },
  devtools: { enabled: true },
  ssr: false,
})

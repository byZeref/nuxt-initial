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
        { name: 'description', content: 'Simple project for learning nuxt 3' },
        { property: 'og:title', content: 'Learning Nuxt 3!' },
        { property: 'og:description', content: 'Simple project for learning nuxt 3' },
        { property: 'og:image', content: 'https://nuxt-initial.vercel.app/blob.svg' },
      ],
      link: [
        { rel: 'icon', href: 'blob.svg' }
      ]
    },
  },
  devtools: { enabled: true },
  ssr: true,
})

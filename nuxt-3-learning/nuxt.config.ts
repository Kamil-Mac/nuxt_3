// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Dummy shop",
      meta: [
        {
          name: "description",
          content: "head meta content",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://nuxt.com/docs/getting-started/installation",
        },
      ],
    },
  },
  runtimeConfig: {
    testKey: process.env.TEST_KEY, // invisible after build
  },
});

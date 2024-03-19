// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss', 'shadcn-nuxt', 'nuxt-icon'
    
  ],
  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  }
})
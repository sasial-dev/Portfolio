// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			bodyAttrs: {
				class: "bg-theme-purple"
			}
		}
	},
	compatibilityDate: "2026-01-09",
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@virenbar/nuxt-lanyard'],
	ssr: false
})

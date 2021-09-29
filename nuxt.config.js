export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "Sasial",
		htmlAttrs: {
			lang: "en",
		},
		meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
		bodyAttrs: {
			class: ["bg-theme-purple"],
		},
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{
			src: "~/plugins/lanyard.ts",
			mode: "client",
		},
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		"@nuxt/typescript-build",
		// https://go.nuxtjs.dev/tailwindcss
		"@nuxtjs/tailwindcss",
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		"@nuxtjs/axios",
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		transpile: [
			"@eggsydev/vue-lanyard",
			"three/examples/jsm/controls/OrbitControls.js",
			"three/examples/jsm/loaders/GLTFLoader.js",
		],
	},
};

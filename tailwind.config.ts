import type { Config } from 'tailwindcss'

export default {
	content: ["./nuxt.config.ts"],
	theme: {
		extend: {
			colors: {
				'theme-purple': '#260836',
				'theme-purple-light': '#3e0e58',
				'theme-purple-light-hover': "#4b0f6b",
				'theme-blue': '#c9ddff',
				'theme-yellow': '#f7dd72'
			},
			transitionDelay: {
				50: "50ms"
			}
		},
	},
	plugins: [],
} satisfies Config

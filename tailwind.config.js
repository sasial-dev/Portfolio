module.exports = {
	mode: "jit",
	theme: {
		extend: {
			colors: {
				"theme-purple": "#330A47",
				"theme-purple-light": "#4A1166",
				"theme-blue": "#c9ddff",
				"theme-yellow": "#f7dd72",
			},
			spacing: {
				112: "28rem",
			},
			zIndex: {
				"-1": "-1",
			},
		},
	},
	purge: {
		content: [
			`components/**/*.{vue,js}`,
			`layouts/**/*.vue`,
			`pages/**/*.vue`,
			`plugins/**/*.{js,ts}`,
			`nuxt.config.{js,ts}`,
		],
	},
};

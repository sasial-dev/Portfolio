module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parser: "vue-eslint-parser",
	extends: [
		"@nuxtjs/eslint-config-typescript",
		"plugin:nuxt/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"prettier",
	],
	plugins: ["@typescript-eslint", "prettier"],
	rules: {
		"prettier/prettier": [
			"warn",
			{
				semi: true,
				trailingComma: "all",
				singleQuote: false,
				printWidth: 120,
				tabWidth: 4,
				useTabs: true,
			},
		],
		"@typescript-eslint/no-var-requires": "off",
	},
};

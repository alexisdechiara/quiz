// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		"@nuxtjs/tailwindcss",
		"shadcn-nuxt",
		"@nuxtjs/color-mode",
		"@nuxt/eslint",
		"@nuxt/icon",
	],
	devtools: { enabled: true },

	colorMode: {
		classSuffix: "",
	},
	compatibilityDate: "2024-11-01",

	typescript: {
		typeCheck: true,
	},

	eslint: {
		config: {
			stylistic: {
				semi: false,
				indent: "tab",
				quotes: "double",
			},
		},
	},

	shadcn: {
		/**
     * Prefix for all the imported component
     */
		prefix: "",
		/**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
		componentDir: "./components/ui",
	},
})
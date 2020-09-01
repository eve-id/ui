module.exports = {
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
	},
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	plugins: ["svelte3"],
	extends: [
		"eslint:recommended",
		"prettier",
		"plugin:eslint-comments/recommended",
		"plugin:promise/recommended",
	],
	rules: {
		"import/no-mutable-exports": 0,
		"no-labels": 0,
		"no-restricted-syntax": 0,
		"no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
	},
	overrides: [
		{
			files: ["*.svelte"],
			processor: "svelte3/svelte3",
		},
		{
			extends: ["plugin:cypress/recommended"],
			files: ["cypress/**/*"],
			env: {
				"cypress/globals": true,
			},
			plugins: ["cypress"],
		},
	],
};

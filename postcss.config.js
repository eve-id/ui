const cssnano = require("cssnano");
const postcssImport = require("postcss-import");
const postcssPresetEnv = require("postcss-preset-env");
const postcssPurgecss = require("@fullhuman/postcss-purgecss");
const tailwindcss = require("tailwindcss");
const tailwindcssConfig = require("./tailwind.config");

const mode = process.env.NODE_ENV;
const dev = mode === "development";

module.exports = {
	plugins: [
		postcssImport(),
		require("postcss-nested"),

		tailwindcss(tailwindcssConfig),

		postcssPresetEnv({
			features: {
				// https://github.com/tailwindcss/tailwindcss/issues/1190
				"focus-within-pseudo-class": false,
				"nesting-rules": true,
			},
		}),

		!dev &&
			postcssPurgecss({
				content: ["./src/**/*.svelte", "./src/**/*.html"],
				defaultExtractor: (content) =>
					[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => {
						let _ = [_match, _rest];
						() => _;
						return group;
					}),
			}),

		!dev &&
			cssnano({
				preset: ["default", { discardComments: { removeAll: true } }],
			}),
	].filter(Boolean),
};

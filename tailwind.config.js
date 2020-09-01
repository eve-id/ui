// #506CF0 BABY BLUE
// #FE7860 light orange
// #191a1b DARK
// #929eaa GREY
const { addUtility } = require("./src/utils/style");
const buildPalette = require("./src/utils/color.js");
const tailwindui = require("@tailwindcss/ui");

const colors = {
	primary: "#795548",
	secondary: "#009688",
	error: "#f44336",
	success: "#4caf50",
	alert: "#ffeb3b",
	blue: "#2196f3",
};

module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
	},
	purge: false,
	target: "relaxed",
	prefix: "",
	important: false,
	separator: ":",
	theme: {
		fontFamily: {
			display: ['"Exo 2"', "sans-serif"],
			body: ['"Roboto"', "sans-serif"],
		},
		extend: {
			colors: {
				eveprimary: {
					50: "#F6F8FE",
					100: "#EEF0FE",
					200: "#D3DAFB",
					300: "#B9C4F9",
					400: "#8598F5",
					500: "#506CF0",
					600: "#4861D8",
					700: "#304190",
					800: "#24316C",
					900: "#182048",
				},
				evesecondary: {
					50: "#FFF8F7",
					100: "#FFF2EF",
					200: "#FFDDD7",
					300: "#FFC9BF",
					400: "#FEA190",
					500: "#FE7860",
					600: "#E56C56",
					700: "#98483A",
					800: "#72362B",
					900: "#4C241D",
				},
				...buildPalette(colors),
			},
		},
	},
	corePlugins: {},
	plugins: [
		tailwindui,
		require("tailwindcss-elevation")(["hover"]),
		function ({ addUtilities }) {
			return addUtilities({
				[".border-box"]: {
					boxSizing: "border-box",
				},
				[".content-box"]: {
					boxSizing: "content-box",
				},
				[".transition"]: {
					transition: ".2s ease-in",
				},
				[".transition-fast"]: {
					transition: ".1s",
				},
			});
		},
		addUtility({
			prop: "caret-color",
			className: ".caret",
		}),
		addUtility({
			prop: "stroke",
			className: ".stroke",
		}),
	],
};

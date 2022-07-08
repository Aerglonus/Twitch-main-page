/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	darkMode: "class",
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	variants: {
		extend: {
			ring: ["active"],
		},
	},
	theme: {
		extend: {
			fontFamily: {
				Roobert: ["Roobert", "sans-serif"],
				RoobertThin: ["Roobert-Thin", "sans-serif"],
			},
		},
		screens: {
			xs: "565px",
			...defaultTheme.screens,
		},
	},
	plugins: [],
};

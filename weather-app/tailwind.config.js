module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			raleway: ['Raleway', 'sans-serif']
		},
		outline: {
			indigo: '2px solid #A8B4F6'
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};

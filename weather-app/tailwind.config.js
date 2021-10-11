module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			xl: { max: '1279px' },
			lg: { max: '1023px' },
			md: { max: '767px' },
			sm: { max: '639px' }
		},
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

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				black: '#1C1C1C', // Replace with your custom black color
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						'--tw-prose-bold': theme('colors.white'), // Replace with your desired color value
						'--tw-prose-headings': theme('colors.white'), // Replace with your desired color value
					},
				},
			}),
		},
		fontFamily: {
			// 'sans': ['ui-sans-serif', 'system-ui', ...],
			// 'serif': ['ui-serif', 'Georgia', ...],
			'hero': ['sztos-variable', 'sans-serif']
		}
	},

	plugins: [require('@tailwindcss/typography')]
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'outlines': '#E1E4E9',
				'main': {
					DEFAULT:'#165080',
					900: '#165080'
				}
			},
		},
	},
	plugins: [function ({ addComponents, theme }) {
		addComponents({
		  '._outline': {
			outlineColor: theme('colors.outlines'),
			outlineOffset: '1rem',
			outlineStyle: 'solid',
		  },
		});
	  },],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			height: {
				'80': '80vh'
			},
			fontFamily: {
				'satoshi': ['Satoshi', 'sans-serif']
			}
		}
	},
	plugins: []
}

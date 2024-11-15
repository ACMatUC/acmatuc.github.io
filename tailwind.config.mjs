/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./src/layouts/**/*.{astro,html}",
		"./src/pages/**/*.{astro,html}",
	],
	theme: {
		extend: {
			colors: {
				red: {
					'50': '#fff2f1',
					'100': '#ffe2e0',
					'200': '#ffcbc7',
					'300': '#ffa7a0',
					'400': '#ff7469',
					'500': '#f9483a',
					'600': '#e83224',
					DEFAULT: "#e83224",
					'700': '#c31f12',
					'800': '#a11d13',
					'900': '#851f17',
					'950': '#490b06',
				},
				instagram: "#ff0069",
				discord: "#5865f2",
				linkedin: "#0072b1",
			},
			transitionTimingFunction: "linear",
			transitionDuration: "100ms",
			aspectRatio: {
				'3/2': '3 / 2',
			}
		},
		fontFamily: {
			sans: ['Open Sans', 'sans-serif'],
			display: ["Montserrat", "sans-serif"],
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
	],
}

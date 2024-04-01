import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import twAnimate from 'tailwindcss-animate';

const config: Config = {
	darkMode: 'class',
	content: ['./src/app/**/*.{ts,tsx,mdx}', './src/ui/**/*.{ts,tsx,mdx}'],
	theme: {
		extend: {},
		container: {
			center: true,
		},
		screens: {
			xs: '360px',
			sm: '768px',
			md: '992px',
			lg: '1200px',
			xl: '1400px',
		},
		fontFamily: {
			'open-sans': ['var(--font-open-sans)', ...fontFamily.sans],
			roboto: ['var(--font-roboto)', ...fontFamily.sans],
		},
	},
	plugins: [twAnimate],
};
export default config;

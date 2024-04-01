import { Open_Sans, Roboto } from 'next/font/google';

export const openSans = Open_Sans({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
	variable: '--font-open-sans',
	display: 'swap',
});

export const roboto = Roboto({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
	variable: '--font-roboto',
	display: 'swap',
});

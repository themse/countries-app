import type { Metadata } from 'next';

import { META_DESCRIPTION, META_TITLE } from '@/common/config/app';
import { inter, robotoMono } from '@/ui/fonts';
import { LayoutProps } from '@/types/app';
import '@/styles/globals.css';

export const metadata: Metadata = {
	title: META_TITLE,
	description: META_DESCRIPTION,
};

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
			<body className="font-roboto-mono">{children}</body>
		</html>
	);
}

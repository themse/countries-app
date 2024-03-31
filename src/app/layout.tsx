import 'server-only';
import type { Metadata } from 'next';

import { APP_BRAND_NAME, META_DESCRIPTION, META_TITLE } from '@/common/configs/app';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { openSans, roboto } from '@/ui/fonts';
import { TemplateScaffold } from '@/ui/components/templates/Scaffold';
import { Header } from '@/ui/components/molecules/Header/Header';
import { LayoutProps } from '@/types/app';
import '@/styles/globals.css';

export const metadata: Metadata = {
	title: META_TITLE,
	description: META_DESCRIPTION,
};

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="en" className={`${openSans.variable} ${roboto.variable}`} suppressHydrationWarning>
			<body className="bg-white font-roboto dark:bg-gray-800">
				<ThemeProvider>
					<TemplateScaffold header={<Header title={APP_BRAND_NAME} />}>{children}</TemplateScaffold>
				</ThemeProvider>
			</body>
		</html>
	);
}

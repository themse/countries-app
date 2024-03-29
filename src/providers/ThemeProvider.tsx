'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

import { APP_THEME } from '@/common/configs/app';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
	return (
		<NextThemeProvider attribute="class" themes={Object.values(APP_THEME)}>
			{children}
		</NextThemeProvider>
	);
};

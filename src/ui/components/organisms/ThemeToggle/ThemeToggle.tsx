'use client';

import { useId } from 'react';
import { useTheme } from 'next-themes';

import { SunIcon, MoonIcon } from '@/ui/components/atoms/icons';
import { APP_THEME } from '@/common/configs/app';

type Props = {
	showLabel?: boolean;
};

export const ThemeToggle = ({ showLabel = false }: Props) => {
	const { resolvedTheme, setTheme } = useTheme();

	const themeId = useId();

	const handleToggleTheme = () => {
		if (resolvedTheme === APP_THEME.Dark) {
			return setTheme(APP_THEME.Light);
		}
		return setTheme(APP_THEME.Dark);
	};

	return (
		<div>
			<input
				id={themeId}
				type="checkbox"
				className="sr-only"
				checked={resolvedTheme === APP_THEME.Light}
				onChange={handleToggleTheme}
			/>
			<label className="flex cursor-pointer items-center gap-x-2" htmlFor={themeId}>
				<SunIcon className="hidden h-8 w-8 dark:block" />
				<MoonIcon className="h-8 w-8 dark:hidden" />

				{showLabel && (
					<>
						<span className="hidden whitespace-nowrap dark:xs:block">Light Mode</span>
						<span className="hidden whitespace-nowrap dark:hidden xs:block">Dark Mode</span>
					</>
				)}
				<span className="sr-only">Switch to light / dark version</span>
			</label>
		</div>
	);
};

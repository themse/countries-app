import { type Decorator } from '@storybook/react';

import { inter, robotoMono } from '@/ui/fonts';

export const withFontLoaded: Decorator = (Story) => (
	<div className={`${inter.variable} ${robotoMono.variable}`}>
		<div className="font-roboto-mono">
			<Story />
		</div>
	</div>
);

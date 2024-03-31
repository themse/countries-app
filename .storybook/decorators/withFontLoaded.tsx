import { type Decorator } from '@storybook/react';

import { openSans, roboto } from '@/ui/fonts';

export const withFontLoaded: Decorator = (Story) => (
	<div className={`${openSans.variable} ${roboto.variable}`}>
		<div className="font-roboto">
			<Story />
		</div>
	</div>
);

import type { Preview } from '@storybook/react';

import { withFontLoaded, withTheme } from './decorators';
import '@/styles/globals.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
				boolean: /^(has|is|can)[A-Z].*$/,
			},
		},
		layout: 'centered',
	},
	decorators: [withFontLoaded, withTheme],
};

export default preview;

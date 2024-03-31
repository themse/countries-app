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
		options: {
			storySort: {
				order: ['General', 'UI', ['Atoms', 'Molecules', 'Organisms', 'Templates'], '*', 'WIP'],
			},
		},
	},
	decorators: [withFontLoaded, withTheme],
};

export default preview;

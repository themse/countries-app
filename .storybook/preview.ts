import type { Preview } from '@storybook/react';

import { withFontLoaded } from './decorators';
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
	decorators: [withFontLoaded],
};

export default preview;

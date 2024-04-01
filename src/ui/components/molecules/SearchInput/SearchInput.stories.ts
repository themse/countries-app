import type { Meta, StoryObj } from '@storybook/react';

import { SearchInput } from './SearchInput';

const meta = {
	title: 'UI/Molecules/SearchInput',
	component: SearchInput,
	args: {
		inputProps: {
			placeholder: 'Enter...',
		},
	},
} satisfies Meta<typeof SearchInput>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;

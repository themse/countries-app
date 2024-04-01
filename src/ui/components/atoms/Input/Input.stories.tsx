import type { Meta, StoryObj } from '@storybook/react';

import { SearchIcon } from '@/ui/components/atoms/icons';
import { Input } from './Input';

const meta = {
	title: 'UI/Atoms/Input',
	component: Input,
	tags: ['autodocs'],
	args: {
		placeholder: 'Enter...',
	},
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Filled: Story = {
	args: {
		value: 'Example',
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

export default meta;

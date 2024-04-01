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

export const SearchInput: Story = {
	render: (args) => (
		<div className="relative">
			<SearchIcon className="absolute left-6 top-1/2 h-5 w-5 -translate-y-1/2 opacity-40" />
			<Input {...args} type="text" className="pl-16" />
		</div>
	),
};

export default meta;

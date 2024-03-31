import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { MoveLeftIcon } from '@/ui/components/atoms/icons';
import { Button } from './Button';

const meta = {
	title: 'UI/Atoms/Button',
	component: Button,
	args: {
		children: 'Button Example',
		onClick: fn(),
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

export const WithIcon: Story = {
	args: {
		className: 'flex items-center gap-x-2',
	},
	render: ({ children, ...args }) => (
		<Button {...args}>
			<MoveLeftIcon />
			{children}
		</Button>
	),
};

export default meta;

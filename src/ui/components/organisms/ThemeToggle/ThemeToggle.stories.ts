import type { Meta, StoryObj } from '@storybook/react';

import { ThemeToggle } from './ThemeToggle';

const meta = {
	title: 'UI/Organisms/ThemeToggle',
	component: ThemeToggle,
} satisfies Meta<typeof ThemeToggle>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
	args: {
		showLabel: true,
	},
};

export default meta;

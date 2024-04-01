import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './Loader';

const meta = {
	title: 'UI/Atoms/Loader',
	component: Loader,
} satisfies Meta<typeof Loader>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;

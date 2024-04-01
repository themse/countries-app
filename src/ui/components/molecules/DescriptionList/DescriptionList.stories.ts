import type { Meta, StoryObj } from '@storybook/react';

import { DescriptionList } from './DescriptionList';

const meta = {
	title: 'UI/Molecules/DescriptionList',
	component: DescriptionList,
	args: {
		list: [
			{
				label: 'Full name',
				value: 'John Doe',
			},
			{
				label: 'Application for',
				value: 'Frontend Developer',
			},
			{
				label: 'Email address',
				value: 'john.doe@example.com',
			},
			{
				label: 'About',
				value:
					'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.',
			},
		],
	},
} satisfies Meta<typeof DescriptionList>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDivider: Story = {
	args: {
		showDivider: true,
	},
};

export default meta;

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './Select';

const meta = {
	title: 'UI/Molecules/Select',
	component: Select,
	tags: ['autodocs'],
	args: {
		onValueChange: fn(),
	},
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof meta>;

const mockedData = [
	{
		label: 'Africa',
		value: 'africa',
	},
	{
		label: 'America',
		value: 'america',
	},
	{
		label: 'Asia',
		value: 'Asia',
	},
	{
		label: 'Europe',
		value: 'europe',
	},
	{
		label: 'Oceania',
		value: 'oceania',
	},
];

export const Default: Story = {
	render: (args) => (
		<Select {...args}>
			<SelectTrigger className="w-64">
				<SelectValue placeholder="Filter by Region" />
			</SelectTrigger>
			<SelectContent className="w-64">
				{mockedData.map(({ label, value }) => (
					<SelectItem value={value} key={value}>
						{label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	),
};

export default meta;

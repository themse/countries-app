import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import { DescriptionList } from '@/ui/components/molecules/DescriptionList';
import { Card } from './Card';
import sampleImage from '/public/img/de.png';

const meta = {
	title: 'UI/Molecules/Card',
	component: Card,
	tags: ['autodocs'],
	args: {
		title: 'Germany',
	},
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof meta>;

const list: ComponentProps<typeof DescriptionList>['list'] = [
	{
		label: 'Population:',
		value: '81,770.900',
	},
	{
		label: 'Region:',
		value: 'Europe',
	},
	{
		label: 'Capital:',
		value: 'Berlin',
	},
];

const cardTemplate: Story['render'] = (args) => (
	<Card {...args}>
		<DescriptionList list={list} />
	</Card>
);

export const Default: Story = {
	render: cardTemplate,
};

export const WithImage: Story = {
	args: {
		image: sampleImage.src,
	},
	render: cardTemplate,
};

export default meta;

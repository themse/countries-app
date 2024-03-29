import type { Meta, StoryObj } from '@storybook/react';

import { TemplateScaffold } from './Scaffold';

const meta = {
	title: 'UI/Templates/TemplateScaffold',
	component: TemplateScaffold,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		header: <div className="bg-blue-400/75 py-5 uppercase">Header</div>,
		footer: <div className="bg-blue-900 py-5 uppercase text-white">Footer</div>,
	},
} satisfies Meta<typeof TemplateScaffold>;

type Story = StoryObj<typeof meta>;

const mockedContent = (
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem vero doloribus aliquam. Illo
		natus dolorum labore voluptates, laudantium tenetur voluptatibus incidunt, nostrum quae et
		quisquam aliquid dolor obcaecati, ipsam molestias!
	</p>
);
const mockedBigContent = Array.from(new Array(15)).map(() => mockedContent);

export const Default: Story = {
	args: {
		children: <div className="bg-green-300 py-5">{mockedContent}</div>,
	},
};

export const WithoutContent: Story = {
	args: {
		children: null,
	},
};

export const StickyHeader: Story = {
	args: {
		headerPosition: 'sticky',
		children: <div className="bg-green-300 py-5">{mockedBigContent}</div>,
	},
};

export const FixedHeader: Story = {
	args: {
		headerPosition: 'fixed',
		children: <div className="bg-green-300 py-5">{mockedBigContent}</div>,
	},
};

export default meta;
